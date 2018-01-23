/**
 * Created by Administrator on 2018/1/22 0022 21:02.
 */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native'

const {width, height} =Dimensions.get('window')

export default class HomeCommonCell extends Component{
  constructor(props){
    super(props)
  }
  static defaultProps={
    title:'',
    subTitle:'',
    rightImage:'',
    titleColor: '',
    width:'',
    tplurl:'',
    callBackClickCell: null
  }
  render(){
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.clickCell(this.props.tplurl)}}>
        <View style={[styles.container,{width:this.props.width.length===0?(width*0.5-1):this.props.width}]}>
          <View style={styles.textViewStyle}>
            <Text style={[{color: this.props.titleColor},styles.titleStyle]}>{this.props.title}</Text>
            <Text>{this.props.subTitle}</Text>
          </View>
          <Image style={styles.imageStyle} source={{uri: this.props.rightImage}}/>
        </View>
      </TouchableOpacity>
    )
  }
  clickCell(url){
    if(this.props.callBackClickCell){
      this.props.callBackClickCell(url)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width*0.5-1,
    height: 59,
    marginBottom: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent:'space-around',
    marginRight: 1
  },
  textViewStyle: {

  },
  titleStyle: {

  },
  imageStyle:{
    width: 64,
    height: 43
  }
})
