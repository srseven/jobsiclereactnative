import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { Container, Content, View, Text, Input, Item, Icon, Picker } from 'native-base';
import Button from '../components/Button';
import Header from '../components/Header';
import FooterNav2 from '../components/FooterNav2';
import Sidebar from '../components/Sidebar';
import Dropdown3 from '../components/Dropdown3'

export default class Jobs extends Component {
  render() {
    return (
      <Sidebar Title="Jobseeker" >
        <Container>
          <Header headerText="Blimey!" headerText2="76 Jobs Available" />
          <Content style={{ backgroundColor: "#fff" }}>
            <View style={{ marginHorizontal: 15, marginTop: 20 }}>

              <View style={styles.rowStyles}>
                <View style={{ width: "80%" }}>
                  <Dropdown3 placeholder="Jobs by category" color="#9d9d9c" item1="Jobs by category" item2="opt 2" />
                </View>
                <Text style={styles.inputText}>All</Text>
              </View>

              <View style={styles.rowStyles}>
                <View style={{ width: "80%" }}>
                  <Dropdown3 placeholder="Jobs by location" color="#9d9d9c" item1="Jobs by location" item2="opt 2" />
                </View>
                <Text style={styles.inputText}>All</Text>
              </View>

              <View style={styles.rowStyles}>
                <Input style={styles.input} placeholder="Keyword" placeholderTextColor="#9d9d9c" />
              </View>

              <View style={{ marginTop: 10 }}>
                <Button buttonText="Search" width="100%" />
              </View>
            </View>


          </Content >
          <View style={styles.stickyBanner}>
            <Text style={styles.stickyBannerText}>BANNER AREA</Text>
            <Text style={[styles.stickyBannerText, { fontSize: 16 }]}>SPONSORS BANNER</Text>
            <Text style={[styles.stickyBannerText, { fontSize: 14 }]}>image slider</Text>
          </View>
          <FooterNav2 />
        </Container >
      </Sidebar>
    )
  }
}

const styles = {
  inputText: {
    width: "20%",
    textAlign: "center",
    fontFamily: "calibre"
  },
  input: {
    paddingLeft: 20,
    fontFamily: "calibre",
    color: "#9d9d9c"
  },
  rowStyles: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    borderWidth: 1,
    height: 45,
    borderRadius: 10,
    borderColor: "#9d9d9c"
  },
  stickyBanner: {
    backgroundColor: "#bdbfc1",
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  stickyBannerText: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "calibre"
  },
  itemStyles: {
    marginVertical: 10,
    width: "70%",
    alignSelf: "center"
  },
}