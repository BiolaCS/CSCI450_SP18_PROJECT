import React from 'react'
import {StyleSheet, Text, View, Modal, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import RoundedButton from '../../Components/RoundedButton'
import FullButton from '../../Components/FullButton'
import SmallGroupButton from '../../Components/SmallGroupButton'
import { Ionicons } from '@expo/vector-icons'
import * as firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import SmallGroupButtonStyles from '../../Components/Styles/SmallGroupButtonStyles';
import { Fonts, Colors, Metrics } from '../../Themes/';
import Backend from './Backend';





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
      name: "",
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

  navigateDrawer() {
    ;
  }


  render() {
    return (
        <View style= {{flex: 1,}}>

          <View style = {styles.groupPageTitle}>
            <TouchableOpacity style = {styles.menuButton}
            onPress={()=> this.props.navigation.navigate('DrawerToggle')}>
              <Ionicons 
                name='ios-menu' 
                size={40} 
                style= {styles.menuIcon} 
              />
          </TouchableOpacity>
        
              <Text style = {styles.textSetting} >Home </Text>
          
          </View>

            <ScrollView contentContainerStyle = {{alignItems: 'center'}}> 

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
    flexDirection: 'row',
    backgroundColor: Colors.fire,
    justifyContent: 'space-between',
    height: 80,
    paddingTop: 30,
  },
  serveGroupTitle: {
    fontSize: 30,
    color: Colors.fire,
  },
  textSetting: {
    fontSize: 20,
    color: Colors.snow,
    alignSelf: 'center',
    fontFamily: Fonts.type.bold,
  },
  menuButton: {
    width:50,
    height: 80,
  },
  menuIcon: {
    color: Colors.snow, 
    alignSelf:'center',
  }
}); 
