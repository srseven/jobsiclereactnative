import React, { Component } from 'react';
import { Image, Dimensions, TouchableOpacity } from 'react-native';
import { Container, Content, View, Text, Icon, Right, ListItem } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';
import Button from '../components/Button';
import PDFModal from '../components/PDFModal';

const screen_width = Dimensions.get('window').width;

export default class JobApplication extends Component {
  state = {
    modalVisible: true
  }

  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <HeaderSmall headerText="Job Application" />
        <PDFModal modalVisible={this.state.modalVisible} />
        <Content>
          <View style={styles.box1}>
            <View style={styles.circle} />
            <Text style={styles.title}>Hussain David</Text>
            <Text style={styles.subtitle}>Admin Officer</Text>
            <Text style={styles.subtitle}>Applied on: 7th July 2017</Text>
          </View>

          <View style={styles.box1}>
            <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "center" }}>
              <Image style={styles.icons} resizeMode="contain" source={require('../resources/icons/reject_jobappliation.png')} />
              <Image style={styles.icons} resizeMode="contain" source={require('../resources/icons/status_approve_accept.png')} />
            </View>
            <Text style={styles.subtitle}>Please Accept or Reject this Application</Text>
            <Text style={styles.subtitle}>The Applicant will be notified instantly</Text>

            <View style={{ marginVertical: 15 }}>

              <TouchableOpacity activeOpacity={.8} style={styles.btn}>
                <Text style={{ color: "#fff", fontFamily: "calibre" }}>Invite for interview</Text>
                <Image style={{ width: 15, height: 15, marginLeft: 5, }} resizeMode="contain" source={require('../resources/icons/send_invite.png')} />
              </TouchableOpacity>

            </View>

            <Text style={styles.subtitle}>Accept the application before sending an invitation.</Text>
            <Text style={styles.subtitle}>The Applicant will be notified instantly</Text>
          </View>

          <View style={styles.box2}>
            <View style={{ flexDirection: "row", borderRadius: 5, }}>
              <View style={styles.inputBox}>
                <Text style={styles.label}>Full Name:</Text>
                <Text style={styles.label}>Gender</Text>
                <Text style={styles.label}>Contact Number:</Text>
                <Text style={styles.label}>Qualification</Text>
                <Text style={styles.label}>Experience</Text>
                <Text style={styles.label}>Email</Text>
              </View>
              <View style={styles.inputBox2}>
              </View>
            </View>
          </View>

          <View style={styles.box2}>
            <Text style={styles.label}>Dear Sir/Madam,</Text>
            <Text style={styles.label}>lorem ipsum asd jk jaksdjk jkd jks jaskdjkd jk jdkasjkasdjhja skjskj as dsd jka j kjaskdjak jaks jkjkjskdjk aeuauckx mncjasdjad, nqj kasdjkadjkdjkdjakw jkk jaskdj kjskdjakjsdk</Text>
          </View>

          <View style={styles.rowStyles}>
            <Button
              onPress={() => this.setState({ modalVisible: true })}
              width={205}
              fontSize={15}
              color="#fff"
              bgColor="#00bbb1"
              buttonText="View CV" />
            <Image resizeMode="contain" style={styles.imgStyle} source={require('../resources/icons/share.png')} />
            <Image resizeMode="contain" style={styles.imgStyle} source={require('../resources/icons/download.png')} />
          </View>
          <View style={styles.rowStyles}>
            <Button
              width={205}
              fontSize={15}
              color="#fff"
              bgColor="#00bbb1"
              buttonText="View ID Card" />
            <Image resizeMode="contain" style={styles.imgStyle} source={require('../resources/icons/share.png')} />
            <Image resizeMode="contain" style={styles.imgStyle} source={require('../resources/icons/download.png')} />
          </View>
          <View style={styles.rowStyles}>
            <Button
              width={205}
              fontSize={15}
              color="#fff"
              bgColor="#00bbb1"
              buttonText="View Extras" />
            <Image resizeMode="contain" style={styles.imgStyle} source={require('../resources/icons/share.png')} />
            <Image resizeMode="contain" style={styles.imgStyle} source={require('../resources/icons/download.png')} />
          </View>
          <Text style={[styles.subtitle, { textAlign: "center", marginVertical: 20 }]}>You will also receive tese documents by email</Text>
        </Content>
      </Container>
    )
  }
}

const styles = {
  btn: {
    flexDirection: "row",
    backgroundColor: "#ff5a5f",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  rowStyles: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 5
  },
  imgStyle: {
    width: 18,
    height: 18,
    marginLeft: 7
  },
  inputBox: {
    width: "50%",
    backgroundColor: "#b7e8e6",
    paddingVertical: 10,
  },
  inputBox2: {
    width: "50%",
    backgroundColor: "#eff2f3",
    paddingVertical: 10,
  },
  label: {
    fontFamily: "calibre",
    marginLeft: 10,
    fontSize: 14,
    marginVertical: 2
  },
  box2: {
    paddingVertical: 10,
    marginHorizontal: 15,
    borderBottomWidth: .5,
    borderBottomColor: "#9d9d9c"
  },
  icons: {
    width: 50,
    height: 50,
    marginHorizontal: 20,
    marginVertical: 10,
    alignSelf: "center"
  },
  circle: {
    borderRadius: 100,
    width: 60,
    height: 60,
    backgroundColor: "#333"
  },
  box1: {
    paddingVertical: 10,
    alignItems: "center",
    borderBottomWidth: 0.6,
    borderBottomColor: "#9d9d9c",
    marginHorizontal: 15
  },
  title: {
    fontFamily: "calibre",
    fontSize: 18,
    marginTop: 5
  },
  subtitle: {
    fontFamily: "calibre",
    fontSize: 12.5,
    marginTop: 2
  }
}