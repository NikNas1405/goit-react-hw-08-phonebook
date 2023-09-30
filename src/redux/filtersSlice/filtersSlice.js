import { createSlice } from '@reduxjs/toolkit';

import { initialState } from '../initialState';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState.filter,
  reducers: {
    // setFilters(state, action) { return action.payload;},
    setFilters: (_, { payload }) => payload,
  },
});

// Генератори екшенів
export const { setFilters } = filtersSlice.actions;

// Редюсер слайсу
export const filterReducer = filtersSlice.reducer;
