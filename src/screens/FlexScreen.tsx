import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Box 1</Text>
      <Text style={styles.box2}>Box 2</Text>
      <Text style={styles.box3}>Box 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
  },
  box1: {
    flex: 3, // 3 + 2 + 2 = 6
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  box2: {
    flex: 2, // 3 + 2 + 2 = 6
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  box3: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
});
