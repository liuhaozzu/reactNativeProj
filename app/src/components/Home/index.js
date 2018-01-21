/**
 * Created by Administrator on 2018/1/20 0020 20:54.
 */
import React, {Component} from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

import HeaderNavBar from '../HeaderNavBar'
class Home extends Component{

  constructor(props){
    super(props)
  }
  static navigationOptions =({navigation})=>{
    // header: null,
    return({
      //headerStyle: {height:65, flexDirection: 'row', marginTop: 0},
      //header: null,
      header: <HeaderNavBar navigation={navigation}></HeaderNavBar>
    })
  }
  render(){
    return (
      <View>
        <TouchableOpacity activeOpacity={0.5} onPress={this.goToHomeDetail}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    )
  }
  goToHomeDetail=()=>{
    this.props.navigation.navigate('HomeDetail')
  }
}

const styles = StyleSheet.create({

})

export default Home