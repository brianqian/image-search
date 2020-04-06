import React, { useCallback } from 'react';
import { Text, FlatList, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectImages,
  selectPage,
  selectQuery,
  fetchImages,
  selectResultCount,
} from '../redux/AppState/appSlice';
import ImageContainer from './ImageContainer';

const Container = styled.SafeAreaView`
  height: 400px;
  width: 100%;
  border: 1px solid red;
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
    console.log('get next page');
    dispatch(fetchImages(currentQuery, currentPage));
  };

  const navigateToDetails = (img) => {
    const { imageHeight, imageWidth, largeImageURL, webformatURL, user, tags } = img;
    navigation.push('Details', {
      imageHeight,
      imageWidth,
      tags,
      largeImageURL,
      src: webformatURL,
      owner: user,
    });
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
          return <ImageContainer navigate={memoNavigate} img={item} />;
        }}
        onEndReached={getNextPage}
        onEndReachedThreshold={0.5}
      />
    </Container>
  );
}

export default ImageList;
