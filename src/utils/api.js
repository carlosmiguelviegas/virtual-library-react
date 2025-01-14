import axios from 'axios';
import { useSelector } from 'react-redux';

import { selectCurrentToken } from '../store/users/users.selector';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1'
});

api.interceptors.request.use(config => {

  const token = useSelector(selectCurrentToken);

  config.headers.Authorization = `Bearer ${token}`;
  return config;

});

export default api;
