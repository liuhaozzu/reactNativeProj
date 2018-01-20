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
  Dimensions
} from 'react-native'

const {width, height} = Dimensions.get('window')

const data=[]
for(let i=0;i<360;i++){
  data.push({
    icon: 'https://cdn2.iconfinder.com/data/icons/energy-26/128/energy_battery_biomass_charging_turbine_power_green-95-128.png',
    title: 'aoliao'
  })
}
console.log(data)
const cols = 3
const cellW= 100
const vMargin =(width-cellW*cols)/(cols+1)
const hMargin = 25

export default class GridView extends Component{
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
        contentContainerStyle={styles.listViewStyle}
      ></ListView>
    )
  }

  renderRow = (rowData, sectionID, rowID, highlightRow)=>{
    return (
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.innerViewStyle}>
          <Image style={styles.imgStyle} source={{uri: rowData.icon}}></Image>
          <Text>{rowData.title}</Text>
        </View>
      </TouchableOpacity>

    )
  }
}
const styles = StyleSheet.create({
  listViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  imgStyle: {
    width: 80,
    height: 80
  },
  innerViewStyle: {
    width: cellW,
    height: cellW,
    marginLeft: vMargin,
    marginTop: hMargin,

    //center
    alignItems: 'center'
  }
})