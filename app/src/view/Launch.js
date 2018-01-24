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
const TimerMixin = require('react-timer-mixin')

export default class Launch extends Component{
  constructor(props){
    super(props)
  }

  static navigationOptions =({navigation})=>{

    return({
      //headerStyle: {height:65, flexDirection: 'row', marginTop: 0}
      header: null,
      /*headerBackTitle: 'AAA',
      header: null,
      headerBackTitleStyle: {display: 'none', height: 0},
      headerStyle: {display:'none'}*/
    })
  }

  render(){
    return (
      <View>
        <Image source={{uri: 'daydayup'}} style={styles.launchImageStyle}></Image>
      </View>
    )
  }

  componentDidMount() {
    TimerMixin.setTimeout(()=>{
      console.log('launch',this)
      this.props.navigation.navigate('App')
    },5000)
  }
}
const styles = StyleSheet.create({
  launchImageStyle:{
    width:width,
    height: height
  }
})