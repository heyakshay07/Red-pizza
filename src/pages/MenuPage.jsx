import React, { useState, createContext, useContext } from "react";
import { Trash2, X } from "lucide-react";
import fries from "../assets/quickies/fries.jpg";
import friesPeri from "../assets/quickies/friesPeri.jpg";
import popcorn from "../assets/quickies/popcorn.jpg";
import nuggets from "../assets/quickies/nuggets.jpg";
import cheeseBalls from "../assets/quickies/cheeseBalls.jpg";
import chickenFinger from "../assets/quickies/chickenFinger.jpg";
import kababRoll from "../assets/quickies/kababRoll.jpg";
import kabab from "../assets/quickies/kabab.jpg";

import breadVeg from "../assets/bruschetta/vegBread.jpeg";
import breadNonVeg from "../assets/bruschetta/nonvegBread.jpeg";
import breadCheese from "../assets/bruschetta/cheeseBread.jpeg";

// Placeholder images - replace with your actual imports
import vegIcon from "../assets/quickies/veg.png";
import nonVegIcon from "../assets/quickies/NV.png";

// Cart Context
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.cartId === item.cartId);
      if (existing) {
        return prev.map((i) =>
          i.cartId === item.cartId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const increaseQty = (cartId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.cartId === cartId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (cartId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.cartId === cartId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (cartId) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQty, decreaseQty, removeItem, totalAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

// QuickieModal Component
const QuickieModal = ({ item, onClose }) => {
  const { addToCart } = useContext(CartContext);
  
  const vegToppings = ["Onion", "Tomato", "Capsicum", "Mushroom", "Jalapeno", "American Corn", "Black Olives", "Baby Corn", "Garlic", "Red Pepper", "Pineapple"];
  const nonVegToppings = ["Spicy Chicken", "Roast Chicken", "Barbequed Chicken", "Plain Chicken", "Chicken Salami", "Chicken Sausage", "Chicken Schezwan", "Chicken Tikka", "Chicken Kheema"];

  const baseOptions = [
    { name: "Regular Crispy", sizes: [{ size: "R", price: 0 }, { size: "M", price: 0 }, { size: "L", price: 0 }] },
    { name: "Thin And Crispy", sizes: [{ size: "R", price: 0 }, { size: "M", price: 0 }, { size: "L", price: 0 }] },
    { name: "Triple Cheesy Fantasy", sizes: [{ size: "R", price: 120 }, { size: "M", price: 120 }, { size: "L", price: 120 }] },
  ];

  const toppingPrices = {
    veg: { R: 40, M: 40, L: 40 },
    nonveg: { R: 60, M: 60, L: 60 },
  };

  const sizePrices = { R: 0, M: 120, L: 260, Maha: 870 };

  const [selectedToppings, setSelectedToppings] = useState([]);
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

  const basePrice = item?.price || 139;
  const sizePrice = sizePrices[size];
  const toppingPrice = vegSelected * vegToppingPrice + nonVegSelected * nonVegToppingPrice;
  const baseExtra = selectedBase?.price || 0;
  const totalPrice = (basePrice + sizePrice + toppingPrice + baseExtra) * quantity;

  const handleAddToCart = () => {
    const cartItem = {
      cartId: `${item?.id}-${size}-${Date.now()}`,
      id: item?.id,
      name: item?.name || "Pizza",
      img: item?.img || "",
      price: totalPrice / quantity,
      size,
      quantity,
      toppings: selectedToppings,
      base: selectedBase?.name,
      totalPrice,
    };
    addToCart(cartItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div
        className="relative bg-white w-full max-w-lg rounded-lg shadow-lg overflow-hidden z-10 flex flex-col"
        style={{ maxHeight: '90vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
        `}</style>

        <div className="p-6 pb-4 border-b bg-white">
          <button onClick={onClose} className="absolute top-3 right-4 text-3xl text-gray-600 hover:text-black">×</button>
          <h2 className="text-xl font-bold">{item?.name || "Pizza"}</h2>
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-hide px-6 py-4">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold text-gray-700">Size</p>
              <p className="text-sm text-gray-500">1/1 selected</p>
            </div>

            <div className="space-y-3">
              {["R", "M", "L", "Maha"].map((s) => (
                <label
                  key={s}
                  className={`flex justify-between items-center p-4 border rounded-lg cursor-pointer transition ${
                    size === s ? "border-black bg-gray-50" : "border-gray-300 hover:border-gray-400"
                  }`}
                  onClick={() => setSize(s)}
                >
                  <span className="text-gray-800">
                    {s === "R" ? "Regular (17.78cm) [serve 1]" : 
                     s === "M" ? "Medium (25.40cm) [serve 2]" :
                     s === "L" ? "Large (30.48cm) [serve 3]" : "Maha (50.80cm) [serve 8]"}
                  </span>
                  <div className="flex items-center gap-3">
                    {sizePrices[s] > 0 && <span className="text-gray-600">+ ₹{sizePrices[s]}</span>}
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      size === s ? "border-black" : "border-gray-300"
                    }`}>
                      {size === s && <div className="w-3 h-3 rounded-full bg-black"></div>}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="font-semibold text-gray-700 mb-4">Choice Of Base</p>
            <div className="space-y-3">
              {baseOptions.map((b) => {
                const sizeOption = b.sizes.find((s) => s.size === size);
                if (!sizeOption) return null;
                const isSelected = selectedBase?.name === `${b.name}-${size}`;

                return (
                  <label
                    key={b.name}
                    className={`flex justify-between items-center p-4 border rounded-lg cursor-pointer transition ${
                      isSelected ? "border-black bg-gray-50" : "border-gray-300 hover:border-gray-400"
                    }`}
                    onClick={() => setSelectedBase({ name: `${b.name}-${size}`, price: sizeOption.price })}
                  >
                    <span className="text-gray-800">{b.name}</span>
                    <div className="flex items-center gap-3">
                      {sizeOption.price > 0 && <span className="text-gray-600">+ ₹{sizeOption.price}</span>}
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? "border-black" : "border-gray-300"
                      }`}>
                        {isSelected && <div className="w-3 h-3 rounded-full bg-black"></div>}
                      </div>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          <div className="mb-6">
            <p className="font-semibold text-gray-700 mb-4">Veg Toppings</p>
            <div className="space-y-3">
              {vegToppings.map((t) => (
                <label key={t} className="flex justify-between items-center p-4 border rounded-lg cursor-pointer hover:border-gray-400">
                  <span className="text-gray-800">{t}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600">+ ₹{vegToppingPrice}</span>
                    <input
                      type="checkbox"
                      checked={selectedToppings.includes(t)}
                      onChange={() => toggleTopping(t)}
                      className="w-5 h-5 accent-black cursor-pointer"
                    />
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="font-semibold text-gray-700 mb-4">Non-Veg Toppings</p>
            <div className="space-y-3">
              {nonVegToppings.map((t) => (
                <label key={t} className="flex justify-between items-center p-4 border rounded-lg cursor-pointer hover:border-gray-400">
                  <span className="text-gray-800">{t}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600">+ ₹{nonVegToppingPrice}</span>
                    <input
                      type="checkbox"
                      checked={selectedToppings.includes(t)}
                      onChange={() => toggleTopping(t)}
                      className="w-5 h-5 accent-black cursor-pointer"
                    />
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 border-t bg-white">
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold">₹{totalPrice}</p>
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition uppercase"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Cart Component
const Cart = ({ onClose }) => {
  const { cart, increaseQty, decreaseQty, removeItem, totalAmount } = useContext(CartContext);

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="relative w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg z-10">
        <button onClick={onClose} className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl">
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">🛒 Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty 😢</p>
        ) : (
          <div>
            <ul className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              {cart.map((item) => (
                <li key={item.cartId} className="flex justify-between items-start border-b pb-4">
                  <div className="flex items-start gap-4 w-full">
                    <img src={item.img || "https://via.placeholder.com/80"} alt={item.name} className="w-20 h-24 object-contain rounded" />
                    <div className="flex-1 flex flex-col justify-between">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      {item.size && <p className="text-sm text-gray-500">Size: {item.size}</p>}
                      {item.toppings?.length > 0 && (
                        <p className="text-sm text-gray-500">Toppings: {item.toppings.join(", ")}</p>
                      )}
                      {item.base && <p className="text-sm text-gray-500">Base: {item.base}</p>}
                      <p className="text-gray-500 text-sm">₹{item.price}</p>

                      <div className="flex items-center mt-2 border rounded-md overflow-hidden w-[140px]">
                        <button onClick={() => decreaseQty(item.cartId)} className="px-3 py-1 text-xl hover:bg-gray-200">–</button>
                        <input type="number" readOnly value={item.quantity} className="w-16 h-8 text-center font-semibold outline-none border-l border-r" />
                        <button onClick={() => increaseQty(item.cartId)} className="px-3 py-1 text-xl hover:bg-gray-200">+</button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end ml-4">
                    <span className="font-semibold text-red-600 text-lg">₹{item.price * item.quantity}</span>
                    <button onClick={() => removeItem(item.cartId)} className="mt-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 flex justify-between items-center border-t">
              <span className="font-semibold text-lg">Total:</span>
              <span className="text-red-600 font-bold text-xl">₹{totalAmount}</span>
            </div>

            <button className="w-full mt-4 bg-red-500 text-white py-3 rounded hover:bg-red-600 transition">
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Filter Buttons
const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {["all", "veg", "nonveg", "jain"].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            filter === f ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {f === "all" ? "All" : f === "veg" ? "Veg" : f === "nonveg" ? "Non-Veg" : "Jain"}
        </button>
      ))}
    </div>
  );
};

// Menu Page
const MenuPage = () => {
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const { cart } = useContext(CartContext);

  // Flattened menu items with unique IDs
  const menuItems = [
    // Quickies
    { id: "fries-99", name: "French Fries", price: 99, desc: "Crispy golden fries, lightly salted — classic & comforting.", img: fries, type: "veg" },
        { id: "fries-peri-119", name: "French Fries — Peri Peri", price: 119, desc: "Spicy peri-peri seasoning for a bold, zesty bite.", img: friesPeri, type: "veg" },
        { id: "popcorn-139", name: "Chicken Popcorn", price: 139, desc: "Tender bite-sized chicken pieces, fried to crunchy perfection.", img: popcorn, type: "nonveg" },
        { id: "nuggets-139", name: "Chicken Nuggets", price: 139, desc: "Classic golden nuggets — great with dips.", img: nuggets, type: "nonveg" },
        { id: "cheeseballs-139", name: "Red Cheese Balls", price: 139, desc: "Crispy shell, melty cheesy core — crowd favorite.", img: cheeseBalls, type: "veg" },
        { id: "finger-149", name: "Red Chicken Finger", price: 149, desc: "Spiced chicken fingers, crunchy outside, juicy inside.", img: chickenFinger, type: "nonveg" },
        { id: "kabab-roll-99", name: "Red Chicken Kabab Roll (2 pcs)", price: 99, desc: "Two rolls filled with spiced chicken kabab — quick & filling.", img: kababRoll, type: "nonveg" },
        { id: "kabab-119", name: "Red Chicken Kabab (5 pcs)", price: 119, desc: "Minced chicken, garlic, onion, tomato, spices — juicy kebabs.", img: kabab, type: "nonveg" },
    
    // Bruschetta
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
    // Pizzas - Veg V1
    
    
    // Pizzas - Non-Veg NV1
    
    // Pasta
    
    
    // Burgers
    
    // Beverages
    
    
    // Desserts
    
  ];

  const filteredItems = menuItems.filter((item) => filter === "all" || item.type === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Our Menu</h1>
        <button
          onClick={() => setShowCart(true)}
          className="relative bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
        >
          🛒 Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>
      </div>

      <div className="mb-10">
        <FilterButtons filter={filter} setFilter={setFilter} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition">
            <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                {item.type && (
                  <img
                    src={item.type === "veg" || item.type === "jain" ? vegIcon : nonVegIcon}
                    alt={item.type}
                    className="w-5 h-5"
                  />
                )}
              </div>
              <p className="text-gray-500 text-sm mb-3">{item.desc}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-red-600">₹{item.price}</span>
                <button
                  onClick={() => setSelectedItem(item)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  + Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && <QuickieModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
      {showCart && <Cart onClose={() => setShowCart(false)} />}
    </div>
  );
};

// Main App
export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <MenuPage />
      </div>
    </CartProvider>
  );
}