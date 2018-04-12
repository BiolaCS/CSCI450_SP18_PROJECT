import React from 'react'
import {StyleSheet, Text, TextInput, View, Modal, ScrollView, Alert, Animated, BackHandler, Keyboard} from 'react-native'
import * as firebase from 'firebase';
import { Fonts, Colors, Metrics } from '../../Themes/'
import RoundedButton from '../../Components/RoundedButton'
import ChatSendBubble from '../../Components/ChatSendBubble'
import ChatReceiveBubble from '../../Components/ChatReceiveBubble'
import Tabbar from 'react-native-tabbar-bottom'
import { NavigationActions } from 'react-navigation';

export default class ExampleMessageScreen extends React.Component {

  constructor() {
    super()
    console.log("MessageScreenHit");
    this.state = {
      page: "ExampleMessage",
    }
  }

  render() {
    return (
      <View style= {styles.container}>
          <Text style = {styles.groupTitle}>Group Title </Text>
          <Text style = {styles.pageTitle}>Message Board </Text>

          <ScrollView>

          <ChatSendBubble onPress={this.toggleModal}>
            This is an example of sent text
          </ChatSendBubble>

          <ChatReceiveBubble onPress={this.toggleModal}>
            This is an example of received text
          </ChatReceiveBubble>

          </ScrollView>

            <Tabbar
                activePage={this.state.page}
                stateFunc={(tab) => {
                  this.props.navigation.navigate(tab.page, {});
                }}
                tabs={[
                  {
                    page: "Home",
                    icon: "md-home",
                  },
                  {
                    page: "Serve",
                    icon: "md-heart",
                  },
                  {
                    page: "SmallGroup",
                    icon: "md-people",
                  },
                  {
                    page: "Encouragement",
                    icon: "ios-cafe",
                  },
                ]}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  groupTitle: {
    fontSize: 20,
    backgroundColor: Colors.fire,
    color: Colors.snow,
    textAlign: 'center',
    height: 50,
    padding: 10,
  },
  pageTitle: {
    fontSize: 15,
    backgroundColor: '#14384E',
    color: Colors.snow,
    textAlign: 'center',
    height: 40,
    padding: 5,
  },
  groupTextInput: {
    borderRadius: 15,
    color: '#000000',
    width: 250,
    height: 40,
    backgroundColor: '#d6edf5',
    margin: 5,
    marginRight: 25,
    marginLeft: 25,
  },
});
