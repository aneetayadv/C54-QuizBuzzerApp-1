/*  ●Create custom prop for a custom component.
    ● Write a function inside a React Component.
    ● Execute a function when a Button onPress event happens*/

import React, { Component } from 'react';
import { Text, View, Button, Alert } from 'react-native';

export default class C54Demo extends Component {
  
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={{ marginTop: 100, padding: 50 }}> Hi Aneeta!! </Text>
        <MyButton color="purple" />
      </View>
    );
  }
}

class MyButton extends Component {
  displayAlert() {
    alert('Display Alert Called!!');
  }

  arrowAlert = ()=> {
    alert('Arrow Alert Called!!');
  }
  
  render() {
    return <Button title="Click Me" color={this.props.color} onPress={this.arrowAlert} />;
  }
}
