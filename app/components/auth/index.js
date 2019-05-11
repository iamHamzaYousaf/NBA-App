import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button, ScrollView, ActivityIndicator } from 'react-native';

 class AuthComponent extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello i am the AUTH LOGIN </Text>
        <Button title="Go" onPress={()=> {this.props.navigation.navigate('App')}}/>
      </View>
    );
  }
}

export default AuthComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
