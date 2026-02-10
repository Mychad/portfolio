import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import ArtGallery from "./Pages/ArtGallery";
import SocialLinks from './components/SocialLinks';
import Projects from './Pages/Projects';

function App() {

    return (
      <div className="dotted-bg bg-white dark:bg-[#000000e7] font-normal text-black dark:text-white transition-colors duration-300 px-3 py-4 md:px-20 md:py-10 min-h-screen">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/artgallery" element={<ArtGallery />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
          <SocialLinks/>
        </Router>
      </div>
    )
}

export default App
