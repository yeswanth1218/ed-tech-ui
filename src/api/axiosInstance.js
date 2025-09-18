import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9000/api'|| process.env.REACT_APP_API_URL ,
  withCredentials: true,
});

// Request interceptor: Attach token from sessionStorage
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;