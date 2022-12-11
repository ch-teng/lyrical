import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface percentCorrectSliceState {
  value: number;
}

const initialState: percentCorrectSliceState = {
  value: 0,
};

export const percentCorrectSlice = createSlice({
  name: "percentCorrect",
  initialState,
  reducers: {
    setPercent: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setPercent } = percentCorrectSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPercentCorrect = (state: RootState) =>
  state.percentCorrect.value;

export default percentCorrectSlice.reducer;
