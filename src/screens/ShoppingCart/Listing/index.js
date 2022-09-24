import {FlatList, SafeAreaView, View} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {connect} from 'react-redux';
import Header from '../../../components/Shared/Header';
import {BackNavigator, Button} from '../../../components/Shared';
import {CartIcon, ListItem} from '../../../components/ShoppingCart';
import {showError} from '../../../helpers/utilityFunctions';
import {getProducts} from '../../../store/actions/shoppingList.actions';

const Listing = ({
  navigation,
  availableItems,
  selectedItems,
  getProductsList,
}) => {
  useEffect(() => {
    getProductsList();
  }, [getProductsList]);

  const navigateToCart = () => {
    selectedItems.length > 0
      ? navigation.navigate('ShoppingCart')
      : showError('Cart is empty. Please add some items.');
  };
  return (
    <SafeAreaView style={styles.container}>
      <BackNavigator />
      <Header title={'Shopping List'} h2 />
      <CartIcon />
      <FlatList
        style={styles.fullFlex}
        data={availableItems}
        renderItem={({item}) => <ListItem item={item} />}
      />
      <Button value={'Cart'} onPress={navigateToCart} />
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  availableItems: state.shoppingList.availableItems,
  selectedItems: state.shoppingList.selectedItems,
});

const mapDispatchToProps = dispatch => ({
  getProductsList: () => {
    dispatch(getProducts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
