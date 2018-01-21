/**
 * Created by Administrator on 2018/1/20 0020 10:21.
 */
import React from 'react';
import { View, Text, Button, WebView } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14

import Home from '../components/Home/index'
import HomeDetail from '../components/Home/HomeDetail'

const HomeNavigator = StackNavigator({
  Home: {
    screen: Home

  },
  HomeDetail: {
    screen: HomeDetail
  }
});

export default HomeNavigator;