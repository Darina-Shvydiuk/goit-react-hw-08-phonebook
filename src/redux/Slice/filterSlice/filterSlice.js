import { initialFilter } from './initialStateFilter';
import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilter,
  reducers: {
    filterContacts: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { filterContacts } = filterSlice.actions;
