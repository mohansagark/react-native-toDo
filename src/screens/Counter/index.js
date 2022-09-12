import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../components/Shared/Header';
import Button from '../../components/Shared/Button';
import {connect} from 'react-redux';
import {DECREMENT_COUNTER, INCREMENT_COUNTER} from '../../store/actions/types';

const Counter = ({onDecrement, onIncrement, count}) => {
  console.log(count);
  return (
    <View style={styles.container}>
      <Header title={'Counter'} h2 />
      <View style={styles.appContainer}>
        <Button value={'-'} onPress={onDecrement} />
        <Header title={count} h2 />
        <Button value={'+'} onPress={onIncrement} />
      </View>
    </View>
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
