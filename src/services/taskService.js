import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { REACT_APP_API_URL } from '@env';

const API_URL = `${REACT_APP_API_URL}/api/tasks`;

const getAuthHeader = async () => {
  const token = await AsyncStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getTasks = async (checklistId) => {
  const config = await getAuthHeader();
  const response = await axios.get(`${API_URL}/${checklistId}`, config);
  return response.data;
};

export const createTask = async (checklistId, description) => {
  const config = await getAuthHeader();
  const response = await axios.post(
    `${API_URL}/${checklistId}`,
    { description },
    config
  );
  return response.data;
};

export const updateTask = async (taskId, updates) => {
  const config = await getAuthHeader();
  const response = await axios.patch(
    `${API_URL}/${taskId}`,
    updates,
    config
  );
  return response.data;
};

export const deleteTask = async (taskId) => {
  const config = await getAuthHeader();
  await axios.delete(`${API_URL}/${taskId}`, config);
};

export const reorderTasks = async (checklistId, tasks) => {
  const config = await getAuthHeader();
  await axios.post(
    `${API_URL}/${checklistId}/reorder`,
    { tasks },
    config
  );
};