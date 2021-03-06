import React from 'react'
import {StyleSheet, Text, View, Modal, ScrollView} from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'
import RoundedButton from '../../Components/RoundedButton'
import SmallGroupButton from '../../Components/SmallGroupButton'
import Tabbar from 'react-native-tabbar-bottom'
import { NavigationActions } from 'react-navigation';

export default class SmallGroupScreen extends React.Component {

  constructor() {
    super();
    console.log("SmallGroupHit");
    this.state = {
      page: "SmallGroup",
    }
  }

  render() {
    return (
        <View style= {{flex: 1, alignItems: 'center'}}>

            <Text style = {styles.groupPageTitle}>Suggested Small Groups: </Text>

            <ScrollView>

                <SmallGroupButton onPress={this.toggleModal}>
                    <Text style = {styles.smallGroupTitle}>Phishers of Men</Text>
                    {"\n"}
                  Members: 10
                    {"\n"}
                  Description: We are a small group of hardworking computer science professionals.
                </SmallGroupButton>

                <SmallGroupButton onPress={this.toggleModal}>
                    <Text style = {styles.smallGroupTitle}>Men of Honor</Text>
                    {"\n"}
                  Members: 35
                    {"\n"}
                  Description: We are a great floor with a knack for making good mock rocks.
                </SmallGroupButton>

                <SmallGroupButton onPress={this.toggleModal}>
                    <Text style = {styles.smallGroupTitle}>Fire Breathing Rubber Duckies</Text>
                    {"\n"}
                  Members: 5
                    {"\n"}
                  Description: Please read title.
                </SmallGroupButton>

                <SmallGroupButton onPress={this.toggleModal}>
                    <Text style = {styles.smallGroupTitle}>420 Youth Ministries</Text>
                    {"\n"}
                  Members: 20
                    {"\n"}
                  Description: Ablaze with the holy spirit.
                </SmallGroupButton>

                <SmallGroupButton onPress={this.toggleModal}>
                    <Text style = {styles.smallGroupTitle}>Do U Kno De Wey</Text>
                    {"\n"}
                  Members: 1
                    {"\n"}
                  Description: We Kno De Wey. Cluck 4 de queen.
                </SmallGroupButton>

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
      smallGroupTitle: {
        fontSize: 30,
        color: Colors.fire
      }
    });
