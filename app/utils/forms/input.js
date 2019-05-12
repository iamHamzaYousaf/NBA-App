import React, {Component} from 'react';
import { StyleSheet, TextInput, View, Image, Text, Picker } from 'react-native';

const input = (props) => {
    let template = null;

    switch(props.type){
      case "textinput":
        template =
        <TextInput
            {...props}
            style={[styles.input,props.overrideStyle]}
        />
      break;
      default:
        return template
    }
    return template;
}
export default input;


const styles = StyleSheet.create({
    input: {
     width:'100%',
     borderBottomWidth: 2,
     borderBottomColor:'#eaeaea',
     fontSize: 16,
     padding: 5,
     marginTop: 10,
    }
  });
  