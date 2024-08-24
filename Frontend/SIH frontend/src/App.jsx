import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Display from "./Display.jsx";
import Home from "./Components/Home .jsx";
import PhotoUploadComponent from "./Components/Aadharface.jsx";
import LandingPage from "./Components/Landing.jsx";

export default function App() {
  return (
    <Router>
      <Display>
        <Routes>
          <Route path="/uploadphoto" element={<PhotoUploadComponent />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/landingpage" element={< Home/>} />
        </Routes>
      </Display>
    </Router>
  );
}
