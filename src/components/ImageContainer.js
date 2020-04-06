import React from 'react';
import styled from 'styled-components';

const Container = styled.TouchableOpacity`
  align-items: center;
  height: ${(p) => p.h + 15}px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom-width: 1px;
  border-bottom-color: gray;
`;

const StyledImage = styled.Image`
  height: ${(p) => p.h + 75}px;
  width: ${(p) => p.w + 75}px;
  flex: 1;
`;

function ImageContainer({ navigate, img }) {
  return (
    <Container onPress={() => navigate(img)} h={img.previewHeight}>
      <StyledImage
        source={{
          uri: img.previewURL,
        }}
        h={img.previewHeight}
        w={img.previewWidth}
      />
    </Container>
  );
}

export default React.memo(ImageContainer);
