import React from 'react'
import {StyleSheet, Text, TextInput, View, Modal, ScrollView, Alert, Animated, BackHandler, Keyboard} from 'react-native'
import * as firebase from 'firebase';
import { Fonts, Colors, Metrics } from '../../Themes/'
import RoundedButton from '../../Components/RoundedButton'
import ChatSendBubble from '../../Components/ChatSendBubble'
import ChatReceiveBubble from '../../Components/ChatReceiveBubble'
import Tabbar from 'react-native-tabbar-bottom'
import { NavigationActions } from 'react-navigation';

export default class ExampleEventScreen extends React.Component {

  constructor() {
    super()
    console.log("EventScreenHit");
    this.state = {
      page: "ExampleEvent",
    }
  }

  // changeTextBoxPositions() {
  //   console.log("moving text box");
  //   Animated.timing(this.state.offsetY,
  //     {toValue: -150}
  //   ).start();
  // }
  //
  // changeTextBoxPositionsOriginal() {
  //   console.log("moving text box to original spot");
  //   Animated.timing(this.state.offsetY,
  //     {toValue: 0}
  //   ).start();
  // }

  render() {
    return (
      <View style = {styles.container}>
          <Text style = {styles.groupTitle}>Group Title</Text>
          <Text style = {styles.pageTitle}>Event Announcements</Text>

          <ScrollView style = {styles.scrollContainer}>

          <ChatSendBubble onPress={this.toggleModal}>
            This is an example of sent text
          </ChatSendBubble>

          <ChatReceiveBubble onPress={this.toggleModal}>
            This is an example of received text
          </ChatReceiveBubble>
          </ScrollView>

          <TextInput
              onChangeText={(text) => this.setState({text})}
              //onFocus={this.changeTextBoxPositions.bind(this)}
              //onSubmitEditing={this.changeTextBoxPositionsOriginal.bind(this)}
              placeholder={'Type a message...'}
              placeholderTextColor= '#14384E'
              borderColor = '#14384E'
              borderWidth = {2}
              textAlign={'center'}
              style={styles.groupTextInput}
          />

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
  scrollContainer: {
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
    color: '#14384E',
    width: 300,
    height: 40,
    maxWidth: 300,
    maxHeight: 200,
    backgroundColor: '#d6edf5',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 5,
    marginBottom: 65
  }
});
