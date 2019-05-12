import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button, ScrollView, ActivityIndicator } from 'react-native';

import AuthLogo from './authLogo';
import AuthForm from './authForm.js';

 class AuthComponent extends Component{
   state = {
     loading: false
   }


  goNext = () => {
    this.props.navigation.navigate('App')

   }

  render() {
    if(this.state.loading){
      return(
      <View styple={StyleSheet.loading}>
        <ActivityIndicator/>
      </View>
      )
    }
    else{
      return(
      <ScrollView style={styles.container}>
        <View>
          <AuthLogo/>
          <AuthForm
            goNext={this.goNext}
          />
        </View>
      </ScrollView>
      )
    }
  }
}

export default AuthComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d428a',
    padding: 50,
  },
  loading:{
    flex:1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent:'center',
  }
});
