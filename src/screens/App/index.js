import React from 'react';
import {View, useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Provider} from 'react-redux';
import Toast from 'react-native-toast-message';

import {store} from '../../store/store';

import Main from '../Main';
import Counter from '../Counter';
import {ShoppingCart, ShoppingList} from '../ShoppingCart';
import {WeatherOverView} from '../Weather';
import Details from '../Details';
import MenuSelector from '../MenuSelector';
import Portfolio from '../Portfolio';

import styles from './styles';

Ionicons.loadFont();

const App = () => {
  const ToDoStack = createNativeStackNavigator();
  const PortfolioStack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const RootStack = createNativeStackNavigator();
  const ToDoStackScreen = () => {
    return (
      <ToDoStack.Navigator screenOptions={{headerShow: false}}>
        <ToDoStack.Screen
          name="Todo Screen"
          component={Main}
          options={{headerShown: false}}
        />
        <ToDoStack.Screen
          name="Details Screen"
          component={Details}
          options={{headerShown: false}}
        />
      </ToDoStack.Navigator>
    );
  };

  const PortfolioStackScreen = () => {
    return (
      <PortfolioStack.Navigator>
        <PortfolioStack.Screen
          name="Portfolio Screen"
          component={Portfolio}
          options={{headerShown: false}}
        />
      </PortfolioStack.Navigator>
    );
  };

  const RootTabScreens = ({navigation}) => {
    return (
      <Tab.Navigator
        initialRouteName="ToDo"
        screenOptions={() => ({
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          headerLeft: () => (
            <Ionicons
              name="chevron-back-outline"
              size={24}
              color={'#000'}
              style={styles.backButton}
              onPress={() => navigation.goBack(null)}
            />
          ),
        })}>
        <Tab.Screen
          name="ToDo"
          component={ToDoStackScreen}
          options={{
            tabBarIcon: ({size, color}) => (
              <Ionicons name={'albums'} size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Portfolio"
          component={PortfolioStackScreen}
          options={{
            tabBarIcon: ({size, color}) => (
              <Ionicons name={'person'} size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#261C2C',
    },
  };

  const CustomTheme = {
    dark: false,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: 'rgb(255, 255, 255)',
      text: 'rgb(28, 28, 30)',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };

  const scheme = useColorScheme();
  return (
    <View style={styles.fullFlex}>
      <Provider store={store}>
        <NavigationContainer
          theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
          <RootStack.Navigator screenOptions={{headerShown: false}}>
            <RootStack.Screen name="Menu Selector" component={MenuSelector} />
            <RootStack.Screen name="Tabs" component={RootTabScreens} />
            <RootStack.Screen name="Counter" component={Counter} />
            <RootStack.Screen name="ShoppingCart" component={ShoppingCart} />
            <RootStack.Screen name="ShoppingList" component={ShoppingList} />
            <RootStack.Screen name="Weather" component={WeatherOverView} />
          </RootStack.Navigator>
        </NavigationContainer>
        <Toast visibilityTime={2000} position={'bottom'} />
      </Provider>
    </View>
  );
};

export default App;
