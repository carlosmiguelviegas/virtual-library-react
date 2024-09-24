import axios from 'axios';

let token;

const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1'
});

api.interceptors.request.use(config => {

  config['headers']['Authorization'] = `Bearer ${token}`;
  return config;

});

export default api;
