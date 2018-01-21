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
  TextInput,
  Platform
} from 'react-native'

const {width, height} = Dimensions.get('window')


export default class HeaderNavBar extends Component{
  constructor(props){
    super(props)
    this.state ={

    }
  }
  render(){
    // console.log(Platform)
    return (
      <View style={styles.headerNavBarStyle}>
        {/*left*/}
        <TouchableOpacity activeOpacity={0.5} onPress={this.selectLocation}>
          <Text style={styles.locationStyle}>北京</Text>
        </TouchableOpacity>
        {/*mid*/}
        <TextInput
          placeholder='输入商家，品类，商圈'
          style={styles.topInputStyle}
          underlineColorAndroid='transparent'/>
        {/*right*/}
        <View style={styles.headerNavBarViewStyle}>
          <Image style={styles.navRightImgStyle} source={{uri: 'icon_homepage_message'}}></Image>
          <Image style={styles.navRightImgStyle} source={{uri: 'icon_homepage_scan'}}></Image>
        </View>
      </View>
    )
  }
  selectLocation=()=>{
    console.log(this.props.navigation)
    console.log(this.props)
  }
}
const styles = StyleSheet.create({
  headerNavBarStyle: {
    flexDirection: 'row',
    width: width,
    height: Platform.OS ==='iso'? 45 : 55,
    backgroundColor: 'rgba(255,96,0, 1.0)',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  locationStyle: {
    margin: 5,
    fontSize: 16,
    fontWeight: '300'
  },
  topInputStyle:{
    width: width*0.7,
    height: 36,
    backgroundColor: 'white',
    borderRadius: 18,
    paddingLeft: 16,
    marginTop: Platform.OS ==='ios'? 16: 0
  },
  headerNavBarViewStyle:{
    flexDirection: 'row',
    // backgroundColor:'red'
  },
  navRightImgStyle: {
    width: Platform.OS ==='ios'? 28:30,
    height: Platform.OS ==='ios'? 16: 30,
    margin: 2
  }
})