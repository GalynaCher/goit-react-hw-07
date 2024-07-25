import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66a1042a7053166bcabdb3cd.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      console.log("fetcContacts response.data", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({name, number}, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { name, number});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactID, thunkAPI) => {
    try {
      // console.log("contactID = ", contactID)
      const response = await axios.delete(`/contacts/${contactID}`);
      console.log("response.data >", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)