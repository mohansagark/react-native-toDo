import {View, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import styles from './styles';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {showError} from '../../../helpers/utilityFunctions';
Ionicons.loadFont();

const CartIcon = ({totalQuantity, selectedItems}) => {
  const navigation = useNavigation();
  const navigateToCart = () => {
    selectedItems.length > 0
      ? navigation.navigate('ShoppingCart')
      : showError('Cart is empty. Please add some items.');
  };
  return (
    <View style={styles.cart}>
      {totalQuantity > 0 && (
        <View style={styles.count}>
          <Text style={styles.countText}>{totalQuantity}</Text>
        </View>
      )}
      <Ionicons
        name="cart-sharp"
        color={'black'}
        size={25}
        onPress={navigateToCart}
      />
    </View>
  );
};
const mapStateToProps = state => ({
  totalQuantity: state.shoppingList.totalQuantity,
  selectedItems: state.shoppingList.selectedItems,
});

export default connect(mapStateToProps, null)(CartIcon);
