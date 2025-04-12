import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import TaskItem from './TaskItem';
import Input from '../common/Input';
import Button from '../common/Button';

const TaskList = ({ tasks, onAddTask, onToggleComplete, onDelete }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={[globalStyles.card, { marginBottom: 16 }]}>
        <Input
          placeholder="New task description"
          value={newTask}
          onChangeText={setNewTask}
        />
        <Button
          title="Add Task"
          onPress={handleAddTask}
          disabled={!newTask.trim()}
        />
      </View>
      
      <FlatList
        data={tasks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        )}
      />
    </View>
  );
};

export default TaskList;