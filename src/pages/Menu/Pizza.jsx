import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import QuickieModal from "../../components/QuickieModal";
import FilterButtons from "../../components/FilterButtons"; // ✅ Shared filter

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
import veg10 from "../../assets/pizza/v10.webp";
import veg11 from "../../assets/pizza/v11.webp";
import veg12 from "../../assets/pizza/v12.webp";
import veg13 from "../../assets/pizza/v13.webp";
import veg14 from "../../assets/pizza/v14.webp";
import veg15 from "../../assets/pizza/v15.webp";
import veg16 from "../../assets/pizza/v16.webp";
import veg17 from "../../assets/pizza/v17.webp";
import veg18 from "../../assets/pizza/v18.webp";
import veg19 from "../../assets/pizza/v19.webp";
import veg20 from "../../assets/pizza/v20.webp";
import veg21 from "../../assets/pizza/v21.webp";
import veg22 from "../../assets/pizza/v22.webp";
import veg23 from "../../assets/pizza/v23.webp";
import veg24 from "../../assets/pizza/v24.webp";
import veg25 from "../../assets/pizza/v25.webp";
import veg26 from "../../assets/pizza/v26.webp";
import veg27 from "../../assets/pizza/v27.webp";
import veg28 from "../../assets/pizza/v28.webp";
import veg29 from "../../assets/pizza/v29.webp";
import veg30 from "../../assets/pizza/v30.webp";
import veg31 from "../../assets/pizza/v31.webp";
import veg32 from "../../assets/pizza/v32.webp";
import veg33 from "../../assets/pizza/v33.webp";
import veg34 from "../../assets/pizza/v34.webp";
import veg35 from "../../assets/pizza/v35.webp";
import veg36 from "../../assets/pizza/v36.webp";
import veg37 from "../../assets/pizza/v37.webp";
import veg38 from "../../assets/pizza/v38.webp";
import veg39 from "../../assets/pizza/v39.webp";
import veg40 from "../../assets/pizza/v40.webp";
import veg41 from "../../assets/pizza/v41.webp";
import veg42 from "../../assets/pizza/v42.webp";
import veg43 from "../../assets/pizza/v43.webp";
import veg44 from "../../assets/pizza/v44.webp";
import veg45 from "../../assets/pizza/v45.webp";
import veg46 from "../../assets/pizza/v46.webp";
import veg47 from "../../assets/pizza/v47.webp";
import veg48 from "../../assets/pizza/v48.webp";

// ✅ Pizza Data (same as before)
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
  { name: "Paneer Tikka", desc: "Paneer, Capsicum & Red Pepper", price: 209, medium: 419, large: 549, type: "veg", img: veg10 },
  { name: "Veg Hawaiian", desc: "Pineapple, Jalapeno, American Corn & Capsicum", price: 209, medium: 419, large: 549, type: "veg", img: veg11 },
  { name: "Veggie Senorita", desc: "Jalapeno, American Corn, Tomato, Black Olives", price: 209, medium: 419, large: 549, type: "veg", img: veg12 },
  { name: "Jain Pizza", desc: "Mushroom, American Corn, Black Olives & Extra Cheese", price: 209, medium: 419, large: 549, type: "jain", img: veg13 },
  { name: "Classic Supreme", desc: "Paneer Schezwan, Capsicum, Baby Corn, Mushroom, Onion & Jalapeno", price: 209, medium: 419, large: 549, type: "veg", img: veg14 },
  { name: "Paneer & Onion", desc: "Fresh Paneer with Onion", price: 209, medium: 419, large: 549, type: "veg", img: veg15 },
  { name: "Spicy Paneer", desc: "Paneer, Onion, Capsicum & Green Chili cooked in Chinese style", price: 209, medium: 419, large: 549, type: "veg", img: veg16 },
  { name: "Golden Delight", desc: "Corn, Onion, Capsicum & Tomato", price: 209, medium: 419, large: 549, type: "veg" ,img: veg17},
  { name: "Red Passion", desc: "Onion, Red Pepper, Jalapeno & Green Chili", price: 209, medium: 419, large: 549, type: "veg",img: veg18 },
],
  "Veg V4": [
  {
    name: "Punjabi Retreat",
    desc: "Tandoori Paneer, American Corn, Tomato, Mushroom & Extra Cheese",
    price: 255,
    medium: 475,
    large: 625,
    type: "veg",
    img: veg19
  },
  {
    name: "Veg Extravaganza",
    desc: "Onion, Capsicum, Tomato, American Corn, Mushroom, Black Olives, Oregano, Basil & Extra Cheese",
    price: 255,
    medium: 475,
    large: 625,
    type: "veg",
    img: veg20
  }
],

  "Non Veg NV1": [
  {
    name: "Spicy Chicken",
    desc: "Cheese & Spicy Chicken",
    price: 169,
    medium: 365,
    large: 499,
    type: "nonveg",
    img: veg21
  },
  {
    name: "Roast Chicken",
    desc: "Cheese, Roast Chicken & Onion",
    price: 169,
    medium: 365,
    large: 499,
    type: "nonveg",
    img: veg22
  },
  {
    name: "Half Roast Half Spicy",
    desc: "Spicy Chicken Chunks & Roasted Chunks with Cheese",
    price: 169,
    medium: 365,
    large: 499,
    type: "nonveg",
    img: veg23
  },
  {
    name: "Plain Chicken",
    desc: "Plain Chicken Chunks & Cheese",
    price: 169,
    medium: 365,
    large: 499,
    type: "nonveg",
    img: veg24
  }
],

  "Non Veg NV2": [
  {
    name: "Chicken Tikka",
    desc: "Red Pepper added, and Cheese",
    price: 265,       // Regular 7"
    medium: 520,      // Medium 10"
    large: 625,       // Large 12"
    type: "nonveg",
    img: veg25
  },
  {
    name: "Chicken Salami",
    desc: "Onion, Garlic & Cheese",
    price: 265,
    medium: 520,
    large: 625,
    type: "nonveg",
    img: veg26
  },
  {
    name: "Chicken Schezwan",
    desc: "Spring Onion & Schezwan Chicken Chunks",
    price: 265,
    medium: 520,
    large: 625,
    type: "nonveg",
    img: veg27
  },
  {
    name: "Chicken Sausage",
    desc: "Cooked in Green Chilly Sauce with Onion & Capsicum",
    price: 265,
    medium: 520,
    large: 625,
    type: "nonveg",
    img: veg28
  }
],

   "Non Veg NV3": [
  {
    name: "Barbecue Chicken",
    desc: "Mushroom, Barbecue Chicken Chunks & Onion",
    price: 299,      // Regular 7"
    medium: 549,     // Medium 10"
    large: 689,      // Large 12"
    type: "nonveg",
    img: veg29
  },
  {
    name: "Grocy Italian",
    desc: "Roast Chicken, Chicken Sausage, Garlic, Onion & Mushroom",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg",
    img: veg30
  },
  {
    name: "Mix Chicken",
    desc: "Hot & Spicy Chicken, Chicken Tikka & Plain Chicken",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg",
    img: veg31
  },
  {
    name: "RED Supreme",
    desc: "Spicy Chicken Sausage, Onion, Barbequed Chicken & Jalapeno",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg",
    img: veg32
  },
  {
    name: "RED Hawaiian",
    desc: "Barbequed Chicken, Pineapple & Jalapeno",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg",
    img: veg33
  },
  {
    name: "Chilly Chicken",
    desc: "Capsicum, Onion & Green Chilly cooked in Chinese style",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg",
    img: veg34
  },
  {
    name: "Golden Chicken",
    desc: "American Corn, Chicken Tikka & Extra Cheese",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg",
    img: veg35
  },
  {
    name: "RED Feast",
    desc: "Chicken Sausage & Barbecue Chunks",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg",
    img: veg36
  },
  {
    name: "RED Dopiaza",
    desc: "Two types of Chicken & Fried Omelet",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg",
    img: veg37
  },
  {
    name: "Butter Chicken",
    desc: "Rich buttery chicken with cheese",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg",
    img: veg38
  },
  {
    name: "RED Lazania",
    desc: "Fried Chicken marinated with Special Sauce",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg",
    img: veg39
  },
  {
    name: "American Delight",
    desc: "Chicken, American Corn, Tomato, Olives & Jalapeno",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg",
    img: veg40
  },
  {
    name: "RED LE",
    desc: "Chicken Shreds, Cheese, Fried Chicken & Sausage",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg",
    img: veg41
  },
  {
    name: "RED Mexican",
    desc: "Spicy Chicken, Salami, Jalapeno & Capsicum",
    price: 299,
    medium: 549,
    large: 689,
    type: "nonveg",
    img: veg42
  }
],

"Non Veg NV4": [
  {
    name: "RED Special",
    desc: "Plain Chicken, Sausage, Salami, Onion, Garlic & Extra Cheese",
    price: 345,      // Regular 7"
    medium: 629,     // Medium 10"
    large: 859,      // Large 12"
    type: "nonveg",
    img: veg43
  },
  {
    name: "RED Indigo",
    desc: "Schezwan Chicken, Black Olives, Onion, Capsicum & Extra Cheese",
    price: 345,
    medium: 629,
    large: 859,
    type: "nonveg",
    img: veg44
  },
  {
    name: "RED Hochste",
    desc: "Chicken Sausage, Chicken Salami, Chicken Kheema, Onion, Capsicum, Tomato & Extra Cheese",
    price: 345,
    medium: 629,
    large: 859,
    type: "nonveg",
    img: veg45
  },
  {
    name: "RED Preferita",
    desc: "Fried Chicken, Spicy Chicken, Chicken Sausage, Onion, Capsicum & Extra Cheese",
    price: 345,
    medium: 629,
    large: 859,
    type: "nonveg",
    img: veg46
  },
  {
    name: "RED Extravaganza",
    desc: "Chicken Tikka, Barbeque Chicken, Chicken Sausage, Onion, Black Olives, Mushroom & Extra Cheese",
    price: 345,
    medium: 629,
    large: 859,
    type: "nonveg",
    img: veg47
  }
],

  "Jain": [
    { name: "Jain Classic", desc: "Pure Jain pizza base", price: 159, type: "jain", img: veg48 },
  ],
};

export default function PizzaMenu() {
  const { handleAddToCart } = useContext(CartContext);
  const [filter, setFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

   // ✅ Scroll to top when Quickies page loads
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  // ✅ Filter pizzas based on type (using shared filter)
  const filteredCategories = Object.entries(pizzaCategories).filter(([key, pizzas]) => {
    if (filter === "all") return true;
    return pizzas.some((p) => p.type === filter);
  });

  const displayedPizzas =
    activeTab === "All"
      ? filteredCategories.flatMap(([, pizzas]) => pizzas)
      : pizzaCategories[activeTab] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      {/* Header */}
      <div className="text-center mb-10 mt-16">
        <h1 className="text-3xl font-extrabold text-gray-800">🍕 Our Pizza Collection</h1>
        <p className="text-gray-500 mt-2">Freshly baked, cheesy, and delicious!</p>
      </div>

      {/* ✅ Shared FilterButtons */}
      <FilterButtons filter={filter} setFilter={setFilter} />

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
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img src={p.img} alt={p.name} className="w-full h-44 object-cover" />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <img
                  src={
                    p.type === "nonveg"
                      ? nonVegIcon
                      : p.type === "veg"
                      ? vegIcon
                      : vegIcon
                  }
                  alt="type"
                  className="w-4 h-4"
                />
                <h3 className="font-semibold text-gray-800">{p.name}</h3>
              </div>
              <p className="text-gray-500 text-sm mb-3">{p.desc}</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-800">₹ {p.price}</span>
                <button
                  onClick={() => setSelectedItem(p)}
                  className="px-4 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ QuickieModal Integration */}
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
