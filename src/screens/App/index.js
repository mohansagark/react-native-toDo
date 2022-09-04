import React from 'react';
import Main from '../Main';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Details from '../Details';
import MenuSelector from '../MenuSelector';
import Portfolio from '../Portfolio';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  const ToDoStack = createNativeStackNavigator();
  const PortfolioStack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const ToDoStackScreen = () => {
    return (
      <ToDoStack.Navigator>
        <ToDoStack.Screen name="Todo" component={Main} />
        <ToDoStack.Screen name="Details" component={Details} />
      </ToDoStack.Navigator>
    );
  };

  const PortfolioStackScreen = () => {
    return (
      <PortfolioStack.Navigator>
        <PortfolioStack.Screen name="Portfolio" component={Portfolio} />
      </PortfolioStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="ToDo"
          component={ToDoStackScreen}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }

              // You can return any component that you like here!
              return <Ionicons name="md-person-circle-outline" size={24} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        />
        <Tab.Screen name="Portfolio" component={PortfolioStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
