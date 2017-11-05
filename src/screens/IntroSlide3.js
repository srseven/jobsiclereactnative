import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, View, Text, Content } from 'native-base';

export default class IntroSlide1 extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#f4f5f6" }}>
        <Content style={{ marginHorizontal: 15, paddingTop: 50 }}>
          <Text style={styles.title}> Go Paperless!</Text>
          <Image style={styles.img} resizeMode="contain" source={require('../resources/icons/cam_pdf.png')} />
          <Text style={styles.title}>Blimey</Text>
          <Text style={styles.subtitle}>Stop running around your printing copies of your CV or docs</Text>
          <Text style={styles.subtitle}> Snap it, attach & apply, No more PAPERS!</Text>
          <Text style={styles.subtitle}>"Save a tree. Be a hero"</Text>
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