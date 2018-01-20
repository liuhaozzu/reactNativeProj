/**
 * Created by Administrator on 2018/1/20 0020 10:21.
 */
import React from 'react';
import { View, Text, Button, WebView } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14

import More from '../components/More'
import NewsDetail from '../components/NewsDetail'

const MoreNavigator = StackNavigator({
  More: {
    screen: More
  },
  Details: {
    screen: NewsDetail
  }
});

export default MoreNavigator;