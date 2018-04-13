import React from 'react'
import {StyleSheet, Text, View, Modal, ScrollView} from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'
import RoundedButton from '../../Components/RoundedButton'
import SmallGroupButton from '../../Components/SmallGroupButton'
import Tabbar from 'react-native-tabbar-bottom'
import { NavigationActions } from 'react-navigation';

export default class SmallGroupInfoScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      page: "SmallGroupInfo",
      hasJoinedGroup: false
    }
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
  this.setState({hasJoinedGroup:true})
} else {
  this.setState({hasJoinedGroup:false})
}

}

  render() {
    return (
        <View style= {{flex: 1, alignItems: 'center'}}>
        {this.renderIf(!this.state.hasJoinedGroup,
          <ScrollView>
          <Text style = {styles.smallGroupTitle}>Group Name</Text>
          <Text style = {styles.groupInfo}>Members:</Text>
          <Text style = {styles.groupInfo}>Description:</Text>
          <RoundedButton onPress={ () =>{this.joinOrLeave()}}>
            Join this group!
          </RoundedButton>
          </ScrollView>
                        )}

        {this.renderIf(this.state.hasJoinedGroup,
          <ScrollView>

                  <Text style = {styles.smallGroupTitle}>Group Name</Text>
                  <RoundedButton onPress={this.toggleModal}>
                   Message the Group
                  </RoundedButton>
                  <SmallGroupButton onPress={this.toggleModal}>
                      <Text style = {styles.smallGroupTitle}>Events</Text>
                      {"\n"}
                    Barbeque: April 10th
                      {"\n"}
                    Beach Day: May 1st
                  </SmallGroupButton>
                  <RoundedButton onPress={() => {this.joinOrLeave()}}>
                    Leave Group
                  </RoundedButton>
          </ScrollView>
                          )}

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
      groupInfo: {
        fontSize: 15,
        color: Colors.fire,
        textAlign: 'left',
        padding: 15,
      },
      smallGroupTitle: {
        fontSize: 30,
        fontFamily: Fonts.type.bold,
        color: Colors.fire,
        textAlign: 'center',
        padding: 15,
      }
    });
