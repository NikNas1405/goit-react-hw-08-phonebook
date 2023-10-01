import { combineReducers } from '@reduxjs/toolkit';

import { filterReducer } from './filtersSlice/filtersSlice';
import { authReducer } from './authSlice/authSlice';
import { contactsReducer } from './contactsSlice/contactsSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
  filters: filterReducer,
});
