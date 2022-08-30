import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const Details = ({route}) => {
  const {task} = route.params;
  return (
    <View style={styles.container}>
      <Text>{task.name} screen comes here</Text>
    </View>
  );
};

export default Details;
