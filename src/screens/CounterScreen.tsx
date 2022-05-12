import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

export const CounterScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 40, top: -15}}>
        Counter: {contador}
      </Text>
      <Button title="Click" onPress={() => setContador(contador + 1)} />
    </View>
  );
};
