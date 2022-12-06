import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface lyricListSliceState {
  value: Array<String>;
}

const initialState: lyricListSliceState = {
  value: [],
};

export const lyricListSlice = createSlice({
  name: "lyricList",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<String[]>) => {
      state.value.push(...action.payload);
    },
  },
});

export const { setList } = lyricListSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLyricList = (state: RootState) => state.lyricList.value;

export default lyricListSlice.reducer;
