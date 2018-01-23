/**
 * Created by Administrator on 2018/1/22 0022 18:53.
 */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  ListView,
  Image,
  ScrollView,
  Dimensions
} from 'react-native'

const { width, height } = Dimensions.get('window')
const topListViewData = require('../data/TopMenu.json')
import TopListView from './TopListView'

export default class TopView extends Component{
  constructor(props){
    super(props)
    this.state ={
      activePage: 0
    }
  }

  static defaultProps={

  }

  render(){
    console.log('TopView>>>', this.props)
    return (
      <View style={styles.container}>
        {/*Top content*/}
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={this.onMomentumScrollEnd}>
          {this.renderScrollItem()}
        </ScrollView>
        {/*indicator*/}
        <View style={styles.indicatorViewStyle}>
          {this.renderIndicator()}
        </View>
      </View>
    )
  }
  renderScrollItem(){
    const itemArr = []
    //const colorArr =['red','green']
    topListViewData.data.forEach((item,index)=>{
      itemArr.push(
        <TopListView key={index} data={item}></TopListView>
      )
    })
    return itemArr
  }
  renderIndicator(){
    const indicatorArr =[]
    let style
    for(let i=0;i<2;i++){
      style = (i===this.state.activePage)? {color: 'orange'}:{color:'gray'}
      indicatorArr.push(
        <Text key={i} style={[{fontSize: 25}, style]}>&bull;</Text>
      )
    }
    return indicatorArr
  }

  //when a frame scroll over
  onMomentumScrollEnd=(e)=>{
    const currentPage = Math.round(e.nativeEvent.contentOffset.x / width)

    this.setState({
      activePage:currentPage
    })
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white'
  },
  indicatorViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 25
  }
})
