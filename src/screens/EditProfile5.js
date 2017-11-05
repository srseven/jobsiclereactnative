import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { Container, Content, View, Text, Right } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';
import Input from '../components/Input';
import Input2 from '../components/Input2';

export default class EditProfile5 extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <HeaderSmall
          headerText="Edit Profile"
          leftText="CANCEL"
        />
        <Content style={{ backgroundColor: "#fff", marginTop: 10 }}>
          <Text style={styles.heading}>Set your profile pic.</Text>
          <Text style={styles.subtitle}>emplyers will see this picture</Text>
          <View style={{ marginHorizontal: 25 }}>
            <View style={styles.circle} />
            <View style={styles.row}>
              <Image style={styles.icons} resizeMode="contain" source={require('../resources/icons/photogreen.png')} />
              <Image style={styles.icons} resizeMode="contain" source={require('../resources/icons/screenshotsave.png')} />
            </View>
          </View>
        </Content >

        <View style={styles.fixBar}>
          <Text style={styles.barText}>Step 4/4</Text>
          <Right>
            <Text style={styles.barText}>Save</Text>
          </Right>
        </View>
      </Container >
    )
  }
}

const styles = {
  circle: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginVertical: 20,
    borderWidth: .6,
    borderColor: "#243747",
    borderRadius: 100,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 13,
    fontFamily: "calibre",
    paddingRight: 15,
    marginTop: 5,
    marginBottom: 15,
  },
  icons: {
    width: 60,
    height: 60,
    marginHorizontal: 15
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center"
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