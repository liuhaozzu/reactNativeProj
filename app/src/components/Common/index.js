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

class Common extends Component{
  constructor(props){
    super(props)
    this.state ={
      isOn: false
    }
  }

  static defaultProps={
    title: '',
    isSwitch: false,
    rightTitle: ''
  }

  render(){
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('aaa')}}>
        <View style={styles.container}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>{this.props.title}</Text>
          {/*right*/}
          {
            this.renderRightView()
          }
          </View>
      </TouchableOpacity>
    )
  }
  renderRightView(){
    if(this.props.isSwitch){
      return(
        <Switch value={this.state.isOn} onValueChange={()=>{this.setState({isOn: !this.state.isOn})}}/>
      )
    }else {
      return(
        <View style={{flexDirection:'row', alignItems:'center'}}>
          {this.renderRightTitle()}
          <Image source={{uri: 'icon_cell_rightarrow'} }  style={styles.iconStyle}></Image>
        </View>
        )
    }
  }
  renderRightTitle(){
    if(this.props.rightTitle.length>0){
      return(
        <Text style={{color:'gray', marginRight: 6}}>{this.props.rightTitle}</Text>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: 'white',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  iconStyle:{
    width: 8,
    height: 13
  }
})

export default Common