import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import styled from 'styled-components/native';
import { useDispatch } from 'react-redux';
import { fetchImages } from '../redux/AppState/appSlice';

const Container = styled.View`
  height: 75px;
  border: 1px solid gray;
  margin: 10px;
  width: 200px;
  border-radius: 5px;
`;

const StyledInput = styled.TextInput`
  flex: 1;
  align-self: flex-start;
  /* border: 1px solid green; */
  width: 100%;
  padding: 8px;
`;

const StyledButton = styled.Button`
  flex: 1;
  align-self: flex-end;
  margin: 10px;
`;

function SearchBar() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (text) => {
    setValue(text);
  };
  const handleSubmit = () => {
    dispatch(fetchImages(value, 1));
    Keyboard.dismiss();
  };

  return (
    <Container>
      <StyledInput onChangeText={handleChange} value={value} />
      <StyledButton onPress={handleSubmit} title="Search" />
    </Container>
  );
}

export default SearchBar;
