/**
 * Created by Administrator on 2018/1/20 0020 20:54.
 */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native'

const {width, height} =Dimensions.get('window')

import BottomCommonCell from './BottomCommonCell'
import ShoppingCenterItem from './ShoppingCenterItem'

const Home_D5 = require('../data/Home_D5.json')

export default class ShoppingCenter extends Component{
  constructor(props){
    super(props)
  }
  static defaultProps={
    popToHomeView: null
  }
  render(){
    return (
      <View style={styles.container}>
        <BottomCommonCell
          leftIcon='gw'
          leftTitle='购物中心'
          rightTitle={Home_D5.tips}/>
        <ScrollView
          style={styles.scrollViewStyle}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {this.renderAllShoppingItems()}
        </ScrollView>
      </View>
    )
  }
  renderAllShoppingItems(){
    const itemArr=[]
    Home_D5.data.forEach((item, index)=>{
      itemArr.push(
        <ShoppingCenterItem
          key={index}
          shoppingImage={item.img}
          shoppingSale={item.showtext.text}
          shoppingName={item.name}
          detailurl={item.detailurl}
          popTopShopCenter={this.popTopShopCenter}/>
      )
    })
    return itemArr
  }
  popTopShopCenter=(data)=>{
    //alert(url)
    if(this.props.popToHomeView!==null){
      this.props.popToHomeView(data)
    }
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop: 15
  },
  scrollViewStyle:{
    flexDirection:'row',
    backgroundColor:'white',
    padding: 10
  }
})
