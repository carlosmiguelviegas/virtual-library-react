import axios from 'axios';

let store;

const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1'
});

export const injectStore = _store => {
  store = _store;
};

api.interceptors.request.use(config => {

  const token = store.getState().users.token;

  config.headers.Authorization = `Bearer ${token}`;
  return config;

});

export default api;
