import React, { useCallback, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { ProgressBar } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import api from '../../services/api';

import formatBytes from '../../utils/formatBytes';

import {
  Container,
  TitleButton,
  TitleText,
  WeekContainer,
  WeekDay,
  WeekDayText,
  Consume,
  ConsumeText,
  Form,
  Label,
  Button,
  ButtonText,
  DatePickerButton,
} from './styles';

const History = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const [startPicker, setStartPicker] = useState(false);
  const [endPicker, setEndPicker] = useState(false);
  const [consumedDays, setConsumedDays] = useState([]);
  const [formIsVisible, setFormIsVisible] = useState(false);

  // const loadConsumedDays = useCallback(async () => {

  // }, [startDate, endDate]);

  const loadConsumedDays = useCallback(async () => {
    const response = await api.get('/usage/records/', {
      params: {
        startDate: String(startDate),
        endDate: String(endDate),
      },
    });

    setConsumedDays(response.data);
    setFormIsVisible(false);
  }, [startDate, endDate]);

  const handleFormVisibility = useCallback(() => {
    setFormIsVisible(!formIsVisible);
  }, [formIsVisible]);

  const formatDate = useCallback(date => {
    const formated = parseISO(date);
    const result = format(formated, "'Dia' dd 'de' MMMM 'de' yyyy", {
      locale: ptBR,
    });

    return result;
  }, []);

  return (
    <Container>
      <TitleButton onPress={handleFormVisibility}>
        <Icon name="search" size={18} />
        <TitleText>Busque por dias personalizados</TitleText>
      </TitleButton>

      {formIsVisible && (
        <Form>
          <DatePickerButton onPress={() => setStartPicker(true)}>
            <Icon name="calendar" size={20} />

            {startDate !== undefined ? (
              <Label>{formatDate(startDate)}</Label>
            ) : (
              <Label>Dia inicial</Label>
            )}
          </DatePickerButton>

          {startPicker && (
            <DateTimePicker
              testID="startDatePicker"
              value={new Date()}
              mode="date"
              display="default"
              locale="pt-br"
              onChange={(event, date) =>
                setStartDate(format(date, 'yyyy-MM-dd'))
              }
            />
          )}

          <DatePickerButton onPress={() => setEndPicker(true)}>
            <Icon name="calendar" size={20} />

            {endDate !== undefined ? (
              <Label>{formatDate(endDate)}</Label>
            ) : (
              <Label>Dia Final</Label>
            )}
          </DatePickerButton>
          {endPicker && (
            <DateTimePicker
              testID="endDatePicker"
              value={new Date()}
              mode="date"
              is24Hour
              display="default"
              onChange={(event, date) => setEndDate(format(date, 'yyyy-MM-dd'))}
            />
          )}

          <Button>
            <ButtonText onPress={loadConsumedDays}>Buscar</ButtonText>
          </Button>
        </Form>
      )}

      <WeekContainer>
        {consumedDays.map(day => (
          <WeekDay key={day.date}>
            <WeekDayText>{formatDate(day.date)}</WeekDayText>
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
