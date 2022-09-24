import {View, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../../components/Shared/Header';
import {connect} from 'react-redux';
import {BackNavigator} from '../../../components/Shared';
import {SummaryCard} from '../../../components/ShoppingCart';

const Cart = ({totalQuantity, totalCost}) => {
  return (
    <SafeAreaView style={styles.container}>
      <BackNavigator />
      <Header title={'Cart'} h2 />
      <SummaryCard />
      <View style={styles.totalBar}>
        <Header title={`Items: ${totalQuantity}`} h3 />
        <Header title={`Total cost: Rs. ${totalCost}`} h3 />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  totalQuantity: state.shoppingList.totalQuantity,
  totalCost: state.shoppingList.totalAmount,
});

export default connect(mapStateToProps, null)(Cart);
