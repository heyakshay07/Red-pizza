import React, { useState, useContext } from "react";
import QuickieModal from "../../components/QuickieModal";
import { CartContext } from "../../context/CartContext";
import FilterButtons from "../../components/FilterButtons";

import vegIcon from "../../assets/quickies/veg.png";
import nonVegIcon from "../../assets/quickies/NV.png";

// 🖼️ Combo images
import comboVegRegular from "../../assets/combo/co2.png";
import comboVegMedium from "../../assets/combo/co2.png";
import comboNonVegMedium from "../../assets/combo/co3.png";
import comboVegLarge from "../../assets/combo/co5.png";
import comboNonVegLarge from "../../assets/combo/co4.png";

// ✅ Combo Data
const comboItems = [
  {
    id: 1,
    name: "Regular Pizza Combo (V1 & NV1)",
    desc: "Regular Pizza + Fries + Coke (Select Regular pizza from V1 & NV1 categories)",
    price: 299,
    img: comboVegRegular,
    type: "veg",
  },
  {
    id: 2,
    name: "Medium Pizza Combo (V1)",
    desc: "Medium Pizza + Fries + Coke (Select Medium V1 pizza)",
    price: 410,
    img: comboVegMedium,
    type: "veg",
  },
  {
    id: 3,
    name: "Medium Pizza Combo (NV1)",
    desc: "Medium Pizza + Fries + Coke (Select Medium NV1 pizza)",
    price: 505,
    img: comboNonVegMedium,
    type: "nonveg",
  },
  {
    id: 4,
    name: "Large Pizza Combo (V1)",
    desc: "Large Pizza + Garlic Bread + Fries + Coke (Select Large V1 pizza)",
    price: 570,
    img: comboVegLarge,
    type: "veg",
  },
  {
    id: 5,
    name: "Large Pizza Combo (NV1)",
    desc: "Large Pizza + Garlic Bread + Fries + Coke (Select Large NV1 pizza)",
    price: 780,
    img: comboNonVegLarge,
    type: "nonveg",
  },
];

export default function ComboOffer() {
  const { addToCart } = useContext(CartContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState("all"); // <-- Filter state added

  // ✅ Filter logic
  const filteredItems =
    filter === "all"
      ? comboItems
      : comboItems.filter((item) => item.type === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-8 mt-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mt-16">
          🍕 Combo Offers
        </h1>
        <p className="text-gray-600 mt-2">
          Available only for V1 & NV1 pizzas — includes Coke (250ml) & Fries (small)
        </p>
      </div>

      {/* ✅ Filter Buttons */}
      <div className="flex justify-start mb-8">
        <FilterButtons filter={filter} setFilter={setFilter} />
      </div>

      {/* ✅ Grid View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer"
            onClick={() => setSelectedItem(item)}
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
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.name}
                </h3>
              </div>

              <p className="text-gray-500 text-sm mb-3">{item.desc}</p>

              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-800 text-lg">
                  ₹{item.price}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedItem(item);
                  }}
                  className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Common QuickieModal */}
      {selectedItem && (
        <QuickieModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onAddToCart={(data) => {
            addToCart(data);
            setSelectedItem(null);
          }}
        />
      )}
    </div>
  );
}
