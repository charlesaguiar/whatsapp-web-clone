import React from 'react';
import IProps from './IProps';

import { Container } from './styles';

const Avatar: React.FC<IProps> = ({ src, size }) => {
  return (
    <Container size={size}>
      <img src={src} alt="avatar" />
    </Container>
  );
}

export default Avatar;