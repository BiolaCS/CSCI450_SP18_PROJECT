import React from 'react'
import {StyleSheet, Text, View, Modal, ScrollView } from 'react-native'
import RoundedButton from '../../Components/RoundedButton'
import { Ionicons } from '@expo/vector-icons'
import { NavigationActions } from 'react-navigation';
import SmallGroupButtonStyles from '../../Components/Styles/SmallGroupButtonStyles';
import { Fonts, Colors, Metrics } from '../../Themes/'
import SmallGroupButton from '../../Components/SmallGroupButton'

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
    super()
    console.log("EncouragementHit");
    this.state = {
      page: "Encouragement",
    }
  }

  render() {
    return (
        <View style= {{flex: 1, alignItems: 'center', paddingTop: 24}}>

            <Text style = {styles.groupPageTitle}>Welcome Home </Text>

            <ScrollView>

                <SmallGroupButton
                onPress={this.toggleModal}
                >
                  <Text style = {styles.serveGroupTitle}>Encouragement Placeholder</Text>
                  {"\n"}
                  Members: 1
                  {"\n"}
                  Description: Be yourself!
                </SmallGroupButton>

            </ScrollView>

            
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
    height: 60,
    padding: 15,
  },
  serveGroupTitle: {
    fontSize: 30,
    color: Colors.fire
  }
});
