/**
 * Created by Administrator on 2018/1/20 0020 20:54.
 */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
export default class ShoppingCenterItem extends Component{
  constructor(props){
    super(props)
  }
  static defaultProps={
    shoppingImage:'',
    shoppingSale: '',
    shoppingName: '',
    detailurl:'',
    popTopShopCenter: null
  }


  render(){
    return (
      <TouchableOpacity activeOpacity={0.5}
                        onPress={()=>{this.clickItem({url:this.props.detailurl,title:this.props.shoppingName})}}>
        <View style={styles.container}>
          <Image source={{uri: this.props.shoppingImage}}
            style={styles.imageStyle}/>
          <Text style={styles.shoppingSaleStyle}>{this.props.shoppingSale}</Text>
          <Text style={styles.shoppingNameStyle}>{this.props.shoppingName}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  clickItem=(data)=>{
    if(this.props.popTopShopCenter!==null){
      this.props.popTopShopCenter(data)
    }
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    margin: 8
  },
  imageStyle:{
    width: 120,
    height: 80,
    borderRadius: 8
  },
  shoppingSaleStyle: {
    position: 'absolute',
    bottom: 30,
    left: 3,
    backgroundColor: 'orange',
    color:'white',
    padding: 3,
    borderTopRightRadius:8,
    borderBottomRightRadius: 8
  },
  shoppingNameStyle: {
    textAlign:'center',
    marginTop: 5
  }
})
