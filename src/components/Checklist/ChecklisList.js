import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import ChecklistItem from './ChecklistItem';
import CreateChecklist from './CreateChecklist';
import SearchBar from '../SearchBar';

const ChecklistList = ({ checklists, onSelect, onDelete, onCreate, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (text) => {
    setSearchTerm(text);
    onSearch(text);
  };

  return (
    <View style={globalStyles.container}>
      <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={handleSearch} 
      />
      
      <CreateChecklist onCreate={onCreate} />
      
      <FlatList
        data={checklists}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <ChecklistItem
            checklist={item}
            onPress={onSelect}
            onDelete={onDelete}
          />
        )}
      />
    </View>
  );
};

export default ChecklistList;