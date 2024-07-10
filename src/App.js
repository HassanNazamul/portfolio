import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./components/pages/Project";
import Resume from "./components/pages/Resume"
import Home from "./components/pages/Home";
import "../src/App.css"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/project" element={<Project />} ></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
