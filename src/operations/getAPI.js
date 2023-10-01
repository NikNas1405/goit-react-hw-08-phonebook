import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// 4)  fetch data
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      toast.error(`${error.response.data.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// 5)  add contact
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (error) {
      toast.error(`${error.response.data.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// 6)  delete contact
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      toast.error(`${error.response.data.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// 7)  edit contact
export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ contactId, name, number }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactId}`, {
        name,
        number,
      });
      return response.data;
    } catch (error) {
      toast.error(`${error.response.data.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
