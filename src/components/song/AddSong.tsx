/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong as addSongAPI } from "../../services/songsService"; // Your API service
import { startLoading, setSuccess, setError } from "../../store/AddSongSlice"; // Redux actions
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  FormContainer,
  FormGroup,
  Input,
  Label,
  SubmitButton,
} from "../../style/addSong";

const AddSong = () => {
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    album: "",
    genre: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigate
  const { loading, success, error } = useSelector(
    (state: RootState) => state.addSong
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(startLoading()); // Dispatch loading state

    try {
      await addSongAPI(formData); // Call your API service
      dispatch(setSuccess()); // Dispatch success state

      // Wait 3 seconds before navigating
      setTimeout(() => {
        navigate("/"); // Navigate to the home page
      }, 2000);
    } catch (err) {
      dispatch(setError("Failed to add song")); // Dispatch error state
    }
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="artist">Artist</Label>
          <Input
            type="text"
            id="artist"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="album">Album</Label>
          <Input
            type="text"
            id="album"
            name="album"
            value={formData.album}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="genre">Genre</Label>
          <Input
            type="text"
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
        </FormGroup>

        <SubmitButton type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </SubmitButton>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Song added successfully!</p>}
    </FormContainer>
  );
};

export default AddSong;
