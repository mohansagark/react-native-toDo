import {View, Button} from 'react-native';
import React, {useState} from 'react';
import TaskForm from '../../components/Main/TaskForm';
import styles from './styles';
import TaskList from '../../components/Main/TaskList';

const Main = ({navigation}) => {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  const add = () => {
    let temp = [...list];
    let newTask = {
      name: task,
      id: '#' + temp.length,
      complete: false,
    };
    temp.push(newTask);
    setList(temp);
    setTask('');
  };

  const toggleStatus = id => {
    let reqItem = list.filter(item => item.id === id);
    reqItem.complete = true;
  };

  const markAllRead = () => null;

  return (
    <View style={styles.container}>
      <TaskForm task={task} updateTask={setTask} onAdd={add} />
      <Button title="Mark all as complete" onPress={markAllRead} />
      <TaskList list={list} onDone={toggleStatus} navigation={navigation} />
    </View>
  );
};

export default Main;
