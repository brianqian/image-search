import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Provider } from 'react-redux';
import Details from './src/pages/Details';
import store from './src/redux/store';
import Home from './src/pages/Home';

const Stack = createStackNavigator();

const headerStyle = {
  // height: 100,
  // borderWidth: 1,
  // borderColor: 'green',
};

const headerTitleStyle = {
  fontSize: 20,
  // color: 'red',
};

const Container = styled.SafeAreaView`
  margin: 10px;
  margin-top: ${Constants.statusBarHeight + 10}px;
  height: 100%;
`;

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Container>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen
              name="Details"
              component={Details}
              options={{ headerStyle, headerTitleStyle }}
            />
          </Stack.Navigator>
        </Container>
      </NavigationContainer>
    </Provider>
  );
}
