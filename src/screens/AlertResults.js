import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { ListItem, Right, Container, Content, View, Text, Icon } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';

const ActiveJobsTab = () => {
  const styles = {
    rowStyles: {
      flexDirection: "row",
      alignItems: "center",
    },
    rightIcons: {
      marginTop: 10,
      width: 22,
      height: 22,
      marginHorizontal: 5
    },
    text1: {
      fontFamily: "calibre",
      fontSize: 18,
      color: "#00bbb1",
    },
    smallText: {
      fontSize: 12,
      fontFamily: "calibre",
    },
    smallImage: {
      width: 15,
      height: 15,
      marginRight: 5
    },
    row2Styles: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 1
    },
  }
  return (
    <Content>
      <ListItem>
        <View style={styles.rowStyles}>
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>General Technicial Level 2</Text>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_employer.png')} />
              <Text style={styles.smallText}>ABC Company Pvt Ltd</Text>
            </View>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_salary.png')} />
              <Text style={styles.smallText}>MVR 4000 - 5000</Text>
            </View>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_location.png')} />
              <Text style={styles.smallText}>Hulhumale</Text>
            </View>
            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_type.png')} />
              <Text style={styles.smallText}>Full Time</Text>
            </View>

          </View>
          <Right>
            <View style={styles.rowStyles}>
              <Image resizeMode="contain" style={styles.rightIcons} source={require('../resources/icons/saved_small.png')} />
            </View>
          </Right>

        </View>
      </ListItem>

      <ListItem>
        <View style={styles.rowStyles}>
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>General Technicial Level 2</Text>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_employer.png')} />
              <Text style={styles.smallText}>ABC Company Pvt Ltd</Text>
            </View>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_salary.png')} />
              <Text style={styles.smallText}>MVR 4000 - 5000</Text>
            </View>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_location.png')} />
              <Text style={styles.smallText}>Hulhumale</Text>
            </View>
            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/job_type.png')} />
              <Text style={styles.smallText}>Full Time</Text>
            </View>

          </View>
          <Right>
            <View style={styles.rowStyles}>
              <Image resizeMode="contain" style={styles.rightIcons} source={require('../resources/icons/notsaved_big.png')} />
            </View>
          </Right>

        </View>
      </ListItem>
    </Content >
  )
}


export default class AlertResults extends Component {
  render() {
    return (
      <Container>
        <HeaderSmall
          headerText="Alert Results"
          leftText="BACK"
        />
        <Content style={{ backgroundColor: "#fff" }}>
          <ActiveJobsTab />
        </Content >
      </Container >
    )
  }
}