import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Fontisto';
import styles from './styles';
Icon.loadFont();

const TaskItem = props => {
  const {task, toggleStatus} = props;

  return (
    <TouchableOpacity
      onPress={() => toggleStatus(task)}
      style={styles.container}
      key={task.id}>
      <Text style={task.complete && styles.taskTitle}>{task.name}</Text>
      <Icon
        name={task.complete ? 'checkbox-active' : 'checkbox-passive'}
        color={'green'}
        size={20}
      />
    </TouchableOpacity>
  );
};

export default TaskItem;
