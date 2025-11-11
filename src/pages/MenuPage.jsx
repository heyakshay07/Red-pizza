import React, { useState } from "react";
import Quickies from "./Menu/Quickies";
import Bruschetta from "./Menu/Bruschetta";
import Pizza from "./Menu/Pizza";
import Pasta from "./Menu/Pasta";
import Burger from "./Menu/Burger";
import Salad from "./Menu/Salad";
import Beverages from "./Menu/Beverages";
import Dessert from "./Menu/Dessert";
import ComboOffer from "./Menu/ComboOffer";

import vegIcon from "../assets/quickies/veg.png";
import nonVegIcon from "../assets/quickies/NV.png";

import img from "../../src/assets/navbar/pizza1.jpg";

const MenuPage = () => {
  const [filter, setFilter] = useState("all");

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
            <div className="relative w-full h-[250px] md:h-[400px] mb-10">
              <img
                src={img}
                alt="pizza"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
                  Menu Page
                </h1>
              </div>
            </div>
      {/* 🔝 Filter Bar */}
      <div className="flex justify-start items-center gap-4 mb-10 mt-20">
        <button
          onClick={() => setFilter("all")}
          className={`px-6 py-2 rounded-full font-semibold ${
            filter === "all" ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("veg")}
          className={`px-6 py-2 rounded-full flex items-center gap-2 font-semibold ${
            filter === "veg" ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
        >
          <img src={vegIcon} alt="veg" className="w-5 h-5" /> Veg
        </button>

        <button
          onClick={() => setFilter("nonveg")}
          className={`px-6 py-2 rounded-full flex items-center gap-2 font-semibold ${
            filter === "nonveg" ? "bg-red-600 text-white" : "bg-gray-200"
          }`}
        >
          <img src={nonVegIcon} alt="non-veg" className="w-5 h-5" /> Non-Veg
        </button>
      </div>

      {/* 🍕 All Menu Sections (Filter passed as prop) */}
      <Quickies filter={filter} />
      <Bruschetta filter={filter} />
      <Pizza filter={filter} />
      <Pasta filter={filter} />
      <Burger filter={filter} />
      <Salad filter={filter} />
      <Beverages filter={filter} />
      <Dessert filter={filter} />
      <ComboOffer filter={filter} />
    </div>
  );
};

export default MenuPage;
