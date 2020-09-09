import React from 'react';

import {
  Container,
  Title,
  Description,
  Label,
  AvailableContainer,
} from './styles';

const Card = () => {
  return (
    <Container>
      <AvailableContainer>
        <Title>1.6</Title>
        <Label>gb</Label>
      </AvailableContainer>

      <Description>disponíveis</Description>
    </Container>
  );
};

export default Card;
