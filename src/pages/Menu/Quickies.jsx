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

// ✅ ITEM DATA
const items = [
  { id: "fries-99", name: "French Fries", price: 99, desc: "Crispy golden fries, lightly salted — classic & comforting.", img: fries, type: "veg" },
  { id: "fries-peri-119", name: "French Fries — Peri Peri", price: 119, desc: "Spicy peri-peri seasoning for a bold, zesty bite.", img: friesPeri, type: "veg" },
  { id: "popcorn-139", name: "Chicken Popcorn", price: 139, desc: "Tender bite-sized chicken pieces, fried to crunchy perfection.", img: popcorn, type: "nonveg" },
  { id: "nuggets-139", name: "Chicken Nuggets", price: 139, desc: "Classic golden nuggets — great with dips.", img: nuggets, type: "nonveg" },
  { id: "cheeseballs-139", name: "Red Cheese Balls", price: 139, desc: "Crispy shell, melty cheesy core — crowd favorite.", img: cheeseBalls, type: "veg" },
  { id: "finger-149", name: "Red Chicken Finger", price: 149, desc: "Spiced chicken fingers, crunchy outside, juicy inside.", img: chickenFinger, type: "nonveg" },
  { id: "kabab-roll-99", name: "Red Chicken Kabab Roll (2 pcs)", price: 99, desc: "Two rolls filled with spiced chicken kabab — quick & filling.", img: kababRoll, type: "nonveg" },
  { id: "kabab-119", name: "Red Chicken Kabab (5 pcs)", price: 119, desc: "Minced chicken, garlic, onion, tomato, spices — juicy kebabs.", img: kabab, type: "nonveg" },
];

// ✅ Customization Data
const vegToppings = ["Onion", "Tomato", "Capsicum", "Mushroom", "Jalapeno", "American Corn", "Black Olives", "Baby Corn", "Garlic", "Red Pepper", "Pineapple"];
const nonVegToppings = ["Spicy Chicken", "Roast Chicken", "Barbequed Chicken", "Plain Chicken", "Chicken Salami", "Chicken Sausage", "Chicken Schezwan", "Chicken Tikka", "Chicken Kheema"];

const cheeseOptions = [
  { name: "Regular", price: 100 },
  { name: "Medium", price: 125 },
  { name: "Large", price: 140 },
];

const baseOptions = [
  { name: "Stuffed Crust", sizes: [{ size: "R", price: 105 }, { size: "M", price: 155 }] },
  { name: "Cheese Burst", sizes: [{ size: "R", price: 125 }, { size: "M", price: 159 }] },
  { name: "Thin Crust", sizes: [{ size: "R", price: 79 }, { size: "M", price: 119 }, { size: "L", price: 159 }] },
  { name: "Pan Tossed", sizes: [{ size: "R", price: 79 }, { size: "M", price: 119 }, { size: "L", price: 159 }] },
];

// ✅ Topping price by size
const toppingPrices = {
  veg: { R: 60, M: 85, L: 115 },
  nonveg: { R: 90, M: 110, L: 125 },
};

export default function Quickies() {
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [tab, setTab] = useState("toppings");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [selectedCheese, setSelectedCheese] = useState(null);
  const [selectedBase, setSelectedBase] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("R");

  const filteredItems = items.filter((item) =>
    filter === "all" ? true : item.type === filter
  );

  const toggleTopping = (t) => {
    setSelectedToppings((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };

  const vegToppingPrice = toppingPrices.veg[size];
  const nonVegToppingPrice = toppingPrices.nonveg[size];

  const vegSelected = selectedToppings.filter((t) => vegToppings.includes(t)).length;
  const nonVegSelected = selectedToppings.filter((t) => nonVegToppings.includes(t)).length;

  const basePrice = selectedItem?.price || 0;
  const toppingPrice = vegSelected * vegToppingPrice + nonVegSelected * nonVegToppingPrice;
  const cheesePrice = selectedCheese?.price || 0;
  const baseExtra = selectedBase?.price || 0;
  const totalPrice = (basePrice + toppingPrice + cheesePrice + baseExtra) * quantity;

  const handleAddToCart = async () => {
    const cartItem = {
      id: selectedItem.id,
      name: selectedItem.name,
      size,
      quantity,
      toppings: selectedToppings,
      cheese: selectedCheese?.name,
      base: selectedBase?.name,
      totalPrice,
    };
    try {
      await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartItem),
      });
      alert("✅ Added to cart!");
      setSelectedItem(null);
    } catch {
      alert("❌ Failed to add to cart");
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-8 mt-8">
          <h1 className="text-3xl font-extrabold text-gray-800 mt-16">Quickies</h1>
          <p className="text-gray-600 mt-2">
            Bite-sized delights — perfect to pair with your pizza!
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-start gap-4 mb-6">
          {["all", "veg", "nonveg"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded flex items-center gap-2 ${
                filter === type
                  ? type === "veg"
                    ? "bg-green-500 text-white"
                    : type === "nonveg"
                    ? "bg-red-600 text-white"
                    : "bg-red-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {type === "veg" && <img src={vegIcon} className="w-4 h-4" />}
              {type === "nonveg" && <img src={nonVegIcon} className="w-4 h-4" />}
              {type === "all" ? "All" : type === "veg" ? "Veg" : "Non-Veg"}
            </button>
          ))}
        </div>

        {/* Item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((it) => (
            <div key={it.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <img src={it.img} alt={it.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <img src={it.type === "veg" ? vegIcon : nonVegIcon} className="w-4 h-4" alt="type" />
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
      </div>

      {/* ✅ POPUP MODAL */}
      {selectedItem && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50"
          onClick={() => setSelectedItem(null)}
        >
          {/* Background blur */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

          {/* Popup */}
          <div
            className="relative bg-white w-full max-w-lg rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh] z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black"
            >
              ×
            </button>

            <h2 className="text-xl font-bold mb-2">{selectedItem.name}</h2>
            <p className="text-gray-600 mb-4">{selectedItem.desc}</p>

            {/* SIZE */}
            <div className="flex gap-3 mb-4">
              {["R", "M", "L"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-3 py-1 rounded border ${
                    size === s ? "bg-red-500 text-white border-red-500" : "border-gray-300"
                  }`}
                >
                  {s === "R" ? "Regular" : s === "M" ? "Medium" : "Large"}
                </button>
              ))}
            </div>

            {/* TABS */}
            <div className="flex border-b mb-4">
              {["toppings", "cheese", "base"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex-1 py-2 font-semibold ${
                    tab === t ? "border-b-2 border-red-500 text-red-600" : "text-gray-500"
                  }`}
                >
                  {t === "toppings" ? "Toppings" : t === "cheese" ? "Cheese" : "Base"}
                </button>
              ))}
            </div>

            {/* TAB CONTENTS */}
            {tab === "toppings" && (
              <div>
                <p className="font-semibold mb-2">
                  Veg Toppings <span className="text-sm text-gray-500">₹{vegToppingPrice} each</span>
                </p>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {vegToppings.map((t) => (
                    <label key={t} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedToppings.includes(t)}
                        onChange={() => toggleTopping(t)}
                      />
                      {t}
                    </label>
                  ))}
                </div>

                <p className="font-semibold mb-2">
                  Non-Veg Toppings{" "}
                  <span className="text-sm text-gray-500">₹{nonVegToppingPrice} each</span>
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {nonVegToppings.map((t) => (
                    <label key={t} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedToppings.includes(t)}
                        onChange={() => toggleTopping(t)}
                      />
                      {t}
                    </label>
                  ))}
                </div>
              </div>
            )}

            {tab === "cheese" && (
              <div className="grid grid-cols-3 gap-3">
                {cheeseOptions.map((c) => (
                  <label
                    key={c.name}
                    className={`border p-3 rounded text-center cursor-pointer ${
                      selectedCheese?.name === c.name ? "border-red-500 bg-red-50" : ""
                    }`}
                    onClick={() => setSelectedCheese(c)}
                  >
                    <div className="font-semibold">{c.name}</div>
                    <div className="text-sm text-gray-600">₹{c.price}</div>
                  </label>
                ))}
              </div>
            )}

            {tab === "base" && (
              <div>
                {baseOptions.map((b) => (
                  <div key={b.name} className="mb-3">
                    <p className="font-semibold mb-1">{b.name}</p>
                    <div className="flex flex-wrap gap-2">
                      {b.sizes.map((s) => (
                        <label
                          key={s.size}
                          className={`border px-3 py-1 rounded cursor-pointer ${
                            selectedBase?.name === `${b.name}-${s.size}`
                              ? "border-red-500 bg-red-50"
                              : ""
                          }`}
                          onClick={() =>
                            setSelectedBase({ name: `${b.name}-${s.size}`, price: s.price })
                          }
                        >
                          {s.size} ₹{s.price}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* PRICE & QUANTITY */}
            <div className="flex justify-between items-center mt-6 border-t pt-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full text-lg"
                >
                  -
                </button>
                <span className="font-semibold text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full text-lg"
                >
                  +
                </button>
              </div>

              <div className="text-right">
                <p className="text-gray-600 text-sm">Total</p>
                <p className="text-2xl font-bold text-red-600">₹{totalPrice}</p>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full mt-6 bg-green-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}
