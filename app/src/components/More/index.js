/**
 * Created by Administrator on 2018/1/20 0020 20:54.
 */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native'

import NomalHeaderNavBar from '../NomalHeaderNavBar'
import CommonCell from '../Common'

class More extends Component{
  constructor(props){
    super(props)
  }
  static navigationOptions =({navigation})=>{
    // header: null,
    return({
      //headerStyle: {height:65, flexDirection: 'row', marginTop: 0},
      header: <NomalHeaderNavBar iconStyle={styles.iconStyle} title="Shopping Center" iconName="icon_mine_setting" navigation={navigation}></NomalHeaderNavBar>
    })
  }

  render(){
    return (
      <ScrollView style={styles.container}>
        <View style={{marginTop: 5}}>
          <CommonCell title='扫一扫'></CommonCell>
        </View>
        <View style={{marginTop: 5}}>
          <CommonCell title='省流量模式' isSwitch={true}></CommonCell>
          <CommonCell title='消息提醒'></CommonCell>
          <CommonCell title='邀请好友'></CommonCell>
          <CommonCell title='清空缓存' rightTitle="26.6 M"></CommonCell>
        </View>
        <View style={{marginTop: 5}}>
          <CommonCell title='问卷调查'></CommonCell>
          <CommonCell title='支付帮助'></CommonCell>
          <CommonCell title='网络诊断'></CommonCell>
          <CommonCell title='关于'></CommonCell>
          <CommonCell title='招聘'></CommonCell>
        </View>
        <View style={{marginTop: 5}}>
          <CommonCell title='精品应用'></CommonCell>
          <CommonCell title='关于我们'></CommonCell>
        </View>
        <View style={{marginTop: 5}}>
          <CommonCell title='客服'></CommonCell>
          <CommonCell title='关于我们'></CommonCell>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8'
  },
  iconStyle:{
    width: 30,
    height: 30,

    //absolute position
    //position: 'absolute',
    //right: 10
  }
})

export default More