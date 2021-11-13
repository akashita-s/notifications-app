import { createSlice } from "@reduxjs/toolkit";

const initialValue = false;

export const showtwoSlice = createSlice({
  name: "showtwo",
  initialState: { value: initialValue },
  reducers: {
    changeShowTwo: (state, action) => {
      state.value = action.payload;
    },
   
  },
});

export const { changeShowTwo } = showtwoSlice.actions;

export default showtwoSlice.reducer;