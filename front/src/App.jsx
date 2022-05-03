import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import load from "@utils/load";

const Home = load(() => import("@pages/Home"));
const Articles = load(() => import("@pages/Articles"));
const Product = load(() => import("@pages/Product"));
const NotFound = load(() => import("@pages/NotFound"));

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/produit" element={<Product />} />
      <Route path="*" element={<NotFound status={404} />} />
    </Routes>
  </BrowserRouter>
);

export default App;
