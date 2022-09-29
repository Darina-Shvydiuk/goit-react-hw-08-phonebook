import { publicAPI, privateAPI } from './http';

export const postUserRegistration = async credentials => {
  const { data } = await publicAPI.post('/users/signup', credentials);
  return data;
};

export const postUserLogin = async credentials => {
  const { data } = await publicAPI.post('/users/login', credentials);
  return data;
};

export const postUserLogout = async () => {
  const { data } = await privateAPI.post('/users/logout');
  return data;
};
export const getUserCurrent = async () => {
  const { data } = await privateAPI.get('/users/current');
  return data;
};
