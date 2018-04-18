import React from 'react'
import {StyleSheet, 
  Text, 
  View, 
  Modal, 
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'
import RoundedButton from '../../Components/RoundedButton'
import SmallGroupButton from '../../Components/SmallGroupButton'
import { Ionicons } from '@expo/vector-icons'
import { NavigationActions } from 'react-navigation';
import Backend from './Backend';
import * as firebase from 'firebase';



//We'll be able to fill this array with the titles saved in firebase eventually, and crate more as needed
var groupTitles = [
  "Phishers of Men",
  "Men of Honor",
  "Fire Breathing Rubber Duckies",
  "420 Youth Ministries",
  "Do U Kno De Way"
];

export default class SmallGroupScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({focused}) => (
      <Ionicons
          name={focused ? 'ios-people' : 'ios-people-outline'}
          size={26}
          style={{ color: focused ? '#ffffff' : '#949494'}}
      />
  )}
  constructor() {
    
    super();
    console.log("SmallGroupHit");
    this.state = {
      page: "SmallGroup",
    }
  }
  componentWillMount(){
    
    console.log(this.groupTitles);
  }

  setName(value) {
    Backend.closeChat();   
    Backend.getGroupName(value);
    this.goToChat();
  }
  goToChat(){
    this.props.navigation.navigate('ExampleMessage')
  }
  

  render() {
    return (
        <View style= {{flex: 1, alignItems: 'center'}}>

            <Text style = {styles.groupPageTitle}>Suggested Small Groups: </Text>

            <ScrollView>

                <SmallGroupButton onPress={()=>this.setName(groupTitles[0])}>
                    <Text style = {styles.smallGroupTitle}>{groupTitles[0]}</Text>
                    {"\n"}
                  Members: 10
                    {"\n"}
                  Description: We are a small group of hardworking computer science professionals.
                </SmallGroupButton>

                <SmallGroupButton onPress={()=>this.setName(groupTitles[1])}>
                    <Text style = {styles.smallGroupTitle}>{groupTitles[1]}</Text>
                    {"\n"}
                  Members: 35
                    {"\n"}
                  Description: We are a great floor with a knack for making good mock rocks.
                </SmallGroupButton>

                <SmallGroupButton onPress={()=>this.setName(groupTitles[2])}>
                    <Text style = {styles.smallGroupTitle}>{groupTitles[2]}</Text>
                    {"\n"}
                  Members: 5
                    {"\n"}
                  Description: Please read title.
                </SmallGroupButton>

                <SmallGroupButton onPress={()=>this.setName(groupTitles[3])}>
                    <Text style = {styles.smallGroupTitle}>{groupTitles[3]}</Text>
                    {"\n"}
                  Members: 20
                    {"\n"}
                  Description: Ablaze with the holy spirit.
                </SmallGroupButton>

                <SmallGroupButton onPress={()=>this.setName(groupTitles[4])}>
                    <Text style = {styles.smallGroupTitle}>{groupTitles[4]}</Text>
                    {"\n"}
                  Members: 1
                    {"\n"}
                  Description: We Kno De Wey. Cluck 4 de queen.
                </SmallGroupButton>
                
            </ScrollView>
            <TouchableOpacity onPress={this.toggleModal} style={styles.floatingButton} >
 
              <Ionicons 
                name='md-add' 
                size={30} 
                style = {styles.addIcon} 
                />
       
            </TouchableOpacity>
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
      height: 80,
      paddingTop: 38,
      },
      smallGroupTitle: {
        fontSize: 30,
        color: Colors.fire
      },
      floatingButton: {
        width: 60,  
        height: 60,   
        borderRadius: 30,            
        backgroundColor: Colors.fire,                                       
        position: 'absolute',                                          
        bottom: 10,                                                    
        right: 10,
        alignItems: 'center',
      },
      addIcon: {
        alignSelf: 'center',
        color: Colors.snow,
        paddingTop: 15,
      }
    });
