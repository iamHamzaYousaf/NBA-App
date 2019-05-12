import React, {Component} from 'react';
import { View, Image } from 'react-native';

import LogoImage from '../../assets/images/nba_login_logo.png';


 class LogoComponent extends Component{
  render() {
    return (
      <View style={{alignItems:'center'}}>
       <Image
       source={LogoImage}
       resizeMode={'center'}
       style={{
         width:170,
         height:150
       }}
       />
      </View>
    );
  }
}

export default LogoComponent;


