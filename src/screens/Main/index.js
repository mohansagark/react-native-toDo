import {View, Text, TextInput, Button, FlatList} from 'react-native';
import React, {useState} from 'react';

const Main = () => {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  const add = () => {
    let temp = [...list];
    console.log(parseFloat('3.56'));
    let newTask = {
      name: task,
      id: '#' + temp.length,
      complete: false,
    };
    temp.push(newTask);
    setList(temp);
    setTask('');
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', flex: 4}}>
        <TextInput
          placeholder="Type here..."
          style={{padding: 10, flex: 8}}
          value={task}
          onChangeText={e => setTask(e)}
        />
        <Button style={{flex: 2}} title="Add" onPress={add} />
      </View>
      <View>
        <Button title="Mark all as complete" onPress={add} />
      </View>
      <View>
        <FlatList
          data={list}
          renderItem={({item}) => {
            return (
              <View key={item.id}>
                <Text>{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Main;
