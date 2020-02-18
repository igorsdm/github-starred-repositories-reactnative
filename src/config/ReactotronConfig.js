import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.0.115' })
    .useReactNative()
    .configure()
    .setAsyncStorageHandler(AsyncStorage)
    .connect();

  // eslint-disable-next-line no-console
  console.tron = tron;

  tron.clear();
}
