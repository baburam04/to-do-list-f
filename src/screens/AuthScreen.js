import React, { useState } from 'react';
import { View } from 'react-native';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import { useAuth } from '../context/AuthContext';

const AuthScreen = ({ route, navigation }) => {
  const { type } = route.params || { type: 'login' };
  const { login, register } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (credentials) => {
    setLoading(true);
    setError('');
    const { success, error: loginError } = await login(credentials);
    setLoading(false);
    
    if (success) {
      navigation.replace('Home');
    } else {
      setError(loginError || 'Login failed');
    }
  };

  const handleRegister = async (credentials) => {
    setLoading(true);
    setError('');
    const { success, error: registerError } = await register(credentials);
    setLoading(false);
    
    if (success) {
      navigation.replace('Home');
    } else {
      setError(registerError || 'Registration failed');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {type === 'login' ? (
        <Login 
          onSubmit={handleLogin} 
          loading={loading} 
          error={error} 
        />
      ) : (
        <Register 
          onSubmit={handleRegister} 
          loading={loading} 
          error={error} 
        />
      )}
    </View>
  );
};

export default AuthScreen;