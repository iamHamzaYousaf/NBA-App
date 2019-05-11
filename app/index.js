import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { RootNavigator } from './routes';


 class App extends Component{
  render() {
    const Nav = RootNavigator();
    return (
      <View style={styles.container}>
        <Nav/>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
