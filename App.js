import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import Details from './src/pages/Details';

import Home from './src/pages/Home';

const Stack = createStackNavigator();

const Container = styled.View`
  margin-top: ${Constants.statusBarHeight + 10}px;
  height: 100%;
  border: 1px solid green;
`;

export default function App() {
  return (
    <Container>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Container>
  );
}
