import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '10.0.2.2' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
