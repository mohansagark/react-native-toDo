import {View, Button} from 'react-native';
import React, {useState} from 'react';
import TaskForm from '../../components/Main/TaskForm';
import styles from './styles';
import TaskList from '../../components/Main/TaskList';
import {showInfo, showSuccess} from '../../helpers/utilityFunctions';

const Main = ({navigation}) => {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  const add = () => {
    let temp = [...list];
    let newTask = {
      name: task,
      id: '#' + temp.length,
      complete: false,
      date: new Date(),
    };
    temp.push(newTask);
    if (task.trim()) {
      setList(temp);
      setTask('');
      showSuccess('New task added');
    }
  };

  const toggleStatus = t => {
    let temp = [...list];

    for (let i in temp) {
      if (temp[i].id === t.id) {
        temp[i].complete = !temp[i].complete;
        break;
      }
    }
    setList(temp);
    showInfo(`Task marked as ${t.complete ? 'complete' : 'incomplete'}`);
  };

  const markAllRead = () => {
    let temp = [...list];

    for (let i in temp) {
      temp[i].complete = true;
    }
    setList(temp);
  };

  return (
    <View style={styles.container}>
      <TaskForm
        task={task}
        updateTask={setTask}
        onAdd={add}
        markAllRead={markAllRead}
      />
      <TaskList list={list} onDone={toggleStatus} navigation={navigation} />
    </View>
  );
};

export default Main;
