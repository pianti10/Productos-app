import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginsScreen} from '../screens/LoginsScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
import {ProtectedScreen} from '../screens/ProtectedScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen name="LoginScreen" component={LoginsScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
    </Stack.Navigator>
  );
};
