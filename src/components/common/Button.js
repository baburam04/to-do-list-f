import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { globalStyles, colors } from '../../styles/globalStyles';

const Button = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity 
      style={[globalStyles.button, style]} 
      onPress={onPress}
    >
      <Text style={[globalStyles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;