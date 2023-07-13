//@ts-nocheck
import React, {Component} from 'react';
import {Text, TouchableOpacity, View,StyleSheet,Button} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { TextInput } from 'react-native-gesture-handler';

interface IProps {
  navigation: any;
}

export class Firebase extends Component<IProps, IState> {
  constructor(props: IProsp) {
    super(props);
    this.state = {isSigninInProgress: false};
  }

  componentDidMount(): void {
    GoogleSignin.configure();
  }

  googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      this.props.navigation.navigate('google');
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(error, '1');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error, '2');
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error, '3');
        // play services not available or outdated
      } else {
        console.log(error, '4');
        // some other error happened
      }
    }
  };

  render() {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      
        <GoogleSigninButton
          style={{width: 192, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.googleLogin}
          //   disabled={this.state.isSigninInProgress}
        />
      </View>
    );
  }
}

export default Firebase;

