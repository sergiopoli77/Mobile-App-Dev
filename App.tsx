import {Text, View, StyleSheet, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title1}>Basic React Native</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title2}>Hello ini Basic React Native</Text>
      </View>

      <Text style={styles.subTitle}> Image from local directory</Text>
      <Image style={styles.img1} source={require('./assets/logo.png')} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 10,
    padding: 50,
    margin: 20,
    borderRadius: 40,
  },
  title1: {
    fontSize: 30,
    color: 'yellow',
    fontWeight: '800',
  },
  title2: {
    fontSize: 30,
    color: 'white',
    fontWeight: '800',
  },
  subTitle: {
    fontSize: 30,
    color: 'black',
    fontWeight: '800',
  },
  img1: {
    height: 200,
    width: 200,
    marginLeft: 20,
  },
});
