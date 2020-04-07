import React, { useEffect } from 'react';
import { Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import ImageList from '../components/ImageList';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 10px;
  background-color: #fff;
`;

const Header = styled.View`
  flex: 1;
`;

function Home({ navigation }) {
  const { status } = useSelector((state) => state.app);

  return (
    <Container>
      <Text>Image Search</Text>
      <SearchBar />
      {!!status && <Text>{status}</Text>}

      <ImageList navigation={navigation} />
    </Container>
  );
}

export default Home;
