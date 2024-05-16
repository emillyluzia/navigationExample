
import React from 'react';
import Home from './src/screens/Home';
import PesquisarProduto from './src/screens/PesquisarProduto';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './src/screens/Profile';
import EditarProdutos from './src/screens/EditarProdutos';

const Stack = createStackNavigator();


function App(): React.JSX.Element {
 
  return (
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name='Home' 
          component={Home} options={{ headerShown:false }}/>

          <Stack.Screen name='Profile'
          component={Profile} options={{ headerShown:false }}/>

          <Stack.Screen name='PesquisaProduto'
          component={PesquisarProduto} options={{ headerShown:false }}/>

          <Stack.Screen name='EditarProduto'
          component={EditarProdutos} options={{ headerShown:false }}/>

        </Stack.Navigator>
      </NavigationContainer>
    );
  
  }

 

export default App;
