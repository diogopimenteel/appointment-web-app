import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const { API_BASE_URL: apiBaseURL } = process.env;

const api = axios.create(
  {
    baseURL: apiBaseURL || 'http://localhost:4000',
  },
);

export default api;
