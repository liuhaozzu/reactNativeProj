/**
 * Created by Administrator on 2018/1/19 0019 21:19.
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  ListView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native'

const {width, height} = Dimensions.get('window')


export default class Message extends Component{
  constructor(props){
    super(props)
    this.state ={

    }
  }
  render(){
    return (
      <View>
        <Text>Message</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({

})