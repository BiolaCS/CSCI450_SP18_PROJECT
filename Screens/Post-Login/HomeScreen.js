import React from 'react'
import {StyleSheet, Text, View, Modal } from 'react-native'
import RoundedButton from '../../Components/RoundedButton'
import FullButton from '../../Components/FullButton'
import Tabbar from 'react-native-tabbar-bottom'
import * as firebase from 'firebase';

import { NavigationActions } from 'react-navigation';

export default class HomeScreen extends React.Component {

  constructor() {
    super()
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
        <View style={styles.container}>

            <RoundedButton onPress={this.toggleModal}>
              Welcome to the home screen!
            </RoundedButton>

            <RoundedButton onPress={() => {this.logoutUser();}}>
              PlaceHolder Logout
            </RoundedButton>

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
    backgroundColor: '#84C9E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
