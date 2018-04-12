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
import SmallGroupScreen from './Screens/Post-Login/SmallGroupScreen'
import ExampleMessageScreen from './Screens/Post-Login/ExampleMessageScreen'
import ExampleEventScreen from './Screens/Post-Login/ExampleEventScreen'

const Navigation = StackNavigator({
  Startup: { screen: StartupScreen },
  Questionnaire: { screen: QuestionnaireScreen },
  Home: { screen: HomeScreen, navigationOptions:  {headerLeft: null}},
  Serve: { screen: ServeScreen, navigationOptions:  {headerLeft: null}},
  SmallGroup: { screen: SmallGroupScreen, navigationOptions:  {headerLeft: null}},
  Encouragement: { screen: EncouragementScreen, navigationOptions:  {headerLeft: null}},
  ExampleMessage: { screen: ExampleMessageScreen, navigationOptions:  {headerLeft: null}},
  ExampleEvent: { screen: ExampleEventScreen, navigationOptions:  {headerLeft: null}}
});

export default Navigation;
