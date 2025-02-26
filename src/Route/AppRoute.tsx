import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SongsPage from "../page/SongsPage";
import AddSong from "../components/song/AddSong";

const AppRoute: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<SongsPage />} />
        <Route path="/add-song" element={<AddSong />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
