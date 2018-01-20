/**
 * Created by Administrator on 2018/1/19 0019 21:19.
 */
import React, {Component} from 'react'
import {
  StyleSheet,
  ListView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Button
} from 'react-native'

import HeaderScrollView from './HeaderScrollView'

const {width, height} = Dimensions.get('window')
const newsData = require('../../data/news.json')

export default class Home extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => {r1 !== r2}})
    this.state = {
      //ListView header data
      headerDataArr: [],
      //cell data
      dataSource: ds
    }
  }

  static defaultProps = {
    api_url: 'http://house.163.com/special/00078GU7/beijign_xw_news_v1.js?callback=data_callback'
  }

  static navigationOptions = ({navigation}) => ({
    title: 'News',
    headerRight: <Button onPress={()=>{console.log('onPress')}} title="Info"/>,
    headerTintColor: 'blue'
  })

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderHeader={this.renderHeader}/>
    )
  }

  //fetch data from network
  componentDidMount() {
    this.loadDataFromNetWork()
  }

  renderRow = (rowData, sectionID, rowID, highlightRow) => {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.goToNewsDetail(rowData)}}>
        <View style={styles.listviewItemStyle}>
          {/*left part*/}
          <Image style={styles.imgStyle} source={{uri: rowData.imgurl}}></Image>
          {/*right part*/}
          <View style={styles.rightViewStyle}>
            <Text style={styles.titleStyle}>{rowData.title}</Text>
            <Text style={styles.subTitleStyle}>{rowData.keywords[1] ? rowData.keywords[1].keyname : 'subtitle'}</Text>
            <Text style={styles.flowTitleStyle}>{rowData.tienum} 跟帖</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  renderHeader =()=>{
    return(
      <HeaderScrollView imageDataArr={this.state.headerDataArr}></HeaderScrollView>
    )
  }
  goToNewsDetail=(rowData)=>{
    console.log('goToNewsDetail', rowData)
    this.props.navigation.navigate('Details', {data: rowData})
  }
  loadDataFromNetWork = () => {
    let headerArr = newsData.headers
    let listDataArr = newsData.content
    this.setState({
      headerDataArr: headerArr,
      dataSource: this.state.dataSource.cloneWithRows(listDataArr)
    })
  }
  handleClick = () => {
    //console.log('Home', 'navigator', this.props.navigation)
    this.props.navigation.navigate('Details')
  }
}
const styles = StyleSheet.create({
  listviewItemStyle: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e0e2e2'
  },
  imgStyle: {
    width: width * 0.3,
    height: width * 0.3
  },
  rightViewStyle: {
    width: width * 0.6,
    flexWrap: 'wrap',
    marginLeft: 8
  },
  titleStyle: {
    fontSize: 16,
    marginBottom: 5
  },
  subTitleStyle: {
    color: 'gray'
  },
  flowTitleStyle: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 3,
    color: 'gray'
  }
})