/**
 * Created by Administrator on 2018/1/20 0020 10:21.
 */
import React from 'react';
import { View, Text, Button, WebView } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14

import Shop from '../components/Shop'
import NewsDetail from '../components/NewsDetail'

const ShopNavigator = StackNavigator({
  Shop: {
    screen: Shop
  },
  Details: {
    screen: NewsDetail
  }
});

export default ShopNavigator