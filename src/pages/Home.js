import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import useFetch from '../hooks/useFetch';
import ImageList from '../components/ImageList';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 10px;
`;

function Home({ navigation }) {
  const { data, isLoading, error, setQuery } = useFetch();

  useEffect(() => {
    const onChange = ({ window, screen }) => {
      console.log('window', window, 'screen', screen);
    };

    // console.log(window, screen);
  });

  return (
    <Container>
      <Text>Image Search</Text>
      <SearchBar search={setQuery} />
      {!!error.message && <Text>{error.message}</Text>}
      <ImageList data={data?.hits} navigation={navigation} />
    </Container>
  );
}

export default Home;
