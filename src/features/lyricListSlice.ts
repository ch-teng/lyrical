import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface lyricListSliceState {
  lyrics: Array<string>;
}

const initialState: lyricListSliceState = {
  lyrics: [],
};

export const lyricListSlice = createSlice({
  name: "lyricList",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<string[]>) => {
      state.lyrics.push(...action.payload);
    },
  },
});

export const { setList } = lyricListSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLyricList = (state: RootState) => state.lyricList.lyrics;

export default lyricListSlice.reducer;
