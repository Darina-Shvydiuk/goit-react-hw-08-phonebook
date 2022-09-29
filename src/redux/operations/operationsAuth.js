import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  postUserRegistration,
  postUserLogin,
  postUserLogout,
  getUserCurrent,
} from '../../services/authApi';

export const postUserRegistrationThunk = createAsyncThunk(
  '/users/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      return await postUserRegistration(credentials);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postUserLoginThunk = createAsyncThunk(
  '/users/login',
  async (credentials, { rejectWithValue }) => {
    try {
      return await postUserLogin(credentials);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postUserLogoutThunk = createAsyncThunk(
  '/users/logout',
  async (_, { rejectWithValue }) => {
    try {
      return await postUserLogout();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUserCurrentThunk = createAsyncThunk(
  '/users/current',
  async (_, { rejectWithValue }) => {
    try {
      return await getUserCurrent();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
