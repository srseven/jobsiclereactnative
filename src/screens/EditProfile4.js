import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { Container, Content, View, Text, Right, ListItem, Body } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';

export default class EditProfile4 extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <HeaderSmall
          headerText="Edit Profile"
          leftText="BACK"
        />
        <Content style={{ backgroundColor: "#fff", marginTop: 10, paddingHorizontal: 15 }}>

          <Text style={styles.title}>Attach CV & Documents.</Text>
          <Text style={styles.subtitle}>Image / PDF</Text>


          <View>

            <View style={styles.rowStyles}>
              <View style={styles.redBox}>
                <Text style={styles.fileName}>No CV attached</Text>
                <Right>
                  <Image resizeMode="contain" style={styles.smallIcon} source={require('../resources/icons/not_attached.png')} />
                </Right>
              </View>
            </View>

            <View style={styles.rowStyles}>
              <View>
                <Text style={styles.fileName2}>Upload a CV</Text>
                <Text style={styles.fileName2}>Max 5 images / 1 PDF</Text>
              </View>
              <Right>
                <View style={styles.rowStyles}>
                  <Image resizeMode="contain" style={styles.smallIcon} source={require('../resources/icons/photogray.png')} />
                  <Image resizeMode="contain" style={styles.smallIcon} source={require('../resources/icons/filegray.png')} />
                </View>
              </Right>
            </View>

            <View style={styles.rowStyles}>
              <View style={styles.redBox}>
                <Text style={styles.fileName}>No ID attached</Text>
                <Right>
                  <Image resizeMode="contain" style={styles.smallIcon} source={require('../resources/icons/not_attached.png')} />
                </Right>
              </View>
            </View>

            <View style={styles.rowStyles}>
              <View>
                <Text style={styles.fileName2}>Upload ID card</Text>
                <Text style={styles.fileName2}>Max 5 images / 1 PDF</Text>
              </View>
              <Right>
                <View style={styles.rowStyles}>
                  <Image resizeMode="contain" style={styles.smallIcon} source={require('../resources/icons/photogreen.png')} />
                  <Image resizeMode="contain" style={styles.smallIcon} source={require('../resources/icons/filegreen.png')} />
                </View>
              </Right>
            </View>

            <View style={styles.rowStyles}>
              <View style={styles.redBox}>
                <Text style={styles.fileName}>No extras attached</Text>
                <Right>
                  <Image resizeMode="contain" style={styles.smallIcon} source={require('../resources/icons/not_attached.png')} />
                </Right>
              </View>
            </View>

            <View style={styles.rowStyles}>
              <View>
                <Text style={styles.fileName2}>Upload extra documents</Text>
                <Text style={styles.fileName2}>Max 10 images / 1 PDF</Text>
              </View>
              <Right>
                <View style={styles.rowStyles}>
                  <Image resizeMode="contain" style={styles.smallIcon} source={require('../resources/icons/photogray.png')} />
                  <Image resizeMode="contain" style={styles.smallIcon} source={require('../resources/icons/filegray.png')} />
                </View>
              </Right>
            </View>

          </View>
        </Content >

        <View style={styles.fixBar}>
          <Text style={styles.barText}>Step 3/4</Text>
          <Text style={styles.barText}>Skip</Text>
          <Text style={styles.barText}>Next</Text>
        </View>
      </Container >
    )
  }
}

const styles = {
  smallIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 6
  },
  rowStyles: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8
  },
  redBox: {
    backgroundColor: "#ffbaba",
    borderRadius: 4,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  fileName: {
    fontFamily: "calibre",
    fontSize: 16,
    marginHorizontal: 6,
    color: "#e20000",
    alignSelf: "center"
  },
  fileName2: {
    fontFamily: "calibre",
    fontSize: 13,
    marginHorizontal: 6,
  },
  title: {
    marginTop: 18,
    fontSize: 20,
    fontFamily: "calibre",
    textAlign: "center",
    color: "#00bbb1"
  },
  subtitle: {
    textAlign: "center",
    fontSize: 13,
    fontFamily: "calibre",
    paddingRight: 15,
    marginTop: 5,
    marginBottom: 15,
  },
  fixBar: {
    backgroundColor: "#243747",
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row"
  },
  barText: {
    fontSize: 20,
    width: "33.3333%",
    alignSelf: "center",
    color: "#fff",
    textAlign: "center",
    fontFamily: "calibre"
  }
}