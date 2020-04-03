import React, { useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import Constants from 'expo-constants';
import useFetch from '../hooks/useFetch';
import { PIXABAY_KEY } from 'react-native-dotenv';
import ContentContainer from '../components/ContentContainer';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

function Home() {
  const { data, isLoading, error, setQuery } = useFetch();

  useEffect(() => {
    console.log(window, screen);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Image Search</Text>
      <SearchBar search={setQuery} />
      {!!error.message && <Text>{error.message}</Text>}
      <ContentContainer data={data?.hits} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    paddingTop: 30 + Constants.statusBarHeight,
  },
});

export default Home;
