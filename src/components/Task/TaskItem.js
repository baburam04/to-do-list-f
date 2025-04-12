import React from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { globalStyles, colors } from '../../styles/globalStyles';

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <View style={[
      globalStyles.card, 
      { 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
      }
    ]}>
      <View style={{ flex: 1 }}>
        <Text 
          style={[
            globalStyles.text,
            task.completed && { textDecorationLine: 'line-through', color: colors.textSecondary }
          ]}
        >
          {task.description}
        </Text>
      </View>
      
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Switch
          value={task.completed}
          onValueChange={() => onToggleComplete(task._id, !task.completed)}
          thumbColor={task.completed ? colors.primary : colors.divider}
          trackColor={{ false: colors.divider, true: colors.primaryLight }}
        />
        
        <TouchableOpacity 
          onPress={() => onDelete(task._id)}
          style={{ marginLeft: 16 }}
        >
          <Text style={{ color: colors.error }}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskItem;