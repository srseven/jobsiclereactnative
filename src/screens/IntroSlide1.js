import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, View, Text, Content } from 'native-base';

export default class IntroSlide1 extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#f4f5f6", alignItems: "center", alignContent: "center" }}>
        <Content style={{ marginHorizontal: 15, paddingTop: 50 }}>
          <Text style={styles.title}> Say Jobseekers!</Text>
          <Image style={styles.img} resizeMode="contain" source={require('../resources/icons/intro_jobseeker.png')} />
          <Text style={styles.title}> Shiver me timbers!</Text>
          <Text style={styles.subtitle}> Do you believe in getting a job with your fingers ?</Text>
          <Text style={styles.subtitle}> Just swipe, tap, tap!</Text>
          <Text style={styles.subtitle}> Apply for jobs on the go.!</Text>
          <Text style={styles.subtitle}> Anywhere, anytime</Text>
        </Content>
      </Container>
    )
  }
}

const styles = {
  img: {
    width: "100%",
    height: 130
  },
  title: {
    color: "#243747",
    textAlign: "center",
    fontFamily: "calibre",
    fontSize: 24,
    marginVertical: 20
  },
  subtitle: {
    color: "#243747",
    textAlign: "center",
    fontFamily: "calibre",
    fontSize: 18,
    marginVertical: 10
  },
}