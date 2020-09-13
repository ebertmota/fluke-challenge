import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  background: #fff;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: Quicksand-Regular;
  font-size: 24px;
  margin-bottom: 20px;
  padding: 5px 0;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const QuestionsContainer = styled.View`
  margin-top: 60px;
  padding: 0 20px;
`;
export const QuestionBlock = styled.View`
  margin: 20px 0;
`;
export const QuestionTitle = styled.Text`
  font-family: Quicksand-Regular;
  color: #222;
  font-size: 18px;
`;
export const AnswerText = styled.Text`
  font-family: Quicksand-Regular;
  margin: 10px 0;
  background: #f1f1f1;
  padding: 8px;
  color: #818181;
  border-radius: 4px;
  text-align: justify;
  font-size: 16px;
`;

export const Link = styled.Text`
  font-family: Quicksand-Medium;
  text-decoration: underline;
  color: #2b80ff;
`;

export const ContactText = styled.Text`
  font-family: Quicksand-Medium;
  width: 100%;
  font-size: 32px;
  padding: 20px;
`;

export const ContactButtonContainer = styled.View`
  flex-direction: row;
  margin: 10px 5px;
`;

export const Button = styled.TouchableOpacity`
  background: #2b80ff;
  padding: 10px;
  border-radius: 10px;
  width: 48%;
  margin: 10px 5px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: Quicksand-Regular;
  color: #fff;
  margin-left: 10px;
`;
