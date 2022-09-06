import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Fontisto';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import styles from './styles';
Icon.loadFont();
Ionicons.loadFont();

const TaskItem = props => {
  const {task, toggleStatus, showRemove, removeTask} = props;

  return (
    <TouchableOpacity
      onPress={() => toggleStatus(task)}
      style={styles.container}
      key={task.id}>
      <Text style={[task.complete && styles.taskTitle, styles.task]}>
        {task.name}
      </Text>
      <View style={styles.utilityContainer}>
        {showRemove ? (
          <Ionicons
            style={styles.binMargin}
            name="trash-bin-sharp"
            color={'red'}
            size={20}
            onPress={() => removeTask(task.id)}
          />
        ) : (
          <View style={styles.dummyView} />
        )}
        <Icon
          name={task.complete ? 'checkbox-active' : 'checkbox-passive'}
          color={'green'}
          size={20}
        />
      </View>
    </TouchableOpacity>
  );
};

export default TaskItem;
