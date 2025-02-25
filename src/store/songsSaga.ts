import { call, put, takeLatest } from "redux-saga/effects";
import { fetchSongsApi } from "../services/songsService";
import {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
} from "./songsSlice";
import { Song } from "../types/songTypes";

// ✅ Correctly type the generator function
function* fetchSongsSaga(): Generator<any, void, Song[]> {
  try {
    const songs: Song[] = yield call(fetchSongsApi);
    yield put(fetchSongsSuccess(songs));
  } catch (error: any) {
    yield put(fetchSongsFailure(error.message));
  }
}

// ✅ Watcher saga
export function* watchFetchSongs() {
  yield takeLatest(fetchSongsRequest.type, fetchSongsSaga);
}
