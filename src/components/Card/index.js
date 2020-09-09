import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import ProgressCircle from '../ProgressCircle';

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
    const availablePercent = (available / subscription) * 100;
    const consumedPercent = 100 - availablePercent;
    const formattedConsumedPercent = Number((consumedPercent / 100).toFixed(4));

    // console.tron.log(`ConsumedPercent ${formattedConsumedPercent}`);

    setPercent(formattedConsumedPercent);
  }, [subscription, available]);

  useEffect(() => {
    if (subscription > 0 && available > 0) {
      calcPercent();
    }
  }, [subscription, available, calcPercent]);

  return (
    <Container>
      <ProgressCircle
        value={percent}
        size={220}
        thickness={5}
        color="#2b80ff"
        unfilledColor="#f2f2f2"
        animationMethod="spring"
        animationConfig={{ speed: 4 }}
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
