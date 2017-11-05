import React, { Component } from 'react';
import { View, Content, Container, Text } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';
import Input from '../components/Input';
import Button from '../components/Button';

export default class OrderStep extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <HeaderSmall headerText="Order Step 1" leftText="BACK" />
        <Content>
          <Text style={styles.title}>Billing Details</Text>

          <View style={{ marginHorizontal: 15, paddingVertical: 10 }}>
            <Input Label="First Name" required={true} />
            <Input Label="Last Name" required={true} />
            <Input Label="Company / TIN Number" />
            <Input Label="Street Address" required={true} />
            <Input Label="City" required={true} />
            <Input Label="Atoll" required={true} />
            <Input Label="Postcode" required={true} />
            <Input Label="Phone" required={true} />
            <Input Label="Email" required={true} />
          </View>
          <View style={{ marginVertical: 10 }}>
            <Button buttonText="Continue" width={200} />
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = {
  title: {
    fontSize: 30,
    fontFamily: "calibre",
    textAlign: "center",
    marginHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: .5,
    borderBottomColor: "#ccc"
  }
}