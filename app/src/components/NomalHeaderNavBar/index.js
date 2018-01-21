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

        {/*mid*/}
        <Text style={styles.textStyle}>{this.props.title}</Text>
        {/*right*/}
        <TouchableOpacity style={styles.rightViewStyle} activeOpacity={0.5} onPress={()=>{alert('AAA')}}>
          <Image source={{uri: this.props.iconName}} style={this.props.iconStyle}></Image>
        </TouchableOpacity>
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
    justifyContent: 'center'
  },
  textStyle: {
    color: 'white',
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
    flexDirection: 'row'
  },
  rightViewStyle: {
    position: 'absolute',
    right: 10
  }
})