import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { Container, Content, View, Text, Input, Item, Icon, Picker } from 'native-base';
import Button from '../components/Button';
import Header from '../components/Header';
import FooterNav from '../components/FooterNav';
import Sidebar from '../components/Sidebar';

export default class Employee extends Component {
  render() {
    return (
      <Sidebar Title="Employer">
        <Container>
          <Header headerText="Greetings Employer !" />
          <Content style={{ backgroundColor: "#fff" }}>
            <View style={{ borderBottomWidth: .5, borderBottomColor: "#9d9d9c", marginHorizontal: 15 }}>

              <View style={styles.rowStyles}>
                <View style={styles.circle}>
                  <Text style={styles.circleText}>05</Text>
                </View>

                <View style={{ marginHorizontal: 15 }}>
                  <Text style={styles.text1}>Active Jobs</Text>
                  <Text style={styles.text2}>0 pending approval</Text>
                  <Text style={styles.text3}>1 job expiring in 2 days</Text>
                </View>

                <TouchableOpacity style={{ marginTop: -40 }}>
                  <Image style={{ width: 50, height: 50 }} source={require('../resources/icons/add_alert.png')} />
                </TouchableOpacity>
              </View>

              <View style={styles.rowStyles}>
                <View style={styles.circle}>
                  <Text style={styles.circleText}>24</Text>
                </View>

                <View style={{ marginHorizontal: 15 }}>
                  <Text style={styles.text1}>Active Applications</Text>
                  <Text style={styles.text2}>7 apps accepted so far</Text>
                  <Text style={styles.text3}>10 apps rejected so far</Text>
                  <Text style={styles.text3}>Next interview in 12 hours</Text>
                </View>
              </View>

            </View>
          </Content >

          <View style={{ paddingHorizontal: 20, paddingVertical: 10, backgroundColor: "#fff" }}>
            <Text style={styles.bottomText}>Remember to update job application status so that candidates will know what's going on</Text>
            <Button buttonText="Post a Job" />
          </View>
          <View style={styles.stickyBox}>
            <Text style={styles.stickyBoxText}>From January 2018, employers have to subscribe to a paid package starting from MVR 499/- per year.</Text>
          </View>
          <FooterNav />
        </Container >
      </Sidebar>
    )
  }
}

const styles = {
  bottomText: {
    fontFamily: "calibre",
    textAlign: "center",
    marginVertical: 20
  },
  text1: {
    fontSize: 22,
    fontFamily: "calibre"
  },
  text2: {
    fontFamily: "calibre"
  },
  text3: {
    fontFamily: "calibre"
  },
  rowStyles: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  circle: {
    width: 81,
    height: 81,
    borderRadius: 100,
    backgroundColor: "#243747",
    marginLeft: 10,
  },
  circleText: {
    borderRadius: 100,
    marginTop: 10,
    color: "#fff",
    alignSelf: "center",
    fontSize: 47,
    fontFamily: "calibre"
  },
  stickyBox: {
    backgroundColor: "#00bbb1",
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  stickyBoxText: {
    fontSize: 14,
    textAlign: "center",
    color: "#fff"
  },
  itemStyles: {
    marginVertical: 10,
    width: "70%",
    alignSelf: "center"
  },
}