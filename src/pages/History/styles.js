import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
`;

export const Description = styled.Text`
  font-size: 20px;
`;

export const WeekContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;

export const WeekDay = styled.View`
  margin: 5px 0px;
  border: 1px solid #2b80ff;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
`;

export const WeekDayText = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Consume = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const ConsumeText = styled.Text`
  margin-left: 10px;
`;

export const Form = styled.View`
  margin-bottom: 50px;
`;

export const Label = styled.Text`
  margin: 10px 0;
`;

export const Button = styled(RectButton)`
  background: #2b80ff;
  max-width: 300px;
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;
