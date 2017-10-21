/**
 * Created by dim3coder on 10/21/17.
 */
import React, {Component} from "react";
import {FlatList, Platform, StyleSheet, Text, View} from "react-native";
import {inject, observer} from "mobx-react";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

@inject('store') @observer
export default class MainScreen extends Component<{}> {
  render() {
    const list = this.props.store.scores.peek();
    return (
        <View style={styles.container}>
          <FlatList
              data={list}
              renderItem={(item => <Text>item</Text>)}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});