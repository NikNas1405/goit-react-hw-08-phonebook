import { combineReducers } from '@reduxjs/toolkit';

import { filterReducer } from './filtersSlice/filtersSlice';
import { authReducer } from './authSlice/authSlice';
import { contactsReducer } from './contactsSlice/contactsSlice';

// Persisting token field from auth slice to localstorage

export const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
  filters: filterReducer,
});
