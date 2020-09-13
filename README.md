<h1 align="center">
  <img src="src/assets/logo.png" />
</h1>


|                             |                             |                                 |
| :-------------------------- | :-------------------------: | :-----------------------------: |
| ![01](https://user-images.githubusercontent.com/48302018/93027336-72767000-f5e2-11ea-8255-700b05bdaa3f.png) | ![02](https://user-images.githubusercontent.com/48302018/93027306-64c0ea80-f5e2-11ea-89fd-ce0031456d8d.png) | ![03](https://user-images.githubusercontent.com/48302018/93027343-7b674180-f5e2-11ea-8c05-2d945a61c32a.png) |
|                             |                             |                                 |


## Sobre
A partir da inscrição para a vaga de Front-end-Developer na <a href="https://flu.ke/">Fluke</a>, foi proposto um desafio com a seguinte descrição:
<br>
Crie um app usando React Native Init versão 0.61 ou mais recente (Não utilize o Expo) onde o usuário consiga acompanhar
seu consumo de dados e minutos na fluke de maneira instantânea, verificar o histórico de consumo dos dias passados e tirar
dúvidas numa tela de ajuda com dúvidas frequentes.


## Como Executar?

Você pode [Baixar o APK](https://github.com/ebertmota/fluke-challenge/releases) ou rodar o projeto em sua máquina.

<h3>Como rodar o projeto?</h3>
Primeiramente clone o repositório

```sh
  git clone https://github.com/ebertmota/fluke-challenge.git
```
Agora é só você entrar na pasta do projeto e baixar as dependências.
 
```sh
  cd flukeChallenge
```


```sh
  yarn 
 ```
 
 ou

```sh
  npm install
```


 
Com o seu [ambiente configurado para React Native](https://react-native.rocketseat.dev/)...

Se estiver usando o yarn

```sh
  yarn start
```
Se estiver usando o npm

```sh
  npm run start
```

## :bulb: Tecnologias Utilizadas
 
 * React Native
 * Styled-components
 * Reactotron


## Uso do Aplicativo

O App é divido em 3 telas Início, Histórico e Ajuda, sendo assim vamos listar seu uso separadamente.

### Início
Na tela principal você visualiza a quantidade de Gigas disponível na fluke e seu consumo atual. Esses dados são retornados na requisição:

```
GET - https://flukenator.herokuapp.com/usage/packageInformation/
```

Além disso temos um um círculo que representa o consumo total de seus dados, ou seja o progresso estára cheio quando você não tiver dados disponíveis.


### Histórico
Nessa tela você visualiza a quantidade de Gigas consumidos em uma faixa de tempo. Por padrão essa faixa é de 7 dias e o histórico nesse periodo é carregado automaticamente sempre que você inicia o App.
Você também pode filtrar por dias personalizados, passando o dia inicial e final do periodo desejado.

```
GET - https://flukenator.herokuapp.com/usage/records/?startDate=2020-08-01&endDate=2020-08-03
```

### Ajuda
No painel de ajuda você pode entrar em contato com o suporte da fluke via E-mail, ou Whatsapp. Os dois botões irão te redirecionar para o meio de comunicação com o uso do <a href="https://en.wikipedia.org/wiki/Deep_linking">Deep Linking</a>.

Você também pode visualizar as dúvidas frequentes sobre o aplicativo Fluke.


<br/>


---
Feito com :blue_heart: by Ebert Mota
