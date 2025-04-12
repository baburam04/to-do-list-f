import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { globalStyles, colors } from '../../styles/globalStyles';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, error }) => {
  return (
    <View>
      {label && <Text style={globalStyles.text}>{label}</Text>}
      <TextInput
        style={globalStyles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={colors.textSecondary}
      />
      {error && <Text style={globalStyles.errorText}>{error}</Text>}
    </View>
  );
};

export default Input;