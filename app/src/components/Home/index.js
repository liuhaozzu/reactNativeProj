/**
 * Created by Administrator on 2018/1/20 0020 20:54.
 */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ListView,
  Dimensions
} from 'react-native'

const { width, height } = Dimensions.get('window')

import HeaderNavBar from '../HeaderNavBar'
import TopView from './TopView/index'
import HomeMidView from './HomeMidView'
import HomeMidBottomView from './HomeMidBottomView'
import ShoppingCenter from './ShoppingCenter'
import Guess from './Guess'

class Home extends Component{

  constructor(props){
    super(props)
  }
  static navigationOptions =({navigation})=>{
    // header: null,
    return({
      //headerStyle: {height:65, flexDirection: 'row', marginTop: 0},
      //header: null,
      headerBackTitleStyle:{color:'red'},
      header: <HeaderNavBar navigation={navigation}></HeaderNavBar>
    })
  }
  render(){
    console.log('Home>>>', this.props)
    return (
      <View style={styles.container}>
        <ScrollView>
          {/*TopView*/}
          <TopView></TopView>
          {/*mid view*/}
          <HomeMidView></HomeMidView>
          {/*bottom view*/}
          <HomeMidBottomView
            popToTopHome={(data)=>{this.goToHomeDetail(data)}}/>
          <ShoppingCenter popToHomeView={(data)=>{this.pushToShopCenterDetail(data)}}></ShoppingCenter>
          {/*猜你喜欢*/}
          <Guess></Guess>
        </ScrollView>
      </View>
    )
  }
  goToHomeDetail=(data)=>{
    this.props.navigation.navigate('HomeDetail',{url:data})
  }
  pushToShopCenterDetail=(data)=>{
    let url = data.url
    url = url.replace('imeituan://www.meituan.com/web/?url=','')
    data.url = url
    console.log('pushToShopCenterDetail',data)
    this.props.navigation.navigate('ShoppingCenterDetails',data)
  }
}

const styles = StyleSheet.create({
  container:{

  }
})

export default Home