import {FlatList, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {connect} from 'react-redux';
import Header from '../../../components/Shared/Header';
import {BackNavigator, Button} from '../../../components/Shared';

const Listing = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BackNavigator />
      <Header title={'Shopping List'} h2 />
      <FlatList style={styles.fullFlex} />
      <Button
        value={'Cart'}
        onPress={() => navigation.navigate('ShoppingCart')}
      />
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
