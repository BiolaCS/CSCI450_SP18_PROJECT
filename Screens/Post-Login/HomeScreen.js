import React from 'react'
import {StyleSheet, Text, View, Modal, ScrollView, TextInput, TouchableOpacity, Dimensions, Image} from 'react-native'
import RoundedButton from '../../Components/RoundedButton'
import FullButton from '../../Components/FullButton'
import SmallGroupButton from '../../Components/SmallGroupButton'
import { Ionicons } from '@expo/vector-icons'
import * as firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import SmallGroupButtonStyles from '../../Components/Styles/SmallGroupButtonStyles';
import { Fonts, Colors, Metrics } from '../../Themes/';
import Backend from './Backend';

const window = Dimensions.get('window');
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home Screen",
    headerStyle:{
      backgroundColor: Colors.fire,
      
      alignItems: 'center'
    },
    headerTintColor: Colors.snow,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft:
      (<Ionicons 
                name='ios-menu' 
                size={40} 
                //style= {styles.menuIcon} 
      />)
    ,
    tabBarIcon: ({focused}) => (
      <Ionicons
          name={focused ? 'md-home' : 'ios-home-outline'}
          size={26}
          style={{ color: focused ? '#ffffff' : '#949494'}}
      />
      
    ),
    
}
  
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
              <Text style = {{color: Colors.fire}}>Blank</Text>
          
          </View>

            <ScrollView contentContainerStyle = {{alignItems: 'center'}}> 

                <Text style={{fontSize: 30,
                          marginTop: 20}}>
              Welcome to Commune!
            </Text>

            <Image source={require('../../Images/Logo.png')} style={styles.logoNoKeyboard}/>

            <Text style={{fontSize: 23,
                          marginTop: 5}}>
              Your Organization:
            </Text>

            <Text style={{fontSize: 23,
                          marginTop: 15,
                          textAlign: 'center',}}>
              Your Serving Group:
            </Text>

            <Text style={{fontSize: 23,
                          marginTop: 15,
                          textAlign: 'center',}}>
              Your Small Group:
            </Text>

            <Text style={{fontSize: 23,
                          marginTop: 15,
                          textAlign: 'center',
                          marginBottom: 30}}>
              Top Personality Trait:
            </Text>
                <RoundedButton
                onPress={() => {this.logoutUser()}}
                >
                  Logout
                </RoundedButton>

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
  homeGroupTitle: {
    fontSize: 30,
    color: Colors.fire,
  },
  textSetting: {
    fontSize: 20,
    color: Colors.snow,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  menuButton: {
    width:50,
    height: 80,
  },
  menuIcon: {
    color: Colors.snow, 
    alignSelf:'center',
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
