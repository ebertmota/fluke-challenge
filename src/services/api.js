import axios from 'axios';

const api = axios.create({
  baseURL: 'https://flukenator.herokuapp.com',
});

export default api;
