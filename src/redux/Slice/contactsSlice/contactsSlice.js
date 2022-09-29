import { initialContacts } from './initialStateContacts';

import { createSlice } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  postContactsThunk,
  deleteContactsThunk,
} from '../../../redux/operationsContacts/operationsContacts';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  extraReducers: {
    [getContactsThunk.pending]: state => {
      state.isLoading = true;
      state.error = '';
    },
    [getContactsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contacts = action.payload;
      state.error = '';
    },
    [getContactsThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [postContactsThunk.pending]: state => {
      state.isLoading = true;
      state.error = '';
    },
    [postContactsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contacts.push(action.payload);
      state.error = '';
    },
    [postContactsThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContactsThunk.pending]: state => {
      state.isLoading = true;
      state.error = '';
    },
    [deleteContactsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
      state.error = '';
    },
    [deleteContactsThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
