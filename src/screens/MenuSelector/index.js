import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const MenuSelector = ({navigation}) => {
  const menu = [
    {id: '#1', screenName: 'ToDo App', navigate: 'ToDo', root: false},
    {id: '#2', screenName: 'Portfolio App', navigate: 'Portfolio', root: false},
    {id: '#3', screenName: 'Counter App', navigate: 'Counter', root: true},
    {
      id: '#4',
      screenName: 'Shopping App',
      navigate: 'ShoppingList',
      root: true,
    },
    {
      id: '#5',
      screenName: 'Weather App',
      navigate: 'Weather',
      root: true,
    },
  ];

  const menuItem = ({item}) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => {
          item.root
            ? navigation.navigate(item.navigate)
            : navigation.navigate('Tabs', {screen: item.navigate});
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#12c2e9', '#c471ed', '#f64f59']}
          style={styles.gradient}>
          <Text style={styles.menuItemText}>{item.screenName}</Text>
        </LinearGradient>
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
