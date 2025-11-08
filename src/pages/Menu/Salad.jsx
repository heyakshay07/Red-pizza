import React, { useState } from "react";

import vegIcon from "../../assets/quickies/veg.png";
import nonVegIcon from "../../assets/quickies/NV.png";

import mixVeg from "../../assets/salad/s1.png";
import vegHawaiian from "../../assets/salad/s2.png";
import chickenHawaiian from "../../assets/salad/s3.png";
import mixChicken from "../../assets/salad/s4.png";

const saladItems = [
  {
    id: 1,
    name: "Mix Veg Salad",
    desc: "All mixed veggies tossed in sauce & served with icy lettuce.",
    price: 250,
    img: mixVeg,
    type: "veg",
  },
  {
    id: 2,
    name: "Veg Hawaiian Salad",
    desc: "All mixed veggies & pineapple tossed in sauce & served with juicy lettuce.",
    price: 250,
    img: vegHawaiian,
    type: "veg",
  },
  {
    id: 3,
    name: "Hawaiian Chicken Salad",
    desc: "Chicken, barbequed pineapple pieces, served with lettuce.",
    price: 299,
    img: chickenHawaiian,
    type: "nonveg",
  },
  {
    id: 4,
    name: "Mix Chicken Salad",
    desc: "Chicken cubes marinated & veggies tossed to perfection served with lettuce.",
    price: 299,
    img: mixChicken,
    type: "nonveg",
  },
];

export default function Salad() {
  const [filter, setFilter] = useState("all");

  const filteredItems = saladItems.filter((item) => {
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
          Salad
        </h1>
        <p className="text-gray-600 mt-2">Fresh, crunchy, and healthy salads made to perfection!</p>
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
