import React, { useCallback } from 'react';
import { Alert, Linking } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  Content,
  Title,
  QuestionsContainer,
  QuestionBlock,
  QuestionTitle,
  AnswerText,
  Link,
  ContactButtonContainer,
  Button,
  ButtonText,
  ContactText,
} from './styles';

const Help = () => {
  const redirectToDownloadAppPage = useCallback(() => {
    Linking.openURL('https://flu.ke/baixarapp');
  }, []);

  const handleComposeMail = useCallback(async () => {
    Linking.openURL('mailto:sos@flukeoperadora.com.br');
  }, []);

  const handleWhatsapp = useCallback(() => {
    Linking.openURL(`whatsapp://send?phone=5516936180000`).catch(err => {
      Alert.alert(
        'Ops...',
        'Parece que você não tem o Whatsapp instalado em seu dispositivo.',
      );
    });
  }, []);
  return (
    <Container>
      <Content>
        <ContactText>será um prazer falar com você :)</ContactText>

        <ContactButtonContainer>
          <Button onPress={handleComposeMail}>
            <FeatherIcon name="mail" size={20} color="#FFF" />
            <ButtonText>E-mail</ButtonText>
          </Button>

          <Button onPress={handleWhatsapp}>
            <FontAwesomeIcon name="whatsapp" size={20} color="#FFF" />
            <ButtonText>Whatsapp</ButtonText>
          </Button>
        </ContactButtonContainer>

        <QuestionsContainer>
          <Title>Dúvidas frequentes</Title>

          <QuestionBlock>
            <QuestionTitle>O que é o Fluke App?</QuestionTitle>
            <AnswerText>
              O Fluke App é o aplicativo da Fluke. É por lá que você vai pedir e
              ativar seu chip, comprar seu pacote e acompanhar seu consumo como
              e quando você quiser, sempre que você precisar.
            </AnswerText>
          </QuestionBlock>

          <QuestionBlock>
            <QuestionTitle>
              O aplicativo da Fluke pode ser usado em IPads ou Tablets?
            </QuestionTitle>
            <AnswerText>
              Nós já estamos trabalhando para que o nosso aplicativo possa ser
              instalado em IPads e Tablets mas, no momento, ele só pode ser
              instalado em um celular.
            </AnswerText>
          </QuestionBlock>

          <QuestionBlock>
            <QuestionTitle>
              Como eu faço para baixar o aplicativo da Fluke?
            </QuestionTitle>
            <AnswerText>
              Para baixar o nosso aplicativo basta acessar o{' '}
              <Link onPress={redirectToDownloadAppPage}>
                Google Play ou a Apple Store
              </Link>
              , buscar por Fluke App e fazer o download do aplicativo de forma
              totalmente gratuita.
            </AnswerText>
          </QuestionBlock>

          <QuestionBlock>
            <QuestionTitle>
              Quem pode acessar o aplicativo da Fluke?
            </QuestionTitle>
            <AnswerText>
              Todos os clientes da Fluke podem acessar o aplicativo através do
              login e senha utilizados na hora do cadastro.
            </AnswerText>
          </QuestionBlock>

          <QuestionBlock>
            <QuestionTitle>
              Como eu faço o cadastro no aplicativo da Fluke?
            </QuestionTitle>
            <AnswerText>
              Para se cadastrar no nosso aplicativo basta fazer o download no{' '}
              <Link onPress={redirectToDownloadAppPage}>
                Google Play ou na Apple Store
              </Link>
              , abrir o aplicativo e clicar em quero ser fluke. Você será
              direcionado para a página de cadastro e já poderá se cadastrar
              para ser um de nossos clientes. É importante ressaltar que, na
              hora de se cadastrar, você deve usar o mesmo e-mail que recebeu o
              convite para ser cliente Fluke.
            </AnswerText>
          </QuestionBlock>

          <QuestionBlock>
            <QuestionTitle>
              Como eu acesso a minha conta da Fluke?
            </QuestionTitle>
            <AnswerText>
              Para acessar sua conta da Fluke basta abrir o aplicativo, clicar
              em já sou cliente, preencher os campos e-mail e senha e clicar em
              entrar. Pronto, você será direcionado para a página inicial do
              aplicativo.
            </AnswerText>
          </QuestionBlock>

          <QuestionBlock>
            <QuestionTitle>
              Onde eu vejo o meu consumo de dados móveis?
            </QuestionTitle>
            <AnswerText>
              Para ver o seu consumo de dados móveis basta acessar o nosso
              aplicativo, no menu inferior clicar em início, e na parte superior
              colocar meus dados. Você verá o seu consumo no formato gráfico
              indicando o quanto foi consumido e o quanto você ainda tem
              disponível.
            </AnswerText>
          </QuestionBlock>

          <QuestionBlock>
            <QuestionTitle>Onde eu vejo o meu saldo de ligações?</QuestionTitle>
            <AnswerText>
              Para ver o seu saldo de ligações basta acessar o nosso aplicativo,
              no menu inferior clicar em início, e na parte superior colocar
              meus minutos. Você verá o seu consumo no formato gráfico indicando
              o quanto foi consumido e o quanto você ainda tem disponível.
            </AnswerText>
          </QuestionBlock>

          <QuestionBlock>
            <QuestionTitle>
              Onde eu vejo a quantidade de SMS disponíveis?
            </QuestionTitle>
            <AnswerText>
              Para ver a quantidade de SMS disponíveis basta acessar o nosso
              aplicativo, no menu inferior clicar em início, e na parte superior
              colocar meus minutos. Você verá a quantidade de SMS disponíveis
              embaixo do gráfico do seu consumo de minutos.
            </AnswerText>
          </QuestionBlock>

          <QuestionBlock>
            <QuestionTitle>
              Onde eu consulto o dia de vencimento do meu pacote?
            </QuestionTitle>
            <AnswerText>
              Para consultar o dia de vencimento do seu pacote você pode acessar
              o nosso aplicativo, ir em início no menu inferior, selecionar meu
              pacote arrastando a tela para cima e a sua data de vencimento
              aparecerá na parte superior da tela.
            </AnswerText>
          </QuestionBlock>
        </QuestionsContainer>
      </Content>
    </Container>
  );
};

export default Help;
