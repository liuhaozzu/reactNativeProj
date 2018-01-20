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
  TouchableOpacity
} from 'react-native'

const data=[]
for(let i=0;i<36;i++){
  data.push({
    img: 'https://ss0.bdstatic.com/6ONWsjip0QIZ8tyhnq/it/u=3278503323,1007200070&fm=77&w_h=121_75&cs=711771057,2541520077',
    name: 'aoliao',
    money: '36'
  })
}

export default class ListViewDemo extends Component{
  constructor(props){
    super(props)
    const ds=new ListView.DataSource({rowHasChanged: (r1,r2)=>{r1!==r2}})
    this.state ={
      dataSource: ds.cloneWithRows(data)
    }
  }
  render(){
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      ></ListView>
    )
  }

  renderRow = (rowData, sectionID, rowID, highlightRow)=>{
    console.log(rowData)
    console.log(sectionID)
    console.log(rowID)
    console.log(highlightRow)
    return (
      <TouchableOpacity activeOpacity={0.5}
                        onPress={console.log('TouchableOpacity ')}>
        <View style={styles.container}>
          <Image style={styles.imgStyle} source={{uri: rowData.img}}></Image>
          <View style={styles.textStyle}>
            <Text style={styles.topTitleStyle}>{rowData.name}</Text>
            <Text style={styles.bottomTitleStyle}>{rowData.money}</Text>
          </View>
        </View>
      </TouchableOpacity>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderBottomColor: '#e8e8e8',
    padding: 10
  },
  textStyle: {
    justifyContent: 'center'
  },
  imgStyle: {
    width: 160,
    height: 120
  },
  topTitleStyle: {
    color: 'red',
    fontSize: 16,
    marginBottom: 3
  },
  bottomTitleStyle: {
    color: 'blue',
    fontSize: 16
  }
})