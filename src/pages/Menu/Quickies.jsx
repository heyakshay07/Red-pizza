import React, { useState } from "react";
import vegIcon from "../../assets/quickies/veg.png";
import nonVegIcon from "../../assets/quickies/NV.png";

import fries from "../../assets/quickies/fries.jpg";
import friesPeri from "../../assets/quickies/friesPeri.jpg";
import popcorn from "../../assets/quickies/popcorn.jpg";
import nuggets from "../../assets/quickies/nuggets.jpg";
import cheeseBalls from "../../assets/quickies/cheeseBalls.jpg";
import chickenFinger from "../../assets/quickies/chickenFinger.jpg";
import kababRoll from "../../assets/quickies/kababRoll.jpg";
import kabab from "../../assets/quickies/kabab.jpg";

const items = [
  {
    id: "fries-99",
    name: "French Fries",
    price: 99,
    desc: "Crispy golden fries, lightly salted — classic & comforting.",
    img: fries,
    type: "veg",
  },
  {
    id: "fries-peri-119",
    name: "French Fries — Peri Peri",
    price: 119,
    desc: "Spicy peri-peri seasoning for a bold, zesty bite.",
    img: friesPeri,
    type: "veg",
  },
  {
    id: "popcorn-139",
    name: "Chicken Popcorn",
    price: 139,
    desc: "Tender bite-sized chicken pieces, fried to crunchy perfection.",
    img: popcorn,
    type: "nonveg",
  },
  {
    id: "nuggets-139",
    name: "Chicken Nuggets",
    price: 139,
    desc: "Classic golden nuggets — great with dips.",
    img: nuggets,
    type: "nonveg",
  },
  {
    id: "cheeseballs-139",
    name: "Red Cheese Balls",
    price: 139,
    desc: "Crispy shell, melty cheesy core — crowd favorite.",
    img: cheeseBalls,
    type: "veg",
  },
  {
    id: "finger-149",
    name: "Red Chicken Finger",
    price: 149,
    desc: "Spiced chicken fingers, crunchy outside, juicy inside.",
    img: chickenFinger,
    type: "nonveg",
  },
  {
    id: "kabab-roll-99",
    name: "Red Chicken Kabab Roll (2 pcs)",
    price: 99,
    desc: "Two rolls filled with spiced chicken kabab — quick & filling.",
    img: kababRoll,
    type: "nonveg",
  },
  {
    id: "kabab-119",
    name: "Red Chicken Kabab (5 pcs)",
    price: 119,
    desc: "Minced chicken, garlic, onion, tomato, spices — juicy kebabs.",
    img: kabab,
    type: "nonveg",
  },
];

export default function Quickies() {
  const [filter, setFilter] = useState("all");

  // ✅ FILTER ONLY (No search)
  const filteredItems = items.filter((item) => {
    if (filter === "all") return true;
    if (filter === "veg") return item.type === "veg";
    if (filter === "nonveg") return item.type === "nonveg";
    return true;
  });

  const handleAdd = (item) => {
    console.log("Added:", item);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* ✅ HEADER */}
      <div className="text-center mb-8 mt-8">
        <h1 className="text-3xl font-extrabold text-gray-800">Quickies</h1>
        <p className="text-gray-600 mt-2">
          Bite-sized delights — perfect to pair with your pizza!
        </p>
      </div>

      {/* ✅ FILTER ONLY (Search removed) */}
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

      {/* ✅ GRID ITEMS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((it) => (
          <div
            key={it.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={it.img}
              alt={it.name}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={it.type === "veg" ? vegIcon : nonVegIcon}
                  className="w-4 h-4"
                  alt="type"
                />
                <h3 className="font-semibold text-gray-800">{it.name}</h3>
              </div>

              <p className="text-gray-500 text-sm mb-3">{it.desc}</p>

              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-800">₹ {it.price}</span>

                <button
                  onClick={() => handleAdd(it)}
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                >
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
