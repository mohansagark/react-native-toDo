import {Text, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {connect} from 'react-redux';
import {
  ADD_TO_SELECTED_LIST,
  REMOVE_FROM_SELECTED_LIST,
} from '../../../store/actions/types';

const ListItem = ({item, addToList, removeFromList, selectedList}) => {
  let quantity = selectedList?.find(itm => itm.id === item.id)?.quantity ?? 0;

  return (
    <View style={styles.container}>
      <Image source={{uri: item.thumbnail}} style={styles.thumbnail} />
      <View style={styles.quantityContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.counter}>
          <TouchableOpacity
            onPress={() => {
              removeFromList(item);
            }}
            style={styles.counterButton}>
            <Text style={styles.quantity}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            onPress={() => {
              addToList(item);
            }}
            style={styles.counterButton}>
            <Text style={styles.quantity}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.unitPriceContainer}>
        <Text style={styles.currency}>₹</Text>
        <Text style={styles.price}>{item.unit_price}</Text>
        <Text style={styles.measure}>{`per ${item.measure}`}</Text>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  selectedList: state.shoppingList.selectedItems,
});

const mapDispatchToProps = dispatch => ({
  addToList: item => {
    dispatch({type: ADD_TO_SELECTED_LIST, payload: item});
  },
  removeFromList: item => {
    dispatch({type: REMOVE_FROM_SELECTED_LIST, payload: item});
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
