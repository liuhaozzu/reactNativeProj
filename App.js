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
import HomeNavigator from './app/src/view/HomeNavigator'
import MineNavigator from './app/src/view/MineNavigator'
import MoreNavigator from './app/src/view/MoreNavigator'
import ShopNavigator from './app/src/view/ShopNavigator'
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
    icon: require('./app/static/img/drawable-xxhdpi/icon_tabbar_homepage.png'),
    selectedIcon: require('./app/static/img/drawable-xxhdpi/icon_tabbar_homepage_selected.png'),
    tabView: HomeNavigator
  },{
    title: 'Shop',
    icon: require('./app/static/img/drawable-xxhdpi/icon_tabbar_merchant_normal.png'),
    selectedIcon: require('./app/static/img/drawable-xxhdpi/icon_tabbar_merchant_selected.png'),
    tabView: ShopNavigator
  },{
    title: 'Mine',
    icon: require('./app/static/img/drawable-xxhdpi/icon_tabbar_mine.png'),
    selectedIcon: require('./app/static/img/drawable-xxhdpi/icon_tabbar_mine_selected.png'),
    tabView: MineNavigator
  },{
    title: 'More',
    icon: require('./app/static/img/drawable-xxhdpi/icon_tabbar_misc.png'),
    selectedIcon: require('./app/static/img/drawable-xxhdpi/icon_tabbar_misc_selected.png'),
    tabView: MoreNavigator
  }
]
const tabbarData2=[
  {
    title: 'Home',
    icon: 'icon_tabbar_homepage',
    selectedIcon: 'icon_tabbar_homepage_selected',
    tabView: HomeNavigator
  },{
    title: 'Shop',
    icon: 'icon_tabbar_merchant_normal',
    selectedIcon: 'icon_tabbar_merchant_selected',
    tabView: ShopNavigator
  },{
    title: 'Mine',
    icon: 'icon_tabbar_mine',
    selectedIcon: 'icon_tabbar_mine_selected',
    tabView: MineNavigator
  },{
    title: 'More',
    icon: 'icon_tabbar_misc',
    selectedIcon: 'icon_tabbar_misc_selected',
    tabView: MoreNavigator
  }
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
          this.renderTabbarView2(tabbarData2)
        }
      </TabNavigator>
    );
  }
  renderTabbarView(tabbarData){
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
          renderIcon={() => <Image source={item.icon} style={styles.iconStyle}/>}
          tabStyle={styles.tabStyle}
          renderSelectedIcon={() => <Image source={item.selectedIcon} style={styles.iconStyle}/>}
          badgeText="1"
          selectedTitleStyle={styles.selectedTitleStyle}
          onPress={() => this.setState({selectedTab: selectedTab})}>
          <TabView></TabView>
        </TabNavigator.Item>
      )
    })
    return tabbarView
  }
  renderTabbarView2(tabbarData){
    const tabbarView=[]
    tabbarData.forEach((item, index)=> {
      let TabView = item.tabView
      let selectedTab = item.title
      // console.log(TabView)
      tabbarView.push(
        this.renderTabNavigatorItem(index, item.title, item.icon, item.selectedIcon,item.title, item.tabView)
      )
    })
    return tabbarView
  }
  renderTabNavigatorItem(key, title, iconName, selectedIconName, selectedTab, NavComponent){
    return(
      <TabNavigator.Item
        key={key}
        selected={this.state.selectedTab === title}
        title={title}
        renderIcon={() => <Image source={{uri: iconName}} style={styles.iconStyle}/>}
        tabStyle={styles.tabStyle}
        renderSelectedIcon={() => <Image source={{uri: selectedIconName}} style={styles.iconStyle}/>}
        badgeText="1"
        selectedTitleStyle={styles.selectedTitleStyle}
        onPress={() => this.setState({selectedTab: selectedTab})}>
        <NavComponent></NavComponent>
      </TabNavigator.Item>
    )
  }
}

const styles = StyleSheet.create({
  tabBarStyle: {
    /*flex: 1,
    height: 56,
    backgroundColor: 'lightblue'*/
  },
  sceneStyle: {
    /*width: 60,
    height: 60,
    backgroundColor: 'red'*/
  },
  iconStyle:{
    width: Platform.OS === 'ios' ? 30 : 25,
    height:Platform.OS === 'ios' ? 30 : 25
  },
  selectedTitleStyle: {
    color: 'orange'
  }
});
