// src/features/products/productsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
  error: null,
};

export const productFetch = createAsyncThunk(
  "product/productFetch",
  async () => {
    const response = await axios.get("http://localhost:5000/product");
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productFetch.pending, (state) => {
        state.status = "pending";
      })
      .addCase(productFetch.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(productFetch.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
