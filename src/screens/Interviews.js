import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, View, Text, Icon, Right, ListItem, CheckBox } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';
import FooterNav2 from '../components/FooterNav2';
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
      color: "#00bbb1",
      fontFamily: "calibre",
      fontSize: 20,
    },
    text2: {
      fontFamily: "calibre",
      fontSize: 13,
    },
    smallText: {
      fontFamily: "calibre",
      fontSize: 13,
    },
    smallIcons: {
      width: 15,
      height: 15,
      marginLeft: 3
    },
    viewBtn: {
      borderWidth: .5,
      borderColor: "#00bbb1",
      paddingHorizontal: 5,
      marginHorizontal: 5
    },
  }
  return (
    <Content>
      <ListItem>
        <View style={styles.rowStyles}>
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>Marketing Manager</Text>
            <View style={[styles.rowStyles, { marginVertical: 5 }]}>
              <Text style={styles.text2}>ABC Company Ltd</Text>
              <View style={styles.viewBtn}><Text style={{ fontSize: 11, color: "#00bbb1" }}>view</Text></View>
            </View>
          </View>

          <Right>
            <View style={styles.rowStyles}>
              <Image resizeMode="contain" style={styles.rightIcons1} source={require('../resources/icons/sticky_going.png')} />
              <Image resizeMode="contain" style={styles.rightIcons2} source={require('../resources/icons/active_interview_small.png')} />
            </View>
          </Right>

        </View>
      </ListItem>

      <ListItem>
        <View style={styles.rowStyles}>
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>Admin Assistant - Trainee</Text>
            <View style={[styles.rowStyles, { marginVertical: 5 }]}>
              <Text style={styles.text2}>ABC Company Ltd</Text>
              <View style={styles.viewBtn}><Text style={{ fontSize: 11, color: "#00bbb1" }}>view</Text></View>
            </View>
          </View>

          <Right>
            <View style={styles.rowStyles}>
              <Image resizeMode="contain" style={styles.rightIcons1} source={require('../resources/icons/sticky_notgoing.png')} />
              <Image resizeMode="contain" style={styles.rightIcons2} source={require('../resources/icons/expired_interview_small.png')} />
            </View>
          </Right>

        </View>
      </ListItem>
    </Content >
  )
}

export default class Interviews extends Component {

  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <HeaderSmall
          rightIcon={true}
          rightIconName="ios-options"
          headerText="My Interviews" />
        <Content>
          <Items />
        </Content>
        <StickyBar
          text1="Active"
          text2="Expired"
          text3="Going"
          text4="Not Going"
          image1={require('../resources/icons/active_interview_small.png')}
          image2={require('../resources/icons/expired_interview_small.png')}
          image3={require('../resources/icons/sticky_going.png')}
          image4={require('../resources/icons/sticky_notgoing.png')}
        />
        <FooterNav2 />
      </Container>
    )
  }
}