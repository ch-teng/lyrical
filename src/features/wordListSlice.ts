import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface wordListSliceState {
  value: Array<String>;
}

const initialState: wordListSliceState = {
  value: [],
};

export const wordListSlice = createSlice({
  name: "wordList",
  initialState,
  reducers: {
    addToList: (state, action: PayloadAction<String>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addToList } = wordListSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectWordList = (state: RootState) => state.wordList.value;

export default wordListSlice.reducer;
