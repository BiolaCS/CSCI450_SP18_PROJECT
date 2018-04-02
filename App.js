import React from 'react'
import {StyleSheet, Text, View, Modal } from 'react-native'
import { StackNavigator } from 'react-navigation';
import StartupScreen from './StartupScreen'
import ServeScreen from './ServeScreen'
import EncouragementScreen from './EncouragementScreen'
import QuestionnaireScreen from './QuestionnaireScreen'
import PostJoinScreen from './PostJoinScreen'
import HomeScreen from './HomeScreen'


const Navigation = StackNavigator({
  Startup: { screen: StartupScreen },
  Home: { screen: HomeScreen },
  Serve: { screen: ServeScreen },
  Encouragement: { screen: EncouragementScreen },
  Questionnaire: { screen: QuestionnaireScreen },
  PostJoin: { screen: PostJoinScreen },
});

export default Navigation;
