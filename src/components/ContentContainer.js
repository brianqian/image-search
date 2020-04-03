import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';

function ContentContainer({ data }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {!!data &&
          data.map((img) => {
            return (
              <View key={img.id}>
                <Text>{img.user}</Text>
                <Text>{img.previewURL}</Text>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default ContentContainer;
