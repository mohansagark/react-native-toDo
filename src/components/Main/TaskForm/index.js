import React from 'react';
import {View, TextInput, Button} from 'react-native';
import styles from './styles';

const TaskForm = props => {
  const {task, updateTask, onAdd} = props;
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type here..."
        style={styles.input}
        value={task}
        onChangeText={e => updateTask(e)}
      />
      <Button style={styles.button} title="Add" onPress={onAdd} />
    </View>
  );
};

export default TaskForm;
