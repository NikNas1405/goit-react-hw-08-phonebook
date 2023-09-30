import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReduser';

export const store = configureStore({
  reducer: rootReducer,
});
