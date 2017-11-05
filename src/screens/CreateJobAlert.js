import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { Container, Content, View, Text, Input } from 'native-base';
import Button from '../components/Button';
import HeaderSmall from '../components/HeaderSmall';
import Dropdown3 from '../components/Dropdown3';

export default class CreateJobAlerts extends Component {
  render() {
    return (
      <Container>
        <HeaderSmall headerText="Create Job Alert" />
        <Content style={{ backgroundColor: "#fff" }}>
          <View style={{ marginHorizontal: 20, marginTop: 35 }}>

            <View style={styles.rowStyles}>
              <View style={{ width: "85%" }}>
                <Dropdown3 placeholder="Jobs by category" color="#9d9d9c" item1="Jobs by category" item2="opt 2" />
              </View>
              <View style={{ width: "15%" }}>
                <Text style={styles.inputText}>All</Text>
              </View>
            </View>

            <View style={styles.rowStyles}>
              <View style={{ width: "85%" }}>
                <Dropdown3 placeholder="Jobs by location" color="#9d9d9c" item1="Jobs by location" item2="opt 2" />
              </View>
              <View style={{ width: "15%" }}>
                <Text style={styles.inputText}>All</Text>
              </View>
            </View>

            <Text style={styles.text}>
              Push Notification allows an app to notify you of a new messages or events without the need top open the application, similar to how a test message will make a sound and popup on your screen
            </Text>

            <Text style={styles.text}>
              Adding a custom alert will override the default alert on all jobs and you will only be alerted based on this new rule
            </Text>

            <View style={{ marginTop: 10 }}>
              <Button bgColor="#243747" color="#fff" buttonText="Done" width="100%" />
            </View>
          </View>


        </Content >
      </Container >
    )
  }
}

const styles = {
  inputText: {
    // width: "20%",
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "calibre"
  },
  input: {
    paddingLeft: 30,
    fontFamily: "calibre",
    color: "#9d9d9c"
  },
  rowStyles: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    borderWidth: 1,
    height: 45,
    borderRadius: 10,
    borderColor: "#9d9d9c"
  },
  text: {
    fontSize: 14,
    fontFamily: "calibre",
    textAlign: "center",
    marginVertical: 10,
  },
}