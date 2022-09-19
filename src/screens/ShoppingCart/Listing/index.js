import {FlatList, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {connect} from 'react-redux';
import Header from '../../../components/Shared/Header';
import {BackNavigator, Button} from '../../../components/Shared';
import {CartIcon, ListItem} from '../../../components/ShoppingCart';
import {showError} from '../../../helpers/utilityFunctions';

const Listing = ({navigation, availableItems, selectedItems}) => {
  const navigateToCart = () => {
    selectedItems.length > 0
      ? navigation.navigate('ShoppingCart')
      : showError('Cart is empty. Please add some items.');
  };
  return (
    <View style={styles.container}>
      <BackNavigator />
      <Header title={'Shopping List'} h2 />
      <CartIcon />
      <FlatList
        style={styles.fullFlex}
        data={availableItems}
        renderItem={({item}) => <ListItem item={item} />}
      />
      <Button value={'Cart'} onPress={navigateToCart} />
    </View>
  );
};

const mapStateToProps = state => ({
  availableItems: state.shoppingList.availableItems,
  selectedItems: state.shoppingList.selectedItems,
});

export default connect(mapStateToProps, null)(Listing);
