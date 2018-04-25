import React from "react";
import { StyleSheet, Text, View, Modal, ScrollView,TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { Fonts, Colors, Metrics } from "../../Themes/";
import RoundedButton from "../../Components/RoundedButton";
import SmallGroupButton from "../../Components/SmallGroupButton";
import Tabbar from "react-native-tabbar-bottom";
import { NavigationActions } from "react-navigation";
import Backend from './Backend';

export default class SmallGroupInfoScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({focused}) => (
      <Ionicons
          name={focused ? 'ios-people' : 'ios-people-outline'}
          size={26}
          style={{ color: focused ? '#ffffff' : '#949494'}}
      />
  )}
  constructor(props) {
    super(props);
    this.state = {
      page: "SmallGroupInfo",
      hasJoinedGroup: false
    };
  }

  renderIf(condition, content) {
    if (condition) {
      return content;
    } else {
      return null;
    }
  }

  joinOrLeave() {
    if (this.state.hasJoinedGroup == false) {
      this.setState({ hasJoinedGroup: true });
    } else {
      this.setState({ hasJoinedGroup: false });
    }
  }

  render() {
    return ( 
      <View>
      <View style = {styles.groupPageTitle}>
          <TouchableOpacity style = {styles.backButton}
              onPress={()=> this.props.navigation.goBack()} >
                <Ionicons 
                  name='ios-arrow-back' 
                  size={40} 
                  style= {styles.backIcon}
                />
          </TouchableOpacity>
        
            <Text style = {styles.textSetting}>Group Main Page</Text> 
            <Text style = {{color: Colors.fire}}>Blank</Text>
          
          </View>
        <View style={styles.containerStyle}>
            {this.renderIf(
          !this.state.hasJoinedGroup,
                <ScrollView contentContainerStyle = {{alignItems: 'center'}}>
                    <SmallGroupButton onPress={this.toggleModal}>
                      <Text style={styles.smallGroupTitle}>{Backend.groupID + "\n"}</Text>
                      <Text style={styles.groupInfo}>Members: Luke, Eli{"\n"}</Text>
                      <Text style={styles.groupInfo}>Description: Insert Sample Text Here{"\n"}</Text>
                    </SmallGroupButton>
                    <RoundedButton
                        onPress={() => {
                this.joinOrLeave();
              }}
                    >
              Join this group!
                    </RoundedButton>
                </ScrollView>
        )}
            {this.renderIf(
          this.state.hasJoinedGroup,
                <ScrollView contentContainerStyle = {{alignItems: 'center'}}>
                    <Text style={styles.smallGroupTitle}>{Backend.groupID}</Text>
                    
                    <SmallGroupButton onPress={this.toggleModal}>
                        <Text style={styles.smallGroupTitle}>Events</Text>
                        {"\n"}
              Barbeque: April 10th
                        {"\n"}
              Beach Day: May 1st
                    </SmallGroupButton>
                    <RoundedButton onPress={() => {
                          this.props.navigation.navigate('ExampleMessage');
              }}>
              Message the Group
                    </RoundedButton>
                    <RoundedButton
                        onPress={() => {
                this.joinOrLeave();
              }}
                    >
              Leave Group
                    </RoundedButton> 
                </ScrollView>
        )}
          
            
        </View>
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
  smallGroupTitle: {
    fontSize: 30,
    color: Colors.fire,
  },
  textSetting: {
    fontSize: 20,
    color: Colors.snow,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  menuButton: {
    width:50,
    height: 80,
  },
  menuIcon: {
    color: Colors.snow, 
    alignSelf:'center',
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
  plusIcon: {
    alignSelf: 'center',
    color: Colors.snow,
    paddingTop: 15,
  },
  groupInfo: {
    fontSize: 15,
    color: Colors.fire,
    textAlign: "left",
    padding: 15
 },
  backButton: {
    width:40,
    height: 80,
  },
  backIcon: {
    color: Colors.snow, 
    alignSelf:'center',
  }
});
