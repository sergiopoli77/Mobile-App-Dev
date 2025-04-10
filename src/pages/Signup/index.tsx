import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../Components/molecules/Header';
import TextInput from '../../Components/molecules/TextInput';
import Button from '../../Components/atoms/Button';
import Gap from '../../Components/atoms/Gap';

const Signup = () => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Sign Up" />
      <View style={styles.contentContainer}>
        <Gap height={26} />
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email Address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Continue" />
        <Gap height={12} />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
});
