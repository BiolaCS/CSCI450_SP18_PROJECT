import React from 'react'
import {StyleSheet, Text, View, Modal } from 'react-native'
import { StackNavigator } from 'react-navigation';

// Pre-Login Screens
import StartupScreen from './Screens/Pre-Login/StartupScreen'
import QuestionnaireScreen from './Screens/Pre-Login/QuestionnaireScreen'

// Post-Login Screens
import HomeScreen from './Screens/Post-Login/HomeScreen'
import ServeScreen from './Screens/Post-Login/ServeScreen'
import ServeInfoScreen from './Screens/Post-Login/ServeInfoScreen'
import EncouragementScreen from './Screens/Post-Login/EncouragementScreen'
import SmallGroupScreen from './Screens/Post-Login/SmallGroupScreen'
import SmallGroupInfoScreen from './Screens/Post-Login/SmallGroupInfoScreen'


// If all three of these fail to make
// it centered I dont know what will
const styles = {
  centerHeader: {
    textAlign:'center',
    alignSelf:'center',
    flex:1
  },
}

const Navigation = StackNavigator({
  Startup: { screen: StartupScreen, navigationOptions: {
	headerTitle: 'Login',
	headerTitleStyle: styles.centerHeader}
  },
  Questionnaire: { screen: QuestionnaireScreen, navigationOptions: {
	headerTitle: 'Personality Quiz',
	headerTitleStyle: styles.centerHeader}
  },
  Home: { screen: HomeScreen, navigationOptions: {
	headerTitle: 'Organization Home', // Placeholder
	headerTitleStyle: styles.centerHeader,
	headerLeft: null}
  },
  Serve: { screen: ServeScreen, navigationOptions:  {
	headerTitle: 'Serving Groups',
	headerTitleStyle: styles.centerHeader,
	headerLeft: null}
  },
  SmallGroup: { screen: SmallGroupScreen, navigationOptions:  {
	headerTitle: 'Small Groups',
	headerTitleStyle: styles.centerHeader,
	headerLeft: null}
  },
  SmallGroupInfo: { screen: SmallGroupInfoScreen,
  },
  ServeInfo: { screen: ServeInfoScreen,
  },
  Encouragement: { screen: EncouragementScreen, navigationOptions:  {
	headerTitle: 'Encouragement',
	headerTitleStyle: styles.centerHeader,
	headerLeft: null}
  }
});

export default Navigation;
