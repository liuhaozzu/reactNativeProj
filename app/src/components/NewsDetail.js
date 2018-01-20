/**
 * Created by Administrator on 2018/1/20 0020 17:10.
 */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  WebView,
  Text,
  Dimensions
} from 'react-native'

const {width, height} = Dimensions.get('window')

export default class NewsDetail extends Component {
  constructor(props){
    super(props)
  }
  static defaultProps={
    url: ''
  }

  static navigationOptions = ({navigation}) =>({
    title: `${navigation.state.params.data.title}`
  })

  render(){
    const {params} = this.props.navigation.state
    const docurl = params.data.docurl
    console.log('docurl',docurl)
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <WebView
          automaticallyAdjustContentInsets={true}
          style={styles.webView}
          source={{uri: docurl}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
          scalesPageToFit={true}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  webView: {
    width: width,
    height: height
  }
})