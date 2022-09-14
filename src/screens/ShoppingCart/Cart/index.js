import {FlatList, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../../components/Shared/Header';
import {connect} from 'react-redux';
import {BackNavigator} from '../../../components/Shared';

const Cart = ({}) => {
  return (
    <View style={styles.container}>
      <BackNavigator />
      <Header title={'Cart'} h2 />
      <FlatList style={styles.fullFlex} />
      <View style={styles.totalBar}>
        <Header title={'Total'} h2 />
        <Header title={'Total'} h2 />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
