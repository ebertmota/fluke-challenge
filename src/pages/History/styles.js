import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #fff;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
`;

export const TitleButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
`;

export const TitleText = styled.Text`
  margin-left: 8px;
  font-size: 20px;
`;

export const WeekContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;

export const WeekDay = styled.View`
  margin: 5px 0px;
  border: 1px solid #b9b9b9;
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
  width: 100%;
  max-width: 600px;
  padding: 20px;

  justify-content: center;
`;

export const DatePickerButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background: #fff;
  margin: 10px 0;
  padding: 5px 10px;
  border-radius: 8px;
  border: 1px solid #b9b9b9;
`;

export const Label = styled.Text`
  font-size: 16px;
  margin: 10px 8px;
  color: #666;
`;

export const Button = styled(RectButton)`
  background: #2b80ff;
  width: 100%;
  margin: 10px auto;
  padding: 15px;
  border-radius: 8px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
`;
