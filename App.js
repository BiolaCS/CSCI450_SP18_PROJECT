import React from 'react'
import {StyleSheet, Text, View, Modal } from 'react-native'
import { StackNavigator } from 'react-navigation';

// Pre-Login Screens
import StartupScreen from './Screens/Pre-Login/StartupScreen'
import QuestionnaireScreen from './Screens/Pre-Login/QuestionnaireScreen'

// Post-Login Screens
import HomeScreen from './Screens/Post-Login/HomeScreen'
import ServeScreen from './Screens/Post-Login/ServeScreen'
import EncouragementScreen from './Screens/Post-Login/EncouragementScreen'
import PostJoinScreen from './Screens/Post-Login/PostJoinScreen'



const Navigation = StackNavigator({
  Startup: { screen: StartupScreen },
  Questionnaire: { screen: QuestionnaireScreen },
  Home: { screen: HomeScreen },
  Serve: { screen: ServeScreen },
  Encouragement: { screen: EncouragementScreen },
  PostJoin: { screen: PostJoinScreen },
});

export default Navigation;
