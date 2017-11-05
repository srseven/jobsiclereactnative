import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Content, View, Text, Icon, Right } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';

export default class InterviewDetails extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <HeaderSmall headerText="Interview Details" leftText="BACK" />
        <Content>
          <View style={styles.box}>
            <Text style={styles.title}>Marketing Manager</Text>
            <Text style={styles.subtitle}>ABC Comapny Pvt Ltd</Text>
            <Text style={[styles.subtitle, { fontSize: 14 }]}>Applied on 12th June 2017</Text>
            <View style={[styles.rowStyles, { alignSelf: "center" }]}>
              <Image resizeMode="contain" style={styles.smallIcons} source={require('../resources/icons/job_location.png')} />
              <Text style={[styles.subtitle, { fontSize: 14 }]}>H.Aage, Majeedee Magu, Male, 20076</Text>
            </View>
          </View>

          <View style={styles.box}>
            <Image style={styles.bigIcon} resizeMode="contain" source={require('../resources/icons/active_interview_small.png')} />
            <Text style={styles.bigText}>28th Aug 17</Text>
            <Text style={styles.bigText}>18:00hrs</Text>
            <Text style={[styles.subtitle, { color: "#ff5a5f", marginTop: 10 }]}>Status: Rescheduled</Text>
          </View>

          <View style={[styles.box, { paddingTop: 10 }]}>
            <Text style={{ color: "#00bbb1" }}>Instructions:</Text>
            <Text style={[styles.subtitle, { fontSize: 14, textAlign: "left" }]}>Please bring original Certificates</Text>
          </View>

          <View style={[styles.box, { borderBottomColor: "#fff" }]}>

            <View style={styles.rowStyles}>
              <View style={styles.pinkBox}>
                <Text style={[styles.subtitle, { fontSize: 13, color: "#fff" }]}>Add Personal Note</Text>
              </View>
              <Image style={styles.smallIcons} resizeMode="contain" source={require('../resources/icons/edit.png')} />
            </View>
            <Text style={[styles.subtitle, { fontSize: 13, textAlign: "left" }]}>Personal note appears here after adding a note, user should be able to edit it</Text>

            <Text style={[styles.subtitle, { fontSize: 13, marginTop: 20 }]}>Invited on: 15th July 2017</Text>
          </View>
        </Content>
        <View style={styles.bar}>
          <View style={[styles.rowStyles, { alignSelf: "center" }]}>
            <Text style={[styles.title, { color: "#fff", marginRight: 10 }]}>Will You attend?</Text>
            <TouchableOpacity style={styles.btn}>
              <Text style={{ color: "#fff" }}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={{ color: "#fff" }}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    )
  }
}

const styles = {
  bar: {
    paddingHorizontal: 15,
    paddingVertical: 13,
    backgroundColor: "#ff5a5f"
  },
  btn: {
    marginHorizontal: 5,
    paddingHorizontal: 4,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
    width: 50,
  },
  pinkBox: {
    backgroundColor: "#ff5a5f",
    padding: 3,
    borderRadius: 4
  },
  rowStyles: {
    flexDirection: "row",
    alignItems: "center",
  },
  bigText: {
    fontSize: 30,
    fontFamily: "calibre",
    textAlign: "center"
  },
  smallIcons: {
    width: 15,
    height: 15,
    marginHorizontal: 5
  },
  bigIcon: {
    alignSelf: "center",
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  box: {
    marginHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: .4,
    borderBottomColor: "#9d9d9c"
  },
  title: {
    color: "#00bbb1",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 2,
    fontFamily: "calibre"
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "calibre",
  },
}