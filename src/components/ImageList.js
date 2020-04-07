import React, { useCallback } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchImages } from '../redux/AppState/appSlice';
import ImageContainer from './ImageContainer';

const Container = styled.SafeAreaView`
  /* height: 400px; */
  /* border: 1px solid red; */
  width: 100%;
  flex: 5;
  padding: 15px;
  align-items: center;
`;

const StyledList = styled.FlatList`
  width: 100%;
`;

function ImageList({ navigation }) {
  const dispatch = useDispatch();

  const { images, currentPage, currentQuery, resultsFound } = useSelector((state) => state.app);

  const getNextPage = () => {
    dispatch(fetchImages(currentQuery, currentPage));
  };

  const navigateToDetails = (img) => {
    navigation.push('Details', img);
  };

  const memoNavigate = useCallback((img) => navigateToDetails(img), []);

  return (
    <Container>
      <Text>
        Loaded {images.length} of {resultsFound} found
      </Text>
      <StyledList
        contentContainerStyle={{ alignItems: 'center' }}
        data={images}
        keyExtractor={(item, i) => item.id.toString() + i}
        renderItem={({ item }) => {
          return (
            <ImageContainer
              navigate={() => memoNavigate(item)}
              img={item}
              src={item.webformatURL}
              h={item.webformatHeight}
              w={item.webformatWidth}
            />
          );
        }}
        onEndReached={getNextPage}
        onEndReachedThreshold={0.5}
      />
    </Container>
  );
}

export default ImageList;
