import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';

export class Register extends Component {
  state = {
    email: '',
    password: '',
  };

  onHandleText = (e: any) => {
    this.setState({
      email: e,
    });
  };

  onHandlePass = (e: any) => {
    this.setState({
      password: e,
    });
  };

  createAccount = () => {
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  SignIn = () => {
    auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        console.log(JSON.stringify(res));
        Alert.alert('user Logged in' + JSON.stringify(res));
      })
      .catch(error => {
        console.log(error, 'login error');
      });
  };

  render() {
    // console.log(this.state.email);
    // console.log(this.state.password);

    return (
      <View style={styles.main}>
        <View style={styles.box}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
        <View style={styles.box5}></View>
        <View style={styles.box6}></View>
        <Text
          style={{
            color: 'purple',
            fontSize: 30,
            marginBottom: 20,
            fontWeight: 'bold',
            fontStyle: 'italic',
          }}>
          Authentication
        </Text>
        <TextInput
          placeholder="Enter Email....."
          style={styles.emailinput}
          value={this.state.email}
          onChangeText={this.onHandleText}
        />
        <TextInput
          placeholder="Enter Pass....."
          style={styles.passinput}
          onChangeText={this.onHandlePass}
        />
        <TouchableOpacity onPress={this.SignIn} style={styles.btn}>
          <Text style={styles.signInTtext}>SignIn</Text>
        </TouchableOpacity>

        <TouchableOpacity
        // onPress={() => this.props.navigation.navigate('login')}
        >
          <Text style={{color: 'purple'}}>
            Move to Login{' '}
            <Text
              style={{color: 'blue', fontSize: 20}}
              onPress={this.createAccount}>
              {' '}
              Register
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Register;

const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    height: 200,
    width: 200,
    backgroundColor: 'orange',
    top: -20,
    left: -40,
    borderRadius: 150 / 1,
  },

  box2: {
    position: 'absolute',
    height: 300,
    width: 300,
    backgroundColor: 'pink',
    top: 350,
    right: -50,
    borderRadius: 150 / 1,
  },
  box3: {
    height: 85,
    width: 70,
    backgroundColor: 'green',
    position: 'absolute',
    top: 80,
    left: 20,
    borderBottomEndRadius: 40,
    borderTopStartRadius: 40,
    transform: [{rotate: '45deg'}],
    // borderColor:'black',
    // borderWidth:1
  },
  box4: {
    height: 85,
    width: 70,
    left: 20,
    backgroundColor: 'green',
    position: 'absolute',
    top: 80,
    borderBottomEndRadius: 40,
    borderTopStartRadius: 40,
    transform: [{rotate: '90deg'}],
    // borderColor:'black',
    // borderWidth:1
  },
  box5: {
    height: 85,
    width: 70,
    left: 20,
    backgroundColor: 'green',
    position: 'absolute',
    top: 80,
    borderBottomEndRadius: 40,
    borderTopStartRadius: 40,
    transform: [{rotate: '150deg'}],
    // // borderColor:'black',
    // borderWidth:1
  },
  box6: {
    width: 30,
    height: 30,
    top: -155,
    left: -150,
    backgroundColor: 'black',
    borderRadius: 150 / 2,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailinput: {
    borderColor: 'grey',
    borderWidth: 2,
    width: '90%',
    height: 55,
    marginBottom: 10,
    borderRadius: 10,
  },
  passinput: {
    borderColor: 'grey',
    borderWidth: 2,
    width: '90%',
    height: 55,
    marginBottom: 10,
    borderRadius: 10,
  },
  btn: {
    borderColor: 'grey',
    borderWidth: 2,
    width: '90%',
    height: 55,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  signInTtext: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
