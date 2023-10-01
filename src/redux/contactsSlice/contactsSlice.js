import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { initialState } from '../initialState';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from 'operations/getAPI';

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
    contact => contact.number === action.payload.number
  );
  if (checkName) {
    toast.error(`${action.payload.name} is already in contacts.`);
    return state;
  }
  if (checkNumber) {
    toast.error(`${action.payload.number} is already in contacts.`);
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

const handleEditContactFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items[index] = action.payload;
};

// updateContact: (state, action) => {
//     const { id, number, name } = action.payload;
//     state.items = state.items.map(contact =>
//       contact.id === id ? { ...contact, number, name } : contact
//     );
//   },

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
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, handleEditContactFulfilled)
      .addCase(editContact.rejected, handleRejected),
});

// // Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
