import React from 'react';
import {SafeAreaView} from 'react-native';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
//import { HelloWorldScreen } from './src/screens/HelloWorldScreen';
//import { CounterScreen } from './src/screens/CounterScreen';

export const App = () => {
  return (
    <SafeAreaView>
      {/* <HelloWorldScreen /> */}
      {/* <CounterScreen /> */}
      <BoxObjectModelScreen />
    </SafeAreaView>
  );
};
