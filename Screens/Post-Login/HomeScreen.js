import React from 'react'
import {StyleSheet, Text, View, Modal, ScrollView } from 'react-native'
import RoundedButton from '../../Components/RoundedButton'
import FullButton from '../../Components/FullButton'
import SmallGroupButton from '../../Components/SmallGroupButton'
import { Ionicons } from '@expo/vector-icons'
import * as firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import SmallGroupButtonStyles from '../../Components/Styles/SmallGroupButtonStyles';
import { Fonts, Colors, Metrics } from '../../Themes/'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({focused}) => (
      <Ionicons
          name={focused ? 'md-home' : 'ios-home-outline'}
          size={26}
          style={{ color: focused ? '#ffffff' : '#949494'}}
      />
      
  )}
  
  constructor() {
    super()
    console.log("HomeHit");
    this.state = {
      page: "Home",
    }
  }

  logoutUser() {
    console.log("signing out");
    firebase.auth().signOut().then(function() {
      console.log("signed out");
    }).catch((error) => {
      console.log(error);
    });
    // Object to reset the navigation stack
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Startup' })],
    });

    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
        <View style= {{flex: 1, alignItems: 'center', paddingTop: 24}}>

            <Text style = {styles.groupPageTitle}>Welcome Home </Text>

            <ScrollView>

                <SmallGroupButton
                onPress={this.toggleModal}
                >
                  <Text style = {styles.serveGroupTitle}>Home Placeholder</Text>
                  {"\n"}
                  Members: 1
                  {"\n"}
                  Description: Find out more about yourself!
                </SmallGroupButton>
                <SmallGroupButton
                onPress={() => {this.logoutUser();}}
                >
                  <Text style = {styles.serveGroupTitle}>Logout</Text>
                  {"\n"}
                  Members: 0
                  {"\n"}
                  Description: This will log you out
                </SmallGroupButton>

            </ScrollView>

            
        </View>
    );
  }
}

const styles = StyleSheet.create({
  groupPageTitle: {
    fontSize: 20,
    backgroundColor: Colors.fire,
    color: Colors.snow,
    textAlign: 'center',
    fontFamily: Fonts.type.bold,
    alignSelf: 'stretch',
    height: 60,
    padding: 15,
  },
  serveGroupTitle: {
    fontSize: 30,
    color: Colors.fire
  }
});
