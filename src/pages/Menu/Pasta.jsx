// import React, { useState } from "react";
// import vegIcon from "../../assets/quickies/veg.png";
// import nonVegIcon from "../../assets/quickies/NV.png";

// import pastaVegRed from "../../assets/pasta/p.png";
// import pastaVegWhite from "../../assets/pasta/p2.png";
// import pastaNonVegRed from "../../assets/pasta/p3.png";
// import pastaNonVegWhite from "../../assets/pasta/p4.png";


// const pastaItems = [
//   {
//     id: 1,
//     name: "Veg Pasta Red Sauce",
//     desc: "Red Sauce, Veggies, Tossed together",
//     price: 215,
//     img: pastaVegRed,
//     type: "veg",
//   },
//   {
//     id: 2,
//     name: "Veg Pasta White Sauce",
//     desc: "Made in White Sauce, Golden Corn, Capsicum & Cheese",
//     price: 225,
//     img: pastaVegWhite,
//     type: "veg",
//   },
//   {
//     id: 3,
//     name: "Non-Veg Pasta Red Sauce",
//     desc: "Shredded Chicken, Broccoli, Mushrooms tossed in Red Sauce",
//     price: 225,
//     img: pastaNonVegRed,
//     type: "nonveg",
//   },
//   {
//     id: 4,
//     name: "Non-Veg Pasta White Sauce",
//     desc: "Chicken Cubes cooked in White Cheesy Sauce, and Veggies",
//     price: 225,
//     img: pastaNonVegWhite,
//     type: "nonveg",
//   },
// ];

// // ✅ Extra customization data (similar to Quickies)
// const toppings = [
//   "Onion",
//   "Capsicum",
//   "Mushroom",
//   "Corn",
//   "Jalapeno",
//   "Broccoli",
//   "Paneer",
//   "Chicken",
//   "Cheese Burst",
// ];

// const extraOptions = [
//   { name: "Extra Cheese", price: 40 },
//   { name: "Garlic Bread Combo", price: 70 },
//   { name: "Soft Drink", price: 50 },
// ];

// export default function Pasta() {
//   const [filter, setFilter] = useState("all");
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [selectedToppings, setSelectedToppings] = useState([]);
//   const [selectedExtras, setSelectedExtras] = useState([]);
//   const [quantity, setQuantity] = useState(1);

//   const filteredItems = pastaItems.filter((item) => {
//     if (filter === "all") return true;
//     return item.type === filter;
//   });

//   const toggleTopping = (t) => {
//     setSelectedToppings((prev) =>
//       prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
//     );
//   };

//   const toggleExtra = (e) => {
//     setSelectedExtras((prev) =>
//       prev.includes(e) ? prev.filter((x) => x !== e) : [...prev, e]
//     );
//   };

//   const basePrice = selectedItem?.price || 0;
//   const toppingsPrice = selectedToppings.length * 30; // flat ₹30 per topping
//   const extrasPrice = selectedExtras.reduce((sum, e) => {
//     const opt = extraOptions.find((x) => x.name === e);
//     return sum + (opt ? opt.price : 0);
//   }, 0);

//   const totalPrice = (basePrice + toppingsPrice + extrasPrice) * quantity;

//   const handleAddToCart = async () => {
//     const cartItem = {
//       id: selectedItem.id,
//       name: selectedItem.name,
//       quantity,
//       toppings: selectedToppings,
//       extras: selectedExtras,
//       totalPrice,
//     };
//     try {
//       await fetch("/api/cart", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(cartItem),
//       });
//       alert("✅ Pasta added to cart!");
//       setSelectedItem(null);
//     } catch {
//       alert("❌ Failed to add to cart");
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       {/* Header */}
//       <div className="text-center mb-8 mt-8">
//         <h1 className="text-3xl font-extrabold text-gray-800 mt-16">Pasta</h1>
//         <p className="text-gray-600 mt-2">Creamy and flavorful pasta delights!</p>
//       </div>

//       {/* Filter Buttons */}
//       <div className="flex items-center justify-start gap-4 mb-6">
//         <button
//           onClick={() => setFilter("all")}
//           className={`px-4 py-2 rounded ${
//             filter === "all" ? "bg-red-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           All
//         </button>
//         <button
//           onClick={() => setFilter("veg")}
//           className={`px-4 py-2 rounded flex items-center gap-2 ${
//             filter === "veg" ? "bg-green-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           <img src={vegIcon} className="w-4 h-4" alt="veg" /> Veg
//         </button>
//         <button
//           onClick={() => setFilter("nonveg")}
//           className={`px-4 py-2 rounded flex items-center gap-2 ${
//             filter === "nonveg" ? "bg-red-600 text-white" : "bg-gray-200"
//           }`}
//         >
//           <img src={nonVegIcon} className="w-4 h-4" alt="nonveg" /> Non-Veg
//         </button>
//       </div>

//       {/* Pasta Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {filteredItems.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
//           >
//             <img
//               src={item.img}
//               alt={item.name}
//               className="w-full h-40 object-cover"
//             />

//             <div className="p-4">
//               <div className="flex items-center gap-2 mb-2">
//                 <img
//                   src={item.type === "veg" ? vegIcon : nonVegIcon}
//                   className="w-4 h-4"
//                   alt={item.type}
//                 />
//                 <h3 className="font-semibold text-gray-800">{item.name}</h3>
//               </div>

//               <p className="text-gray-500 text-sm mb-3">{item.desc}</p>

//               <div className="flex items-center justify-between">
//                 <span className="font-bold text-gray-800">₹ {item.price}</span>
//                 <button
//                   className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
//                   onClick={() => {
//                     setSelectedItem(item);
//                     setSelectedToppings([]);
//                     setSelectedExtras([]);
//                     setQuantity(1);
//                   }}
//                 >
//                   + Add
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ✅ POPUP */}
//       {selectedItem && (
//         <div
//           className="fixed inset-0 z-50 flex justify-center items-center"
//           onClick={() => setSelectedItem(null)}
//         >
//           <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
//           <div
//             className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-lg z-10 overflow-y-auto max-h-[90vh]"
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

//             {/* Toppings */}
//             <p className="font-semibold mb-2">Toppings (₹30 each)</p>
//             <div className="grid grid-cols-2 gap-2 mb-4">
//               {toppings.map((t) => (
//                 <label key={t} className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     checked={selectedToppings.includes(t)}
//                     onChange={() => toggleTopping(t)}
//                   />
//                   {t}
//                 </label>
//               ))}
//             </div>

//             {/* Extras */}
//             <p className="font-semibold mb-2">Extras</p>
//             <div className="grid grid-cols-2 gap-2 mb-4">
//               {extraOptions.map((e) => (
//                 <label key={e.name} className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     checked={selectedExtras.includes(e.name)}
//                     onChange={() => toggleExtra(e.name)}
//                   />
//                   {e.name} (₹{e.price})
//                 </label>
//               ))}
//             </div>

//             {/* Quantity & Total */}
//             <div className="flex justify-between items-center border-t pt-4 mt-4">
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//                   className="bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full"
//                 >
//                   -
//                 </button>
//                 <span className="font-semibold text-lg">{quantity}</span>
//                 <button
//                   onClick={() => setQuantity((q) => q + 1)}
//                   className="bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full"
//                 >
//                   +
//                 </button>
//               </div>
//               <div className="text-right">
//                 <p className="text-gray-600 text-sm">Total</p>
//                 <p className="text-2xl font-bold text-red-600">₹{totalPrice}</p>
//               </div>
//             </div>

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
import { CartContext } from "../../context/CartContext"; // ✅ added

import vegIcon from "../../assets/quickies/veg.png";
import nonVegIcon from "../../assets/quickies/NV.png";

import pastaVegRed from "../../assets/pasta/p.png";
import pastaVegWhite from "../../assets/pasta/p2.png";
import pastaNonVegRed from "../../assets/pasta/p3.png";
import pastaNonVegWhite from "../../assets/pasta/p4.png";

const pastaItems = [
  {
    id: 1,
    name: "Veg Pasta Red Sauce",
    desc: "Red Sauce, Veggies, Tossed together",
    price: 215,
    img: pastaVegRed,
    type: "veg",
  },
  {
    id: 2,
    name: "Veg Pasta White Sauce",
    desc: "Made in White Sauce, Golden Corn, Capsicum & Cheese",
    price: 225,
    img: pastaVegWhite,
    type: "veg",
  },
  {
    id: 3,
    name: "Non-Veg Pasta Red Sauce",
    desc: "Shredded Chicken, Broccoli, Mushrooms tossed in Red Sauce",
    price: 225,
    img: pastaNonVegRed,
    type: "nonveg",
  },
  {
    id: 4,
    name: "Non-Veg Pasta White Sauce",
    desc: "Chicken Cubes cooked in White Cheesy Sauce, and Veggies",
    price: 225,
    img: pastaNonVegWhite,
    type: "nonveg",
  },
];

// ✅ Extra customization data
const toppings = [
  "Onion",
  "Capsicum",
  "Mushroom",
  "Corn",
  "Jalapeno",
  "Broccoli",
  "Paneer",
  "Chicken",
  "Cheese Burst",
];

const extraOptions = [
  { name: "Extra Cheese", price: 40 },
  { name: "Garlic Bread Combo", price: 70 },
  { name: "Soft Drink", price: 50 },
];

export default function Pasta() {
  const { handleAddToCart } = useContext(CartContext); // ✅ use context

  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const filteredItems = pastaItems.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  const toggleTopping = (t) => {
    setSelectedToppings((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };

  const toggleExtra = (e) => {
    setSelectedExtras((prev) =>
      prev.includes(e) ? prev.filter((x) => x !== e) : [...prev, e]
    );
  };

  const basePrice = selectedItem?.price || 0;
  const toppingsPrice = selectedToppings.length * 30; // flat ₹30 per topping
  const extrasPrice = selectedExtras.reduce((sum, e) => {
    const opt = extraOptions.find((x) => x.name === e);
    return sum + (opt ? opt.price : 0);
  }, 0);

  const totalPrice = (basePrice + toppingsPrice + extrasPrice) * quantity;

  // ✅ updated Add-to-Cart logic
  const handleAddToCartClick = () => {
    if (!selectedItem) return;
    const itemToAdd = {
      id: `${selectedItem.id}-${Date.now()}`,
      name: selectedItem.name,
      image: selectedItem.img,
      type: selectedItem.type,
      quantity,
      toppings: selectedToppings,
      extras: selectedExtras,
      totalPrice,
    };
    handleAddToCart(itemToAdd);
    setSelectedItem(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-8 mt-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mt-16">Pasta</h1>
        <p className="text-gray-600 mt-2">Creamy and flavorful pasta delights!</p>
      </div>

      {/* Filter Buttons */}
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
          <img src={vegIcon} className="w-4 h-4" alt="veg" /> Veg
        </button>
        <button
          onClick={() => setFilter("nonveg")}
          className={`px-4 py-2 rounded flex items-center gap-2 ${
            filter === "nonveg" ? "bg-red-600 text-white" : "bg-gray-200"
          }`}
        >
          <img src={nonVegIcon} className="w-4 h-4" alt="nonveg" /> Non-Veg
        </button>
      </div>

      {/* Pasta Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={item.type === "veg" ? vegIcon : nonVegIcon}
                  className="w-4 h-4"
                  alt={item.type}
                />
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
              </div>

              <p className="text-gray-500 text-sm mb-3">{item.desc}</p>

              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-800">₹ {item.price}</span>
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  onClick={() => {
                    setSelectedItem(item);
                    setSelectedToppings([]);
                    setSelectedExtras([]);
                    setQuantity(1);
                  }}
                >
                  + Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ POPUP */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center"
          onClick={() => setSelectedItem(null)}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          <div
            className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-lg z-10 overflow-y-auto max-h-[90vh]"
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

            {/* Toppings */}
            <p className="font-semibold mb-2">Toppings (₹30 each)</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {toppings.map((t) => (
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

            {/* Extras */}
            <p className="font-semibold mb-2">Extras</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {extraOptions.map((e) => (
                <label key={e.name} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedExtras.includes(e.name)}
                    onChange={() => toggleExtra(e.name)}
                  />
                  {e.name} (₹{e.price})
                </label>
              ))}
            </div>

            {/* Quantity & Total */}
            <div className="flex justify-between items-center border-t pt-4 mt-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full"
                >
                  -
                </button>
                <span className="font-semibold text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full"
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
              onClick={handleAddToCartClick} // ✅ updated
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
