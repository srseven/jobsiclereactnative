import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Content, View, Text, Icon, Right, ListItem } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';
import FooterNav2 from '../components/FooterNav2';


const Items = () => {
  const styles = {
    rowStyles: {
      flexDirection: "row",
    },
    icons: {
      width: 25,
      height: 25,
      marginHorizontal: 5
    },
    text1: {
      fontFamily: "calibre",
    },
    text2: {
      fontFamily: "calibre",
      fontSize: 13,
    },
    greenDot: {
      width: 12,
      height: 12,
      borderRadius: 100,
      backgroundColor: "green",
      marginRight: 7,
      marginTop: 4
    },
  }
  return (
    <Content>
      <ListItem>
        <View style={styles.rowStyles}>
          <View style={styles.greenDot} />
          <View>
            <Text style={styles.text1}>Active</Text>
            <Text style={styles.text2}>All locations</Text>
            <Text style={styles.text2}>Resort and hospitality</Text>
            <Text style={[styles.text2, { color: "#ff5a5f" }]}>4 new jobs</Text>
          </View>

          <Right>
            <TouchableOpacity>
              <Icon name="md-more" />
            </TouchableOpacity>
          </Right>

        </View>
      </ListItem>

      <ListItem>
        <View style={styles.rowStyles}>
          <View style={styles.greenDot} />
          <View>
            <Text style={styles.text1}>Active</Text>
            <Text style={styles.text2}>All locations</Text>
            <Text style={styles.text2}>Resort and hospitality</Text>
            <Text style={[styles.text2, { color: "#ff5a5f" }]}>4 new jobs</Text>
          </View>

          <Right>
            <TouchableOpacity>
              <Icon name="md-more" />
            </TouchableOpacity>
          </Right>

        </View>
      </ListItem>
    </Content >
  )
}

export default class JobAlerts2 extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <HeaderSmall headerText="Job Alerts" />
        <Content>
          <Items />
        </Content>
        <Image resizeMode="contain" style={styles.addImg} source={require('../resources/icons/add_alert.png')} />
        <FooterNav2 />
      </Container>
    )
  }
}

const styles = {
  addImg: {
    position: "absolute",
    width: 50,
    height: 50,
    right: 25,
    bottom: 110
  },
}