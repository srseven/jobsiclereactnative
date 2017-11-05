import React, { Component } from 'react';
import { Image } from 'react-native';
import { View, Content, Container, Text, Right } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';
import Button from '../components/Button';

export default class Order extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <HeaderSmall headerText="Order" leftText="BACK" />
        <Content>
          <Text style={styles.title}>Order Submitted</Text>
          <Text style={styles.textBlue}>Ref: 12100</Text>
          <Text style={[styles.title, { fontSize: 16 }]}>Package name x 1</Text>

          <Text style={[styles.title, { borderBottomColor: "#fff" }]}>Payment Instructions</Text>
          <View style={{ marginHorizontal: 25, borderBottomWidth: .5, borderBottomColor: "#ccc", paddingBottom: 10 }}>
            <Text style={styles.smallText}>Method:</Text>
            <Text style={styles.smallText}>Account Name:</Text>
            <Text style={styles.smallText}>Account Number:</Text>
            <Text style={styles.smallText}>Bank:</Text>
            <Text style={styles.smallText}>Swift:</Text>
          </View>
          <Text style={styles.bottomText}>Problem? Call +233 3424 21343 for help</Text>
          <View style={{ marginVertical: 20, marginHorizontal: 20, flexDirection: "row" }}>

            <Button buttonText="OK" width={150} />

            <Right>
              <Image resizeMode="contain" style={styles.iconStyles} source={require('../resources/icons/screenshotsave.png')} />
            </Right>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = {
  iconStyles: {
    width: 30,
    height: 30
  },
  bottomText: {
    fontFamily: "calibre",
    color: "#00bbb1",
    marginHorizontal: 25,
    marginVertical: 10,
  },
  smallText: {
    fontFamily: "calibre",
    marginTop: 1,
    fontSize: 15,
  },
  textBlue: {
    fontSize: 70,
    paddingVertical: 10,
    borderBottomWidth: .5,
    borderBottomColor: "#ccc",
    fontFamily: "calibre",
    textAlign: "center",
    color: "#00bbb1",
    marginHorizontal: 15,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: .5,
    paddingVertical: 5,
    borderBottomColor: "#9d9d9c"
  },
  title: {
    fontFamily: "calibre",
    textAlign: "center",
    fontSize: 25,
    textAlign: "center",
    marginHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: .5,
    borderBottomColor: "#ccc"
  }
}