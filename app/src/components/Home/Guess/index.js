/**
 * Created by Administrator on 2018/1/20 0020 20:54.
 */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  ListView,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import BottomCommonCell from '../ShoppingCenter/BottomCommonCell'

const Guess_Data= require('../data/HomeGeustYouLike.json').data
const {width, height} = Dimensions.get('window')
export default class Guess extends Component{
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2)=>{r1!==r2}})
    this.state={
      dataSource: ds
    }
  }

  static defaultProps={
    api_url:''
  }

  render(){
    return (
      <View style={styles.container}>
        <BottomCommonCell leftTitle='猜你喜欢' leftIcon='gw'></BottomCommonCell>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}/>
      </View>
    )
  }

  componentDidMount() {
    this.loadDataFromWeb()
  }
  loadDataFromWeb(){
    //use fetch to get data from web
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(Guess_Data)
    })
  }

  renderRow=(rowData)=>{
    return(
      <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert('Guess')}}>
        <View style={styles.listViewItemStyle}>
          {/*left*/}
          <Image style={styles.imageStyle} source={{uri:this.dealWithImageUrl(rowData.imageUrl)}}></Image>
          {/*right*/}
          <View style={styles.rightViewStyle}>
            <View style={styles.rightTopViewStyle}>
              <Text style={styles.titleStyle}>{rowData.title}</Text>
              <Text>{rowData.topRightInfo}</Text>
            </View>
            <Text style={{color:'gray'}}>{rowData.subTitle}</Text>
            <View  style={styles.rightBottomViewStyle}>
              <Text style={{color:'red'}}>{rowData.subMessage}</Text>
              <Text>{rowData.bottomRightInfo}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  dealWithImageUrl=(url)=>{
    if (url.search('w.h') == -1){ // 没有找到,正常返回
      return url;
    }else{
      return url.replace('w.h', '120.90');
    }
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop: 15
  },
  listViewItemStyle:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white',
    borderBottomColor:'#e8e8e8',
    borderBottomWidth:1,
    padding: 10
  },
  imageStyle: {
    width: 80,
    height: 80
  },
  rightViewStyle: {
    marginLeft: 8,
    width: width*0.65,
    justifyContent:'center'
  },
  rightTopViewStyle:{
    flexDirection:'row',
    marginBottom: 7,
    justifyContent:'space-between'
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: '500'
  },
  rightBottomViewStyle:{
    flexDirection: 'row',
    marginTop:7,
    justifyContent:'space-between'
  }
})
