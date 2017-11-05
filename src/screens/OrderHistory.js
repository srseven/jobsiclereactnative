import React, { Component } from 'react';
import { Image } from 'react-native';
import { View, Content, Container, Text, Right } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';
import Button from '../components/Button';

export default class OrderHistory extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <HeaderSmall headerText="Order History" leftText="BACK" />
        <Content>
          <View style={styles.box}>
            <View style={styles.row}>
              <Text style={styles.smallText}>Order Ref:</Text>
              <Right>
                <Text style={styles.smallText}>201156</Text>
              </Right>
            </View>

            <View style={styles.row}>
              <Text style={styles.smallText}>Date:</Text>
              <Right>
                <Text style={styles.smallText}>15-1-2017</Text>
              </Right>
            </View>

            <View style={styles.row}>
              <Text style={styles.smallText}>Status:</Text>
              <Right>
                <Text style={styles.smallText}>On hold</Text>
              </Right>
            </View>

            <View style={styles.row}>
              <Text style={styles.smallText}>Total</Text>
              <Right>
                <Text style={styles.smallText}>MVE 499</Text>
              </Right>
            </View>

            <View style={styles.buttonWrap}>
              <Button buttonText="View" color="#fff" bgColor="#243747" width={125} />
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = {
  buttonWrap: {
    marginVertical: 10,
    // borderTopWidth: .5,
    // borderTopColor: "#9d9d9c"
  },
  box: {
    marginVertical: 20,
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 40,
    borderRadius: 15,
    paddingVertical: 10
  },
  smallText: {
    fontFamily: "calibre",
    fontSize: 15,
  },

  row: {
    flexDirection: "row",
    paddingVertical: 3.5,
    alignSelf: "center"
  },
}