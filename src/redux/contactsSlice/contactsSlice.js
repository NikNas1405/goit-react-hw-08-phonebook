import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { initialState } from '../initialState';
import { fetchContacts, addContact, deleteContact } from 'operations/getAPI';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchContactsFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleAddContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;

  const checkName = state.items.find(
    contact => contact.name === action.payload.name
  );
  const checkNumber = state.items.find(
    contact => contact.phone === action.payload.phone
  );
  if (checkName) {
    toast.error(`${action.payload.name} is already in contacts.`);
    return state;
  }
  if (checkNumber) {
    toast.error(`${action.payload.phone} is already in contacts.`);
    return state;
  }

  state.items.push(action.payload);
};

const handleDeleteContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFetchContactsFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleAddContactFulfilled)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleDeleteContactFulfilled)
      .addCase(deleteContact.rejected, handleRejected),

  // }
  // extraReducers: {
  //   [fetchContacts.pending]: handlePending,
  //   [fetchContacts.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   [fetchContacts.rejected]: handleRejected,

  // [addContact.pending]: handlePending,
  // [addContact.fulfilled](state, action) {
  //   state.isLoading = false;
  //   state.error = null;
  //   const checkName = state.find(
  //     contact => contact.name === action.payload.name
  //   );

  //   const checkNumber = state.find(
  //     contact => contact.phone === action.payload.phone
  //   );

  //   if (checkName) {
  //     toast.error(`${action.payload.name} is already in contacts.`);
  //     return state;
  //   }
  //   if (checkNumber) {
  //     toast.error(`${action.payload.phone} is already in contacts.`);
  //     return state;
  //   }
  //   state.items.push(action.payload);
  // },
  //   [addContact.rejected]: handleRejected,
  //   [deleteContact.pending]: handlePending,
  //   [deleteContact.fulfilled](state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     const index = state.items.findIndex(
  //       task => task.id === action.payload.id
  //     );
  //     state.items.splice(index, 1);
  //   },
  //   [deleteContact.rejected]: handleRejected,
});

// // Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
