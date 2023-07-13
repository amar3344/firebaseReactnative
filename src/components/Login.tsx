import React, {Component} from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export class Login extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text
          style={{
            color: 'purple',
            fontSize: 30,
            marginBottom: 20,
            fontWeight: 'bold',
          }}>
          Login
        </Text>
        <TextInput placeholder="Enter Email....." style={styles.emailinput} />
        <TextInput placeholder="Enter Pass....." style={styles.passinput} />
        <Button title="Login" />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('register')}>
          <Text style={{color: 'purple'}}>
            Move to Login{' '}
            <Text style={{color: 'blue', fontSize: 20}}>Register</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailinput: {
    borderColor: 'grey',
    borderWidth: 2,
    width: 200,
    height: 55,
    marginBottom: 10,
    borderRadius: 10,
  },
  passinput: {
    borderColor: 'grey',
    borderWidth: 2,
    width: 200,
    height: 55,
    marginBottom: 10,
    borderRadius: 10,
  },
});
