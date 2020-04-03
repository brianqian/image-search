import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

function SearchBar() {
  const [value, setValue] = useState('');

  const handleChange = (text) => {
    setValue(text);
  };
  const handleSubmit = () => {};

  return (
    <View style={styles.container}>
      <TextInput onChangeText={handleChange} value={value} />
      <Button onPress={handleSubmit}>Search</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default SearchBar;
