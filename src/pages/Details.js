import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import { Linking } from 'expo';

const StyledLink = styled.Text`
  color: blue;
  text-decoration: underline;
`;

function Details({ route }) {
  const { imageHeight, imageWidth, tags, src, largeImageURL, owner } = route.params;
  console.log(route.params);
  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <Text>Owner: </Text>
          <Text>Height: </Text>
          <Text>Width: </Text>
          <Text>Tags: </Text>
          <Text>Original Image: </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text>{owner}</Text>
          <Text>{imageHeight}</Text>
          <Text>{imageWidth}</Text>
          <Text>{tags}</Text>
          <StyledLink onPress={() => Linking.openURL(largeImageURL)}> {largeImageURL}</StyledLink>
        </View>
      </View>
      <Image source={{ uri: src }} />
    </SafeAreaView>
  );
}

export default Details;
