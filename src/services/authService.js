import axios from 'axios';

// Use environment variable (works in both development and production)
const API_URL = `${process.env.REACT_APP_API_URL}/api/auth`;

export const loginUser = async ({ email, password }) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const registerUser = async ({ username, email, password }) => {
  const response = await axios.post(`${API_URL}/register`, { username, email, password });
  return response.data;
};