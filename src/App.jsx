import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detailes from "./Components/Detailes";
import { useSelector } from "react-redux";
import Login from "./Components/Login";

const App = () => {
  const route = useSelector((state) => state.cryptoSlice.route);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path={`/detailes/id:${route}`} element={<Detailes />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
