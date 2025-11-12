import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import QuickieModal from "../../components/QuickieModal";
import FilterButtons from "../../components/FilterButtons"; // ✅ Shared filter

import vegIcon from "../../assets/quickies/veg.png";
import nonVegIcon from "../../assets/quickies/NV.png";

import breadVeg from "../../assets/bruschetta/vegBread.jpeg";
import breadNonVeg from "../../assets/bruschetta/nonvegBread.jpeg";
import breadCheese from "../../assets/bruschetta/cheeseBread.jpeg";

// 🥖 Bruschetta Items
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
    desc: "Baked with love, Shredded Chicken topped with Mint sauce & a secret sauce to surprise you in every bite",
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
  const { handleAddToCart } = useContext(CartContext);
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search")?.toLowerCase() || "";

  // ✅ Filter logic (search + type)
  const filteredItems = bruschettaItems.filter((item) =>
    filter === "all"
      ? item.name.toLowerCase().includes(searchQuery)
      : item.type === filter &&
        item.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-8 mt-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mt-16">
          Bruschetta (Breads)
        </h1>
        <p className="text-gray-600 mt-2">Freshly baked breads with love!</p>
      </div>

      {/* ✅ Shared FilterButtons */}
      <FilterButtons filter={filter} setFilter={setFilter} />

      {/* Item Grid */}
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
              {/* ✅ Item Name with Veg/Non-Veg Icon */}
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={it.type === "veg" ? vegIcon : nonVegIcon}
                  alt={it.type}
                  className="w-4 h-4"
                />
                <h3 className="font-semibold text-gray-800">{it.name}</h3>
              </div>

              <p className="text-gray-500 text-sm mb-3">{it.desc}</p>

              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-800">₹ {it.price}</span>
                <button
                  onClick={() => setSelectedItem(it)}
                  className="px-4 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                >
                  + Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ External QuickieModal */}
      {selectedItem && (
        <QuickieModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onAddToCart={(itemData) => {
            handleAddToCart(itemData);
            setSelectedItem(null);
          }}
        />
      )}
    </div>
  );
}
