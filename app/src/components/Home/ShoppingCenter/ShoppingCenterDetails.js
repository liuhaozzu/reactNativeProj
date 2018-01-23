/**
 * Created by Administrator on 2018/1/20 0020 20:54.
 */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  WebView
} from 'react-native'

import NomalHeaderNavBar from '../../NomalHeaderNavBar'

export default class ShoppingCenterDetails extends Component{

  static navigationOptions =({navigation})=>{
    // header: null,
    return({
      headerStyle: {
        height:55,
        //flexDirection: 'row',
        backgroundColor:'orange'
      },
      headerTitleStyle:{color:'white'},
      headerTintColor:'white',
      //header: <NomalHeaderNavBar iconStyle={styles.iconStyle} title="More" iconName="icon_mine_setting" navigation={navigation}></NomalHeaderNavBar>,
      title: `${navigation.state.params.title}`
    })
  }

  render(){
    const { params } = this.props.navigation.state
    return (
      <View style={styles.container}>
        <WebView
          automaticallyAdjustContentInsets={true}
          source={{uri: params.url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})
