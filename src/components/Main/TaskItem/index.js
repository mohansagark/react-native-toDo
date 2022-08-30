import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const TaskItem = props => {
  const {task, toggleStatus, navigation} = props;

  const onNavigate = t => {
    toggleStatus(task.id);
    navigation.navigate('Details', {task: t});
  };

  return (
    <TouchableOpacity
      onPress={() => onNavigate(task)}
      style={styles.container}
      key={task.id}>
      <Text>{task.name}</Text>
    </TouchableOpacity>
  );
};

export default TaskItem;
