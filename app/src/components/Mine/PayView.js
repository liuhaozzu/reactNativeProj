/**
 * Created by Administrator on 2018/1/20 0020 20:54.
 */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions
} from 'react-native'

import PayViewItem from './PayViewItem'
const {width, height} = Dimensions.get('window')
const payViewData=require('./payview.json')

export default class PayView extends Component{
  constructor(props){
    super(props)
  }
  static defaultProps={
    data: payViewData
  }
  render(){
    return (
      <View style={styles.payViewStyle}>
        {this.renderAllItems(this.props.data)}
      </View>
    )
  }
  renderAllItems(data){
    const items = []
    data.forEach((item, index)=>{
      items.push(
        <PayViewItem key={index} title={item.title} iconName={item.iconName}></PayViewItem>
      )
    })
    return items
  }
}

const styles = StyleSheet.create({
  payViewStyle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'white',
    width: width,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10
  }
})