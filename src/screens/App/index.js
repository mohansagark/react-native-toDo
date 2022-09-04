import React from 'react';
import Main from '../Main';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Details from '../Details';
import MenuSelector from '../MenuSelector';
import Portfolio from '../Portfolio';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {SafeAreaView} from 'react-native';
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

  return (
    <SafeAreaView style={styles.fullFlex}>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          <RootStack.Screen name="Menu Selector" component={MenuSelector} />
          <RootStack.Screen name="Tabs" component={RootTabScreens} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
