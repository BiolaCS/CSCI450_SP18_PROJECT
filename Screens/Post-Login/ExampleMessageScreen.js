import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import {GiftedChat, Actions, Bubble, SystemMessage, Avatar } from 'react-native-gifted-chat';
import { Fonts, Colors, Metrics } from '../../Themes/'
import Backend from './Backend'



export default class ExampleMessageScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      group: 'General',
    };
    this.renderBubble = this.renderBubble.bind(this);
   
  }
  componentWillMount() {
    this.state.group = Backend.groupID;
    console.log(this.state.group)
  }
  setGroupName(value) {
    this.state.group = value;
  }
  navigateBack() {
    this.props.navigation.navigate('SmallGroup');
  }

  getColor(username){
    let sumChars = 0;
    for(let i = 0;i < username.length;i++){
      sumChars += username.charCodeAt(i);
    }

    const colors = [
      '#e67e22', // carrot
      '#2ecc71', // emerald
      '#3498db', // peter river
      '#8e44ad', // wisteria
      '#e74c3c', // alizarin
      '#1abc9c', // turquoise
      '#2c3e50', // midnight blue
    ];
    return colors[sumChars % colors.length];
  }
 

  renderBubble(props) {
    if (props.isSameUser(props.currentMessage, props.previousMessage) && props.isSameDay(props.currentMessage, props.previousMessage)) {
      return (
        <Bubble
        {...props}
        textStyle={{
          right: {
            color: Colors.snow,
          },
          left: {
            color: Colors.snow,
          }
        }}
        wrapperStyle={{
          left: {
            backgroundColor: this.getColor(props.currentMessage.user.name),
          },
          right: {
            backgroundColor: Colors.fire,
          }
        }}
        />
      );
    }
    return (
      <View>
        <Text>{props.currentMessage.user.name}</Text>
        <Bubble
          {...props}
          textStyle={{
            right: {
              color: Colors.snow,
            },
            left: {
              color: Colors.snow,
            }
          }}
          wrapperStyle={{
            left: {
              backgroundColor: this.getColor(props.currentMessage.user.name),
            },
            right: {
              backgroundColor: Colors.fire,
            }
          }}
        />
      </View>
    );
  }
  

  render() {
    return (
      <View style= {{ flex: 1}}>
        <View style = {styles.groupPageTitle}>
          <TouchableOpacity style = {styles.backButton}
           onPress={()=> this.navigateBack()} >
            <Ionicons 
              name='ios-arrow-back' 
              size={40} 
              style= {styles.backIcon}
            />
          </TouchableOpacity>
        
          <Text style = {styles.textSetting} >{this.state.group} </Text>
          
        </View>
        
        <GiftedChat
          messages={this.state.messages}
          onSend={(message) => {
            Backend.sendMessage(message);
          }}
          user={{
              _id: Backend.getUid(),
              name: Backend.getuserName()
          }}
          renderBubble={this.renderBubble}
        />
        <KeyboardAvoidingView behavior={'padding'}/>
        
      </View>
    );
  }
  componentDidMount() {
    
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }
  componentWillUnmount() {
    Backend.closeChat();
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
  textSetting: {
    fontSize: 20,
    color: Colors.snow,
    alignSelf: 'center',
    fontFamily: Fonts.type.bold,
  },
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
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
