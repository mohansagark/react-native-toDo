import {View} from 'react-native';
import React, {useState} from 'react';
import TaskForm from '../../components/Main/TaskForm';
import styles from './styles';
import TaskList from '../../components/Main/TaskList';
import {showInfo, showSuccess} from '../../helpers/utilityFunctions';

const Main = () => {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);
  const [showRemove, setShowRemove] = useState(false);

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

  const removeTask = id => {
    let temp = [...list];
    let result = temp.filter(item => item.id !== id);
    setList(result);
    showSuccess('Task is removed');
  };

  return (
    <View style={styles.container}>
      <TaskForm
        task={task}
        updateTask={setTask}
        onAdd={add}
        markAllRead={markAllRead}
        enableDelete={() => setShowRemove(!showRemove)}
        showButtons={list?.length > 0}
      />
      <TaskList
        list={list}
        onDone={toggleStatus}
        removeTask={removeTask}
        showRemove={showRemove}
      />
    </View>
  );
};

export default Main;
