import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import Carousel from '../components/Carousel';
import IntroSlide1 from '../screens/IntroSlide1';
import IntroSlide2 from '../screens/IntroSlide2';
import IntroSlide3 from '../screens/IntroSlide3';
import IntroSlide4 from '../screens/IntroSlide4';

const { width, height } = Dimensions.get('window');

export default class Intro extends Component {
  render() {
    return (
      <Carousel height={height} paginationHeight={55} >
        <IntroSlide1 />
        <IntroSlide2 />
        <IntroSlide3 />
        <IntroSlide4 />
      </Carousel>
    )
  }
}