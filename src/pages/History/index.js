import React, { useCallback, useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import DateTimePicker from 'react-native-modal-datetime-picker';
import api from '../../services/api';

import formatBytes from '../../utils/formatBytes';

import {
  Container,
  TitleButton,
  TitleText,
  WeekContainer,
  WeekContent,
  WeekDay,
  WeekDayText,
  Consume,
  ConsumeText,
  ErrorContainer,
  ErrorText,
  Form,
  Label,
  Button,
  ButtonText,
  DatePickerButton,
  Loading,
} from './styles';

const History = () => {
  const [startDate, setStartDate] = useState(() => {
    const lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    return format(lastWeek, 'yyy-MM-dd');
  });
  const [endDate, setEndDate] = useState(() => {
    const today = new Date();
    return format(today, 'yyy-MM-dd');
  });
  const [consumedDays, setConsumedDays] = useState([]);

  const [loading, setLoading] = useState(false);
  const [startPickerVisible, setStartPickerVisible] = useState(false);
  const [endPickerVisible, setEndPickerVisible] = useState(false);
  const [formIsVisible, setFormIsVisible] = useState(true);

  const loadConsumedDays = useCallback(async () => {
    setLoading(true);

    const response = await api.get('/usage/records/', {
      params: {
        startDate,
        endDate,
      },
    });

    setConsumedDays(response.data);
    setLoading(false);
    if (response.data.length > 0) {
      setFormIsVisible(false);
    }
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

  // load consumed data in the last 7 days
  useEffect(() => {
    loadConsumedDays();
  }, []); /* eslint-disable-line */

  const handleStartDateConfirm = useCallback(date => {
    setStartDate(format(date, 'yyyy-MM-dd'));

    setStartPickerVisible(false);
  }, []);

  const handleEndDateConfirm = useCallback(date => {
    setEndDate(format(date, 'yyy-MM-dd'));
    setEndPickerVisible(false);
  }, []);

  return (
    <Container>
      <TitleButton onPress={handleFormVisibility}>
        <Icon name="search" size={18} />
        <TitleText>Busque por dias personalizados</TitleText>
      </TitleButton>

      {formIsVisible && (
        <Form>
          <DatePickerButton onPress={() => setStartPickerVisible(true)}>
            <Icon name="calendar" size={20} />

            {startDate !== undefined ? (
              <Label>{formatDate(startDate)}</Label>
            ) : (
              <Label>Dia inicial</Label>
            )}
          </DatePickerButton>

          {startPickerVisible && (
            <DateTimePicker
              isVisible={startPickerVisible}
              minimumDate={new Date(2020, 1, 28)}
              maximumDate={new Date(2020, 7, 21)}
              mode="date"
              locale="pt_BR"
              onConfirm={handleStartDateConfirm}
              onCancel={() => setStartPickerVisible(false)}
            />
          )}

          <DatePickerButton onPress={() => setEndPickerVisible(true)}>
            <Icon name="calendar" size={20} />

            {endDate !== undefined ? (
              <Label>{formatDate(endDate)}</Label>
            ) : (
              <Label>Dia Final</Label>
            )}
          </DatePickerButton>
          {endPickerVisible && (
            <DateTimePicker
              isVisible={endPickerVisible}
              minimumDate={new Date(2020, 1, 28)}
              maximumDate={new Date(2020, 7, 21)}
              mode="date"
              locale="pt_BR"
              onConfirm={handleEndDateConfirm}
              onCancel={() => setEndPickerVisible(false)}
            />
          )}

          <Button>
            <ButtonText onPress={loadConsumedDays}>Buscar</ButtonText>
          </Button>
        </Form>
      )}

      <WeekContainer>
        <WeekContent>
          {loading && <Loading size="large" color="#555" />}
          {consumedDays.length === 0 && !loading ? (
            <ErrorContainer>
              <Icon name="exclamation-circle" size={40} color="#555" />
              <ErrorText>Nenhum registro encontrado.</ErrorText>
            </ErrorContainer>
          ) : (
            consumedDays.map(day => (
              <WeekDay key={day.date}>
                <WeekDayText>{formatDate(day.date)}</WeekDayText>

                <Consume>
                  <Icon name="phone" size={20} />
                  <ConsumeText>{day.voice} segundos</ConsumeText>
                </Consume>

                <Consume>
                  <Icon name="signal" size={20} />
                  <ConsumeText>{formatBytes(day.data)} MB</ConsumeText>
                </Consume>
              </WeekDay>
            ))
          )}
        </WeekContent>
      </WeekContainer>
    </Container>
  );
};

export default History;
