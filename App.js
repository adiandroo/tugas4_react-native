import { Content } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Contents from './Component/Contents';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor:"#86b300"}}>
        <Headers />
        <Text style={{flex:4}}>
          <Contents />
        </Text>
      </View>
    );
  }
}
