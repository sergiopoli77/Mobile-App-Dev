import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redContainer} />
      <View style={styles.greenContainer} />
      <View style={styles.blueContainer} />
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  redContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
  greenContainer: {
    flex: 1,
    backgroundColor: 'green',
  },
  blueContainer: {
    flex: 1,
    backgroundColor: 'blue',
  },
});
