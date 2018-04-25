import React from 'react'
import {StyleSheet, Text, View, Modal, ScrollView, TextInput, TouchableOpacity, Dimensions} from 'react-native'
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
var groupTitles = [
  "Phishers of Men",
  "Men of Honor",
  "Fire Breathing Rubber Duckies",
  "420 Youth Ministries",
  "Do U Kno De Way"
];
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
          
          </View>

            <ScrollView contentContainerStyle = {{alignItems: 'center'}}> 

                <SmallGroupButton onPress={()=>this.toggleModal()}>
                    <Text style = {styles.homeGroupTitle}>{groupTitles[0]}</Text>
                    {"\n"}
                  Members: 10
                    {"\n"}
                  Announcements: We are a small group of hardworking computer science professionals.
                </SmallGroupButton>

                <SmallGroupButton onPress={()=>this.toggleModal()}>
                    <Text style = {styles.homeGroupTitle}>{groupTitles[1]}</Text>
                    {"\n"}
                  Members: 35
                    {"\n"}
                  Announcements: We are a great floor with a knack for making good mock rocks.
                </SmallGroupButton>

                <SmallGroupButton onPress={()=>this.toggleModal()}>
                    <Text style = {styles.homeGroupTitle}>{groupTitles[2]}</Text>
                    {"\n"}
                  Members: 5
                    {"\n"}
                  Announcements: Please read title.
                </SmallGroupButton>

                <SmallGroupButton onPress={()=>this.toggleModal()}>
                    <Text style = {styles.homeGroupTitle}>{groupTitles[3]}</Text>
                    {"\n"}
                  Members: 20
                    {"\n"}
                  Announcements: Ablaze with the holy spirit.
                </SmallGroupButton>

                <SmallGroupButton onPress={()=>this.toggleModal()}>
                    <Text style = {styles.homeGroupTitle}>{groupTitles[4]}</Text>
                    {"\n"}
                  Members: 1
                    {"\n"}
                  Announcements: We Kno De Wey. Cluck 4 de queen.
                </SmallGroupButton>
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
  }
}); 
