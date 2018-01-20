/**
 * Created by Administrator on 2018/1/20 0020 20:54.
 */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
class HomeDetail extends Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>HomeDetail</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'red'
  }
})

export default HomeDetail