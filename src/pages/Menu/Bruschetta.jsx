import React, { useState } from "react";

import vegIcon from "../../assets/quickies/veg.png";
import nonVegIcon from "../../assets/quickies/NV.png";

import breadVeg from "../../assets/bruschetta/vegBread.jpeg";
import breadNonVeg from "../../assets/bruschetta/nonvegBread.jpeg";
import breadCheese from "../../assets/bruschetta/cheeseBread.jpeg";

const bruschettaItems = [
  {
    id: 1,
    name: "Veg Garlic Bread",
    desc: "Baked with love, cheese, and some spices to perfection",
    price: 99,
    img: breadVeg,
    type: "veg",
  },
  {
    id: 2,
    name: "Non-Veg Garlic Bread",
    desc:
      "Baked with love, Shredded Chicken topped with Mint sauce & a secret sauce to surprise you in every bite",
    price: 125,
    img: breadNonVeg,
    type: "nonveg",
  },
  {
    id: 3,
    name: "Garlic Bread With Cheese",
    desc: "Baked garlic bread topped with melted cheese",
    price: 89,
    img: breadCheese,
    type: "veg",
  },
];

export default function Bruschetta() {
  const [filter, setFilter] = useState("all");

  // ✅ Filter
  let filteredItems = bruschettaItems.filter((item) => {
    if (filter === "all") return true;
    if (filter === "veg") return item.type === "veg";
    if (filter === "nonveg") return item.type === "nonveg";
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-8 mt-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mt-16">
          Bruschetta (Breads)
        </h1>
        <p className="text-gray-600 mt-2">Freshly baked breads with love!</p>
      </div>

      {/* ✅ Filter Buttons (Search Removed) */}
      <div className="flex items-center justify-start gap-4 mb-6">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded ${
            filter === "all" ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("veg")}
          className={`px-4 py-2 rounded flex items-center gap-2 ${
            filter === "veg" ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
        >
          <img src={vegIcon} className="w-4 h-4" /> Veg
        </button>

        <button
          onClick={() => setFilter("nonveg")}
          className={`px-4 py-2 rounded flex items-center gap-2 ${
            filter === "nonveg" ? "bg-red-600 text-white" : "bg-gray-200"
          }`}
        >
          <img src={nonVegIcon} className="w-4 h-4" /> Non-Veg
        </button>
      </div>

      {/* ✅ GRID VIEW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={item.type === "veg" ? vegIcon : nonVegIcon}
                  className="w-4 h-4"
                />
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
              </div>

              <p className="text-gray-500 text-sm mb-3">{item.desc}</p>

              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-800">₹ {item.price}</span>

                <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">
                  + Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
