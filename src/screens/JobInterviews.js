import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, View, Text, Icon, Right, ListItem, CheckBox } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';
import FooterNav from '../components/FooterNav';
import StickyBar from '../components/StickyBar';

const Items = () => {
  const styles = {
    rowStyles: {
      flexDirection: "row",
      alignItems: "center",
    },
    checkBox: {
      width: 15,
      height: 15,
      borderWidth: 1,
      marginTop: 6,
      alignSelf: "center"
    },
    rightIcons1: {
      width: 20,
      height: 20,
      marginHorizontal: 4
    },
    rightIcons2: {
      width: 20,
      height: 20,
      marginHorizontal: 4
    },
    text1: {
      fontFamily: "calibre",
      fontSize: 20,
    },
    text2: {
      fontFamily: "calibre",
      fontSize: 15,
    },
    smallText: {
      fontFamily: "calibre",
      fontSize: 13,
    },
    smallIcons: {
      width: 15,
      height: 15,
      marginLeft: 3
    }
  }
  return (
    <Content>
      <ListItem>
        <View style={styles.rowStyles}>
          <Image resizeMode="contain" style={{ height: 30, width: 30 }} source={require('../resources/icons/invite.png')} />
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>Hussain David</Text>
            <Text style={styles.text2}>admin Officer</Text>
            <Text style={styles.text2}>Invited on: 7th July 2017</Text>
            <Text style={[styles.text2, { color: "#ff5a5f" }]}>Remarks: <Text style={styles.text2}>Rejected</Text></Text>

          </View>

          <Right>
            <View style={styles.rowStyles}>
              <Icon name="ios-eye-outline" style={{ fontSize: 35, color: "#9d9d9c" }} />
              <Image resizeMode="contain" style={styles.rightIcons1} source={require('../resources/icons/cantcome.png')} />
              <Image resizeMode="contain" style={styles.rightIcons2} source={require('../resources/icons/active_interview_small.png')} />
            </View>
          </Right>

        </View>
      </ListItem>

      <ListItem>
        <View style={styles.rowStyles}>
          <View>
            <Image resizeMode="contain" style={{ height: 30, width: 30 }} source={require('../resources/icons/candidate.png')} />
            <View style={styles.checkBox} />
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>Ali Manik Vy</Text>
            <Text style={styles.text2}>Admin Officer</Text>

            <View style={styles.rowStyles}>
              <Text style={styles.text2}>Invited on: 7th July 2017</Text>
              <Image resizeMode="contain" style={styles.smallIcons} source={require('../resources/icons/edit.png')} />
              <Image resizeMode="contain" style={styles.smallIcons} source={require('../resources/icons/edit.png')} />
            </View>


            <Text style={[styles.text2, { color: "#ff5a5f" }]}>Remarks: <Text style={styles.text2}>Completed</Text></Text>
          </View>

          <Right>
            <View style={styles.rowStyles}>
              <Icon name="ios-eye-outline" style={{ fontSize: 35, color: "#9d9d9c" }} />
              <Image resizeMode="contain" style={styles.rightIcons1} source={require('../resources/icons/going_not_ok.png')} />
              <Image resizeMode="contain" style={styles.rightIcons2} source={require('../resources/icons/active_interview_small.png')} />
            </View>
            <Text style={styles.smallText}>28th Aug 17</Text>
            <Text style={styles.smallText}>18:00 hrs</Text>
          </Right>

        </View>
      </ListItem>
    </Content >
  )
}

export default class JobInterviews extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <HeaderSmall
          rightIcon={true}
          rightIconName="ios-options"
          headerText="Job Interviews" />
        <Content>
          <Items />
        </Content>
        <StickyBar
          text1="Active"
          text2="Expired"
          text3="Will Come"
          text4="Can't Come"
          image1={require('../resources/icons/active_interview_small.png')}
          image2={require('../resources/icons/expired_interview_small.png')}
          image3={require('../resources/icons/going_not_ok.png')}
          image4={require('../resources/icons/cantcome.png')}
        />
        <FooterNav />
      </Container>
    )
  }
}

const styles = {

}