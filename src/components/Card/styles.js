import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 20px;
  width: 80%;
  height: 55%;
  border-radius: 8px;
  padding: 10px;
  background: rgba(43, 128, 255, 0.3);
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
  font-family: Quicksand-Regular;
`;

export const Label = styled.Text`
  font-family: Quicksand-Regular;
  font-size: 18px;
  margin-left: 2px;
  margin-top: 35px;
`;

export const Description = styled.Text`
  font-family: Quicksand-Regular;
  font-size: 16px;
`;

export const BottomInformationText = styled.Text`
  font-family: Quicksand-Regular;
  font-size: 16px;
  margin-top: 30px;
`;
