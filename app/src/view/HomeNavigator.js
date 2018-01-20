/**
 * Created by Administrator on 2018/1/20 0020 10:21.
 */
import React from 'react';
import { View, Text, Button, WebView } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14

import Home from '../components/Home'
import NewsDetail from '../components/NewsDetail'

const RootNavigator = StackNavigator({
  Home: {
    screen: Home
  },
  Details: {
    screen: NewsDetail
  }
});

export default RootNavigator;