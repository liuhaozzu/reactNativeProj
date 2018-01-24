/**
 * Created by Administrator on 2018/1/22 0022 20:51.
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

import HomeCommonCell from '../HomeCommonCell'

const data =require('../data/HomeTopMiddleLeft.json')

export default class HomeMidView extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View style={styles.container}>
        {/*left*/}
        {this.renderLeftView()}
        {/*right*/}
        <View>
          {this.renderRightView()}
        </View>
      </View>
    )
  }
  renderLeftView(){
    const dataLeft = data.dataLeft[0]
    return(
      <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert(dataLeft.title)}}>
        <View style={styles.leftViewStyle}>
          <Image style={styles.leftImageStyle} source={{uri: dataLeft.img1}}></Image>
          <Image style={styles.leftImageStyle} source={{uri: dataLeft.img2}}></Image>
          <Text>{dataLeft.title}</Text>
          <View style={{flexDirection:'row', marginTop: 5}}>
            <Text style={{color:'blue',marginRight:5}}>{dataLeft.price}</Text>
            <Text  style={{color:'orange', backgroundColor:'yellow'}}>{dataLeft.sale}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  renderRightView(){
    const arr=[]
    data.dataRight.forEach((item,index)=>{
      arr.push(
        <HomeCommonCell
          key={index}
          title={item.title}
          subTitle={item.subTitle}
          rightImage={item.rightImage}
          titleColor={item.titleColor}></HomeCommonCell>
      )
    })
    return arr
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop: 10,
    flexDirection: 'row'
  },
  leftViewStyle: {
    width: width*0.5,
    height: 119,
    backgroundColor: 'white',
    marginRight: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftImageStyle: {
    width: 120,
    height: 30,
    resizeMode: 'contain'
  }
})
