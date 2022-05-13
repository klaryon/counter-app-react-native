import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28C4D9',
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
  },
});
