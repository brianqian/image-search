import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: ${(p) => p.h + 30}px;
  max-height: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const StyledImage = styled.Image`
  height: ${(p) => p.h}px;
  width: ${(p) => p.w}px;
  flex: 1;
`;

function ImageContainer({ navigate, img, h, w, src }) {
  const [image, setImage] = useState({ h, w, src });

  const handleError = (e) => {
    // the pixabay API often has broken links for webformat and large variants
    // the preview image is consistent and used as a fallback

    if (e?.nativeEvent?.error) {
      setImage({
        src: img.previewURL,
        h: img.previewHeight,
        w: img.previewWidth,
      });
    }
  };

  return (
    <Container onPress={!!navigate && navigate} h={image.h}>
      <StyledImage source={{ uri: image.src }} h={image.h} w={image.w} onError={handleError} />
    </Container>
  );
}

export default React.memo(ImageContainer);
