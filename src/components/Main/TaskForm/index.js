import React from 'react';
import {View, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../Shared/Button';
import styles from './styles';

const TaskForm = props => {
  const {task, updateTask, onAdd, markAllRead, enableDelete, showButtons} =
    props;
  return (
    <View style={styles.container}>
      <View style={styles.inlineContainer}>
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
      {showButtons && (
        <View style={styles.buttonContainer}>
          <Button
            onPress={enableDelete}
            value={'Remove task'}
            isDestruct={true}
          />
          <View style={styles.dummyView} />
          <Button onPress={markAllRead} value={'Mark all as complete'} />
        </View>
      )}
    </View>
  );
};

export default TaskForm;
