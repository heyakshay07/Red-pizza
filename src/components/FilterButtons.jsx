// src/components/FilterButtons.jsx
import React from "react";
import vegIcon from "../assets/quickies/veg.png";
import nonVegIcon from "../assets/quickies/NV.png";

const FilterButtons = ({ filter, setFilter }) => {
  const filters = [
    { type: "all", label: "All" },
    { type: "veg", label: "Veg", icon: vegIcon },
    { type: "nonveg", label: "Non-Veg", icon: nonVegIcon },
  ];

  return (
    <div className="flex items-center justify-start gap-4 mb-8">
      {filters.map(({ type, label, icon }) => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={`px-4 py-2 rounded-full font-semibold border flex items-center gap-2 transition-all duration-300 ${
            filter === type
              ? "bg-red-500 text-white border-red-500"
              : "bg-white text-gray-600 border-gray-300 hover:bg-red-100"
          }`}
        >
          {icon && <img src={icon} alt={label} className="w-4 h-4" />}
          {label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
