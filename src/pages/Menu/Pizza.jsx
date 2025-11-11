import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext"; // ✅ added
import vegIcon from "../../assets/quickies/veg.png";
import nonVegIcon from "../../assets/quickies/NV.png";

import veg1 from "../../assets/pizza/V1.png";
import veg2 from "../../assets/pizza/v2.png";
import veg3 from "../../assets/pizza/v3.png";
import veg4 from "../../assets/pizza/v4.png";
import veg5 from "../../assets/pizza/v5.png";
import veg6 from "../../assets/pizza/v6.jpeg";
import veg7 from "../../assets/pizza/v7.jpeg";
import veg8 from "../../assets/pizza/v8.jpeg";
import veg9 from "../../assets/pizza/v9.jpeg";
import veg from "../../assets/pizza/vegPizza.jpeg";
import nonvegPizza from "../../assets/pizza/nonvegPizza.jpeg";
import jain from "../../assets/pizza/jain.jpeg";

// ✅ Online Sample Pizza Images
const pizzaImages = {
  veg,
  nonveg: nonvegPizza,
  jain,
};

// ✅ Pizza Data
const pizzaCategories = {
  "Veg V1": [
    { name: "Margherita", desc: "Fresh mozzarella with basil", price: 139, type: "veg", img: veg1 },
    { name: "Simple Veg", desc: "Onion & Tomato", price: 139, type: "veg", img: veg2 },
    { name: "Garlic Pizza", desc: "Garlic & Cheese", price: 139, type: "veg", img: veg3 },
    { name: "Veggie Crunch", desc: "Diced onion, Bell peppers & Mozzarella", price: 139, type: "veg", img: veg4 },
    { name: "Corn Treat", desc: "Mozzarella & Golden Corn", price: 139, type: "veg", img: veg5 },
  ],
    "Veg V2": [
    { name: "Veggie Mix", desc: "Onion, Capsicum & Tomato", price: 179, type: "veg", img: veg6 },
    { name: "Mushroom Lovers", desc: "Mushroom, Garlic & Green Chili", price: 179, type: "veg", img: veg7 },
    { name: "Corn Exotica", desc: "American Corn, Red Pepper & Cpasicum", price: 179, type: "veg", img: veg8 },
    { name: "Spicy Veg", desc: "Fried Onion & Tomato With Special Spices", price: 179, type: "veg", img: veg9 },
  ],
  "Veg V3": [
  { name: "Paneer Tikka", desc: "Paneer, Capsicum & Red Pepper", price: 209, medium: 419, large: 549, type: "veg" },
  { name: "Veg Hawaiian", desc: "Pineapple, Jalapeno, American Corn & Capsicum", price: 209, medium: 419, large: 549, type: "veg" },
  { name: "Veggie Senorita", desc: "Jalapeno, American Corn, Tomato, Black Olives", price: 209, medium: 419, large: 549, type: "veg" },
  { name: "Jain Pizza", desc: "Mushroom, American Corn, Black Olives & Extra Cheese", price: 209, medium: 419, large: 549, type: "jain" },
  { name: "Classic Supreme", desc: "Paneer Schezwan, Capsicum, Baby Corn, Mushroom, Onion & Jalapeno", price: 209, medium: 419, large: 549, type: "veg" },
  { name: "Paneer & Onion", desc: "Fresh Paneer with Onion", price: 209, medium: 419, large: 549, type: "veg" },
  { name: "Spicy Paneer", desc: "Paneer, Onion, Capsicum & Green Chili cooked in Chinese style", price: 209, medium: 419, large: 549, type: "veg" },
  { name: "Golden Delight", desc: "Corn, Onion, Capsicum & Tomato", price: 209, medium: 419, large: 549, type: "veg" },
  { name: "Red Passion", desc: "Onion, Red Pepper, Jalapeno & Green Chili", price: 209, medium: 419, large: 549, type: "veg" },
],
  "Veg V4": [
  {
    name: "Punjabi Retreat",
    desc: "Tandoori Paneer, American Corn, Tomato, Mushroom & Extra Cheese",
    price: 255,
    medium: 475,
    large: 625,
    type: "veg"
  },
  {
    name: "Veg Extravaganza",
    desc: "Onion, Capsicum, Tomato, American Corn, Mushroom, Black Olives, Oregano, Basil & Extra Cheese",
    price: 255,
    medium: 475,
    large: 625,
    type: "veg"
  }
],

  "Non Veg NV1": [
  {
    name: "Spicy Chicken",
    desc: "Cheese & Spicy Chicken",
    price: 169,
    medium: 365,
    large: 499,
    type: "nonveg"
  },
  {
    name: "Roast Chicken",
    desc: "Cheese, Roast Chicken & Onion",
    price: 169,
    medium: 365,
    large: 499,
    type: "nonveg"
  },
  {
    name: "Half Roast Half Spicy",
    desc: "Spicy Chicken Chunks & Roasted Chunks with Cheese",
    price: 169,
    medium: 365,
    large: 499,
    type: "nonveg"
  },
  {
    name: "Plain Chicken",
    desc: "Plain Chicken Chunks & Cheese",
    price: 169,
    medium: 365,
    large: 499,
    type: "nonveg"
  }
],

  "Non Veg NV2": [
  {
    name: "Chicken Tikka",
    desc: "Red Pepper added, and Cheese",
    price: 265,       // Regular 7"
    medium: 520,      // Medium 10"
    large: 625,       // Large 12"
    type: "nonveg"
  },
  {
    name: "Chicken Salami",
    desc: "Onion, Garlic & Cheese",
    price: 265,
    medium: 520,
    large: 625,
    type: "nonveg"
  },
  {
    name: "Chicken Schezwan",
    desc: "Spring Onion & Schezwan Chicken Chunks",
    price: 265,
    medium: 520,
    large: 625,
    type: "nonveg"
  },
  {
    name: "Chicken Sausage",
    desc: "Cooked in Green Chilly Sauce with Onion & Capsicum",
    price: 265,
    medium: 520,
    large: 625,
    type: "nonveg"
  }
],

   "Non Veg NV3": [
  {
    name: "Barbecue Chicken",
    desc: "Mushroom, Barbecue Chicken Chunks & Onion",
    price: 299,      // Regular 7"
    medium: 549,     // Medium 10"
    large: 689,      // Large 12"
    type: "nonveg"
  },
  {
    name: "Grocy Italian",
    desc: "Roast Chicken, Chicken Sausage, Garlic, Onion & Mushroom",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg"
  },
  {
    name: "Mix Chicken",
    desc: "Hot & Spicy Chicken, Chicken Tikka & Plain Chicken",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg"
  },
  {
    name: "RED Supreme",
    desc: "Spicy Chicken Sausage, Onion, Barbequed Chicken & Jalapeno",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg"
  },
  {
    name: "RED Hawaiian",
    desc: "Barbequed Chicken, Pineapple & Jalapeno",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg"
  },
  {
    name: "Chilly Chicken",
    desc: "Capsicum, Onion & Green Chilly cooked in Chinese style",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg"
  },
  {
    name: "Golden Chicken",
    desc: "American Corn, Chicken Tikka & Extra Cheese",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg"
  },
  {
    name: "RED Feast",
    desc: "Chicken Sausage & Barbecue Chunks",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg"
  },
  {
    name: "RED Dopiaza",
    desc: "Two types of Chicken & Fried Omelet",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg"
  },
  {
    name: "Butter Chicken",
    desc: "Rich buttery chicken with cheese",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg"
  },
  {
    name: "RED Lazania",
    desc: "Fried Chicken marinated with Special Sauce",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg"
  },
  {
    name: "American Delight",
    desc: "Chicken, American Corn, Tomato, Olives & Jalapeno",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg"
  },
  {
    name: "RED LE",
    desc: "Chicken Shreds, Cheese, Fried Chicken & Sausage",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg"
  },
  {
    name: "RED Mexican",
    desc: "Spicy Chicken, Salami, Jalapeno & Capsicum",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg"
  }
],

"Non Veg NV4": [
  {
    name: "RED Special",
    desc: "Plain Chicken, Sausage, Salami, Onion, Garlic & Extra Cheese",
    price: 345,      // Regular 7"
    medium: 629,     // Medium 10"
    large: 859,      // Large 12"
    type: "nonveg"
  },
  {
    name: "RED Indigo",
    desc: "Schezwan Chicken, Black Olives, Onion, Capsicum & Extra Cheese",
    price: 345,
    medium: 629,
    large: 859,
    type: "nonveg"
  },
  {
    name: "RED Hochste",
    desc: "Chicken Sausage, Chicken Salami, Chicken Kheema, Onion, Capsicum, Tomato & Extra Cheese",
    price: 345,
    medium: 629,
    large: 859,
    type: "nonveg"
  },
  {
    name: "RED Preferita",
    desc: "Fried Chicken, Spicy Chicken, Chicken Sausage, Onion, Capsicum & Extra Cheese",
    price: 345,
    medium: 629,
    large: 859,
    type: "nonveg"
  },
  {
    name: "RED Extravaganza",
    desc: "Chicken Tikka, Barbeque Chicken, Chicken Sausage, Onion, Black Olives, Mushroom & Extra Cheese",
    price: 345,
    medium: 629,
    large: 859,
    type: "nonveg"
  }
],

  "Jain": [
    { name: "Jain Classic", desc: "Pure Jain pizza base", price: 159, type: "jain" },
  ],
};


// ✅ Customization Options
const vegToppings = ["Onion", "Tomato", "Capsicum", "Mushroom", "Jalapeno", "Corn", "Black Olives"];
const nonVegToppings = ["Chicken Tikka", "Roast Chicken", "Barbeque Chicken"];
const cheeseOptions = [
  { name: "Regular ", price: 100 },
  { name: "Medium ", price: 125 },
  { name: "Large ", price: 140 },
];
const baseOptions = [
  { name: "Plain", price: 0 },
  { name: "Cheese Burst", price: 50 },
  { name: "Garlic Crust", price: 40 },
];
const toppingPrices = { veg: 25, nonveg: 40 };

export default function PizzaMenu() {
  const { handleAddToCart } = useContext(CartContext); // ✅ Added
  const [filter, setFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("All");
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [customTab, setCustomTab] = useState("toppings");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [selectedCheese, setSelectedCheese] = useState(cheeseOptions[0]);
  const [selectedBase, setSelectedBase] = useState(baseOptions[0]);
  const [quantity, setQuantity] = useState(1);

  // ✅ Filter pizzas
  const filteredCategories = Object.entries(pizzaCategories).filter(
    ([key]) =>
      filter === "all" ||
      (filter === "veg" && key.startsWith("Veg")) ||
      (filter === "nonveg" && key.startsWith("Non Veg")) ||
      (filter === "jain" && key === "Jain")
  );

  const displayedPizzas =
    activeTab === "All"
      ? filteredCategories.flatMap(([, pizzas]) => pizzas)
      : pizzaCategories[activeTab] || [];

  const toggleTopping = (t) => {
    setSelectedToppings((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));
  };

  const basePrice = selectedPizza?.price || 0;
  const toppingPrice =
    selectedToppings.length *
    (selectedPizza?.type === "nonveg" ? toppingPrices.nonveg : toppingPrices.veg);
  const cheesePrice = selectedCheese?.price || 0;
  const baseExtra = selectedBase?.price || 0;
  const totalPrice = (basePrice + toppingPrice + cheesePrice + baseExtra) * quantity;

  const handleOverlayClick = (e) => {
    if (e.target.id === "popup-overlay") setSelectedPizza(null);
  };

  const getPizzaImage = (type) => {
    if (type === "nonveg") return pizzaImages.nonveg;
    if (type === "jain") return pizzaImages.jain;
    return pizzaImages.veg;
  };

  // ✅ Add-to-cart function
  const handleAddToCartClick = () => {
    if (!selectedPizza) return;
    const itemToAdd = {
      id: `${selectedPizza.name}-${Date.now()}`,
      ...selectedPizza,
      image: selectedPizza.img || getPizzaImage(selectedPizza.type),
      toppings: selectedToppings,
      cheese: selectedCheese,
      base: selectedBase,
      quantity,
      totalPrice,
    };
    handleAddToCart(itemToAdd);
    setSelectedPizza(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-800 mt-16">🍕 Our Pizza Collection</h1>
        <p className="text-gray-500 mt-2">Freshly baked, cheesy, and delicious!</p>
      </div>

      {/* Filter */}
      <div className="flex justify-start gap-8 mb-6">
        {["veg", "nonveg", "jain"].map((type) => (
          <label key={type} className="flex items-center gap-2 cursor-pointer">
            <img
              src={type === "veg" ? vegIcon : type === "nonveg" ? nonVegIcon : vegIcon}
              alt={type}
              className="w-5 h-5"
            />
            <span className="capitalize font-semibold text-gray-700">
              {type === "veg" ? "Veg" : type === "nonveg" ? "Non Veg" : "Jain"}
            </span>
            <input
              type="checkbox"
              checked={filter === type}
              onChange={() => setFilter(filter === type ? "all" : type)}
              className="w-5 h-5 accent-red-500"
            />
          </label>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-start gap-4 border-b pb-3 mb-8">
        {["All", ...Object.keys(pizzaCategories)].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-3 pb-1 border-b-2 font-medium ${
              activeTab === cat
                ? "border-red-500 text-red-600"
                : "border-transparent text-gray-600 hover:text-red-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Pizza Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedPizzas.map((p, index) => (
          <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
            <img src={p.img || getPizzaImage(p.type)} alt={p.name} className="w-full h-44 object-cover" />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <img src={p.type === "nonveg" ? nonVegIcon : vegIcon} alt="type" className="w-4 h-4" />
                <h3 className="font-semibold text-gray-800">{p.name}</h3>
              </div>
              <p className="text-gray-500 text-sm mb-3">{p.desc}</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-800">₹ {p.price}</span>
                <button
                  onClick={() => setSelectedPizza(p)}
                  className="px-4 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                >
                  + Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {selectedPizza && (
        <div
          id="popup-overlay"
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm"
          onClick={handleOverlayClick}
        >
          <div
            className="relative bg-white w-full max-w-lg rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPizza(null)}
              className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black"
            >
              ×
            </button>

            <div className="flex items-center gap-2 mb-3">
              <img
                src={selectedPizza.type === "nonveg" ? nonVegIcon : vegIcon}
                alt="type"
                className="w-5 h-5"
              />
              <h2 className="text-xl font-bold">{selectedPizza.name}</h2>
            </div>
            <p className="text-gray-600 mb-4">{selectedPizza.desc}</p>

            {/* Inner Tabs */}
            <div className="flex border-b mb-4">
              {["toppings", "cheese", "base"].map((t) => (
                <button
                  key={t}
                  onClick={() => setCustomTab(t)}
                  className={`flex-1 py-2 font-semibold ${
                    customTab === t
                      ? "border-b-2 border-red-500 text-red-600"
                      : "text-gray-500"
                  }`}
                >
                  {t === "toppings" ? "Toppings" : t === "cheese" ? "Cheese" : "Base"}
                </button>
              ))}
            </div>

            {customTab === "toppings" && (
              <div className="grid grid-cols-2 gap-2 mb-3">
                {(selectedPizza.type === "nonveg" ? nonVegToppings : vegToppings).map((t) => (
                  <label key={t} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedToppings.includes(t)}
                      onChange={() => toggleTopping(t)}
                    />
                    {t}
                    <span className="text-sm text-gray-500">
                      ₹{selectedPizza.type === "nonveg" ? toppingPrices.nonveg : toppingPrices.veg}
                    </span>
                  </label>
                ))}
              </div>
            )}

            {customTab === "cheese" && (
              <div className="grid grid-cols-2 gap-3">
                {cheeseOptions.map((c) => (
                  <div
                    key={c.name}
                    className={`border p-3 rounded text-center cursor-pointer ${
                      selectedCheese?.name === c.name ? "border-red-500 bg-red-50" : ""
                    }`}
                    onClick={() => setSelectedCheese(c)}
                  >
                    <div className="font-semibold">{c.name}</div>
                    <div className="text-sm text-gray-600">₹{c.price}</div>
                  </div>
                ))}
              </div>
            )}

            {customTab === "base" && (
              <div className="grid grid-cols-2 gap-3">
                {baseOptions.map((b) => (
                  <div
                    key={b.name}
                    className={`border p-3 rounded text-center cursor-pointer ${
                      selectedBase?.name === b.name ? "border-red-500 bg-red-50" : ""
                    }`}
                    onClick={() => setSelectedBase(b)}
                  >
                    <div className="font-semibold">{b.name}</div>
                    <div className="text-sm text-gray-600">₹{b.price}</div>
                  </div>
                ))}
              </div>
            )}

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
              onClick={handleAddToCartClick}
              className="w-full mt-6 bg-green-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
