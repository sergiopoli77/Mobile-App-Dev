import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

const Button = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Masukkan username anda"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Masukkan password anda"
        secureTextEntry={true}
      />

      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Masukkan address anda"
        secureTextEntry={true}
      />

      <TouchableOpacity activeOpacity={0.5} style={styles.button1}>
        <Text style={styles.textButton}>Sign in with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.5} style={styles.button2}>
        <Text style={styles.textButton}>Sign in with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.5} style={styles.button3}>
        <Text style={styles.textButton}>Sign in with Apple</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  textInput: {
    height: 65,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  button1: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  button2: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  button3: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  textButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    height: 35,
  },
});
