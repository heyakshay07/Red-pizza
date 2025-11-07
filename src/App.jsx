import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Coupens from "./components/Coupens";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Home from "./pages/Home"; 

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>

      {/* Coupens + Footer (if you want on every page) */}
      <div className="w-full bg-[#f7f1e9]">
        <Coupens />
      </div>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
