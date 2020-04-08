import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import ImageContainer from '../components/ImageContainer';

const Container = styled.ScrollView`
  padding: 25px;
  height: 120%;
  margin: 0;
`;

function Details({ route }) {
  const {
    imageHeight,
    imageWidth,
    tags,
    webformatURL,
    user,
    webformatHeight,
    webformatWidth,
  } = route.params;

  return (
    <Container>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text>Owner: </Text>
          <Text>Width: </Text>
          <Text>Height: </Text>
          <Text>Tags: </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text>{user}</Text>
          <Text>{imageWidth}px</Text>
          <Text>{imageHeight}px</Text>
          <Text>{tags}</Text>
        </View>
      </View>
      <ImageContainer
        img={route.params}
        src={webformatURL}
        h={webformatHeight}
        w={webformatWidth}
      />
    </Container>
  );
}

export default Details;
