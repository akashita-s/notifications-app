import { createSlice } from "@reduxjs/toolkit";

const initialValue = false;

export const showSlice = createSlice({
  name: "show",
  initialState: { value: initialValue },
  reducers: {
    changeShow: (state, action) => {
      state.value = action.payload;
    },
   
  },
});

export const { changeShow } = showSlice.actions;

export default showSlice.reducer;