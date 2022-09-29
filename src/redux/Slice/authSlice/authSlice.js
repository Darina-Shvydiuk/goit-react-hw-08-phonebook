import { initialAuth } from './initialStateAuth';
import { createSlice } from '@reduxjs/toolkit';

import {
  postUserRegistrationThunk,
  postUserLoginThunk,
  postUserLogoutThunk,
  getUserCurrentThunk,
} from '../../operations/operationsAuth';

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuth,
  extraReducers: {
    [postUserRegistrationThunk.pending]: state => {
      state.isLoading = true;
      state.error = '';
    },
    [postUserRegistrationThunk.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = '';
    },
    [postUserRegistrationThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [postUserLoginThunk.pending]: state => {
      state.isLoading = true;
      state.error = '';
    },
    [postUserLoginThunk.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = '';
    },
    [postUserLoginThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [postUserLogoutThunk.pending]: state => {
      state.isLoading = true;
      state.error = '';
    },
    [postUserLogoutThunk.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = '';
    },
    [postUserLogoutThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getUserCurrentThunk.pending]: state => {
      state.isLoading = true;
      state.error = '';
    },
    [getUserCurrentThunk.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = '';
    },
    [getUserCurrentThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
