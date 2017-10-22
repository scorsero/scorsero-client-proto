/**
 * Created by dim3coder on 10/22/17.
 */
import React, {Component} from "react";
import {FlatList, Platform, StyleSheet, Text, View} from "react-native";
import {inject, observer} from "mobx-react";

@inject('store') @observer
export default class CreationScreen extends Component<{}> {
  static navigationOptions = ({navigation}) => ({
    title: "Create new",
  });
  render() {
    const list = this.props.store.scores.peek();
    return (
        <View style={styles.container}>
          <Text>Creation page</Text>
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