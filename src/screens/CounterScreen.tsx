import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export const CounterScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {contador}</Text>
      <TouchableOpacity onPress={() => setContador(contador + 1)}>
        <View style={styles.buttonIncrement}>
          <Text>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
  buttonIncrement: {
    backgroundColor: 'salmon',
    borderRadius: 100,
  },
});
