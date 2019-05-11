import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

 class GamesComponent extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello i am the AUTH LOGIN </Text>
      </View>
    );
  }
}

export default GamesComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
