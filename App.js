import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Header from './src/screens/Header'
const Stack = createStackNavigator();
console.disableYellowBox = true;

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerTitle: () => <Header /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
