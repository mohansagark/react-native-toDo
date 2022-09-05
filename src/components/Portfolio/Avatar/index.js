import {View, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const Avatar = ({image}) => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.profileImage} source={{uri: image}} />
    </View>
  );
};

export default Avatar;
