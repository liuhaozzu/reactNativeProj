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
import MineCommonCell from '../MineCommonCell'
import PayView from './PayView'
import HeaderView from './HeaderView'

class Mine extends Component{
  constructor(props){
    super(props)
  }

  static navigationOptions =({navigation})=>{

    return({
      header: null
      //headerStyle: {height:65, flexDirection: 'row', marginTop: 0},
      //header: <NomalHeaderNavBar title="Mine" navigation={navigation}></NomalHeaderNavBar>
    })
  }

  render(){
    return (
      <ScrollView contentContainerStyle={styles.scrollViewStyle}
                  style={styles.scrollViewStyle}>
        <HeaderView title='天天向上'></HeaderView>
        <View style={{marginTop: 15}}>
          <MineCommonCell leftIconName='collect' leftTitle='我的订单' rightTitle='查看全部订单'/>
          <PayView></PayView>
        </View>
        <View style={{marginTop: 15}}>
          <MineCommonCell leftIconName='draft' leftTitle='我的钱包' rightTitle='账户余额：￥100'/>
          <MineCommonCell leftIconName='like' leftTitle='抵用券' rightTitle='10 张'/>
        </View>
        <View style={{marginTop: 15}}>
          <MineCommonCell leftIconName='card' leftTitle='积分商城'/>
        </View>
        <View style={{marginTop: 15}}>
          <MineCommonCell leftIconName='new_friend' leftTitle='今日推荐' rightIconName='me_new'/>
          <MineCommonCell leftIconName='pay' leftTitle='我要合作' rightTitle='赢取白富美，走向人生巅峰 :)'/>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollViewStyle:{
    backgroundColor: '#e8e8e8'
  }
})

export default Mine