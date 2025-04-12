import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Input from '../common/Input';
import Button from '../common/Button';
import { globalStyles } from '../../styles/globalStyles';

const Login = ({ onSubmit, loading, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    onSubmit({ email, password });
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Login</Text>
      
      {error && <Text style={globalStyles.errorText}>{error}</Text>}

      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />

      <Button
        title={loading ? "Loading..." : "Login"}
        onPress={handleSubmit}
        disabled={loading}
      />
    </View>
  );
};

export default Login;