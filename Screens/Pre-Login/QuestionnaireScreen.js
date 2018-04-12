import React from 'react'
import {StyleSheet, Text, ScrollView, View, Modal, Picker, Alert, Slider} from 'react-native'
import RoundedButton from '../../Components/RoundedButton'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { NavigationActions } from 'react-navigation';

import * as firebase from 'firebase';

//getting questions from file
import {questions, prompts} from '../../Utility/questions.js';
import { parse } from 'querystring';

const firebaseConfig = {
  apiKey: "AIzaSyAJXp7SBUPGRTPo-5qYM-T78mP8DEuBsog",
  authDomain: "commune-265d9.firebaseapp.com",
  databaseURL: "https://commune-265d9.firebaseio.com",
  projectId: "commune-265d9",
  storageBucket: "commune-265d9.appspot.com",
  messagingSenderId: "697540841037"
};

// TODO: Get the silly radio form to have nothing selected after next question

//new array to hold answers
//var answers = [];

export default class QuestionnaireScreen extends React.Component {

  constructor (props) {
    super(props);
    // Wipe any answers from previous test-takers
    this.answers = [];
    for(i = 0; i < 40; i++) {
      this.answers[i] = 1;
    }
    this.offsets = [0,8,13,18,34];

    // This code is only hit when StartupScreen didn't handle firebase creation
    if (!firebase.apps.length) { // Prevent more than one instance
      firebase.initializeApp(firebaseConfig);
      firebase.auth().signInWithEmailAndPassword("asdf2@gmail.com", "Password").catch(function(error) {
        console.log(error);
      });
      firebase.auth().onAuthStateChanged((user) => {
        if (user) { // User has been logged in
          // Check if the user has anything data in firebase
          this.userId = firebase.auth().currentUser.uid;

          // Get any answers the user might have already answered
          firebase.database().ref('/users/' + this.userId).once('value').then((snapshot) => {
            if(snapshot.val().answers != null) {
              answers = snapshot.val().answers;
            }
          });
        }
      });
    }
    // End testing section

    else {
      this.userId = firebase.auth().currentUser.uid;

      // Get any answers the user might have already answered
      firebase.database().ref('/users/' + this.userId).once('value').then((snapshot) => {
        if(snapshot.val().answers != null) {
          answers = snapshot.val().answers;
        }
      });
    }

    this.state = {
      value1: -1,
      index1: 0,
      currentQuestion: 0,
      currentSection: 0,
      sliderValue: 0,
    }
  }

  componentWillMount() {
    var initialQuestionVal;
    firebase.database().ref('/users/' + this.userId).once('value').then((snapshot) => {
      if(snapshot.val().currentAnswer != null) { // User has answered things previously
        initialQuestionVal = snapshot.val().currentAnswer;
        this.setState({
          currentQuestion: initialQuestionVal
        });
      }
      else { // Users first time entering something
        initialQuestionVal = 0;
        this.setState({
          currentQuestion: initialQuestionVal
        });
      }
    });
  }

  //submit button will update hasTakeQuiz to true, send data to firebase from array, then navigate back home
  submit() {
    //var userId = firebase.auth().currentUser.uid;
    var answers = this.answers;
    // Puts answers into firebase and deletes currentQuestion
    firebase.database().ref('users/' + this.userId).set({
      answers
    });
    firebase.database().ref('users/' + this.userId).update({
      hasTakenQuiz: true
    });

    // Go back to login page
    this.props.navigation.goBack(null);
    let formdata = this.userId + ':' + this.answers;
    fetch('http://198.199.114.44:3000', {
      method: 'post',
      body: formdata
    }).then(response => {
      console.log(response);
    }).catch(err => {
      console.log(err);
    });

    // Navigate to small group post join screen
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });

    this.props.navigation.dispatch(resetAction);
  }

  updateAnswers(sectionIndex, index, value) {
    // have to multiply by 100 for slider bar
    // have to offset index for question section
    if(parseInt(value * 100) == 0) {
      value = 0.01;
    }
    this.answers[index + this.offsets[sectionIndex]] = parseInt(value * 100);
  }

  eachQuestion(sectionIndex, currentValue, index) {
    return(
        <View key={index}>

            <Text style={styles.question}>{currentValue}</Text>
            <Slider onSlidingComplete={this.updateAnswers.bind(this, sectionIndex, index)} value={0}/>

        </View>
    )
  }

  eachSection(currentValue, index) {
    return(
        <View key={index}>

            <Text style={styles.prompt}>{prompts[this.state.currentQuestion]}</Text>
            {currentValue.map(this.eachQuestion.bind(this, index))}

        </View>
    )
  }

  render() {
    return (
        <ScrollView style={styles.container}>

            {questions.map(this.eachSection.bind(this))}
            <RoundedButton onPress={this.submit.bind(this)}>
                  Submit Answers
            </RoundedButton>

        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#84C9E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  prompt: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: 25,
    padding: 10
  },
  question: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: 18,
    padding: 10
  },
});
