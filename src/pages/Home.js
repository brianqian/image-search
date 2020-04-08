import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import SearchBar from '../components/SearchBar';
import ImageList from '../components/ImageList';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 10px;
  background-color: #fff;
`;

function Home({ navigation }) {
  const { status } = useSelector((state) => state.app);

  return (
    <Container>
      <SearchBar />
      {!!status && <Text>{status}</Text>}
      <ImageList navigation={navigation} />
    </Container>
  );
}

export default Home;
