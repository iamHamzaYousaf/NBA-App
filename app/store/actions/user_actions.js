import {
  SIGN_UP,
  SIGN_IN
} from '../types';

import axios from 'axios';


export function signUp(){
  return {
    type: SIGN_UP,
    payload:{
      user:'Hamza@gmail.com',
      token:"12345"
    }

  }
}

export function signIn(){
  return {
    type: SIGN_IN,
    payload:{
      user:'Hamza@gmail.com',
      token:"12345"
    }
    
  }
}