import { combineReducers } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filters/filtersSlice';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});
