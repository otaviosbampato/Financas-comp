import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native';

//import Home from './src/pages/Home/'

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#0C1F3F" barStyle = "light-content" />
      <Routes />
    </NavigationContainer>
  );
}