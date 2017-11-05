import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, View, Text, Icon, Right, ListItem } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';
import FooterNav from '../components/FooterNav';
import StickyBar from '../components/StickyBar';

const Items = () => {
  const styles = {
    rowStyles: {
      flexDirection: "row",
      alignItems: "center",
    },
    rightIcons1: {
      width: 20,
      height: 20,
      marginHorizontal: 5
    },
    rightIcons2: {
      width: 25,
      height: 25,
      marginHorizontal: 5
    },
    text1: {
      fontFamily: "calibre",
      fontSize: 20,
    },
    text2: {
      fontFamily: "calibre",
      fontSize: 15,
    }
  }
  return (
    <Content>
      <ListItem>
        <View style={styles.rowStyles}>
          <Image resizeMode="contain" style={{ height: 30, width: 30 }} source={require('../resources/icons/candidate.png')} />
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>Hussain David</Text>
            <Text style={styles.text2}>admin Officer</Text>
            <Text style={styles.text2}>Applied on: 7th July 2017</Text>
          </View>

          <Right>
            <View style={styles.rowStyles}>
              <Image resizeMode="contain" style={styles.rightIcons1} source={require('../resources/icons/jsinterviewgreen.png')} />
              <Image resizeMode="contain" style={styles.rightIcons2} source={require('../resources/icons/status_approve_accept.png')} />
            </View>
          </Right>

        </View>
      </ListItem>

      <ListItem>
        <View style={styles.rowStyles}>
          <Image resizeMode="contain" style={{ height: 30, width: 30 }} source={require('../resources/icons/candidate.png')} />
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>Mary Aisha</Text>
            <Text style={styles.text2}>Admin Officer</Text>
            <Text style={styles.text2}>Applied on: 7th July 2017</Text>
          </View>

          <Right>
            <View style={styles.rowStyles}>
              <Image resizeMode="contain" style={styles.rightIcons2} source={require('../resources/icons/status_pending.png')} />
            </View>
          </Right>

        </View>
      </ListItem>

      <ListItem>
        <View style={styles.rowStyles}>
          <Image resizeMode="contain" style={{ height: 30, width: 30 }} source={require('../resources/icons/candidate.png')} />
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>Mary Aisha</Text>
            <Text style={styles.text2}>Admin Officer</Text>
            <Text style={styles.text2}>Applied on: 7th July 2017</Text>
          </View>

          <Right>
            <View style={styles.rowStyles}>
              <Image resizeMode="contain" style={styles.rightIcons1} source={require('../resources/icons/jsinterviewgreen.png')} />
              <Image resizeMode="contain" style={styles.rightIcons2} source={require('../resources/icons/status_reject.png')} />
            </View>
          </Right>

        </View>
      </ListItem>
    </Content >
  )
}

export default class JobApplications extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <HeaderSmall
          rightIcon={true}
          rightIconName="ios-options"
          headerText="Job Applications" />
        <Content>
          <Items />
        </Content>
        <StickyBar
          text1="Invited"
          text2="Accepted"
          text3="Rejected"
          image1={require('../resources/icons/jsinterviewgreen.png')}
          image2={require('../resources/icons/status_approve_accept.png')}
          image3={require('../resources/icons/status_reject.png')}
        />
        <FooterNav />
      </Container>
    )
  }
}

const styles = {

}