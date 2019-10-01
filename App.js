/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './styles/AppStyles';
import Main from './comps/Main';
import NameGreeting from './Kaan/index';
function App(){
  return (
    <View style={styles.app}>
      <Main />
      <Text>New App</Text>
    </View>
  );
};

export default App;
