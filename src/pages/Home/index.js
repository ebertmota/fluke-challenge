import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import formatMegabytes from '../../utils/formatMegabytes';

import logo from '../../assets/logo.png';

import Card from '../../components/Card';

import { Container, Image, Title } from './styles';

const Home = () => {
  const [subscriptionData, setSubscriptionData] = useState(0);
  const [availableData, setAvailableData] = useState(0);

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/usage/packageinformation');

      const { subscription, topup, bonus, available } = response.data;

      setAvailableData(formatMegabytes(available));

      const totalSubscriptionData = topup + bonus + subscription;
      setSubscriptionData(formatMegabytes(totalSubscriptionData));
    }

    loadData();
  }, []);

  return (
    <Container>
      <Image source={logo} />
      <Title>meus dados</Title>

      <Card subscription={subscriptionData} available={availableData} />
    </Container>
  );
};

export default Home;
