import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './Slice/contactsSlice/contactsSlice';
import { filterSlice } from './Slice/filterSlice/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
