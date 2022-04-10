import React, {useRef, useEffect, useState} from 'react';
//import leftArrow from "../public/assets/arrow-left"
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Circles from "./pages/Circles"

import "./App.scss"


function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/circles" element={<Circles />} />
    </Routes>
  );
}

export default App;
