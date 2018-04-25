import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TextInput,
  Alert,
  Animated,
  BackHandler,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import { Fonts, Colors, Metrics } from '../../Themes/';

import RoundedButton from '../../Components/RoundedButton';

export default class SignUpScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      userEmail: '',
      userPassword: '',
      userName: '',
      userHasTakenQuiz: false,
      //offsetY: new Animated.Value(0),
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
        //this.checkQuizStatus(userId);
        firebase.database().ref('users/' + userId).set({
          hasTakenQuiz: false
        });
        firebase.database().ref('users/' + userId).update({
            username: this.state.userName
        });
        this.navigateQuiz();
        
      }
    });
    //this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.changeTextBoxPositionsOriginal.bind(this));
  }

  componentWillUnmount() {
    this.authSubscription();
    //this.keyboardDidHideListener.remove();
    
  }

  checkQuizStatus(userId) {
    firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {

      if (snapshot.val() !== null) { // User has info already
        //if user did not setup a username before, but has now
        /*if (snapshot.val().username === 'John Smith') {
          firebase.database().ref('users/' + userId).update({
            username: this.state.userName
          });
        }
        if (snapshot.val().hasTakenQuiz === true) { // They have taken the quiz
          // Props are inaccessible at this point for some reasop[;n
          this.navigateHome();
        }
        else { // They have not taken the quiz
          this.navigateQuiz();
          
        }*/
      }
      else { // User is brand new
        // Set quiz flag
        
      }
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  /*navigateHome() {
    // Object to reset the navigation stack
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'tab' })],
    });

    this.props.navigation.dispatch(resetAction);
  }*/

  navigateQuiz() {
    // Alert the user that they have to take the quiz
    Alert.alert(
      'First time user detected!',
      'Please take the personality quiz!',
      [
        {text: this.state.userName},
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

  /*loginUser() {
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
    
  }*/

  signupUser() {
      if (this.state.userName == '' || this.state.userName == ""){
          Alert.alert(
              'No username?',
              'Please enter a user name.',
              [
                  {text: "OK"},
              ],
              {cancelable: false},
          );
          return;
      }
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
  

  /*logoutUser() {
    console.log("signing out");
    firebase.auth().signOut().then(function() {
      console.log("signed out");
    }).catch((error) => {
      console.log(error);
    })
  }*/

  /*changeTextBoxPositions() {
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
  }*/

  render() {

    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'
        keyboardVerticalOffset={64}
        >
          <Image source={require('../../Images/Logo.png')} style={styles.logoNoKeyboard}/>

          <TextInput
            onChangeText={(text) => {this.setState({userName: text}); }}
            placeholder={'User Name'}
            placeholderTextColor= '#000000'
            autoCapitalize = 'none'
            style={styles.textInput}
          />

          <TextInput
            onChangeText={(text) => {this.setState({userEmail: text}); }}
            placeholder={'Email'}
            placeholderTextColor= '#000000'
            autoCapitalize = 'none'
            style={styles.textInput}
          />

          <TextInput
            onChangeText={(text) => {this.setState({userPassword: text}); }}
            placeholder={'Password'}
            placeholderTextColor= '#000000'
            secureTextEntry = {true}
            autoCapitalize = 'none'
            style={styles.textInput}
          />
          <RoundedButton onPress={() => {this.signupUser();}}>
            Sign Up!
          </RoundedButton>

          <TouchableOpacity onPress={() => {this.props.navigation.goBack()}}>
            <Text style = {{color: Colors.fire, fontSize: 15}}>Already have an account? Log In!</Text>
            </TouchableOpacity>


        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#D6EDF5',
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