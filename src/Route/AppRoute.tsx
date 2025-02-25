import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SongsPage from "../page/SongsPage";

const AppRoute: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<SongsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
