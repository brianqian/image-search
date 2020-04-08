import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import styled from 'styled-components/native';
import { useDispatch } from 'react-redux';
import { fetchImages } from '../redux/AppState/appSlice';

const Container = styled.View`
  border: 1px solid gray;
  border-radius: 5px;
  flex-direction: row;
  height: 40px;
  width: 350px;
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
  align-items: center;
  justify-content: center;
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
