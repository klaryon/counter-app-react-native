import React from 'react';
import {SafeAreaView} from 'react-native';
import { PositionScreen } from './src/screens/PositionScreen';
//import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
//import { DimensionsScreen } from './src/screens/DimensionsScreen';
//import { HelloWorldScreen } from './src/screens/HelloWorldScreen';
//import { CounterScreen } from './src/screens/CounterScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HelloWorldScreen /> */}
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      <PositionScreen />
    </SafeAreaView>
  );
};
