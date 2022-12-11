import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface CorrectCountSliceState {
  value: number;
}

const initialState: CorrectCountSliceState = {
  value: 0,
};

export const correctCountSlice = createSlice({
  name: "correctCount",
  initialState,
  reducers: {
    addToCorrectCount: (state) => {
      state.value++;
    },
  },
});

export const { addToCorrectCount } = correctCountSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCorrectCount = (state: RootState) =>
  state.correctCount.value;

export default correctCountSlice.reducer;
