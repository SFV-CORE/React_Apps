import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/pages/Login';
import Home from './src/pages/Home';

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Login">
        <stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
