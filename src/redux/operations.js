import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64208aae25cb6572104b765c.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('/contacts');

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (userCredentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/contacts', userCredentials);

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`contacts/${contactId}`);

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);