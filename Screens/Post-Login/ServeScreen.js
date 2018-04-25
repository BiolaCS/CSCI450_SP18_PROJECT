import React from 'react'
import {StyleSheet, Text, View, Modal, ScrollView, TouchableOpacity} from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'
import RoundedButton from '../../Components/RoundedButton'
import SmallGroupButton from '../../Components/SmallGroupButton'
import { Ionicons } from '@expo/vector-icons'
import { NavigationActions } from 'react-navigation';

export default class ServeScreen extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({focused}) => (
      <Ionicons
          name={focused ? 'md-heart' : 'md-heart-outline'}
          size={26}
          style={{ color: focused ? '#ffffff' : '#949494'}}
      />
  )}
  constructor() {
    super()
    console.log("ServeGroupHit");
    this.state = {
      page: "Serve",
    }
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
        
              <Text style = {styles.textSetting} >Serve </Text>
          
          </View>

            <ScrollView contentContainerStyle = {{alignItems: 'center'}}>

                <SmallGroupButton onPress={() => this.props.navigation.navigate('ServeInfo', {})}>
                    <Text style = {styles.serveGroupTitle}>Worship Team</Text>
                    {"\n"}
                  Members: 20
                    {"\n"}
                  Description: Use your musical talents for the Lord.
                </SmallGroupButton>

                <SmallGroupButton onPress={() => this.props.navigation.navigate('ServeInfo', {})}>
                    <Text style = {styles.serveGroupTitle}>Media Team</Text>
                    {"\n"}
                  Members: 10
                    {"\n"}
                  Description: Use your knowledge of technology, audio, and video to serve.
                </SmallGroupButton>

                <SmallGroupButton onPress={() => this.props.navigation.navigate('ServeInfo', {})}>
                    <Text style = {styles.serveGroupTitle}>Youth Ministry</Text>
                    {"\n"}
                  Members: 15
                    {"\n"}
                  Description: Lead, teach, orinteract with junior and senior high schoolers.
                </SmallGroupButton>

                <SmallGroupButton onPress={() => this.props.navigation.navigate('ServeInfo', {})}>
                    <Text style = {styles.serveGroupTitle}>Young Adults Ministry</Text>
                    {"\n"}
                  Members: 6
                    {"\n"}
                  Description: Lead, teach, or interact with 18-30 year old adults
                </SmallGroupButton>

                <SmallGroupButton onPress={() => this.props.navigation.navigate('ServeInfo', {})}>
                    <Text style = {styles.serveGroupTitle}>Adults Ministries</Text>
                    {"\n"}
                  Members: 12
                    {"\n"}
                  Description: Lead, teach, or interact with adults
                </SmallGroupButton>

                <SmallGroupButton onPress={() => this.props.navigation.navigate('ServeInfo', {})}>
                    <Text style = {styles.serveGroupTitle}>Preschool & Childrens Ministries</Text>
                    {"\n"}
                  Members: 15
                    {"\n"}
                  Description: Watch over, play with, and interact with children.
                </SmallGroupButton>

                <SmallGroupButton onPress={() => this.props.navigation.navigate('ServeInfo', {})}>
                    <Text style = {styles.serveGroupTitle}>Infant Care</Text>
                    {"\n"}
                  Members: 10
                    {"\n"}
                  Description: Care for, watch over, and interact with infants
                </SmallGroupButton>

                <SmallGroupButton onPress={() => this.props.navigation.navigate('ServeInfo', {})}>
                    <Text style = {styles.serveGroupTitle}>Homeless Ministry</Text>
                    {"\n"}
                  Members: 8
                    {"\n"}
                  Description: Serve the local homeless population.
                </SmallGroupButton>

                <SmallGroupButton onPress={() => this.props.navigation.navigate('ServeInfo', {})}>
                    <Text style = {styles.serveGroupTitle}>Prayer Team</Text>
                    {"\n"}
                  Members: 10
                    {"\n"}
                  Description: A team of prayer warriors united in faith.
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
