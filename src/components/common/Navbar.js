import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles, colors } from '../../styles/globalStyles';

const Navbar = ({ title, onLogout }) => {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      backgroundColor: colors.primary,
    }}>
      <Text style={{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      }}>{title}</Text>
      {onLogout && (
        <TouchableOpacity onPress={onLogout}>
          <Text style={{ color: 'white' }}>Logout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Navbar;