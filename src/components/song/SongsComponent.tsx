/** @jsxImportSource @emotion/react */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSongsRequest } from "../../store/songsSlice";
import {
  addButtonStyle,
  addButtonContainerStyle,
  tableStyle,
  thTdStyle,
  editButtonStyle,
  deleteButtonStyle,
  actionButtonStyle,
} from "../../style/songs";
import { Song } from "../../types/songTypes";
import { useNavigate } from "react-router-dom";

const SongsComponent = () => {
  const dispatch = useDispatch();
  const { songs, loading, error } = useSelector(
    (state: { songs: { songs: Song[]; loading: boolean; error: string } }) =>
      state.songs
  );

  useEffect(() => {
    dispatch(fetchSongsRequest());
  }, [dispatch]);

  const handleEdit = (song: Song) => {
    console.log("Edit song:", song);
  };

  const handleDelete = (id: string) => {
    console.log("Delete song ID:", id);
  };
  const navigator = useNavigate();
  return (
    <>
      <div css={addButtonContainerStyle}>
        <button css={addButtonStyle} onClick={() => navigator("/add-song")}>
          + Add New
        </button>
      </div>

      {/* Show Loading, Error, or No Songs Message */}
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : !songs || songs.length === 0 ? (
        <div>No songs. Add a song using API.</div>
      ) : (
        <table css={tableStyle}>
          <thead>
            <tr>
              <th css={thTdStyle}>Title</th>
              <th css={thTdStyle}>Artist</th>
              <th css={thTdStyle}>Album</th>
              <th css={thTdStyle}>Genre</th>
              <th css={thTdStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song: Song) => (
              <tr key={song._id}>
                <td css={thTdStyle}>{song.title}</td>
                <td css={thTdStyle}>{song.artist}</td>
                <td css={thTdStyle}>{song.album}</td>
                <td css={thTdStyle}>{song.genre}</td>
                <td css={thTdStyle}>
                  <div css={actionButtonStyle}>
                    <span
                      css={editButtonStyle}
                      onClick={() => handleEdit(song)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-pencil-code"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                        <path d="M13.5 6.5l4 4" />
                        <path d="M20 21l2 -2l-2 -2" />
                        <path d="M17 17l-2 2l2 2" />
                      </svg>
                    </span>
                    <span
                      css={deleteButtonStyle}
                      onClick={() => handleDelete("loading...")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="icon icon-tabler icons-tabler-filled icon-tabler-square-x"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19 2h-14a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-14a3 3 0 0 0 -3 -3zm-9.387 6.21l.094 .083l2.293 2.292l2.293 -2.292a1 1 0 0 1 1.497 1.32l-.083 .094l-2.292 2.293l2.292 2.293a1 1 0 0 1 -1.32 1.497l-.094 -.083l-2.293 -2.292l-2.293 2.292a1 1 0 0 1 -1.497 -1.32l.083 -.094l2.292 -2.293l-2.292 -2.293a1 1 0 0 1 1.32 -1.497z" />
                      </svg>
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div>
        {" "}
        my main concern is code quality and code structure not completing the
        task
      </div>
    </>
  );
};

export default SongsComponent;
