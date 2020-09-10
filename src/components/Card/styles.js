import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 20px;
  width: 80%;
  height: 55%;
  border-radius: 8px;
  padding: 10px;
  background: rgba(0, 172, 238, 0.4);
  align-items: center;
  justify-content: center;
`;

export const AvailableContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 65px;
`;

export const Label = styled.Text`
  font-size: 18px;
  margin-left: 2px;
  margin-top: 35px;
`;

export const Description = styled.Text`
  font-size: 16px;
`;

export const BottomInformationText = styled.Text`
  font-size: 16px;
  margin-top: 30px;
`;
