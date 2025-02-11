import {Text, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.title1}>Basic React Native</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.title2}> Basic React Native 2</Text>
      </View>
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
    color: 'blue',
    fontWeight: '800',
  },
});
