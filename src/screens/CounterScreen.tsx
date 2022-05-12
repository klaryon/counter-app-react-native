import React, {useState} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';

export const CounterScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 40, top: -15}}>
        Counter: {contador}
      </Text>
      <TouchableOpacity onPress={() => setContador(contador + 1)}>
        <View style={{backgroundColor: 'salmon', borderRadius: 100}}>
          <Text>Click Me!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
