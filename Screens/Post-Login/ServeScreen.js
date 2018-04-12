import React from 'react'
import {StyleSheet, Text, View, Modal, ScrollView} from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'
import RoundedButton from '../../Components/RoundedButton'
import SmallGroupButton from '../../Components/SmallGroupButton'
import Tabbar from 'react-native-tabbar-bottom'
import { NavigationActions } from 'react-navigation';

export default class ServeScreen extends React.Component {

  constructor() {
    super()
    console.log("ServeGroupHit");
    this.state = {
      page: "Serve",
    }
  }

  render() {
    return (
        <View style= {{flex: 1, alignItems: 'center'}}>

            <Text style = {styles.groupPageTitle}>Suggested Serving Groups: </Text>

            <ScrollView>

                <SmallGroupButton onPress={this.toggleModal}>
                    <Text style = {styles.serveGroupTitle}>Worship Team</Text>
                    {"\n"}
                  Members: 20
                    {"\n"}
                  Description: Use your musical talents for the Lord.
                </SmallGroupButton>

                <SmallGroupButton onPress={this.toggleModal}>
                    <Text style = {styles.serveGroupTitle}>Media Team</Text>
                    {"\n"}
                  Members: 10
                    {"\n"}
                  Description: Use your knowledge of technology, audio, and video to serve.
                </SmallGroupButton>

                <SmallGroupButton onPress={this.toggleModal}>
                    <Text style = {styles.serveGroupTitle}>Youth Ministry</Text>
                    {"\n"}
                  Members: 15
                    {"\n"}
                  Description: Lead, teach, orinteract with junior and senior high schoolers.
                </SmallGroupButton>

                <SmallGroupButton onPress={this.toggleModal}>
                    <Text style = {styles.serveGroupTitle}>Young Adults Ministry</Text>
                    {"\n"}
                  Members: 6
                    {"\n"}
                  Description: Lead, teach, or interact with 18-30 year old adults
                </SmallGroupButton>

                <SmallGroupButton onPress={this.toggleModal}>
                    <Text style = {styles.serveGroupTitle}>Adults Ministries</Text>
                    {"\n"}
                  Members: 12
                    {"\n"}
                  Description: Lead, teach, or interact with adults
                </SmallGroupButton>

                <SmallGroupButton onPress={this.toggleModal}>
                    <Text style = {styles.serveGroupTitle}>Preschool & Childrens Ministries</Text>
                    {"\n"}
                  Members: 15
                    {"\n"}
                  Description: Watch over, play with, and interact with children.
                </SmallGroupButton>

                <SmallGroupButton onPress={this.toggleModal}>
                    <Text style = {styles.serveGroupTitle}>Infant Care</Text>
                    {"\n"}
                  Members: 10
                    {"\n"}
                  Description: Care for, watch over, and interact with infants
                </SmallGroupButton>

                <SmallGroupButton onPress={this.toggleModal}>
                    <Text style = {styles.serveGroupTitle}>Homeless Ministry</Text>
                    {"\n"}
                  Members: 8
                    {"\n"}
                  Description: Serve the local homeless population.
                </SmallGroupButton>

                <SmallGroupButton onPress={this.toggleModal}>
                    <Text style = {styles.serveGroupTitle}>Prayer Team</Text>
                    {"\n"}
                  Members: 10
                    {"\n"}
                  Description: A team of prayer warriors united in faith.
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
  serveGroupTitle: {
    fontSize: 30,
    color: Colors.fire
  }
});
