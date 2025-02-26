import { createSlice } from "@reduxjs/toolkit";

interface SongState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: SongState = {
  loading: false,
  error: null,
  success: false,
};

const AddSongSlice = createSlice({
  name: "addSong",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    },
    setSuccess: (state) => {
      state.loading = false;
      state.success = true;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
});

export const { startLoading, setSuccess, setError, resetState } =
  AddSongSlice.actions;
export default AddSongSlice.reducer;
