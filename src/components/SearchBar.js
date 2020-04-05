import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  height: 75px;
  border: 1px solid gray;
  margin: 10px;
  width: 200px;
`;

const StyledInput = styled.TextInput`
  flex: 1;
  align-self: flex-start;
  border: 1px solid green;
  width: 100%;
`;

const StyledButton = styled.Button`
  flex: 1;
  align-self: flex-end;
`;

function SearchBar({ search }) {
  const [value, setValue] = useState('');

  const handleChange = (text) => {
    setValue(text);
  };
  const handleSubmit = () => {
    search({ param: value });
    Keyboard.dismiss();
  };

  return (
    <Container>
      <StyledInput onChangeText={handleChange} value={value} />
      <StyledButton onPress={handleSubmit} title="Search">
        Search
      </StyledButton>
    </Container>
  );
}

export default SearchBar;
