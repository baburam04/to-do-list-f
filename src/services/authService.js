import axios from 'axios';

const API_URL = 'https://to-do-list-b.onrender.com/api/auth';

export const loginUser = async ({ email, password }) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const registerUser = async ({ username, email, password }) => {
  const response = await axios.post(`${API_URL}/register`, { username, email, password });
  return response.data;
};