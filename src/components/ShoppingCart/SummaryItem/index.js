import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const SummaryItem = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.thumbnailView}>
        <Image style={styles.thumbnail} source={{uri: item.thumbnail}} />
        <Text style={styles.name}>{item.name}</Text>
      </View>

      <Text style={styles.breakDownView}>
        {`${item.unit_price} * ${item.quantity}`}
      </Text>

      <Text style={styles.amountView}>{item.unit_price * item.quantity}</Text>
    </View>
  );
};

export default SummaryItem;
