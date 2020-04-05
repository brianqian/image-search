import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  height: 400px;
  width: 100%;
  border: 1px solid red;
  flex: 5;
`;

const StyledImage = styled.Image`
  height: ${(p) => p.h + 75}px;
  width: ${(p) => p.w + 75}px;
  flex: 1;
`;

const ImageContainer = styled.TouchableOpacity`
  border: 1px solid gray;
  width: 100%;
  align-items: center;
`;

function ImageList({ data = [], navigation }) {
  const handleScroll = (e) => {
    // console.log(e);
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

  return (
    <Container>
      <ScrollView onScroll={handleScroll}>
        <Text>Results found: {data.length}</Text>
        {!!data.length &&
          data.map((img) => {
            return (
              <ImageContainer key={img.id} onPress={() => navigateToDetails(img)}>
                <StyledImage
                  source={{
                    uri: img.previewURL,
                  }}
                  h={img.previewHeight}
                  w={img.previewWidth}
                />
              </ImageContainer>
            );
          })}
      </ScrollView>
    </Container>
  );
}

export default ImageList;
