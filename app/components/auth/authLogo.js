import React, {Component} from 'react';
import { View, Image, StyleSheet } from 'react-native';

 class AuthComponent extends Component{
  render() {
    return (
      <View style={styles.container}>
       <Image
          source
       />
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
