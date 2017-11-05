import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { Container, Content, View, Text, Right } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';
import Input from '../components/Input';
import Input2 from '../components/Input2';
import Dropdown2 from '../components/Dropdown2';

export default class Apply extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <HeaderSmall
          headerText="Apply Now"
          leftText="CANCEL"
        />
        <Content style={{ backgroundColor: "#fff", marginTop: 10, paddingHorizontal: 15 }}>
          <Text style={styles.heading}>Get started by entering youir email</Text>
          <Input Label="Email" placeholder="test@jobsilce.mv" placeholderTextColor="#000" bgColor="#e5e5ea" />
          <Text style={styles.heading}>Kick off your application with a fewer details.</Text>
          <Input2 Label="Full Nane" required={true} />
          <Dropdown2
            Label="Gender"
            required={true}
            placeholder="Please select"
            item1="-Select-"
            item2="Male"
            item2="Female"
          />
          <Input2 Label="Contact Number" required={true} />
          <Dropdown2
            Label="Nationality"
            required={true}
            placeholder="Please select"
            item1="-Select-"
            item2="opt1"
            item2="opt2"
          />
          <Dropdown2
            Label="Qualification"
            required={true}
            placeholder="Please select"
            item1="-Select-"
            item2="opt1"
            item2="opt2"
          />
          <Dropdown2
            Label="Experience"
            required={true}
            placeholder="Please select"
            item1="-Select-"
            item2="opt1"
            item2="opt2"
          />
        </Content >
        <View style={styles.fixBar}>
          <Text style={styles.barText}>Step 1/3</Text>
          <Right>
            <Text style={styles.barText}>Next</Text>
          </Right>
        </View>
      </Container >
    )
  }
}

const styles = {
  heading: {
    fontFamily: "calibre",
    marginVertical: 10
  },
  fixBar: {
    backgroundColor: "#243747",
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row"
  },
  barText: {
    fontSize: 20,
    width: "50%",
    color: "#fff",
    textAlign: "center",
    fontFamily: "calibre"
  }
}