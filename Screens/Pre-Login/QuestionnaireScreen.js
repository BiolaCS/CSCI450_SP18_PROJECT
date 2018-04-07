import React from 'react'
import {StyleSheet, Text, ScrollView, View, Modal, Picker, Alert, Slider} from 'react-native'
import RoundedButton from '../../Components/RoundedButton'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { NavigationActions } from 'react-navigation';

import * as firebase from 'firebase';

//getting questions from file
import {questions, prompts} from '../../Utility/questions.js';

const firebaseConfig = {
  apiKey: "AIzaSyBWWCdi84BofstOgOLE7xKsRvDeQxcyLqY",
    authDomain: "testing-query.firebaseapp.com",
    databaseURL: "https://testing-query.firebaseio.com",
    projectId: "testing-query",
    storageBucket: "testing-query.appspot.com",
    messagingSenderId: "729415852786"
};

// TODO: Get the silly radio form to have nothing selected after next question

//new array to hold answers
//var answers = [];

export default class QuestionnaireScreen extends React.Component {

  constructor () {
    super();
    // Wipe any answers from previous test-takers
    this.answers = [];
    for(i = 0; i < 40; i++) {
      this.answers[i] = 0;
    }
    this.offsets = [0,8,13,18,34];
    // Get any answers the user might have already answered
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
      if(snapshot.val().answers != null) {
        answers = snapshot.val().answers;
      }
    });

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
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
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
    var userId = firebase.auth().currentUser.uid;
    var answers = this.answers;
    // Puts answers into firebase and deletes currentQuestion
    firebase.database().ref('users/' + userId).set({
      answers
    });
    firebase.database().ref('users/' + userId).update({
      hasTakenQuiz: true
    });

    // Go back to login page
    this.props.navigation.goBack(null);
    let formdata = userId + ':' + this.answers;
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
    this.answers[index + this.offsets[sectionIndex]] = parseInt(value * 100);
    console.log(this.answers);
    console.log("sectionindex: " + sectionIndex);
    console.log("index: " + index);
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
