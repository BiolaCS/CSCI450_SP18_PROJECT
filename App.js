import React from 'react'
import {StyleSheet, Text, View, Modal } from 'react-native'
import { StackNavigator } from 'react-navigation';
import StartupScreen from './StartupScreen'
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'
import QuestionnaireScreen from './QuestionnaireScreen'
import PostJoinScreen from './PostJoinScreen'


const Navigation = StackNavigator({
  Home: { screen: StartupScreen }, 
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen },
  Questionnaire: { screen: QuestionnaireScreen },
  PostJoin: { screen: PostJoinScreen },
});

export default Navigation;
