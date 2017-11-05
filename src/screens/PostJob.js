import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { Container, Content, View, Text, Right } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';
import Input from '../components/Input';
import Dropdown from '../components/Dropdown';

export default class PostJob extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <HeaderSmall
          headerText="Post a Job"
          leftText="CANCEL"
        />
        <Content style={{ backgroundColor: "#fff", marginTop: 10, paddingHorizontal: 15 }}>
          <Input Label="Job Title" required={true} />
          <Dropdown
            Label="Location"
            required={true}
            placeholder="Please select"
            item1="-Select-"
            item2="opt1"
            item2="opt2"
          />
          <Dropdown
            Label="Category"
            required={true}
            placeholder="Please select"
            item1="-Select-"
            item2="opt1"
            item2="opt2"
          />
          <Dropdown
            Label="Job type"
            required={true}
            placeholder="Please select"
            item1="-Select-"
            item2="opt1"
            item2="opt2"
          />
          <Dropdown
            Label="Qualification"
            required={true}
            placeholder="Please select"
            item1="-Select-"
            item2="opt1"
            item2="opt2"
          />
          <Input Label="No. of vacancies" required={true} />
          <Input Label="Ref number" required={true} />
          <Dropdown
            Label="Salary range"
            required={true}
            placeholder="Please select"
            item1="-Select-"
            item2="opt1"
            item2="opt2"
          />
        </Content >
        <View style={styles.fixBar}>
          <Text style={styles.barText}>Step 1/2</Text>
          <Right>
            <Text style={styles.barText}>Next</Text>
          </Right>
        </View>
      </Container >
    )
  }
}

const styles = {
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