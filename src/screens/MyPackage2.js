import React, { Component } from 'react';
import { View, Content, Text, Right } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';
import Button from '../components/Button';

export default class MyPackage2 extends Component {
  render() {
    return (
      <Content style={{ backgroundColor: "#fff" }}>
        <HeaderSmall headerText="My Package" leftText="BACK" />
        <Content>
          <View style={styles.row}>
            <View style={styles.box}>
              <Text uppercase={true} style={styles.boxTitle}>BASIC</Text>
              <Text style={styles.boxText}>1 year subscription</Text>
              <Text style={styles.boxText}>10 Jobs</Text>
              <Text style={styles.boxText}>3 featured Jobs</Text>
              <View style={styles.circle}>
                <Text uppercase={true} style={styles.circleText}>mvr 499 / year</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Right>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.boxText}>Status</Text>
                    <View style={styles.status} />
                  </View>
                </Right>
              </View>
            </View>
          </View>

          <View style={[styles.row, { flexDirection: "row" }]}>
            <View style={{ width: "50%" }}>
              <Button buttonText="Upgrade" width={130} color="#fff" bgColor="#243747" />
              <View style={{ marginTop: 10 }}>
                <Button buttonText="History" width={130} />
              </View>
            </View>

            <View style={{ width: "50%" }}>
              <View style={styles.box2}>
                <Text style={styles.blue}>Package Expires:</Text>
                <Text style={styles.white}>25-6-2017</Text>
                <Text style={styles.blue}>Jobs Posted:</Text>
                <Text style={styles.white}>6 out of 10</Text>
                <Text style={styles.blue}>Featured Jobs:</Text>
                <Text style={styles.white}>02 out of 03</Text>
              </View>
            </View>
          </View>

        </Content>
      </Content>
    )
  }
}

const styles = {
  blue: {
    backgroundColor: "#00bbb1",
    color: "#fff",
    fontFamily: "calibre",
    fontSize: 13,
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 2
  },
  white: {
    fontFamily: "calibre",
    fontSize: 13,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  box2: {
    borderWidth: 1,
    borderColor: "#00bbb1",
    marginHorizontal: 5,
    borderRadius: 5,
  },
  status: {
    width: 14,
    height: 14,
    borderRadius: 20,
    backgroundColor: "#36c100",
    marginHorizontal: 5
  },
  text: {
    fontFamily: "calibre",
    textAlign: "center",
    marginHorizontal: 15,
    fontSize: 17,
    marginVertical: 20
  },
  box: {
    alignSelf: "center",
    width: "100%",
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
    // marginTop: 3,
    textAlign: "center"
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
    // alignItems: "center",
    paddingVertical: 15,
    marginHorizontal: 15
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