import React from 'react'
import {StyleSheet, Text, View, Modal, Platform } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom, DrawerNavigator  } from 'react-navigation';

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

//tab navigator to switch between screens...only for the post login/wuestionnaire screen
export const tabNav = TabNavigator({
  Home: {screen: HomeScreen},
  Serve: { screen: ServeScreen},
  SmallGroup: { screen: SmallGroupScreen},
  Encouragement: { screen: EncouragementScreen},
  //ExampleMessage: { screen: ExampleMessageScreen},
  ExampleEvent: { screen: ExampleEventScreen},
  Questionnaire: { screen: QuestionnaireScreen },//just for debug purposes
},
{

  headerMode: 'none',        // I don't want a NavBar at top
  tabBarPosition: 'bottom',  // So your Android tabs go bottom
  animationEnabled: true,//slick animations
  swipeEnabled: false,//can swipe left and right to move between tabs--can disable
  tabBarOptions: {

    showIcon: 'true', // Shows an icon for both iOS and Android
    
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

//drawer navigator leads to our tabs
//just an initial attempt
export const drawer = DrawerNavigator({
  Tabs: {screen:tabNav},//here
});

export default Navigation = StackNavigator({
  Startup: { screen: StartupScreen, navigationOptions: ({navigation}) => ({header: false})},
  Questionnaire: { screen: QuestionnaireScreen },
  //SmallGroup: { screen: SmallGroupScreen, navigationOptions: ({navigation}) => ({header: false})},
  ExampleMessage: { screen: ExampleMessageScreen, navigationOptions: ({navigation}) => ({header: false})},
  tab: {screen: drawer, navigationOptions: ({navigation}) => ({header: false}),},//instead of calling every screen, we call the drawer navigator
});
