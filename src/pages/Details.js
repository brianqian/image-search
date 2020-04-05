import React from 'react';
import { View, Text, Image } from 'react-native';

function Details({ navigation, route }) {
  const { imageHeight, imageWidth, tags, src, largeImageURL, owner } = route.params;
  return (
    <View>
      <Text>DETAILS PAGE</Text>
      <Image source={{ uri: src }} />
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Text>Owner: </Text>
          <Text>Height: </Text>
          <Text>Width: </Text>
          <Text>Original Image: </Text>
          <Text>Tags: </Text>
        </View>
        <View>
          <Text>{owner}</Text>
          <Text>{imageHeight}</Text>
          <Text>{imageWidth}</Text>
          <Text>{largeImageURL}</Text>
          <Text>{tags}</Text>
        </View>
      </View>
    </View>
  );
}

export default Details;
