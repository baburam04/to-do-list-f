import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { REACT_APP_API_URL } from '@env';

const API_URL = `${REACT_APP_API_URL}/api/checklists`;

const getAuthHeader = async () => {
  const token = await AsyncStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getChecklists = async () => {
  const config = await getAuthHeader();
  const response = await axios.get(API_URL, config);
  return response.data;
};

export const createChecklist = async (title) => {
  const config = await getAuthHeader();
  const response = await axios.post(API_URL, { title }, config);
  return response.data;
};

export const searchChecklists = async (query) => {
  const config = await getAuthHeader();
  const response = await axios.get(`${API_URL}/search?query=${query}`, config);
  return response.data;
};

export const deleteChecklist = async (id) => {
  const config = await getAuthHeader();
  await axios.delete(`${API_URL}/${id}`, config);
};