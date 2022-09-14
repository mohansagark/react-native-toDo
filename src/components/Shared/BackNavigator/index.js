import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
Ionicons.loadFont();

const BackNavigator = ({navigate}) => {
  const navigation = useNavigation();
  const clickMethod = () => {
    if (navigate) {
      navigation.navigate(navigate);
    } else {
      navigation.goBack(null);
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={clickMethod}>
      <Ionicons name={'arrow-back-sharp'} size={30} color={'#000'} />
    </TouchableOpacity>
  );
};

export default BackNavigator;
