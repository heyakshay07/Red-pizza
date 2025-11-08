import React, { useState } from "react";

import vegIcon from "../../assets/quickies/veg.png";
import nonVegIcon from "../../assets/quickies/NV.png";

// 🖼️ Add your burger images here
import vegBurger from "../../assets/burger/b1.png";
import nonVegBurger from "../../assets/burger/b2.png";

const burgerItems = [
  {
    id: 1,
    name: "Veg Burger",
    desc: "Crispy veg patty with fresh lettuce, tomato, and creamy mayo in a soft bun.",
    price: 80,
    img: vegBurger,
    type: "veg",
  },
  {
    id: 2,
    name: "Non-Veg Burger",
    desc: "Juicy chicken patty layered with lettuce, onions, and special sauce.",
    price: 100,
    img: nonVegBurger,
    type: "nonveg",
  },
];

export default function Burgers() {
  const [filter, setFilter] = useState("all");

  const filteredItems = burgerItems.filter((item) => {
    if (filter === "all") return true;
    if (filter === "veg") return item.type === "veg";
    if (filter === "nonveg") return item.type === "nonveg";
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-8 mt-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mt-16">Burgers</h1>
        <p className="text-gray-600 mt-2">
          Juicy, crispy, and delicious burgers for every craving!
        </p>
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

      {/* Grid View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={item.type === "veg" ? vegIcon : nonVegIcon}
                  className="w-4 h-4"
                  alt={item.type}
                />
                <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
              </div>

              <p className="text-gray-500 text-sm mb-3">{item.desc}</p>

              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-800 text-lg">₹ {item.price}</span>
                <button className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition">
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
