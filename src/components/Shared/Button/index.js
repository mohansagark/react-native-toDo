import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Button = ({onPress, value, isDestruct}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, isDestruct && styles.destructButton]}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
};

export default Button;
