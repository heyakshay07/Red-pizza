import React, { useState } from "react";

export default function QuickieModal({ item, onClose, onAddToCart }) {
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

  const toppingPrices = {
    veg: { R: 60, M: 85, L: 115 },
    nonveg: { R: 90, M: 110, L: 125 },
  };

  const [tab, setTab] = useState("toppings");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [selectedCheese, setSelectedCheese] = useState(null);
  const [selectedBase, setSelectedBase] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("R");

  const toggleTopping = (t) => {
    setSelectedToppings((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };

  const vegToppingPrice = toppingPrices.veg[size];
  const nonVegToppingPrice = toppingPrices.nonveg[size];
  const vegSelected = selectedToppings.filter((t) => vegToppings.includes(t)).length;
  const nonVegSelected = selectedToppings.filter((t) => nonVegToppings.includes(t)).length;

  const basePrice = item.price || 0;
  const toppingPrice = vegSelected * vegToppingPrice + nonVegSelected * nonVegToppingPrice;
  const cheesePrice = selectedCheese?.price || 0;
  const baseExtra = selectedBase?.price || 0;
  const totalPrice = (basePrice + toppingPrice + cheesePrice + baseExtra) * quantity;

  const handleAddToCart = () => {
    const cartItem = {
      id: item.id,
      name: item.name,
      img: item.img,        // ✅ image
      price: totalPrice,    // ✅ base price
      size,
      quantity,
      toppings: selectedToppings,
      cheese: selectedCheese?.name,
      base: selectedBase?.name,
      totalPrice,
    };
    onAddToCart(cartItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div
        className="relative bg-white w-full max-w-lg rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh] z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black"
        >
          ×
        </button>

        <h2 className="text-xl font-bold mb-2">{item.name}</h2>
        <p className="text-gray-600 mb-4">{item.desc}</p>

        {/* SIZE BUTTONS */}
        <div className="flex gap-3 mb-4">
          {["R", "M", "L"].map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`px-3 py-1 rounded border ${
                size === s ? "bg-red-500 text-white border-red-500" : "border-gray-300"
              }`}
            >
              {s === "R" ? "Regular/7″" : s === "M" ? "Medium/10″" : "Large/12″"}
            </button>
          ))}
        </div>

        {/* TAB BUTTONS */}
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

        {/* TAB CONTENT */}
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

        {/* QUANTITY + TOTAL */}
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
  );
}
