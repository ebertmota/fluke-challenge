import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import ProgressCircle from 'react-native-progress-circle';

import {
  Container,
  Title,
  Description,
  Label,
  AvailableContainer,
} from './styles';

const Card = ({ subscription, available }) => {
  const [percent, setPercent] = useState(0);

  const calcPercent = useCallback(() => {
    const total = (available / subscription) * 100;
    setPercent(total);
  }, [subscription, available]);

  useEffect(() => {
    calcPercent();
  });

  return (
    <Container>
      <ProgressCircle
        percent={percent}
        radius={120}
        borderWidth={8}
        color="blue"
        shadowColor="gray"
        bgColor="#FFF"
      >
        <AvailableContainer>
          <Title>{available}</Title>
          <Label>gb</Label>
        </AvailableContainer>

        <Description>disponíveis</Description>
        <Description>de {subscription} gb</Description>
      </ProgressCircle>
    </Container>
  );
};

Card.propTypes = {
  subscription: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  available: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default Card;
