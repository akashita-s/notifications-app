import { createSlice } from "@reduxjs/toolkit";

const initialValue = false;

export const showthreeSlice = createSlice({
  name: "showthree",
  initialState: { value: initialValue },
  reducers: {
    changeShowThree: (state, action) => {
      state.value = action.payload;
    },
   
  },
});

export const { changeShowThree } = showthreeSlice.actions;

export default showthreeSlice.reducer;