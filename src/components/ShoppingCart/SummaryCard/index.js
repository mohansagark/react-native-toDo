import {ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {connect} from 'react-redux';
import SummaryItem from '../SummaryItem';

const SummaryCard = ({selectedList}) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContainer}>
      {selectedList.map(item => (
        <SummaryItem key={item.id} item={item} />
      ))}
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  selectedList: state.shoppingList.selectedItems,
});

export default connect(mapStateToProps, null)(SummaryCard);
