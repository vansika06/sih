import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Display from "./Display.jsx";
import PhotoUploadComponent from "./Components/Aadharface.jsx";
import LandingPage from "./Components/Landing.jsx";
import Meteors from "./Components/magicui/meteors.jsx";

export default function App() {
  return (
    <Router>
      <Display>
        <Routes>
          <Route path="/uploadphoto" element={<PhotoUploadComponent />} />
          <Route path="/" element={< Meteors/>} />
          <Route path="/landingpage" element={< LandingPage/>} />
        </Routes>
      </Display>
    </Router>
  );
}
