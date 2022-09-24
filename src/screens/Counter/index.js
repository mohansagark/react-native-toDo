import {SafeAreaView, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../components/Shared/Header';
import Button from '../../components/Shared/Button';
import {connect} from 'react-redux';
import {DECREMENT_COUNTER, INCREMENT_COUNTER} from '../../store/actions/types';
import {BackNavigator} from '../../components/Shared';

const Counter = ({onDecrement, onIncrement, count}) => {
  return (
    <SafeAreaView style={styles.container}>
      <BackNavigator top={45} />
      <Header title={'Counter'} h2 />
      <View style={styles.appContainer}>
        <Button value={'-'} onPress={onDecrement} />
        <Header title={count} h2 />
        <Button value={'+'} onPress={onIncrement} />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  count: state.counter.count,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: () => {
    dispatch({type: INCREMENT_COUNTER});
  },
  onDecrement: () => {
    dispatch({type: DECREMENT_COUNTER});
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
