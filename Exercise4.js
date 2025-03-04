import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.topBlackBox} />
        <View style={styles.topYellowBox} />
        <View style={styles.topBlackBox} />
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/tulisanUnklab.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.bottomRow}>
        <View style={styles.bottomBlackBox} />
        <View style={styles.bottomYellowBox} />
        <View style={styles.bottomBlackBox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 80,
    backgroundColor: 'red',
    paddingLeft: 20,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: 120,
    backgroundColor: 'blue',
  },
  topBlackBox: {
    backgroundColor: 'black',
    height: 70,
    width: 70,
    marginRight: 20,
  },
  topYellowBox: {
    backgroundColor: 'yellow',
    height: 70,
    width: 70,
    marginRight: 20,
  },
  bottomBlackBox: {
    backgroundColor: 'black',
    height: 95,
    width: 95,
  },
  bottomYellowBox: {
    backgroundColor: 'yellow',
    height: 95,
    width: 95,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 100,
  },
});

export default Flexbox;
