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
  Dimensions
} from 'react-native'

const {width, height} =Dimensions.get('window')

export default class BottomCommonCell extends Component{
  constructor(props){
    super(props)
  }
  static defaultProps={
    leftIcon:'',
    leftTitle:'',
    rightTitle:''
  }
  render(){
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert(this.props.leftTitle)}}>
        <View style={styles.container}>
          <View style={styles.leftViewStyle}>
            <Image style={{width: 23, height: 23, marginRight:5}} source={{uri: this.props.leftIcon}}></Image>
            <Text style={{fontSize:17}}>{this.props.leftTitle}</Text>
          </View>
          <View style={styles.rightViewStyle}>
            <Text style={{color: 'gray'}}>{this.props.rightTitle}</Text>
            <Image style={styles.rightImageStyle} source={{uri:'icon_cell_rightarrow'}}></Image>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    //marginTop: 10,
    height: 45,
    flexDirection: 'row',
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'space-between',
    borderBottomColor:'#e8e8e8',
    borderBottomWidth: 1
  },
  leftViewStyle: {
    flexDirection:'row',
    alignItems:'center',
    marginLeft: 8
  },
  rightViewStyle:{
    flexDirection:'row',
    alignItems:'center'
  },
  rightImageStyle: {
    width: 8,
    height: 13,
    marginRight: 8,
    marginLeft: 5
  }
})
