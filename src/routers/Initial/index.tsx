import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Config
import ScreenOptions from "../../config/screen"

// Pages
import Welcome from '../../pages/Welcome'

// Routes
import Home from '../Home'
import Playcast from '../../pages/Playcast'


const Stack = createStackNavigator();

export default () => (<NavigationContainer>
  <Stack.Navigator
    initialRouteName="Welcome"
    screenOptions={ScreenOptions}
  >
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="Playcast" component={Playcast} />
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
</NavigationContainer>)
