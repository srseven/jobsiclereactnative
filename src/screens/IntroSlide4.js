import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, View, Text, Content } from 'native-base';
import Button from '../components/Button';

export default class IntroSlide1 extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#f4f5f6" }}>
        <Content style={{ marginHorizontal: 15, paddingTop: 50 }}>
          <Text style={styles.title}>Easy Manage!</Text>
          <Image style={styles.img} resizeMode="contain" source={require('../resources/icons/easymanage.png')} />
          <Text style={styles.title}>Yo ho ho!</Text>
          <Text style={styles.subtitle}>"View job applications, manage & invite to interviews</Text>

          <View style={{ marginTop: 40 }}>
            <Button buttonText="Aye, Lets go" width={200} color="#fff" bgColor="#ff5a4f" />
          </View>

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