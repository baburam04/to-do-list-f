import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/common/Navbar';
import TaskList from '../components/Task/TaskList';
import { getTasks, createTask, updateTask, deleteTask } from '../services/taskService';

const ChecklistDetailScreen = ({ route }) => {
  const { checklistId } = route.params;
  const { currentUser } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getTasks(checklistId);
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    if (currentUser) {
      fetchTasks();
    }
  }, [checklistId, currentUser]);

  const handleAddTask = async (description) => {
    try {
      const newTask = await createTask(checklistId, description);
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleToggleComplete = async (taskId, completed) => {
    try {
      const updatedTask = await updateTask(taskId, { completed });
      setTasks(tasks.map(task => 
        task._id === taskId ? updatedTask : task
      ));
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks(tasks.filter(task => task._id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Navbar title="Checklist Details" />
      <TaskList
        tasks={tasks}
        onAddTask={handleAddTask}
        onToggleComplete={handleToggleComplete}
        onDelete={handleDeleteTask}
      />
    </View>
  );
};

export default ChecklistDetailScreen;