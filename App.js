/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {StackNavigator} from "react-navigation";
import MainScreen from "./src/main/MainScreen";

const ScorseroApp = StackNavigator({
  Main: {screen: MainScreen}
});

export default class App extends Component<{}> {
  render() {
    return <ScorseroApp/>
  }

}