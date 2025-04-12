import React from 'react';
import { View } from 'react-native';
import Input from './common/Input';
import { globalStyles } from '../styles/globalStyles';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <View style={{ marginBottom: 16 }}>
      <Input
        placeholder="Search checklists..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
    </View>
  );
};

export default SearchBar;