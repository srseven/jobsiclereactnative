import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { Container, Content, View, Text, Right } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';
import Input2 from '../components/Input2';
import Dropdown2 from '../components/Dropdown2';

export default class EditProfile3 extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <HeaderSmall
          headerText="Edit Profile"
          leftText="CANCEL"
        />
        <Content style={{ backgroundColor: "#fff", marginTop: 10 }}>
          <Text style={styles.heading}>A little bit more</Text>

          <View style={{ marginHorizontal: 25 }}>
            <Dropdown2
              Label="Nationality"
              placeholder="-select-"
              required={true}
              item1="-select-"
              item2="opt2"
              item3="opt3"
              color="#9d9d9c"
            />
            <Dropdown2
              Label="Qualification"
              placeholder="-select-"
              required={true}
              item1="-select-"
              item2="opt2"
              item3="opt3"
              color="#9d9d9c"
            />
            <Dropdown2
              Label="Experience"
              placeholder="-select-"
              required={true}
              item1="-select-"
              item2="opt2"
              item3="opt3"
              color="#9d9d9c"
            />
          </View>
        </Content >

        <View style={styles.fixBar}>
          <Text style={styles.barText}>Step 2/4</Text>
          <Right>
            <Text style={styles.barText}>Next</Text>
          </Right>
        </View>
      </Container >
    )
  }
}

const styles = {
  icons: {
    width: 20,
    height: 40,
    marginLeft: 10
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  heading: {
    fontFamily: "calibre",
    marginVertical: 10,
    fontSize: 22,
    color: "#00bbb1",
    textAlign: "center"
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