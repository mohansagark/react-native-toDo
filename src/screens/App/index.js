import React from 'react';

import Main from '../Main';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Details from '../Details';
import MenuSelector from '../MenuSelector';
import Portfolio from '../Portfolio';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MenuSelector" component={MenuSelector} />
        <Stack.Screen name="Portfolio" component={Portfolio} />
        <Stack.Screen name="ToDo" component={Main} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
