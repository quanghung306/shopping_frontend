// src/features/products/productsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const productsUrl = 'http://localhost:3001/cart';


export const productsFetch = createAsyncThunk('products/productsFetch', async () => {
  const response = await axios.get(productsUrl);
  return response.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(productsFetch.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(productsFetch.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default productsSlice.reducer;
