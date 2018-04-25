import React from 'react'
import {StyleSheet, Text, ScrollView, View, Modal, Picker, Alert, Slider, TouchableOpacity} from 'react-native'
import RoundedButton from '../../Components/RoundedButton'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { NavigationActions } from 'react-navigation';
import { Fonts, Colors, Metrics } from '../../Themes/'
import { Card } from 'native-base';

import * as firebase from 'firebase';

//getting questions from file
import {questions, prompts} from '../../Utility/questions.js';
import { parse } from 'querystring';

// TODO: Get the silly radio form to have nothing selected after next question

//new array to hold answers
//var answers = [];
//BUGS:
//The slider shows the current value correctly--but it sets it for every slider :(

export default class QuestionnaireScreen extends React.Component {

  constructor (props) {
    super(props);
    // Wipe any answers from previous test-takers
    this.answers = [];
    for(i = 0; i < 40; i++) {
      this.answers[i] = 1;
      this.userId = firebase.auth().currentUser.uid;
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
              this.answers = snapshot.val().answers;
              
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
          this.answers = snapshot.val().answers;
          console.log(this.answers);
        }
      });
    }

    this.state = {
      value1: -1,
      index1: 0,
      currentQuestion: 0,
      currentSection: 0,
      maxValue: 100,
      minValue: 1,
      sliderValue: 30,
      count: 0,
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
    this.userId = firebase.auth().currentUser.uid;

      // Get any answers the user might have already answered
      firebase.database().ref('/users/' + this.userId).once('value').then((snapshot) => {
        if(snapshot.val().answers != null) {
          this.answers = snapshot.val().answers;
          console.log(this.answers);
        }
      });
    
  }

  //submit button will update hasTakeQuiz to true, send data to firebase from array, then navigate back home
  submit() {
    //var userId = firebase.auth().currentUser.uid;
    var answers = this.answers;
    // Puts answers into firebase and deletes currentQuestion
    firebase.database().ref('users/' + this.userId).update({
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
      actions: [NavigationActions.navigate({ routeName: 'tab' })],//to go into tab navigation
    });

    this.props.navigation.dispatch(resetAction);
  }

  updateAnswers(sectionIndex, index, value) {
    // have to multiply by 100 for slider bar
    // have to offset index for question section
    //no need to multiply when setting min and max values
    /*if(parseInt(value) == 0) {
      value = 0.01;
    }*/
    this.answers[index + this.offsets[sectionIndex]] = parseInt(value);
  }

  eachQuestion(sectionIndex, currentValue, index) {
    
    return(
        <View
         
        key={index}
        >
          
            <Text style={styles.question}>{currentValue} {this.count}</Text>
            <Slider
            style={{ width: 400, height: 30, borderRadius: 100}}
            step={1}//move slider by one
            maximumValue = {this.state.maxValue} //set min  1
            minimumValue = {this.state.minValue}//set max   100
            minimumTrackTintColor = {Colors.fire} //color of track
            maximumTrackTintColor = {Colors.fire}
            thumbTintColor = {Colors.fire} //color of thingy
            value = {this.answers[index + this.offsets[sectionIndex]]}//want it to start offset, also will be used to show current value saved in firebase
            //onValueChange={val => this.setState({ sliderValue: val })}
            onSlidingComplete={this.updateAnswers.bind(this, sectionIndex, index)}/>
            <View style={styles.textCon}> 
              <Text>
                {this.state.minValue} 
              </Text>
              <Text>
                {50}
              </Text>
              <Text>
                {this.state.maxValue}
              </Text>
            </View>
          
        </View>
    )
  }

  eachSection(currentValue, index) {
    return(
        <View key={index}>
            <Card 
            bordered =  'true'
            >
              <Text style={styles.prompt}>{prompts[index]}</Text>
              {currentValue.map(this.eachQuestion.bind(this, index))}
            </Card>

        </View>
    )
  }

  render() {
    return ( 
      <View style = {styles.container}>
       <View style = {styles.groupPageTitle}>     
              <Text style = {{color: Colors.fire}}>Blank</Text>
              <Text style = {styles.textSetting}>Questionnaire</Text>
              <Text style = {{color: Colors.fire}}>Blank</Text>
        </View>
        <ScrollView>

            {questions.map(this.eachSection.bind(this))}
            <RoundedButton onPress={this.submit.bind(this)}>
                  Submit Answers
            </RoundedButton>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    //alignItems: 'center',
    justifyContent: 'space-between',
    //paddingTop: 15,
  },
  prompt: {
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.fire,
    //fontWeight: 'bold',
    fontSize: 25,
    padding: 10
  },
  question: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: 18,
    padding: 10,
  },
  textCon: {
    width: 400,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8
  },
  textSetting: {
    fontSize: 20,
    color: Colors.snow,
    alignSelf: 'center',
    
    fontWeight: 'bold',
  },
  groupPageTitle: {
    flexDirection: 'row',
    backgroundColor: Colors.fire,
    justifyContent: 'space-between',
    height: 80,
    paddingTop: 30,
  },
});
