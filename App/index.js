/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Screen1 from './screens/screen1';
import Screen2 from './screens/screen2';

const App = createBottomTabNavigator(
  {
    Screen1: {
      screen: Screen1,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="list-alt" size={18} color={tintColor} />
        ),
      }),
    },
    Screen2: {
      screen: Screen2,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name="users" size={18} color={tintColor} />
        ),
      }),
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#586589',
      backBehavior: 'initialRoute',
      tabStyle: {
        margin: 0,
        padding: 0
      },
      style: {
        backgroundColor: 'white',
        // marginBottom: 20,
        borderWidth: 0,
        // width: '80%',
        alignSelf: 'center',
        margin: 0,
        padding: 0,
      },
    }
  }
);


export default createAppContainer(App);