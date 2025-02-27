import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <Text>Flexbox</Text>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
