import React, { Component } from 'react';
import { TouchableOpacity, Image, Modal, TouchableHighlight } from 'react-native'
import { Container, Content, View, Text, Right, Input } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';
import InputComp from '../components/Input';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';

export default class EditProfile extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <HeaderSmall
          headerText="Edit Profile"
          leftText="CANCEL"
          rightText="DONE"
        />
        <Content style={{ backgroundColor: "#fff", marginTop: 10, paddingHorizontal: 15 }}>
          <View style={styles.circle}>
            <Text style={styles.title}>Photo</Text>
            <Image resizeMode="contain" style={styles.editIcon} source={require('../resources/icons/editprofile.png')} />
          </View>
          <Text style={styles.text}>Tell everyone a little about your company</Text>

          <InputComp Label="Company Name" required={true} />
          <InputComp Label="Address" required={true} />
          <InputComp Label="Contact Number" required={true} />
          <InputComp Label="Email Address" />
          <InputComp Label="Website" />

          <Text style={{ marginLeft: 1, fontFamily: "calibre", marginTop: 5 }}>About</Text>
          <Input multiline={true} style={styles.inputStyles} maxLength={1000} />

        </Content >
      </Container >
    )
  }
}

const styles = {
  editIcon: {
    width: 30,
    height: 30,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  circle: {
    width: 100,
    height: 100,
    backgroundColor: "#ccc",
    borderRadius: 100,
    alignSelf: "center",
    marginVertical: 10
  },
  title: {
    fontSize: 14,
    fontFamily: "calibre",
    textAlign: "center",
    marginTop: 40
  },
  text: {
    fontSize: 15,
    fontFamily: "calibre",
    textAlign: "center",
    marginVertical: 10,
  },
  inputStyles: {
    marginTop: 5,
    marginBottom: 35,
    borderWidth: .7,
    borderColor: "#9d9d9c",
    borderRadius: 5,
    height: 150,
    padding: 5,
    textAlignVertical: "top",
    fontFamily: "calibre"
  },
}