import React from 'react';
import {View, FlatList} from 'react-native';
import TaskItem from '../TaskItem';
import moment from 'moment';
import styles from './styles';

const TaskList = props => {
  const {list, onDone, navigation} = props;

  const loadItem = ({item}) => (
    <TaskItem task={item} navigation={navigation} toggleStatus={onDone} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={list
          .filter(task => {
            return (
              moment(task.date).date() >= moment().subtract(1, 'day').date() ||
              !task.complete
            );
          })
          .sort((a, b) => a.complete - b.complete)}
        renderItem={loadItem}
      />
    </View>
  );
};

export default TaskList;
