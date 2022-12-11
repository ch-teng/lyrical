import { configureStore } from "@reduxjs/toolkit";
import wordListSliceReducer from "../features/wordListSlice";
import lyricListSliceReducer from "../features/lyricListSlice";
import percentCorrectSliceReducer from "../features/percentCorrectSlice";
import correctCountSliceReducer from "../features/correctCountSlice";

const store = configureStore({
  reducer: {
    wordList: wordListSliceReducer,
    lyricList: lyricListSliceReducer,
    percentCorrect: percentCorrectSliceReducer,
    correctCount: correctCountSliceReducer,
  },
});

//THIS IS NECESSARY FOR TS REDUX
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
