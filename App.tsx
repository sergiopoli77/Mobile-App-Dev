import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Basic React Native</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextInput style={styles.input} placeholder="Enter your email" />
        <TextInput style={styles.input} placeholder="Enter your password" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <Text style={styles.subTitle}>Image From URI</Text>
        <Image
          style={styles.img1}
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
        />
        <Text style={styles.subTitle}>Image From Local Directory</Text>
        <Image style={styles.img2} source={require('./assets/logo.png')} />
        <Text style={styles.subTitle}>Image From Base64</Text>
        <Image
          style={styles.img3}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
      </ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 5,
    padding: 20,
    margin: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 30,
    marginLeft: 20,
    fontWeight: '500',
    marginBottom: 10,
    padding: 0,
    marginTop: 20,
    color: 'black',
  },
  img1: {
    height: 300,
    width: 300,
    marginLeft: 20,
  },
  img2: {
    marginLeft: 20,
    height: 233,
    width: 233,
  },
  img3: {
    marginLeft: 20,
    height: 233,
    width: 233,
  },
  input: {
    borderColor: 'black',
    borderWidth: 3,
    margin: 20,
    fontSize: 30,
    borderRadius: 20,
    padding: 15,
  },
  button: {
    backgroundColor: 'green',
    margin: 20,
    padding: 30,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
});
