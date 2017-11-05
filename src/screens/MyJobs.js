import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { ListItem, Tab, Tabs, Right, Container, Content, View, Text, Input, Item, Icon, Picker } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';
import FooterNav from '../components/FooterNav';
import StickyBar from '../components/StickyBar';

const ActiveJobsTab = () => {
  const styles = {
    rowStyles: {
      flexDirection: "row",
      alignItems: "center",
    },
    rightIcons: {
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
          <Image resizeMode="contain" style={{ height: 30, width: 30 }} source={require('../resources/icons/status_approve_accept.png')} />
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>Admin Officer</Text>
            <Text style={styles.text2}>Male City</Text>
            <Text style={styles.text2}>Expirpes on: 25th Sep 2017</Text>
            <Text style={styles.text2}>Applications: 0</Text>
          </View>

          <Right>
            <View style={styles.rowStyles}>
              <Image resizeMode="contain" style={styles.rightIcons} source={require('../resources/icons/edit.png')} />
              <Image resizeMode="contain" style={styles.rightIcons} source={require('../resources/icons/deletestuff.png')} />
            </View>
          </Right>

        </View>
      </ListItem>

      <ListItem>
        <View style={styles.rowStyles}>
          <Image resizeMode="contain" style={{ height: 30, width: 30 }} source={require('../resources/icons/status_approve_accept.png')} />
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>Admin Officer</Text>
            <Text style={styles.text2}>Male City</Text>
            <Text style={styles.text2}>Expirpes on: 25th Sep 2017</Text>
            <Text style={styles.text2}>Applications: 0</Text>
          </View>

          <Right>
            <View style={styles.rowStyles}>
              <Image resizeMode="contain" style={styles.rightIcons} source={require('../resources/icons/edit.png')} />
              <Image resizeMode="contain" style={styles.rightIcons} source={require('../resources/icons/deletestuff.png')} />
            </View>
          </Right>

        </View>
      </ListItem>
    </Content >
  )
}

const ExpiredJobsTab = () => {
  const styles = {
    rowStyles: {
      flexDirection: "row",
      alignItems: "center",
    },
    rightIcons: {
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
          <Image resizeMode="contain" style={{ height: 30, width: 30 }} source={require('../resources/icons/status_expiredjob.png')} />
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>Admin Officer</Text>
            <Text style={styles.text2}>Male City</Text>
            <Text style={styles.text2}>Expirpes on: 25th Sep 2017</Text>
            <Text style={styles.text2}>Applications: 0</Text>
          </View>

          <Right>
            <View style={styles.rowStyles}>
              <Image resizeMode="contain" style={styles.rightIcons} source={require('../resources/icons/deletestuff.png')} />
            </View>
          </Right>

        </View>
      </ListItem>

      <ListItem>
        <View style={styles.rowStyles}>
          <Image resizeMode="contain" style={{ height: 30, width: 30 }} source={require('../resources/icons/status_expiredjob.png')} />
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>Admin Officer</Text>
            <Text style={styles.text2}>Male City</Text>
            <Text style={styles.text2}>Expirpes on: 25th Sep 2017</Text>
            <Text style={styles.text2}>Applications: 0</Text>
          </View>

          <Right>
            <View style={styles.rowStyles}>
              <Image resizeMode="contain" style={styles.rightIcons} source={require('../resources/icons/deletestuff.png')} />
            </View>
          </Right>

        </View>
      </ListItem>
    </Content >
  )
}


export default class MyJobs extends Component {
  render() {
    return (
      <Container>
        <HeaderSmall
          rightIcon={true}
          rightIconName="ios-options"
          headerText="My Jobs"
        />
        <Content style={{ backgroundColor: "#fff" }}>
          <Tabs
            tabBarUnderlineStyle={{ backgroundColor: "#ffcc29", height: 7 }}
            initialPage={1} >
            <Tab
              activeTabStyle={styles.tabStyle}
              activeTextStyle={{ color: "#fff" }}
              textStyle={{ color: "#fff" }}
              tabStyle={styles.tabStyle}
              heading="Active Jobs"
            >
              <ActiveJobsTab />
            </Tab>
            <Tab

              activeTextStyle={{ color: "#fff" }}
              activeTabStyle={styles.tabStyle}
              textStyle={{ color: "#fff" }}
              tabStyle={styles.tabStyle}
              heading="Expired Jobs">
              <ExpiredJobsTab />
            </Tab>
          </Tabs>
        </Content >

        <StickyBar
          text1="Pending"
          text2="Approved"
          text3="Rejected"
          image1={require('../resources/icons/status_pending.png')}
          image2={require('../resources/icons/status_approve_accept.png')}
          image3={require('../resources/icons/status_reject.png')}
        />
        <FooterNav />
      </Container >
    )
  }
}

const styles = {
  activeTab: {
    backgroundColor: "#00bbb1"
  },
  tabStyle: {
    backgroundColor: "#00bbb1"
  },
  rowStyles: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "#efeff4"
  },
  bottomText: {
    fontFamily: "calibre",
    textAlign: "center",
    marginVertical: 20
  },
  stickyBox: {
    backgroundColor: "#efeff4",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    alignSelf: "center",
  },
  stickyBoxText: {
    fontSize: 14,
    fontFamily: "calibre",
    marginLeft: 5
  },
}