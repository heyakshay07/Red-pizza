import React, { useState } from "react";

import vegIcon from "../../assets/quickies/veg.png";
import nonVegIcon from "../../assets/quickies/NV.png";

import pastaVegRed from "../../assets/pasta/p.png";
import pastaVegWhite from "../../assets/pasta/p2.png";
import pastaNonVegRed from "../../assets/pasta/p3.png";
import pastaNonVegWhite from "../../assets/pasta/p4.png";

const pastaItems = [
  {
    id: 1,
    name: "Veg Pasta Red Sauce",
    desc: "Red Sauce, Veggies, Tossed together",
    price: 215,
    img: pastaVegRed,
    type: "veg",
  },
  {
    id: 2,
    name: "Veg Pasta White Sauce",
    desc: "Made in White Sauce, Golden Corn, Capsicum & Cheese",
    price: 225,
    img: pastaVegWhite,
    type: "veg",
  },
  {
    id: 3,
    name: "Non-Veg Pasta Red Sauce",
    desc: "Shredded Chicken, Broccoli, Mushrooms tossed in Red Sauce",
    price: 225,
    img: pastaNonVegRed,
    type: "nonveg",
  },
  {
    id: 4,
    name: "Non-Veg Pasta White Sauce",
    desc: "Chicken Cubes cooked in White Cheesy Sauce, and Veggies",
    price: 225,
    img: pastaNonVegWhite,
    type: "nonveg",
  },
];

export default function Pasta() {
  const [filter, setFilter] = useState("all");

  const filteredItems = pastaItems.filter((item) => {
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
          Pasta
        </h1>
        <p className="text-gray-600 mt-2">Creamy and flavorful pasta delights!</p>
      </div>

      {/* Filter Buttons */}
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
          <img src={vegIcon} className="w-4 h-4" alt="veg" /> Veg
        </button>

        <button
          onClick={() => setFilter("nonveg")}
          className={`px-4 py-2 rounded flex items-center gap-2 ${
            filter === "nonveg" ? "bg-red-600 text-white" : "bg-gray-200"
          }`}
        >
          <img src={nonVegIcon} className="w-4 h-4" alt="non-veg" /> Non-Veg
        </button>
      </div>

      {/* Grid */}
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
                  alt={item.type}
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
