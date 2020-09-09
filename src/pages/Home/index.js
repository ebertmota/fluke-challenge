import React from 'react';
import { Text } from 'react-native';

import logo from '../../assets/logo.png';

import Card from '../../components/Card';

import { Container, Image } from './styles';

const Home = () => {
  return (
    <Container>
      <Image source={logo} />
      <Text>meus dados</Text>

      <Card />
    </Container>
  );
};

export default Home;
