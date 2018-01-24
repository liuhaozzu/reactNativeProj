/**
 * Created by Administrator on 2018/1/21 0021 15:01.
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

const {width, height} = Dimensions.get('window')

export default class HeaderView extends Component{
  constructor(props){
    super(props)
  }

  static defaultProps={
    title: ''
  }

  render(){
    return (
      <View style={styles.container}>
        {/*top*/}
        {this.renderTopView()}
        {/*bottom*/}
        {this.renderBottomView()}
      </View>
    )
  }
  renderTopView(){
    return(
      <View style={styles.topViewStyle}>
        <Image source={{uri:'see'}} style={styles.leftIconStyle}></Image>
        <View style={styles.centerViewStyle}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>{this.props.title}</Text>
          <Image source={{uri:'avatar_vip'}} style={{width:16,height:16}}></Image>
        </View>
        <Image source={{uri:'icon_cell_rightarrow'}} style={styles.rightArrowStyle}></Image>
      </View>
    )
  }
  renderBottomView(){
    return(
      <View style={styles.bottomViewStyle}>
        {this.renderBottomItem()}
      </View>
    )
  }
  renderBottomItem(){
    const itemArr=[]
    const data=[
      {
        'number':100,
        'title':'优惠券'
      },{
        'number':12,
        'title':'评价'
      },{
        'number':50,
        'title':'收藏'
      },
    ]
    data.forEach((item, index)=>{
      itemArr.push(
        <TouchableOpacity key={index} activeOpacity={0.5} onPress={()=>{alert('clicked')}}>
          <View style={styles.bottomImageStyle}>
            <Text>{item.number}</Text>
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )
    })
    return itemArr
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff511b',
    height: height*0.2
  },
  topViewStyle: {
    flexDirection: 'row',
    height: height*0.13,
    //backgroundColor: 'red',
    alignItems: 'center'
  },
  centerViewStyle:{
    flexDirection:'row',
    marginLeft: 15
  },
  leftIconStyle: {
    width:height*0.1,
    height: height*0.1,
    borderRadius: height*0.05
  },
  rightArrowStyle:{
    width:8,
    height:13,
    marginRight:8,
    position: 'absolute',
    right: 10
  },
  bottomViewStyle: {
    height: height*0.07,
    backgroundColor: 'rgba(255,255,255,0.4)',
    flexDirection:'row',
    alignItems:'center',
    // justifyContent: 'space-around'
  },
  bottomImageStyle: {
    borderRightWidth: 2,
    borderRightColor: 'rgba(255,255,255,0.8)',
    width: width/3+1,
    alignItems:'center'
  }
})