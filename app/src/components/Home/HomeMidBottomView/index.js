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

const {width, height} =Dimensions.get('window')

import HomeCommonCell from '../HomeCommonCell'

const midBottomData = require('../data/Home_D4.json')
const dataHilight = midBottomData.dataHilight
export default class HomeBottomView extends Component{
  render(){
    return (
      <View style={styles.container}>
        {/*top*/}
        <View style={styles.topViewStyle}>
          <HomeCommonCell
            width={width}
            title={dataHilight.maintitle}
            subTitle={dataHilight.deputytitle}
            rightImage={this.dealWithImgUrl(dataHilight.imageurl)}
            titleColor={dataHilight.typeface_color}/>
        </View>
        {/*bottom*/}
        <View style={styles.bottomViewStyle}>
          {this.renderBottomItem()}
        </View>
      </View>
    )
  }
  renderBottomItem(){
    const arr=[]
    midBottomData.data.forEach((item, index)=>{
      arr.push(
        <HomeCommonCell
          key={index}
          title={item.maintitle}
          subTitle={item.deputytitle}
          rightImage={this.dealWithImgUrl(item.imageurl)}
          titleColor={item.typeface_color}
          tplurl={item.tplurl}
          callBackClickCell={(data)=>{this.popToTopView(data)}}/>
      )
    })
    return arr
  }
  dealWithImgUrl(url){
    if(url.search('w.h')===-1){
      return url
    }else {
      return url.replace('w.h', '120.90')
    }
  }
  popToTopView(data){
    this.props.popToTopHome(data)
    //alert(data)
  }
}

const styles = StyleSheet.create({
  container:{

  },
  topViewStyle:{
    width: width,
    flex: 1
  },
  bottomViewStyle:{
    flexDirection:'row',
    flexWrap: 'wrap'
  }
})
