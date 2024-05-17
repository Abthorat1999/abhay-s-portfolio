import "./App.css";
// import axios from "axios";
import React from "react";
import { BrowserRouter as  Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/abhay-s-portfolio">
        <div>
          <Navbar />
          <Routes>
            <Route path="/abhay-s-portfolio" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
