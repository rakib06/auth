import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header} from './component/common';
import LoginForm from './component/LoginForm';
class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAC4A_DZhH-uY-afx0MfEh9MhKUseFNy3c',
      authDomain: 'authentication-f0576.firebaseapp.com',
      databaseURL: 'https://authentication-f0576.firebaseio.com',
      projectId: 'authentication-f0576',
      storageBucket: 'authentication-f0576.appspot.com',
      messagingSenderId: '449249531671',
      appId: '1:449249531671:web:098bb70b5566de9ee70952',
      measurementId: 'G-47QH3YC90B',
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
