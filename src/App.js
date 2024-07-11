import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./components/pages/Project";
import Home from "./components/pages/Home";
import "./App.css"

function App() {
  return (
      <BrowserRouter basename="/portfolio">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/project" element={<Project />} ></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
