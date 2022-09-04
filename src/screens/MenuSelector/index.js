import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const MenuSelector = ({navigation}) => {
  const menu = [
    {id: '#1', screenName: 'ToDo App', navigate: 'ToDo'},
    {id: '#2', screenName: 'Portfolio App', navigate: 'Portfolio'},
  ];

  const menuItem = ({item}) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.menuItemContainer}
        onPress={() => {
          navigation.navigate('Tabs', {screen: item.navigate});
        }}>
        <Text style={styles.menuItemText}>{item.screenName}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={menu} renderItem={menuItem} />
    </View>
  );
};

export default MenuSelector;
