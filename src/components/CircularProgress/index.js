import React from 'react';
import PropTypes from 'prop-types';
import { Container, ProgressLayer } from './styles';

const CircularProgress = ({ children }) => {
  return (
    <Container>
      <ProgressLayer />
      {children}
    </Container>
  );
};

CircularProgress.propTypes = {
  children: PropTypes.any.isRequired,
};

export default CircularProgress;
