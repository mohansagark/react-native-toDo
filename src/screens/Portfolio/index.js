import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Portfolio = ({navigation}) => {
  const [profilePhoto, setProfilePhoto] = useState('');

  const openCamera = async () => {
    const result = await launchCamera();
  };

  const openLibrary = async () => {
    const result = await launchImageLibrary();
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.profileImage}
          source={require('../../assets/ProfilePictureJPG.jpeg')}
        />
      </View>
      <View style={styles.pickerContainer}>
        <TouchableOpacity style={styles.editTocuh} onPress={openCamera}>
          <Text style={styles.editText}>Open Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.editTocuh} onPress={openLibrary}>
          <Text style={styles.editText}>Open Library</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Portfolio;
