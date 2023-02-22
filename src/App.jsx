import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import CertificatePage from './pages/CertificatePage';
import SocialPage from './pages/SocialPage';
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/myprojects" element={<ProjectPage />}/>
        <Route path="/certificate" element={<CertificatePage />}/>
        <Route path="/social" element={<SocialPage />}/>
        <Route path="/contact" element={<ContactPage />}/>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
