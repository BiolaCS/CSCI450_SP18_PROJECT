import React from 'react'
import {StyleSheet, Text, View, Modal, ScrollView, TouchableOpacity} from 'react-native'
import RoundedButton from '../../Components/RoundedButton'
import { Ionicons } from '@expo/vector-icons'
import { NavigationActions } from 'react-navigation';
import SmallGroupButtonStyles from '../../Components/Styles/SmallGroupButtonStyles';
import { Fonts, Colors, Metrics } from '../../Themes/'
import SmallGroupButton from '../../Components/SmallGroupButton'
import * as firebase from 'firebase';

var traits = "";
export default class EncouragementScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({focused}) => (
      <Ionicons
          name={focused ? 'ios-cafe' : 'ios-cafe-outline'}
          size={26}
          style={{ color: focused ? '#ffffff' : '#949494'}}
      />
  )}

  
  constructor() {
    super();
    this.userId = firebase.auth().currentUser.uid;
    
    this.positiveHabits = "";
    this.smallGroupPrediction = "";
    this.serveGroupPrediction = "";
    this.positiveQuality = "";
    this.state = {
      page: "Encouragement",
      positiveHabits: "",
      smallGroupPrediction: "",
      serveGroupPrediction: "",
      positiveQuality: "",
    }
  }

  componentWillMount(){
    firebase.database().ref('/users/' + this.userId).once('value').then((snapshot) => {
      if(snapshot.val().answers != null) {
        var traitSplit = snapshot.val().traits.split(",");
        this.setState({
          positiveHabits: traitSplit[0],
          smallGroupPrediction: traitSplit[1],
          serveGroupPrediction:traitSplit[2],
          positiveQuality: traitSplit[3],
        })
      }
    });
  }

  render() {
    return (
        <View style= {{flex: 1}}>

            <View style = {styles.groupPageTitle}>
              <TouchableOpacity style = {styles.menuButton}
              onPress={()=> this.props.navigation.navigate('DrawerToggle')}>
                <Ionicons 
                  name='ios-menu' 
                  size={40} 
                  style= {styles.menuIcon} 
                />
              </TouchableOpacity>
        
              <Text style = {styles.textSetting} >Encouragement </Text>
              <Text style = {{color: Colors.fire}}>Blank</Text>
          
            </View>

            <ScrollView contentContainerStyle = {{alignItems: 'center'}}>
            

                <SmallGroupButton
                onPress={this.toggleModal}
                >
                  <Text style = {styles.serveGroupTitle}>Personal Traits{"\n"}</Text>
                    {this.state.positiveHabits  + "\n"}
                    {this.state.smallGroupPrediction  + "\n"}
                    {this.state.serveGroupPrediction  + "\n"}
                    {this.state.positiveQuality  + "\n"}
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
