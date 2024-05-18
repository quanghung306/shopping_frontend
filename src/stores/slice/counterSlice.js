import { createSlice } from "@reduxjs/toolkit";

const initialSate = {
  isFetching: false,
  counter: 0,
};
export const counterSlice = createSlice({
  name: "counterSlice",
  initialState: initialSate,
  reducers: {
    increment: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    setBoolean: (state, action) => {
      state.setBoolean = action.counter;
    },

  },

});

export const {increment,setBoolean} = counterSlice.actions;
export default counterSlice.reducer;
