import axios from 'axios';

const api = axios.create(
  {
    baseURL: 'https://appointment-pitang-api.herokuapp.com',
  },
);

export default api;
