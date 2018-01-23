/**
 * Created by Administrator on 2018/1/22 0022 19:37.
 */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  Dimensions,
  TouchableOpacity
} from 'react-native'

const {width, height} = Dimensions.get('window')

export default class TopListView extends Component{
  constructor(props){
    super(props)
    const ds=new ListView.DataSource({rowHasChanged: (r1,r2)=>{r1!==r2}})
    this.state={
      dataSource: ds.cloneWithRows(this.props.data)
    }
  }

  static defaultProps={
    data: []
  }

  render(){
    console.log('TopListView>>>', this.props)
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        contentContainerStyle={styles.contentViewStyle}
        scrollEnabled={false}/>

    )
  }
  renderRow(rowData){
    return(
      <TouchableOpacity onPress={()=>{alert('Hello ' +rowData.title)}}>
        <View style={styles.cellStyle}>
          <Image style={styles.imageStyle} source={{uri: rowData.image}}></Image>
          <Text>{rowData.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  imageStyle:{
    width: 52,
    height: 52
  },
  contentViewStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: width
  },
  cellStyle: {
    //backgroundColor: 'red',
    alignItems:'center',
    justifyContent:'center',
    width: width/5,
    height: 70,
    marginTop: 10
  }
})