import React from 'react';
import {View, FlatList} from 'react-native';
import TaskItem from '../TaskItem';
import styles from './styles';

const TaskList = props => {
  const {list, onDone, navigation} = props;

  const loadItem = ({item}) => (
    <TaskItem task={item} navigation={navigation} toggleStatus={onDone} />
  );
  return (
    <View style={styles.container}>
      <FlatList data={list} renderItem={loadItem} />
    </View>
  );
};

export default TaskList;
