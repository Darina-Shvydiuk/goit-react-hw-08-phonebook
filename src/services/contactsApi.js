import { privateAPI } from './http';

export const getContacts = async () => {
  const { data } = await privateAPI.get('/contacts');
  return data;
};

export const postContacts = async newContact => {
  const { data } = await privateAPI.post('/contacts', newContact);
  return data;
};

export const deleteContacts = async id => {
  const { data } = await privateAPI.delete(`/contacts/${id}`);
  return data;
};
