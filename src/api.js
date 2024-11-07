// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';  // adjust if needed

export const signup = (data) => axios.post(`${API_BASE_URL}/register`, data);
export const signin = (data) => axios.post(`${API_BASE_URL}/signin`, data);
