import React from 'react';
import {StyleSheet, Text, View, Image, Modal, TextInput, Alert, Animated, BackHandler, Keyboard} from 'react-native';
import * as firebase from 'firebase';
import { NavigationActions } from 'react-navigation';

import RoundedButton from '../../Components/RoundedButton';

const firebaseConfig = {
  apiKey: "AIzaSyAJXp7SBUPGRTPo-5qYM-T78mP8DEuBsog",
  authDomain: "commune-265d9.firebaseapp.com",
  databaseURL: "https://commune-265d9.firebaseio.com",
  projectId: "commune-265d9",
  storageBucket: "commune-265d9.appspot.com",
  messagingSenderId: "697540841037"
};

export default class StartupScreen extends React.Component {
  constructor() {
    super();
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
    if (!firebase.apps.length) { // Prevent more than one instance
      firebase.initializeApp(firebaseConfig);
    }



    // Passed into the firebase auth system
    // For now all we need to worry about is if the user is signed in
    this.state = {
      loading: true,
      userEmail: '',
      userPassword: '',
      userHasTakenQuiz: false,
      offsetY: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      });

      if (this.state.user) { // User has been logged in
        // Check if the user has anything data in firebase
        var userId = firebase.auth().currentUser.uid;
        this.checkQuizStatus(userId);
      }
    });
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.changeTextBoxPositionsOriginal.bind(this));
  }

  componentWillUnmount() {
    this.authSubscription();
    this.keyboardDidHideListener.remove();
  }

  checkQuizStatus(userId) {
    firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {

      if (snapshot.val() !== null) { // User has info already
        if (snapshot.val().hasTakenQuiz === true) { // They have taken the quiz
          // Props are inaccessible at this point for some reason
          this.navigateHome();
        }
        else { // They have not taken the quiz
          this.navigateQuiz();
        }
      }
      else { // User is brand new
        // Set quiz flag
        firebase.database().ref('users/' + userId).set({
          hasTakenQuiz: false
        });
        this.navigateQuiz();
      }
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  navigateHome() {
    // Object to reset the navigation stack
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });

    this.props.navigation.dispatch(resetAction);
  }

  navigateQuiz() {
    // Alert the user that they have to take the quiz
    Alert.alert(
      "First time user detected!",
      "Please take the personality quiz",
      [
        {text: 'OK'},
      ],
      { cancelable: false }
    )
    // Object to reset the navigation stack
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Questionnaire' })],
    });

    this.props.navigation.dispatch(resetAction);
  }

  loginUser() {
    console.log("logging in user");
    firebase.auth().signInWithEmailAndPassword(this.state.userEmail, this.state.userPassword).catch(function(error) {
      Alert.alert(
        error.code,
        error.message,
        [
          {text: 'OK'},
        ],
        { cancelable: false }
      )
    });
  }

  signupUser() {
    console.log("signing up user");
    firebase.auth().createUserWithEmailAndPassword(this.state.userEmail, this.state.userPassword).catch(function(error) {
        // Handle Errors here.
      Alert.alert(
        error.code,
        error.message,
        [
          {text: 'OK'},
        ],
        { cancelable: false }
      )
    });
  }

  logoutUser() {
    console.log("signing out");
    firebase.auth().signOut().then(function() {
      console.log("signed out");
    }).catch((error) => {
      console.log(error);
    })
  }

  changeTextBoxPositions() {
    console.log("moving text box");
    Animated.timing(this.state.offsetY,
      {toValue: -150}
    ).start();
  }

  changeTextBoxPositionsOriginal() {
    console.log("moving text box to original spot");
    Animated.timing(this.state.offsetY,
      {toValue: 0}
    ).start();
  }

  render() {

    return (
        <View style={styles.container}>



            <Animated.View style={{transform : [{translateY: this.state.offsetY}],
                                  flex: 1,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  height: 100}}>

                <Image source={require('../../Images/Logo.png')} style={styles.logoNoKeyboard}/>

                <TextInput
                    onChangeText={(text) => {this.setState({userEmail: text}); }}
                    onFocus={this.changeTextBoxPositions.bind(this)}
                    onSubmitEditing={this.changeTextBoxPositionsOriginal.bind(this)}
                    placeholder={'Email'}
                    placeholderTextColor= '#000000'
                    style={styles.textInput}
                />

                <TextInput
                    onChangeText={(text) => {this.setState({userPassword: text}); }}
                    onFocus={this.changeTextBoxPositions.bind(this)}
                    onSubmitEditing={this.changeTextBoxPositionsOriginal.bind(this)}
                    placeholder={'Password'}
                    placeholderTextColor= '#000000'
                    secureTextEntry = {true}
                    style={styles.textInput}
                />

            </Animated.View>

            <RoundedButton onPress={() => {this.loginUser();}}>
                  Login
            </RoundedButton>

            <RoundedButton onPress={() => {this.signupUser();}}>
                  Sign-Up
            </RoundedButton>

            <RoundedButton onPress={() => {this.logoutUser();}}>
                  Logout
            </RoundedButton>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6edf5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderRadius: 5,
    color: '#000000',
    width: 250,
    height: 40,
    backgroundColor: '#f0f0f0',
    margin: 10,
    marginRight: 25,
    marginLeft: 25,
  },
  logoNoKeyboard: {
    justifyContent: 'center',
    width: 150,
    height: 193,
    marginBottom: 30,
    margin: 10,
    marginRight: 25,
    marginLeft: 25,
    borderRadius: 5,
  }
});
