import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { globalStyles, colors } from '../../styles/globalStyles';

const ChecklistItem = ({ checklist, onPress, onDelete }) => {
  return (
    <TouchableOpacity 
      style={globalStyles.card}
      onPress={() => onPress(checklist._id)}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={globalStyles.text}>{checklist.title}</Text>
        <TouchableOpacity onPress={() => onDelete(checklist._id)}>
          <Text style={{ color: colors.error }}>Delete</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ChecklistItem;