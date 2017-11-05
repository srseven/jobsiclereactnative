import React, { Component } from 'react';
import { View, Content, Container, Text, Right } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';
import Input from '../components/Input';
import Button from '../components/Button';
import RadioButton from 'radio-button-react-native';

export default class OrderStep2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null
    }

  }

  handleOnPress(value) {
    this.setState({ value: value })
  }

  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <HeaderSmall headerText="Order Step 2" leftText="BACK" />
        <Content>
          <Text style={styles.title}>Your Order</Text>

          <View style={{ marginHorizontal: 25, paddingVertical: 10 }}>
            <View style={styles.row}>
              <Text>Package name x 1</Text>
              <Right>
                <Text>MVR 499</Text>
              </Right>
            </View>

            <View style={styles.row}>
              <Text>Subtotal</Text>
              <Right>
                <Text>MVR 499</Text>
              </Right>
            </View>

            <View style={[styles.row, { borderBottomColor: "#fff" }]}>
              <Text>TOTAL</Text>
              <Right>
                <Text>MVR 499</Text>
              </Right>
            </View>
          </View>

          <Text style={styles.title}>Payment Method</Text>
          <View style={{ marginHorizontal: 25 }}>
            <View style={styles.row2}>
              <RadioButton
                currentValue={this.state.value}
                value={0}
                onPress={this.handleOnPress.bind(this)}
                outerCircleColor='#9d9d9c'
                outerCircleSize={18}
                outerCircleWidth={1}
                innerCircleColor='#00bbb1'
                innerCircleSize={13}
              />
              <View>
                <Text style={styles.radioText}>Bank Transfer</Text>
                <Text style={styles.radioText2}>please use order ref ID as payment reference</Text>
              </View>
            </View>

            <View style={styles.row2}>
              <RadioButton
                currentValue={this.state.value}
                value={1}
                onPress={this.handleOnPress.bind(this)}
                outerCircleColor='#9d9d9c'
                outerCircleSize={18}
                outerCircleWidth={1}
                innerCircleColor='#00bbb1'
                innerCircleSize={13}
              />
              <View>
                <Text style={styles.radioText}>Cheque payment</Text>
              </View>
            </View>

          </View>
          <View style={{ marginVertical: 20 }}>
            <Button buttonText="Submit" width={200} />
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = {
  radioText: {
    fontFamily: "calibre",
    marginLeft: 10,
  },
  radioText2: {
    fontFamily: "calibre",
    marginLeft: 10,
    fontSize: 14,
    marginTop: -1
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: .5,
    paddingVertical: 5,
    borderBottomColor: "#9d9d9c"
  },
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