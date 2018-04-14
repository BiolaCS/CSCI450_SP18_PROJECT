import React from 'react'
import {StyleSheet, Text, View, Modal, Platform } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom  } from 'react-navigation';

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

//tab navigator to seitch between screens...only for the post login/wuestionnaire screen
export const tabNav = TabNavigator({
  Home: {screen:HomeScreen},
  Serve: { screen: ServeScreen},
  SmallGroup: { screen: SmallGroupScreen},
  Encouragement: { screen: EncouragementScreen},
  ExampleMessage: { screen: ExampleMessageScreen},
  ExampleEvent: { screen: ExampleEventScreen},
  Questionnaire: { screen: QuestionnaireScreen },//just for debug purposes
}, 
{
  
  headerMode: 'none',        // I don't want a NavBar at top
  tabBarPosition: 'bottom',  // So your Android tabs go bottom
  tabBarOptions: {
    
    showIcon: 'true', // Shows an icon for both iOS and Android
    animationEnabled: 'true',//slick animations
    swipeEnabled: 'true',//can swipe left and right to move between tabs--can disable
    showLabel: (Platform.OS !== 'android'), //No label for Android--We can alos remove for ios
    labelStyle: {
      fontSize: 11,
    },
    style: {
      backgroundColor: '#000000', // Makes Android tab bar black instead of standard blue
      height: (Platform.OS === 'ios') ? 48 : 50 //height of the tabbar. 
    }, 
 
  
}
});

export default Navigation = StackNavigator({
  Startup: { screen: StartupScreen, navigationOptions: ({navigation}) => ({header: false})},
  Questionnaire: { screen: QuestionnaireScreen },
  tab: {screen: tabNav, navigationOptions: ({navigation}) => ({header: false}),}//instead of calling every screen, we call the tab navigator
});

