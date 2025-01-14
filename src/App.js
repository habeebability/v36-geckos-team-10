import React from "react";
import LandingPage from "./containers/LandingPage";
import Workspace from "./containers/Workspace";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./containers/About";
import Features from "./containers/Features";
import Showcase from "./containers/ShowCase";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/features" element={<Features />} />
        <Route path="/workspace" element={<Workspace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
