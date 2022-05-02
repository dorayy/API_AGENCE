import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import load from "@utils/load";

const Home = load(() => import("@pages/Home"));
const NotFound = load(() => import("@pages/NotFound"));

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound status={404} />} />
    </Routes>
  </BrowserRouter>
);

export default App;
