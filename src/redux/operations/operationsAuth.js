import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from '../../services/http';
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
      const data = await postUserRegistration(credentials);

      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postUserLoginThunk = createAsyncThunk(
  '/users/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await postUserLogin(credentials);

      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postUserLogoutThunk = createAsyncThunk(
  '/users/logout',
  async (_, { rejectWithValue }) => {
    try {
      await postUserLogout();
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserCurrentThunk = createAsyncThunk(
  '/users/current',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const data = await getUserCurrent();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
