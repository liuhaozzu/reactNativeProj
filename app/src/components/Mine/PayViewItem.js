/**
 * Created by Administrator on 2018/1/20 0020 20:54.
 */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'
export default class PayViewItem extends Component{
  constructor(props){
    super(props)
  }

  static defaultProps={
    iconName:'',
    title:''
  }

  render(){
    return (
      <View style={styles.payViewItemStyle}>
        <Image style={styles.imgStyle} source={{uri: this.props.iconName}}></Image>
        <Text>{this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  payViewItemStyle: {
    alignItems:'center'
  },
  imgStyle:{
    width: 30,
    height: 20
  }
})