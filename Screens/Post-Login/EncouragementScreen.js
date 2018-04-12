import React from 'react'
import {StyleSheet, Text, View, Modal } from 'react-native'
import RoundedButton from '../../Components/RoundedButton'
import Tabbar from 'react-native-tabbar-bottom'
import { NavigationActions } from 'react-navigation';

export default class EncouragementScreen extends React.Component {

  constructor() {
    super()
    console.log("EncouragementHit");
    this.state = {
      page: "Encouragement",
    }
  }

  render() {
    return (
        <View style={styles.container}>
            <RoundedButton onPress={this.toggleModal}>
              Welcome to the encouragement screen!
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
  }
});
