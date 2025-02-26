import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import songsReducer from "./songsSlice";
import addSongsReducer from "./AddSongSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs: songsReducer,
    addSong: addSongsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

// Export RootState
export type RootState = ReturnType<typeof store.getState>; // Adds the RootState type
export type AppDispatch = typeof store.dispatch;

export default store;
