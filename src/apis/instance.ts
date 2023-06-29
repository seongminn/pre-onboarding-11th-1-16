import axios from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('user-token');

  config.headers['Authorization'] = token ? `Bearer ${token}` : '';

  return config;
});
