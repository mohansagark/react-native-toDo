import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Header = ({title, h1, h2, h3, h4, h5}) => {
  const getHeaderSize = () => {
    switch (true) {
      case h1:
        return styles.h1;

      case h2:
        return styles.h2;

      case h3:
        return styles.h3;

      case h4:
        return styles.h4;

      case h5:
        return styles.h5;

      default:
        break;
    }
  };
  return <Text style={[styles.headerStyle, getHeaderSize()]}>{title}</Text>;
};

export default Header;
