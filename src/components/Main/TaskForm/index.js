import React from 'react';
import {View, TextInput, Button, TouchableOpacity, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const TaskForm = props => {
  const {task, updateTask, onAdd, markAllRead} = props;
  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder="Type here..."
          style={styles.input}
          value={task}
          onChangeText={e => updateTask(e)}
          onSubmitEditing={onAdd}
        />
        <View style={styles.iconContainer}>
          <Ionicons
            style={styles.addIcon}
            name="add"
            onPress={onAdd}
            size={26}
            color={'#fff'}
          />
        </View>
      </View>
      <TouchableOpacity onPress={markAllRead} style={styles.markAllButton}>
        <Text style={styles.markAllText}>Mark all as complete</Text>
      </TouchableOpacity>
    </>
  );
};

export default TaskForm;
