import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const MenuSelector = ({navigation}) => {
  const menu = [
    {id: '#1', screenName: 'ToDo App', navigate: 'ToDo'},
    {id: '#2', screenName: 'Portfolio App', navigate: 'Portfolio'},
  ];

  const menuItem = ({item}) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => {
          navigation.navigate('Tabs', {screen: item.navigate});
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['green', '#234d17']}
          style={styles.menuItemContainer}>
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
