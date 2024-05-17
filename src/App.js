import "./App.css";
// import axios from "axios";
import React from "react";
import { BrowserRouter as  Route, Routes, HashRouter } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
