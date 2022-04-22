import axios from 'axios';

const { API_BASE_URL } = process.env;

const api = axios.create(
  {
    baseURL: API_BASE_URL || 'http://localhost:4000',
  },
);

export default api;
