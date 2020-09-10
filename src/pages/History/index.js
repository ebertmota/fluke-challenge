import React, { useEffect, useCallback, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ProgressBar } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import api from '../../services/api';

import formatBytes from '../../utils/formatBytes';

import {
  Container,
  Description,
  WeekContainer,
  WeekDay,
  WeekDayText,
  Consume,
  ConsumeText,
  Form,
  Label,
  Button,
  ButtonText,
} from './styles';

const History = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [consumedDays, setConsumedDays] = useState([]);

  useEffect(() => {
    loadConsumedDays();
  });

  const loadConsumedDays = useCallback(async () => {
    const response = await api.get('/usage/records/', {
      params: {
        startDate: String(startDate),
        endDate: String(endDate),
      },
    });

    setConsumedDays(response.data);
  }, [startDate, endDate]);

  return (
    <Container>
      <Form>
        <Description>Busque por dias personalizados</Description>
        <Label>Dia inicial</Label>
        <DatePicker
          date={startDate}
          mode="date"
          style={{ width: 300 }}
          showIcon={false}
          placeholder="Selecione a data inicial"
          onDateChange={date => setStartDate(date)}
          customStyles={{
            dateInput: {
              borderRadius: 5,
            },
          }}
        />

        <Label>Dia final</Label>
        <DatePicker
          date={endDate}
          mode="date"
          style={{ width: 300 }}
          placeholder="Selecione a data final"
          onDateChange={date => setEndDate(date)}
          showIcon={false}
          customStyles={{
            dateInput: {
              borderRadius: 5,
            },
          }}
        />

        <Button>
          <ButtonText onPress={loadConsumedDays}>Buscar</ButtonText>
        </Button>
      </Form>

      <WeekContainer>
        {consumedDays.map(day => (
          <WeekDay key={day.date}>
            <WeekDayText>{day.date}</WeekDayText>
            <ProgressBar progress={0.5} color="#2b80ff" />

            <Consume>
              <Icon name="phone" size={20} />
              <ConsumeText>{day.voice} segundos</ConsumeText>
            </Consume>

            <Consume>
              <Icon name="signal" size={20} />
              <ConsumeText>{formatBytes(day.data)} MB</ConsumeText>
            </Consume>
          </WeekDay>
        ))}
      </WeekContainer>
    </Container>
  );
};

export default History;
