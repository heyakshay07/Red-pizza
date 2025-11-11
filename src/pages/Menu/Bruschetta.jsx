// import React, { useState, useContext } from "react";
// import { useLocation } from "react-router-dom";
// import { CartContext } from "../../context/CartContext";
// import vegIcon from "../../assets/quickies/veg.png";
// import nonVegIcon from "../../assets/quickies/NV.png";

// import breadVeg from "../../assets/bruschetta/vegBread.jpeg";
// import breadNonVeg from "../../assets/bruschetta/nonvegBread.jpeg";
// import breadCheese from "../../assets/bruschetta/cheeseBread.jpeg";

// // ✅ ITEMS
// const bruschettaItems = [
//   {
//     id: 1,
//     name: "Veg Garlic Bread",
//     desc: "Baked with love, cheese, and some spices to perfection",
//     price: 99,
//     img: breadVeg,
//     type: "veg",
//   },
//   {
//     id: 2,
//     name: "Non-Veg Garlic Bread",
//     desc:
//       "Baked with love, Shredded Chicken topped with Mint sauce & a secret sauce to surprise you in every bite",
//     price: 125,
//     img: breadNonVeg,
//     type: "nonveg",
//   },
//   {
//     id: 3,
//     name: "Garlic Bread With Cheese",
//     desc: "Baked garlic bread topped with melted cheese",
//     price: 89,
//     img: breadCheese,
//     type: "veg",
//   },
// ];

// // ✅ CUSTOMIZATION DATA
// const vegToppings = [
//   "Onion",
//   "Tomato",
//   "Capsicum",
//   "Mushroom",
//   "Jalapeno",
//   "Corn",
//   "Black Olives",
// ];
// const nonVegToppings = [
//   "Chicken Tikka",
//   "Roast Chicken",
//   "Barbeque Chicken",
// ];

// const cheeseOptions = [
//   { name: "Regular Cheese", price: 40 },
//   { name: "Extra Cheese", price: 60 },
// ];

// const baseOptions = [
//   { name: "Plain", price: 0 },
//   { name: "Cheese Burst", price: 50 },
//   { name: "Garlic Crust", price: 40 },
// ];

// // ✅ Topping price
// const toppingPrices = {
//   veg: 25,
//   nonveg: 40,
// };

// export default function Bruschetta() {
//   const [filter, setFilter] = useState("all");
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [tab, setTab] = useState("toppings");
//   const [selectedToppings, setSelectedToppings] = useState([]);
//   const [selectedCheese, setSelectedCheese] = useState(null);
//   const [selectedBase, setSelectedBase] = useState(null);
//   const [quantity, setQuantity] = useState(1);

//    const { handleAddToCart } = useContext(CartContext);

//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const searchQuery = queryParams.get("search")?.toLowerCase() || "";



//   const filteredItems = bruschettaItems.filter((item) =>
//     filter === "all" ? true : item.type === filter
//   );

//   // ✅ Toggle toppings
//   const toggleTopping = (t) => {
//     setSelectedToppings((prev) =>
//       prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
//     );
//   };

//   // ✅ Calculate prices
//   const vegSelected = selectedToppings.filter((t) => vegToppings.includes(t))
//     .length;
//   const nonVegSelected = selectedToppings.filter((t) =>
//     nonVegToppings.includes(t)
//   ).length;

//   const basePrice = selectedItem?.price || 0;
//   const toppingPrice =
//     vegSelected * toppingPrices.veg + nonVegSelected * toppingPrices.nonveg;
//   const cheesePrice = selectedCheese?.price || 0;
//   const baseExtra = selectedBase?.price || 0;
//   const totalPrice = (basePrice + toppingPrice + cheesePrice + baseExtra) * quantity;

//   // ✅ Handle Add to Cart (mock)
//   const handleAddToCart = () => {
//     alert(
//       `✅ Added ${selectedItem.name} — ₹${totalPrice}\n(${quantity} pcs with customizations)`
//     );
//     setSelectedItem(null);
//   };

//   // ✅ Click outside to close popup
//   const handleOverlayClick = (e) => {
//     if (e.target.id === "popup-overlay") setSelectedItem(null);
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       {/* Header */}
//       <div className="text-center mb-8 mt-8">
//         <h1 className="text-3xl font-extrabold text-gray-800 mt-16">
//           Bruschetta (Breads)
//         </h1>
//         <p className="text-gray-600 mt-2">Freshly baked breads with love!</p>
//       </div>

//       {/* Filter Buttons */}
//       <div className="flex items-center justify-start gap-4 mb-6">
//         {["all", "veg", "nonveg"].map((type) => (
//           <button
//             key={type}
//             onClick={() => setFilter(type)}
//             className={`px-4 py-2 rounded flex items-center gap-2 ${
//               filter === type
//                 ? type === "veg"
//                   ? "bg-green-500 text-white"
//                   : type === "nonveg"
//                   ? "bg-red-600 text-white"
//                   : "bg-red-500 text-white"
//                 : "bg-gray-200"
//             }`}
//           >
//             {type === "veg" && <img src={vegIcon} className="w-4 h-4" />}
//             {type === "nonveg" && <img src={nonVegIcon} className="w-4 h-4" />}
//             {type === "all" ? "All" : type === "veg" ? "Veg" : "Non-Veg"}
//           </button>
//         ))}
//       </div>

//       {/* Item Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {filteredItems.map((it) => (
//           <div
//             key={it.id}
//             className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
//           >
//             <img src={it.img} alt={it.name} className="w-full h-40 object-cover" />
//             <div className="p-4">
//               <div className="flex items-center gap-2 mb-2">
//                 <img
//                   src={it.type === "veg" ? vegIcon : nonVegIcon}
//                   className="w-4 h-4"
//                   alt="type"
//                 />
//                 <h3 className="font-semibold text-gray-800">{it.name}</h3>
//               </div>
//               <p className="text-gray-500 text-sm mb-3">{it.desc}</p>
//               <div className="flex items-center justify-between">
//                 <span className="font-bold text-gray-800">₹ {it.price}</span>
//                 <button
//                   // onClick={() => setSelectedItem(it)}
//                   onClick={() => {
//                         handleAddToCart(it)
//                         }}
//                   className="px-4 py-1 rounded bg-red-500 text-white hover:bg-red-600"
//                 >
//                   + Add
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ✅ POPUP MODAL WITH BLUR BACKGROUND */}
//       {selectedItem && (
//         <div
//           id="popup-overlay"
//           className="fixed inset-0 z-50 flex justify-center items-center bg-black/40 backdrop-blur-sm"
//           onClick={handleOverlayClick}
//         >
//           <div
//             className="relative bg-white w-full max-w-lg rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh]"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={() => setSelectedItem(null)}
//               className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black"
//             >
//               ×
//             </button>

//             <h2 className="text-xl font-bold mb-2">{selectedItem.name}</h2>
//             <p className="text-gray-600 mb-4">{selectedItem.desc}</p>

//             {/* Tabs */}
//             <div className="flex border-b mb-4">
//               {["toppings", "cheese", "base"].map((t) => (
//                 <button
//                   key={t}
//                   onClick={() => setTab(t)}
//                   className={`flex-1 py-2 font-semibold ${
//                     tab === t ? "border-b-2 border-red-500 text-red-600" : "text-gray-500"
//                   }`}
//                 >
//                   {t === "toppings" ? "Toppings" : t === "cheese" ? "Cheese" : "Base"}
//                 </button>
//               ))}
//             </div>

//             {/* Toppings Tab */}
//             {tab === "toppings" && (
//               <div>
//                 <p className="font-semibold mb-2">
//                   Veg Toppings <span className="text-sm text-gray-500">₹{toppingPrices.veg} each</span>
//                 </p>
//                 <div className="grid grid-cols-2 gap-2 mb-3">
//                   {vegToppings.map((t) => (
//                     <label key={t} className="flex items-center gap-2">
//                       <input
//                         type="checkbox"
//                         checked={selectedToppings.includes(t)}
//                         onChange={() => toggleTopping(t)}
//                       />
//                       {t}
//                     </label>
//                   ))}
//                 </div>

//                 <p className="font-semibold mb-2">
//                   Non-Veg Toppings <span className="text-sm text-gray-500">₹{toppingPrices.nonveg} each</span>
//                 </p>
//                 <div className="grid grid-cols-2 gap-2">
//                   {nonVegToppings.map((t) => (
//                     <label key={t} className="flex items-center gap-2">
//                       <input
//                         type="checkbox"
//                         checked={selectedToppings.includes(t)}
//                         onChange={() => toggleTopping(t)}
//                       />
//                       {t}
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Cheese Tab */}
//             {tab === "cheese" && (
//               <div className="grid grid-cols-3 gap-3">
//                 {cheeseOptions.map((c) => (
//                   <label
//                     key={c.name}
//                     className={`border p-3 rounded text-center cursor-pointer ${
//                       selectedCheese?.name === c.name ? "border-red-500 bg-red-50" : ""
//                     }`}
//                     onClick={() => setSelectedCheese(c)}
//                   >
//                     <div className="font-semibold">{c.name}</div>
//                     <div className="text-sm text-gray-600">₹{c.price}</div>
//                   </label>
//                 ))}
//               </div>
//             )}

//             {/* Base Tab */}
//             {tab === "base" && (
//               <div className="grid grid-cols-2 gap-3">
//                 {baseOptions.map((b) => (
//                   <label
//                     key={b.name}
//                     className={`border p-3 rounded text-center cursor-pointer ${
//                       selectedBase?.name === b.name ? "border-red-500 bg-red-50" : ""
//                     }`}
//                     onClick={() => setSelectedBase(b)}
//                   >
//                     <div className="font-semibold">{b.name}</div>
//                     <div className="text-sm text-gray-600">₹{b.price}</div>
//                   </label>
//                 ))}
//               </div>
//             )}

//             {/* Quantity + Total */}
//             <div className="flex justify-between items-center mt-6 border-t pt-4">
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//                   className="bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full text-lg"
//                 >
//                   -
//                 </button>
//                 <span className="font-semibold text-lg">{quantity}</span>
//                 <button
//                   onClick={() => setQuantity((q) => q + 1)}
//                   className="bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full text-lg"
//                 >
//                   +
//                 </button>
//               </div>

//               <div className="text-right">
//                 <p className="text-gray-600 text-sm">Total</p>
//                 <p className="text-2xl font-bold text-red-600">₹{totalPrice}</p>
//               </div>
//             </div>

//             {/* Add Button */}
//             <button
//               onClick={handleAddToCart}
//               className="w-full mt-6 bg-green-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-green-700"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

import vegIcon from "../../assets/quickies/veg.png";
import nonVegIcon from "../../assets/quickies/NV.png";
import breadVeg from "../../assets/bruschetta/vegBread.jpeg";
import breadNonVeg from "../../assets/bruschetta/nonvegBread.jpeg";
import breadCheese from "../../assets/bruschetta/cheeseBread.jpeg";

// ✅ ITEMS
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

// ✅ CUSTOMIZATION OPTIONS
const vegToppings = [
  "Onion",
  "Tomato",
  "Capsicum",
  "Mushroom",
  "Jalapeno",
  "Corn",
  "Black Olives",
];
const nonVegToppings = ["Chicken Tikka", "Roast Chicken", "Barbeque Chicken"];

const cheeseOptions = [
  { name: "Regular Cheese", price: 40 },
  { name: "Extra Cheese", price: 60 },
];

const baseOptions = [
  { name: "Plain", price: 0 },
  { name: "Cheese Burst", price: 50 },
  { name: "Garlic Crust", price: 40 },
];

const toppingPrices = {
  veg: 25,
  nonveg: 40,
};

export default function Bruschetta() {
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [tab, setTab] = useState("toppings");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [selectedCheese, setSelectedCheese] = useState(null);
  const [selectedBase, setSelectedBase] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { handleAddToCart } = useContext(CartContext);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search")?.toLowerCase() || "";

  // ✅ Filter Items
  const filteredItems = bruschettaItems.filter((item) =>
    filter === "all"
      ? true
      : item.type === filter &&
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ✅ Toggle toppings
  const toggleTopping = (t) => {
    setSelectedToppings((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };

  // ✅ Price Calculation
  const vegSelected = selectedToppings.filter((t) =>
    vegToppings.includes(t)
  ).length;
  const nonVegSelected = selectedToppings.filter((t) =>
    nonVegToppings.includes(t)
  ).length;

  const basePrice = selectedItem?.price || 0;
  const toppingPrice =
    vegSelected * toppingPrices.veg + nonVegSelected * toppingPrices.nonveg;
  const cheesePrice = selectedCheese?.price || 0;
  const baseExtra = selectedBase?.price || 0;
  const totalPrice =
    (basePrice + toppingPrice + cheesePrice + baseExtra) * quantity;

  // ✅ Add to Cart (global)
  const handleAddToCartClick = () => {
    if (!selectedItem) return;
    const itemToAdd = {
      ...selectedItem,
      toppings: selectedToppings,
      cheese: selectedCheese,
      base: selectedBase,
      quantity,
      totalPrice,
    };
    handleAddToCart(itemToAdd);
    setSelectedItem(null);
  };

  // ✅ Close popup on overlay click
  const handleOverlayClick = (e) => {
    if (e.target.id === "popup-overlay") setSelectedItem(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-8 mt-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mt-16">
          Bruschetta (Breads)
        </h1>
        <p className="text-gray-600 mt-2">Freshly baked breads with love!</p>
      </div>

      {/* Filter Buttons */}
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

      {/* ✅ POPUP MODAL */}
      {selectedItem && (
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
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black"
            >
              ×
            </button>

            <h2 className="text-xl font-bold mb-2">{selectedItem.name}</h2>
            <p className="text-gray-600 mb-4">{selectedItem.desc}</p>

            {/* Tabs */}
            <div className="flex border-b mb-4">
              {["toppings", "cheese", "base"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`flex-1 py-2 font-semibold ${
                    tab === t
                      ? "border-b-2 border-red-500 text-red-600"
                      : "text-gray-500"
                  }`}
                >
                  {t === "toppings"
                    ? "Toppings"
                    : t === "cheese"
                    ? "Cheese"
                    : "Base"}
                </button>
              ))}
            </div>

            {/* Toppings Tab */}
            {tab === "toppings" && (
              <div>
                <p className="font-semibold mb-2">
                  Veg Toppings{" "}
                  <span className="text-sm text-gray-500">
                    ₹{toppingPrices.veg} each
                  </span>
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
                  <span className="text-sm text-gray-500">
                    ₹{toppingPrices.nonveg} each
                  </span>
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

            {/* Cheese Tab */}
            {tab === "cheese" && (
              <div className="grid grid-cols-3 gap-3">
                {cheeseOptions.map((c) => (
                  <label
                    key={c.name}
                    className={`border p-3 rounded text-center cursor-pointer ${
                      selectedCheese?.name === c.name
                        ? "border-red-500 bg-red-50"
                        : ""
                    }`}
                    onClick={() => setSelectedCheese(c)}
                  >
                    <div className="font-semibold">{c.name}</div>
                    <div className="text-sm text-gray-600">₹{c.price}</div>
                  </label>
                ))}
              </div>
            )}

            {/* Base Tab */}
            {tab === "base" && (
              <div className="grid grid-cols-2 gap-3">
                {baseOptions.map((b) => (
                  <label
                    key={b.name}
                    className={`border p-3 rounded text-center cursor-pointer ${
                      selectedBase?.name === b.name
                        ? "border-red-500 bg-red-50"
                        : ""
                    }`}
                    onClick={() => setSelectedBase(b)}
                  >
                    <div className="font-semibold">{b.name}</div>
                    <div className="text-sm text-gray-600">₹{b.price}</div>
                  </label>
                ))}
              </div>
            )}

            {/* Quantity + Total */}
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

            {/* Add to Cart */}
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
