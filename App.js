import React from 'react';
import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native';
import{NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ISSLocationScreen from './screens/ISS';
import MetriorideScreen from './screens/Metrioride';
import UpdateScreen from './screens/Update';
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer initialRouteName='Home' screenOptions={{HeadersShown:false}}>
      <Snack.Screen name = 'Home' component={HomeScreen}></Snack.Screen>
      <Snack.Screen name = 'ISS Location' component={ISSLocationScreen}></Snack.Screen>
      <Snack.Screen name = 'Metrioride' component={MetriorideScreen}></Snack.Screen>
      <Snack.Screen name = 'Update' component={UpdateScreen}></Snack.Screen>
    </NavigationContainer>
  );
}

