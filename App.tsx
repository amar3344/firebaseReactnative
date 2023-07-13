//@ts-nocheck
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Firebase from './src/components/Firebase';
import Google from './src/components/Google';

const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="firebase" component={Firebase} />
          <Stack.Screen name="google" component={Google} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
