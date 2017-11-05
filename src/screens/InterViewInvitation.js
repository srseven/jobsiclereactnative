import React, { Component } from 'react';
import { TouchableOpacity, Image, Modal, TouchableHighlight } from 'react-native'
import { Container, Content, View, Text, Right, Input } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';
import InputComp from '../components/Input';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';

export default class InterViewInvitation extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <HeaderSmall
          headerText="Interview Invitation"
          leftText="CANCEL"
        />
        <Content style={{ backgroundColor: "#fff", marginTop: 10, paddingHorizontal: 15 }}>
          <View style={styles.box}>
            <Text style={styles.title}>Let's Invite!</Text>
            <Text style={styles.name}>Hussain David</Text>
            <Text style={styles.text}>Admin Officer</Text>
          </View>

          <Dropdown
            Label="Date"
            required={true}
            placeholder="Date"
            item1="-Select date-"
            item2="opt1"
            item2="opt2"
          />
          <Dropdown
            Label="Time"
            required={true}
            placeholder="Time"
            item1="-Select time-"
            item2="opt1"
            item2="opt2"
          />
          <InputComp Label="Address" required={true} />

          <Text style={{ marginLeft: 1, fontFamily: "calibre", marginTop: 5 }}>Instructions</Text>
          <Input multiline={true} style={styles.inputStyles} />

          <Text style={styles.text}>The Applicant will be notified instantly</Text>

          <View style={{ marginVertical: 20 }}>
            <Button
              width={"95%"}
              fontSize={16}
              buttonText="Send" />
          </View>
        </Content >
      </Container >
    )
  }
}

const styles = {
  box: {
    marginHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: .5,
    borderBottomColor: "#9d9d9c",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
    fontFamily: "calibre"
  },
  name: {
    fontSize: 20,
    fontFamily: "calibre",
    marginVertical: 3
  },
  text: {
    fontSize: 16,
    fontFamily: "calibre",
    textAlign: "center"
  },
  inputStyles: {
    marginTop: 5,
    marginBottom: 20,
    borderWidth: .7,
    borderColor: "#9d9d9c",
    borderRadius: 5,
    height: 150,
    padding: 5,
    textAlignVertical: "top",
    fontFamily: "calibre"
  },
}