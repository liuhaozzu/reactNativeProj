/**
 * Created by Administrator on 2018/1/17 0017 22:10.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  Touchable,
  TouchableOpacity,
  ScrollView
} from 'react-native'

const {width, height} = Dimensions.get('window')

export default class HeaderScrollView extends Component<{}> {
  static defaultProps = {
    duration: 2000,
    //all image object
    imageDataArr:[]
  }
  constructor(props){
    super(props)
    this.state = {
      currentPage: 0,
      title: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          ref='scrollView'
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          scrollEnabled={true}
          onMomentumScrollEnd={(e)=>{this.onAnimationEnd(e)}}
          onScrollBeginDrag={this.onScrollBeginDrag}
          onScrollEndDrag={this.onScrollEndDrag}>
          {this.renderChildView()}
        </ScrollView>
        <View style={styles.bottomViewStyle}>
          <Text style={{color: 'white'}}>{this.state.title}</Text>
          {/*indicator*/}
          <View style={styles.indicatorStyle}>
            {this._renderIndicator()}
          </View>
        </View>
      </View>
    )
  }

  componentDidMount() {
    this.setState({
      currentPage: 0
    })
    this.startTimer()

  }
  onScrollEndDrag=()=>{
    this.startTimer()
  }
  onScrollBeginDrag=()=>{
    clearInterval(this.timer)
  }
  startTimer=()=>{
    var scrollView = this.refs.scrollView
    this.timer = setInterval(()=> {
      //set initial stage
      let activePage = 0
      // judge
      if((this.state.currentPage+1)>=this.props.imageDataArr.length){
        activePage =0
      } else {
        activePage = this.state.currentPage+1
      }
      //update state
      this.setState({
        currentPage: activePage,
        title: this.props.imageDataArr[this.state.currentPage].title
      })
      let offsetX = activePage * width
      scrollView.scrollResponderScrollTo({
        x: offsetX,
        y: 0,
        animated: true
      })
    }, this.props.duration)
  }

  onAnimationEnd(e){
    var offSetX=e.nativeEvent.contentOffset.x
    var currentPage= Math.floor(offSetX/width)
    this.setState({
      currentPage
    })
  }
  _renderIndicator(){
    const indicatorArr = []
    let style
    this.props.imageDataArr.forEach((item, index)=>{
      style = (index===this.state.currentPage)?{color: 'orange'}:{color: '#ffffff'}

      indicatorArr.push(
        <Text key={index} style={[{fontSize: 25}, style]}>&bull;</Text>
      )
    })
    return indicatorArr
  }
  renderChildView(){
    const imageArr = this.props.imageDataArr
    var allChild = []
    imageArr.forEach((item, index) => {
      allChild.push(
        <View key={index}>
          <Image style={{width: width, height: 130}} source={{uri: item.imgurl}}></Image>
        </View>
      )
    })
    return allChild;
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 1
  },
  bottomViewStyle: {
    width: width,
    height: 25,
    backgroundColor: 'rgba(0,0,0, 0.3)',
    /*position*/
    position: 'absolute',
    bottom: 0,
    /*flex*/
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  indicatorStyle: {
    flexDirection: 'row'
  }
});
