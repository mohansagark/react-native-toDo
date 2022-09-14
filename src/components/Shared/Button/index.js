import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Button = ({onPress, value, isDestruct, secondary}) => {
  const getButtonType = () => {
    switch (true) {
      case isDestruct:
        return styles.destructButton;
      case secondary:
        return styles.secondaryButton;
      default:
        break;
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, getButtonType()]}>
      <Text style={[styles.buttonText, secondary && styles.blueText]}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
