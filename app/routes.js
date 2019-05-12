import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';


import SignIN from './components/auth';
import News from './components/games';
import Games from './components/news';

const AppStack = createBottomTabNavigator({
  News:News,
  Games:Games
});

const AuthStack = createStackNavigator({
  SignIN:SignIN
},{
  headerMode: 'none'
});

export const RootNavigator = () => {
  return createAppContainer(createSwitchNavigator({
    App:AppStack,
    Auth:AuthStack
  },{
    initialRouteName: 'Auth'
  }))
}