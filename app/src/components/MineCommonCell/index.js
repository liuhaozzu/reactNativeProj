/**
 * Created by Administrator on 2018/1/20 0020 20:54.
 */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch
} from 'react-native'

import NomalHeaderNavBar from '../NomalHeaderNavBar'

export default class MineCommonCell extends Component{
  constructor(props){
    super(props)
    this.state ={
      isOn: false
    }
  }

  static defaultProps={
    rightTitle: '',
    leftIconName: '',
    leftTitle: '',
    rightIconName: '',
    rightTitle: ''
  }

  render(){
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('aaa')}}>
        <View style={styles.container}>
          {/*left*/}
          <View style={styles.leftViewStyle}>
            <Image style={styles.leftImageStyle} source={{uri: this.props.leftIconName}}></Image>
            <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
          </View>
          <View style={styles.rightViewStyle}>
            {this.renderRightSubView()}
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  renderRightSubView(){
    return(
      <View style={{flexDirection:'row', alignItems:'center'}}>
        {
          this.renderRightContent()
        }
        <Image style={styles.rightImageStyle} source={{uri: 'icon_cell_rightarrow'}}></Image>
      </View>
    )
  }
  renderRightContent(){
    if(this.props.rightIconName.length===0){
      return(
        <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
      )
    }else {
      return(
        <Image style={{width: 24, height: 13}} source={{uri:this.props.rightIconName}}></Image>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 40,
    borderWidth: 0.5,
    borderColor: '#e8e8e8'
  },
  leftViewStyle:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8
  },
  leftImageStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 6
  },
  leftTitleStyle: {
    fontSize: 16,
    fontWeight: '500'
  },
  rightViewStyle: {

  },
  rightImageStyle: {
    width: 8,
    height: 13,
    marginLeft: 5,
    marginRight: 8
  },
  iconStyle:{
    width: 8,
    height: 13
  }
})