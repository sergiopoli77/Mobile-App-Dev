import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

const App = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.title1}>Basic React Native</Text>
        </View>

        <Text style={styles.subTitle}> Image from local directory</Text>
        <Image style={styles.img1} source={require('./assets/logo.png')} />

        <Text style={styles.subTitle}> Image from URL </Text>
        <Image
          style={styles.img2}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        />
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20, // Optional: add padding for better space
  },
  container: {
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 10,
    padding: 30,
    margin: 10,
    borderRadius: 40,
  },
  title1: {
    fontSize: 30,
    color: 'yellow',
    fontWeight: '800',
  },
  subTitle: {
    fontSize: 25,
    color: 'black',
    fontWeight: '800',
    marginTop: 20, 
  },
  img1: {
    height: 150,
    width: 150,
    marginLeft: 20,
    borderRadius: 40,
  },
  img2: {
    height: 200,
    width: 200,
    marginLeft: 0,
    borderRadius: 0,
  },
});
