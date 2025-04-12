import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './context/AuthContext';
import HomeScreen from './screens/HomeScreen';
import ChecklistDetailScreen from './screens/ChecklistDetailScreen';
import AuthScreen from './screens/AuthScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen 
            name="Auth" 
            component={AuthScreen} 
            initialParams={{ type: 'login' }}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen 
            name="ChecklistDetail" 
            component={ChecklistDetailScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}