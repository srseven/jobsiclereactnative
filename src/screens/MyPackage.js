import React, { Component } from 'react';
import { View, Content, Text } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';

export default class MyPackage extends Component {
  render() {
    return (
      <Content style={{ backgroundColor: "#fff" }}>
        <HeaderSmall headerText="My Package" leftText="BACK" />
        <Content>
          <Text style={styles.title}>Subscribe to a Package</Text>
          <View style={styles.row}>

            <View style={styles.box}>
              <Text uppercase={true} style={styles.boxTitle}>BASIC</Text>
              <Text style={styles.boxText}>1 year subscription</Text>
              <Text style={styles.boxText}>10 Jobs</Text>
              <Text style={styles.boxText}>3 featured Jobs</Text>
              <View style={styles.circle}>
                <Text uppercase={true} style={styles.circleText}>mvr 499 / year</Text>
              </View>
            </View>

            <View style={[styles.box, { backgroundColor: "#00bbb1" }]}>
              <Text uppercase={true} style={styles.boxTitle}>PRO</Text>
              <Text style={styles.boxText}>1 year subscription</Text>
              <Text style={styles.boxText}>Unlimited Jobs</Text>
              <Text style={styles.boxText}>12 featured Jobs</Text>
              <View style={styles.circle}>
                <Text uppercase={true} style={styles.circleText}>mvr 999 / year</Text>
              </View>
            </View>
          </View>
          <Text style={styles.text}>
            Choose te most appropriate hiring package for you. This is a onetime annual fee. Your Subscription will be renewed after 1 year
          </Text>
        </Content>
      </Content>
    )
  }
}

const styles = {
  text: {
    fontFamily: "calibre",
    textAlign: "center",
    marginHorizontal: 15,
    fontSize: 17,
    marginVertical: 20
  },
  box: {
    alignSelf: "center",
    marginHorizontal: "2.5%",
    width: "45%",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#ff5a5f"
  },
  boxTitle: {
    color: "#fff",
    fontSize: 30,
    paddingVertical: 5,
    borderBottomWidth: .5,
    borderBottomColor: "#ccc",
    textAlign: "center",
    marginBottom: 5
  },
  boxText: {
    color: "#fff",
    fontFamily: "calibre",
    marginTop: 3,
  },
  circle: {
    width: 100,
    height: 100,
    alignSelf: "center",
    borderRadius: 100,
    backgroundColor: "#fff",
    marginVertical: 10,
  },
  circleText: {
    fontFamily: "calibre",
    fontSize: 15,
    textAlign: "center",
    width: "75%",
    alignSelf: "center",
    marginTop: 25
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: .5,
    borderBottomColor: "#ccc"
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