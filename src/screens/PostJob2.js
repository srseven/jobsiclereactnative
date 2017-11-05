import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { Container, Content, View, Text, Right, Input, CheckBox, ListItem, Body } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';

export default class PostJob2 extends Component {
  state = {
    checked: false
  }

  onPress() {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <HeaderSmall
          headerText="Post a Job"
          leftText=""
        />
        <Content style={{ backgroundColor: "#fff", marginTop: 10, paddingHorizontal: 15 }}>

          <Text style={styles.title}>Job description *</Text>
          <Text style={styles.subtitle}>Describe briefly about the requirment, benefits, and other important information</Text>

          <View>
            <View style={{ flexDirection: "row", marginTop: 25 }}>
              <Right>
                <Text style={styles.blueText}>Add Sample Job Description Format</Text>
              </Right>
            </View>
            <Input multiline={true} style={styles.inputStyles} />
          </View>


          <View style={{ marginTop: 20 }}>
            <Text style={styles.subtitle}>You can attach a pdf job announcement document. This is optional</Text>
            <View style={styles.rowStyles}>
              <View style={styles.grayBox}>
                <Text style={styles.fileName}>Certificate01.pdf</Text>
                <Image resizeMode="contain" style={styles.smallIcon} source={require('../resources/icons/uploaded.png')} />
                <Image resizeMode="contain" style={styles.smallIcon} source={require('../resources/icons/reject_jobappliation.png')} />
              </View>
              <View style={{ width: "15%" }}>
                <Image resizeMode="contain" style={{ width: 33, height: 33, alignSelf: "center" }} source={require('../resources/icons/filegray.png')} />
              </View>
            </View>
          </View>

          <View style={styles.rowStyles}>
            <CheckBox color="#00bbb1" onPress={this.onPress.bind(this)} checked={this.state.checked} />
            <Text style={{ fontSize: 13, fontFamily: "calibre", width: "84%", marginLeft: 15 }}>Job seekers can find your job and apply online through the Jobsicle app or website</Text>
          </View>

        </Content >
        <View style={styles.fixBar}>
          <Text style={styles.barText}>Step 2/2</Text>
          <Right>
            <Text style={styles.barText}>Next</Text>
          </Right>
        </View>
      </Container >
    )
  }
}

const styles = {
  rowStyles: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
  },
  grayBox: {
    backgroundColor: "#efeff4",
    borderRadius: 4,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
    width: "85%"
  },
  fileName: {
    fontFamily: "calibre",
    fontSize: 13,
    marginHorizontal: 6
  },
  smallIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 6
  },
  inputStyles: {
    borderWidth: .7,
    borderColor: "#9d9d9c",
    borderRadius: 5,
    height: 150,
    marginTop: 5,
    padding: 5,
    textAlignVertical: "top",
    fontFamily: "calibre"
  },
  title: {
    fontSize: 22,
    fontFamily: "calibre"
  },
  subtitle: {
    fontSize: 15,
    fontFamily: "calibre",
    paddingRight: 15,
    marginTop: 5
  },
  blueText: {
    color: "#00bbb1",
    fontSize: 14,
    fontFamily: "calibre"
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