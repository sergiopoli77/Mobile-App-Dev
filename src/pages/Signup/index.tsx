import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import TextInput from '../../Components/molecules/TextInput';
import Button from '../../Components/atoms/Button';
import Gap from '../../Components/atoms/Gap';
import {ArrowBack, NullPhoto} from '../../assets';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const Signup = ({navigation}) => {
  const [photo, setPhoto] = useState(NullPhoto);

  const getImage = async () => {
    const result = await launchImageLibrary({
      maxHeight: 100,
      maxWidth: 100,
      quality: 0.5,
      includeBase64: true,
      mediaType: 'photo',
    });

    if (result.didCancel) {
      showMessage({
        message: 'Pilih foto dibatalkan',
        type: 'danger',
      });
    } else if (result.assets && result.assets.length > 0) {
      const asset = result.assets[0];
      const base64 = `data:${asset.type};base64,${asset.base64}`;
      const source = {uri: base64};
      setPhoto(source);
    } else {
      showMessage({
        message: 'Error selecting photo',
        type: 'danger',
      });
    }
  };

  return (
    <View style={styles.pageContainer}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <ArrowBack style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sign Up</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.profilContainer}>
          <TouchableOpacity style={styles.profil} onPress={getImage}>
            {photo.uri ? (
              <Image source={photo} style={styles.photo} />
            ) : (
              <View style={styles.add}>
                <Text style={styles.addLabel}>Add Photo</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <Gap height={36} />
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email Address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button
          label="Continue"
          onPress={() => {
            console.log('Navigating to SignIn');
            navigation.navigate('SignIn');
          }}
        />
        <Gap height={12} />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 43,
    paddingHorizontal: 24,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    marginLeft: 20,
  },
  profilContainer: {
    marginTop: 26,
    alignItems: 'center',
  },
  profil: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 130,
    width: 130,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
  },
  photo: {
    height: 130,
    width: 130,
    borderRadius: 100,
  },
  add: {
    backgroundColor: '#F0F0F0',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addLabel: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    width: 40,
    textAlign: 'center',
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
});
