import axios from 'axios';

const { API_URL } = process.env;

const api = axios.create(
  {
    url: API_URL || 'http://localhost:4000',
  },
);

export default api;
