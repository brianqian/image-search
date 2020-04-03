import React, { useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import Constants from 'expo-constants';
import useFetch from '../hooks/useFetch';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const ENDPOINT = 'https://pixabay.com/api/';

function Home() {
  useEffect(() => {
    console.log(window, screen);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Image Search</Text>
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
});

export default Home;
