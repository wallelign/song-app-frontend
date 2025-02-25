/** @jsxImportSource @emotion/react */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSongsRequest } from "../../store/songsSlice";
import {
  addButtonStyle,
  componentStyle,
  tableStyle,
  thTdStyle,
} from "../../style/songs";

const SongsComponent = () => {
  const dispatch = useDispatch();
  const { songs, loading, error } = useSelector((state: any) => state.songs);

  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div css={componentStyle}>
      <button css={addButtonStyle}> + Add New</button>
      <table css={tableStyle}>
        <thead>
          <tr>
            <th css={thTdStyle}>Title</th>
            <th css={thTdStyle}>Artist</th>
            <th css={thTdStyle}>Album</th>
            <th css={thTdStyle}>Genre</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song: any) => (
            <tr key={song._id}>
              <td css={thTdStyle}>{song.title}</td>
              <td css={thTdStyle}>{song.artist}</td>
              <td css={thTdStyle}>{song.album}</td>
              <td css={thTdStyle}>{song.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongsComponent;
