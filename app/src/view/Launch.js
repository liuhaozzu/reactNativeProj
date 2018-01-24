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
  Dimensions,
  PanResponder
} from 'react-native'

import Toast from 'react-native-root-toast'

const {width, height} = Dimensions.get('window')

const TimerMixin = require('react-timer-mixin')

export default class Launch extends Component{
  constructor(props){
    super(props)
    this.state={
      gestureStartX: 0,
      gestureStopX: 0,
      timerId:-1,
      visible: false
    }
  }

  static navigationOptions =({navigation})=>{

    return({
      //headerStyle: {height:65, flexDirection: 'row', marginTop: 0}
      header: null,
      /*headerBackTitle: 'AAA',
      header: null,
      headerBackTitleStyle: {display: 'none', height: 0},
      headerStyle: {display:'none'}*/
      gesturesEnabled:true
    })
  }

  render(){
    return (
      <View {...this._panResponder.panHandlers}>
        <Image source={{uri: 'daydayup'}} style={styles.launchImageStyle}></Image>
        <Toast
            visible={this.state.visible}
            position={50}
            shadow={false}
            animation={false}
            hideOnPress={true}
        >Timer {this.state.timerId} is cleared, please scroll left to the home page</Toast>
      </View>
    )
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      // 要求成为响应者：
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
        console.log('onPanResponderGrant', evt, gestureState)
        // gestureState.{x,y}0 现在会被设置为0
        TimerMixin.clearTimeout(this.state.timerId)
        this.setState({
          visible: true,
          gestureStartX: gestureState.x0
        })
      },
      onPanResponderMove: (evt, gestureState) => {
        // 最近一次的移动距离为gestureState.move{X,Y}
        console.log('onPanResponderMove', evt, gestureState)
        
        // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
        // 一般来说这意味着一个手势操作已经成功完成。
        console.log('onPanResponderRelease', evt, gestureState)
        const _this = this
        TimerMixin.setTimeout(()=>{
          _this.setState({
            visible: false
          })
        },3000)
        this.setState({
          gestureStopX: gestureState.moveX
        })
        if((this.state.gestureStartX-this.state.gestureStopX)>30){
          this.props.navigation.navigate('App')
        }
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
        console.log('onPanResponderTerminate', evt, gestureState)
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
        // 默认返回true。目前暂时只支持android。
        return true;
      },
    })
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.state.timerId = TimerMixin.setTimeout(()=>{
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