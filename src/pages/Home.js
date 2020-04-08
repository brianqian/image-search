import React, { useEffect } from 'react';
import { Text, Dimensions, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '../components/SearchBar';
import ImageList from '../components/ImageList';
import styled from 'styled-components/native';
import { setIsPortrait } from '../redux/AppState/appSlice';

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
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.app);

  useEffect(() => {
    const onScreenRotation = ({ screen }) => {
      const isPortrait = screen.width < screen.height;
      dispatch(setIsPortrait(isPortrait));
    };

    Dimensions.addEventListener('change', onScreenRotation);
    return () => Dimensions.removeEventListener('change', onScreenRotation);
  });

  return (
    <Container>
      <SearchBar />
      {!!status && <Text>{status}</Text>}

      <ImageList navigation={navigation} />
    </Container>
  );
}

export default Home;
