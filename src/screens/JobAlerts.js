import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, View, Content, Text } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';
import FooterNav2 from '../components/FooterNav2';

export default class JobAlerts extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <HeaderSmall headerText="Job Alerts" />
        <Content>
          <Text style={styles.title}>No Job Alerts</Text>
          <Image resizeMode="contain" style={styles.img} source={require('../resources/icons/jobalerts.png')} />
          <Text style={styles.subtitle}>
            Here's a handy way to be notified about jobs ahead of game!
          </Text>

          <Text style={[styles.subtitle, { marginTop: 20 }]}>Simply Tab the + button below</Text>
        </Content>
        <Image style={styles.imgAdd} resizeMode="contain" source={require('../resources/icons/add_alert.png')} />
        <FooterNav2 />
      </Container>
    )
  }
}

const styles = {
  imgAdd: {
    width: 50,
    height: 50,
    position: "absolute",
    right: 20,
    bottom: 110
  },
  subtitle: {
    textAlign: "center",
    fontFamily: "calibre",
    paddingHorizontal: 15,
  },
  img: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 10
  },
  title: {
    fontSize: 22,
    fontFamily: "calibre",
    textAlign: "center",
    marginTop: 20,
  },
}
