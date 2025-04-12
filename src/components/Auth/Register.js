import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Input from '../common/Input';
import Button from '../common/Button';
import { globalStyles } from '../../styles/globalStyles';

const Register = ({ onSubmit, loading, error }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    onSubmit({ username, email, password });
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Register</Text>
      
      {error && <Text style={globalStyles.errorText}>{error}</Text>}

      <Input
        label="Username"
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />

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
        title={loading ? "Loading..." : "Register"}
        onPress={handleSubmit}
        disabled={loading}
      />
    </View>
  );
};

export default Register;