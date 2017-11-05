import React from 'react';
import { Content, Text, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default Screens = () => {
  return (
    <Content>

      {/*-------Intro-------- */}
      <ListItem onPress={() => Actions.intro()}>
        <Text>Intro</Text>
      </ListItem>


      {/*-------Job Seeker Screens-------- */}
      <ListItem>
        <Text style={styles.text}>Jobseeker Screens</Text>
      </ListItem>

      <ListItem onPress={() => Actions.login()}>
        <Text>Login</Text>
      </ListItem>

      <ListItem onPress={() => Actions.signup()}>
        <Text>Signup</Text>
      </ListItem>

      <ListItem onPress={() => Actions.getStarted()}>
        <Text>Get Started</Text>
      </ListItem>

      <ListItem onPress={() => Actions.jobs()}>
        <Text>Jobs Available</Text>
      </ListItem>

      <ListItem onPress={() => Actions.allJobs()}>
        <Text>All Jobs</Text>
      </ListItem>

      <ListItem onPress={() => Actions.searchResult()}>
        <Text>Search Result</Text>
      </ListItem>

      <ListItem onPress={() => Actions.jobDetails2()}>
        <Text>Job Details</Text>
      </ListItem>

      <ListItem onPress={() => Actions.employer()}>
        <Text>Employer</Text>
      </ListItem>

      <ListItem onPress={() => Actions.applyNow()}>
        <Text>Apply now</Text>
      </ListItem>

      <ListItem onPress={() => Actions.applyNow2()}>
        <Text>Apply now 2</Text>
      </ListItem>

      <ListItem onPress={() => Actions.applyNow3()}>
        <Text>Apply now 3</Text>
      </ListItem>

      <ListItem onPress={() => Actions.activities()}>
        <Text>My Activities</Text>
      </ListItem>

      <ListItem onPress={() => Actions.myInterviews()}>
        <Text>My Interviews</Text>
      </ListItem>

      <ListItem onPress={() => Actions.interviewDetails()}>
        <Text>Interview Details</Text>
      </ListItem>

      <ListItem onPress={() => Actions.jobAlerts()}>
        <Text>Job Alerts</Text>
      </ListItem>

      <ListItem onPress={() => Actions.jobAlerts2()}>
        <Text>Job Alerts 2</Text>
      </ListItem>

      <ListItem onPress={() => Actions.createJobAlert()}>
        <Text>Create Job Alert</Text>
      </ListItem>

      <ListItem onPress={() => Actions.alertResults()}>
        <Text>Alert Results</Text>
      </ListItem>

      <ListItem onPress={() => Actions.editProfile2()}>
        <Text>Edit Profile 2</Text>
      </ListItem>

      <ListItem onPress={() => Actions.editProfile3()}>
        <Text>Edit Profile 3</Text>
      </ListItem>

      <ListItem onPress={() => Actions.editProfile4()}>
        <Text>Edit Profile 4</Text>
      </ListItem>

      <ListItem onPress={() => Actions.editProfile5()}>
        <Text>Edit Profile 5</Text>
      </ListItem>

      {/* -------------------Employee Screens--------------------- */}

      <ListItem>
        <Text style={styles.text}>Employee Screens</Text>
      </ListItem>

      <ListItem onPress={() => Actions.employee()}>
        <Text>Employee- screen 1</Text>
      </ListItem>

      <ListItem onPress={() => Actions.myJobs()}>
        <Text>Employee- My jobs</Text>
      </ListItem>

      <ListItem onPress={() => Actions.jobDetails()}>
        <Text>Employee- Job Details</Text>
      </ListItem>

      <ListItem onPress={() => Actions.postJob()}>
        <Text>Employee - Post/Edit Job</Text>
      </ListItem>

      <ListItem onPress={() => Actions.postJob2()}>
        <Text>Employee - Post/Edit Job 2</Text>
      </ListItem>

      <ListItem onPress={() => Actions.jobApps()}>
        <Text>Employee - Job Applications</Text>
      </ListItem>

      <ListItem onPress={() => Actions.jobApp()}>
        <Text>Employee - Job Application</Text>
      </ListItem>

      <ListItem onPress={() => Actions.interviewInvitation()}>
        <Text>Employee - Interview / Edit Interview Invitation</Text>
      </ListItem>

      <ListItem onPress={() => Actions.jobInterviews()}>
        <Text>Employee - Job Interviews</Text>
      </ListItem>

      <ListItem onPress={() => Actions.editProfile()}>
        <Text>Employee - Edit Profile</Text>
      </ListItem>

      <ListItem onPress={() => Actions.myPackage()}>
        <Text>Employee - My Package</Text>
      </ListItem>

      <ListItem onPress={() => Actions.myPackage2()}>
        <Text>Employee - My Package 2</Text>
      </ListItem>

      <ListItem onPress={() => Actions.orderStep()}>
        <Text>Employee - Order Step 1</Text>
      </ListItem>

      <ListItem onPress={() => Actions.orderStep2()}>
        <Text>Employee - Order Step 2</Text>
      </ListItem>

      <ListItem onPress={() => Actions.order()}>
        <Text>Employee - Order</Text>
      </ListItem>

      <ListItem onPress={() => Actions.orderHistory()}>
        <Text>Employee - Order History</Text>
      </ListItem>

      <ListItem onPress={() => Actions.orderDetails()}>
        <Text>Employee - Order Details</Text>
      </ListItem>
    </Content>
  )
}

const styles = {
  text: {
    fontWeight: "500",
    fontSize: 18,
    color: "#00bbb1",
    marginLeft: "20%"
  }
}