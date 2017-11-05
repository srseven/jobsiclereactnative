import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { Container, Content, View, Text, Right } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';
import Input from '../components/Input';
import Input2 from '../components/Input2';

export default class EditProfile2 extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <HeaderSmall
          headerText="Edit Profile"
          leftText="CANCEL"
        />
        <Content style={{ backgroundColor: "#fff", marginTop: 10 }}>
          <Text style={styles.heading}>Something about you</Text>

          <View style={{ marginHorizontal: 25 }}>
            <Input2 placeholder="Full Name*" placeholderTextColor="black" />
            <View style={styles.row}>
              <Text style={{ fontFamily: "calibre" }}>Gender*</Text>
              <Image style={styles.icons} resizeMode="contain" source={require('../resources/icons/male_gray.png')} />
              <Image style={styles.icons} resizeMode="contain" source={require('../resources/icons/female_gray.png')} />
            </View>
            <Input2 placeholder="Contact Number*" placeholderTextColor="black" />
          </View>
        </Content >

        <View style={styles.fixBar}>
          <Text style={styles.barText}>Step 1/4</Text>
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