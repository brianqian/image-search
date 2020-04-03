import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

function SearchBar({ search }) {
  const [value, setValue] = useState('');

  const handleChange = (text) => {
    setValue(text);
  };
  const handleSubmit = () => {
    search({ param: value });
  };

  return (
    <View style={styles.container}>
      <TextInput onChangeText={handleChange} value={value} />
      <Button onPress={handleSubmit} title="Search">
        Search
      </Button>
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
