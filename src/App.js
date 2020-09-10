import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import './config/ReactotronConfig';

import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <Routes />
    </>
  );
};

export default App;
