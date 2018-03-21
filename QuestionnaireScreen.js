import React from 'react'
import {StyleSheet, Text, View, ScrollView, Modal, Picker} from 'react-native'
import RoundedButton from './App/Components/RoundedButton'
import FullButton from './App/Components/FullButton'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import * as firebase from 'firebase';

//getting questions from file
import {questions} from './App/Components/questions.js';
import {options} from './App/Components/questions.js';

const firebaseConfig = {
  apiKey: "AIzaSyAJXp7SBUPGRTPo-5qYM-T78mP8DEuBsog",
  authDomain: "commune-265d9.firebaseapp.com",
  databaseURL: "https://commune-265d9.firebaseio.com",
  projectId: "commune-265d9",
  storageBucket: "commune-265d9.appspot.com",
  messagingSenderId: "697540841037"
};

var i;
i = 0;

export default class QuestionnaireScreen extends React.Component {

    //submit button will set hasTakeQuiz to true, then navigate back home
    submit(userId) {
      var userId = firebase.auth().currentUser.uid;
      console.log("setting hasTakenQuiz to true");

      firebase.database().ref('users/' + userId).set({
        hasTakenQuiz: true
      });
    this.props.navigation.navigate('Home', {});
    }



  render() {

    var {navigate} = this.props.navigation;
    return (
      <ScrollView>
      <View style={styles.container}>


        {i < questions.length ?
        <Text style={styles.question}>Question {1 + i} </Text>:            //if true
        <Text style = {styles.question}> Thank you for answering! </Text>  //if false
        }

        <Text style={styles.question}>{ questions[i] } </Text>


        <RadioForm style = {styles.radio}
                radio_props={options[i]}
                initial={0}
                buttonColor={'#84C9E0'}
                animation={true}
                onPress={(value) => {this.setState({value:value})}}
              />

<Text style= {styles.question}> What serving opportunities do you feel have helped you grow? </Text>

      <RadioForm style = {styles.radio}
                radio_props={Question_2}
                initial={0}
                buttonColor={'#84C9E0'}
                animation={true}
                onPress={(value) => {this.setState({value:value})}}
              />

<Text style= {styles.question}> Which of these do you think is your top quality? </Text>

      <RadioForm style = {styles.radio}
               radio_props={Question_3}
               initial={0}
               buttonColor={'#84C9E0'}
               animation={true}
               onPress={(value) => {this.setState({value:value})}}
              />

<Text style= {styles.question}> Which role in a small group do you best fit?  </Text>

      <RadioForm style = {styles.radio}
               radio_props={Question_4}
               initial={0}
               buttonColor={'#84C9E0'}
               animation={true}
               onPress={(value) => {this.setState({value:value})}}
              />
         </View>
<View style={styles.submit}>
        <RoundedButton onPress={this.toggleModal}>
          Submit Answers
        </RoundedButton>
</View>
      </ScrollView>
    );
  }
}

  const styles = StyleSheet.create({
    question: {

      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      fontSize: 25,
      padding: 10
    },
    submit: {
      flex: 1,
    alignItems: 'center',
      justifyContent: 'center',
    },
    radio: {

      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: 10
    },
    button:{

      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10
    }
  });
