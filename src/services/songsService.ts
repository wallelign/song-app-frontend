// services/songsService.ts
import axios from "axios";
import { Song } from "../types/songTypes";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const fetchSongsApi = async () => {
  const response = await axios.get(`${API_BASE_URL}songs`);
  console.log({ response });
  return response.data.songs;
};

export const addSong = async (newSong: Song): Promise<Song> => {
  const response = await axios.post(API_BASE_URL, newSong);
  return response.data;
};

export const deleteSong = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};
