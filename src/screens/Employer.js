import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native'
import { ListItem, Right, Container, Content, View, Text } from 'native-base';
import HeaderSmall from '../components/HeaderSmall';

const ActiveJobsTab = () => {
  return (
    <Content>
      <ListItem>
        <View style={styles.rowStyles}>
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.text1}>Admin Officer & Clerical Assist</Text>

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
        </View>
      </ListItem>
    </Content >
  )
}


export default class Employer extends Component {
  render() {
    return (
      <Container>
        <HeaderSmall
          headerText="Employer"
          leftText="BACK"
        />
        <Content style={{ backgroundColor: "#fff" }}>
          <View style={styles.circle} />
          <Text style={styles.text1}>ABC Company Pvt Ltd</Text>
          <View style={styles.box}>
            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/empview_phone.png')} />
              <Text style={styles.smallText}>4324324</Text>
            </View>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/empview_address.png')} />
              <Text style={styles.smallText}>Hulmulale, Green Road </Text>
            </View>

            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/empview_mail.png')} />
              <Text style={styles.smallText}>test@comapny.com</Text>
            </View>
            <View style={styles.row2Styles}>
              <Image resizeMode="contain" style={styles.smallImage} source={require('../resources/icons/empview_web.png')} />
              <Text style={styles.smallText}> www.company.com</Text>
            </View>

          </View>

          <Text style={styles.bottomText}>Lorem ipsum dolar sit Lorem ipsum dolar sit amatas dsasd daeds para graph is wor seew Lorem ipsum dolar sit amatas dsasd daeds para graph is wor seew  dsasd daeds para graph is wor seew </Text>
        </Content >
      </Container >
    )
  }
}

const styles = {
  rowStyles: {
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#e5e5ea",
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 5
  },
  circle: {
    height: 70,
    width: 70,
    borderRadius: 100,
    backgroundColor: "#e5e5ea",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 5
  },
  text1: {
    fontFamily: "calibre",
    fontSize: 18,
    textAlign: "center",
    marginVertical: 5
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
  bottomText: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "calibre",
    paddingHorizontal: 20,
    marginTop: 20,
  },
}