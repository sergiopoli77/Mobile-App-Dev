import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const App = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Biodata</Text>
      <Image style={styles.image} source={require('./assets/profil.jpeg')} />

      <View style={styles.container}>
        <Text style={styles.label}>Nama:</Text>
        <Text style={styles.info}>Sergio Poli</Text>

        <Text style={styles.label}>Umur:</Text>
        <Text style={styles.info}>20 Tahun</Text>

        <Text style={styles.label}>Tempat, Tanggal Lahir:</Text>
        <Text style={styles.info}>Tomohon, 12 September</Text>

        <Text style={styles.label}>Asal:</Text>
        <Text style={styles.info}>Tomohon</Text>

        <Text style={styles.label}>Fakultas:</Text>
        <Text style={styles.info}>Informatika</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    borderRadius: 75,
    alignSelf: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
    padding: 20,
    margin: 20,
    color: 'black',
  },
  container: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#f8f8f8',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default App;
