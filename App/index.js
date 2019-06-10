/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Screen1 from './screens/screen1';
import Screen2 from './screens/screen2';

const App = createStackNavigator(
  {
    Screen1: {
      screen: Screen1,
      navigationOptions: () => ({
        header: null,
      }),
    },
    Screen2: {
      screen: Screen2,
      navigationOptions: () => ({
        header: null,
      }),
    },
  },
);


export default createAppContainer(App);
