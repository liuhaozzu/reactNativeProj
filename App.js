/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

/*import Login from './app/src/components/Login'
import ScrollViewDemo from './app/src/components/ScrollViewDemo'
import ListViewDemo from './app/src/components/ListViewDemo'
import GridView from './app/src/components/GridView'*/

import TabNavigator from 'react-native-tab-navigator'

import Home from './app/src/components/Home'
import RootNavigator from './app/src/view/HomeNavigator'
import Discover from './app/src/view/Discover'
import Message from './app/src/view/Message'
import Mine from './app/src/view/Mine'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const tabbarData=[
  {
    title: 'Home',
    icon: require('./app/static/img/tabbar/tabbar_home.png'),
    selectedIcon: require('./app/static/img/tabbar/tabbar_home_highlighted.png'),
    tabView: RootNavigator
  },{
    title: 'Discover',
    icon: require('./app/static/img/tabbar/tabbar_discover.png'),
    selectedIcon: require('./app/static/img/tabbar/tabbar_discover_highlighted.png'),
    tabView: Discover
  },{
    title: 'Message',
    icon: require('./app/static/img/tabbar/tabbar_message_center.png'),
    selectedIcon: require('./app/static/img/tabbar/tabbar_message_center_highlighted.png'),
    tabView: Message
  },{
    title: 'Mine',
    icon: require('./app/static/img/tabbar/tabbar_profile.png'),
    selectedIcon: require('./app/static/img/tabbar/tabbar_profile_highlighted.png'),
    tabView: Mine
  },
]

export default class App extends Component<{}> {
  constructor(props){
    super(props)
    this.state ={
      selectedTab: 'Home'
    }
  }
  render() {
    return (
      <TabNavigator tabBarStyle={styles.tabBarStyle}>
        {
          this.renderTabbarView(tabbarData)
        }
      </TabNavigator>
    );
  }
  renderTabbarView(){
    const tabbarView=[]
    tabbarData.forEach((item, index)=> {
      let TabView = item.tabView
      let selectedTab = item.title
      // console.log(TabView)
      tabbarView.push(
        <TabNavigator.Item
          key={index}
          selected={this.state.selectedTab === item.title}
          title={item.title}
          renderIcon={() => <Image source={item.icon} />}
          renderSelectedIcon={() => <Image source={item.selectedIcon} />}
          badgeText="1"
          onPress={() => this.setState({selectedTab: selectedTab})}>
          <TabView></TabView>
        </TabNavigator.Item>
      )
    })
    return tabbarView
  }
}

const styles = StyleSheet.create({
  tabBarStyle: {
    flex: 1,
    height: 56,
    backgroundColor: 'lightblue'
  }
});
