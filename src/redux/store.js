import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './Slice/authSlice/authSlice';
import { contactsSlice } from './Slice/contactsSlice/contactsSlice';
import { filterSlice } from './Slice/filterSlice/filterSlice';
import storage from 'redux-persist/lib/storage';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
  auth: authSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedAuthReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
