/**
 * Created by Administrator on 2018/1/20 0020 10:21.
 */
import React from 'react';
import { View, Text, Button, WebView } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14

import Mine from '../components/Mine'
import NewsDetail from '../components/NewsDetail'

const MineNavigator = StackNavigator({
  Mine: {
    screen: Mine
  },
  Details: {
    screen: NewsDetail
  }
});

export default MineNavigator