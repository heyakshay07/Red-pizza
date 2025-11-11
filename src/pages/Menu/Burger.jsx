// import React, { useState } from "react";

// import vegIcon from "../../assets/quickies/veg.png";
// import nonVegIcon from "../../assets/quickies/NV.png";

// // 🖼️ Add your burger images here
// import vegBurger from "../../assets/burger/b1.png";
// import nonVegBurger from "../../assets/burger/b2.png";

// const burgerItems = [
//   {
//     id: 1,
//     name: "Veg Burger",
//     desc: "Crispy veg patty with fresh lettuce, tomato, and creamy mayo in a soft bun.",
//     price: 80,
//     img: vegBurger,
//     type: "veg",
//   },
//   {
//     id: 2,
//     name: "Non-Veg Burger",
//     desc: "Juicy chicken patty layered with lettuce, onions, and special sauce.",
//     price: 100,
//     img: nonVegBurger,
//     type: "nonveg",
//   },
// ];

// export default function Burgers() {
//   const [filter, setFilter] = useState("all");

//   const filteredItems = burgerItems.filter((item) => {
//     if (filter === "all") return true;
//     if (filter === "veg") return item.type === "veg";
//     if (filter === "nonveg") return item.type === "nonveg";
//     return true;
//   });

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       {/* Header */}
//       <div className="text-center mb-8 mt-8">
//         <h1 className="text-3xl font-extrabold text-gray-800 mt-16">Burgers</h1>
//         <p className="text-gray-600 mt-2">
//           Juicy, crispy, and delicious burgers for every craving!
//         </p>
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
//           <img src={nonVegIcon} className="w-4 h-4" alt="non-veg" /> Non-Veg
//         </button>
//       </div>

//       {/* Grid View */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {filteredItems.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
//           >
//             <img
//               src={item.img}
//               alt={item.name}
//               className="w-full h-48 object-cover"
//             />

//             <div className="p-5">
//               <div className="flex items-center gap-2 mb-2">
//                 <img
//                   src={item.type === "veg" ? vegIcon : nonVegIcon}
//                   className="w-4 h-4"
//                   alt={item.type}
//                 />
//                 <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
//               </div>

//               <p className="text-gray-500 text-sm mb-3">{item.desc}</p>

//               <div className="flex items-center justify-between">
//                 <span className="font-bold text-gray-800 text-lg">₹ {item.price}</span>
//                 <button className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition">
//                   + Add
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }








// import React, { useState } from "react";
// import vegIcon from "../../assets/quickies/veg.png";
// import nonVegIcon from "../../assets/quickies/NV.png";

// import vegBurger from "../../assets/burger/b1.png";
// import nonVegBurger from "../../assets/burger/b2.png";

// // ✅ Burger Data
// const burgerItems = [
//   {
//     id: 1,
//     name: "Veg Burger",
//     desc: "Crispy veg patty with lettuce, tomato & creamy mayo in a soft bun.",
//     price: 80,
//     img: vegBurger,
//     type: "veg",
//   },
//   {
//     id: 2,
//     name: "Non-Veg Burger",
//     desc: "Juicy chicken patty layered with lettuce, onions & special sauce.",
//     price: 100,
//     img: nonVegBurger,
//     type: "nonveg",
//   },
// ];

// // ✅ Customization Options
// const toppings = ["Onion", "Tomato", "Cheese Slice", "Jalapeno", "Lettuce", "Extra Mayo"];
// const extras = [
//   { name: "Cheese Burst Patty", price: 40 },
//   { name: "French Fries Combo", price: 60 },
//   { name: "Soft Drink", price: 50 },
// ];

// export default function Burgers() {
//   const [filter, setFilter] = useState("all");
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [selectedToppings, setSelectedToppings] = useState([]);
//   const [selectedExtras, setSelectedExtras] = useState([]);
//   const [quantity, setQuantity] = useState(1);

//   // Filtering
//   const filteredItems = burgerItems.filter((item) =>
//     filter === "all" ? true : item.type === filter
//   );

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

//   // ✅ Price Calculation
//   const basePrice = selectedItem?.price || 0;
//   const toppingsPrice = selectedToppings.length * 20; // ₹20 each topping
//   const extrasPrice = selectedExtras.reduce((sum, e) => {
//     const extra = extras.find((x) => x.name === e);
//     return sum + (extra ? extra.price : 0);
//   }, 0);
//   const totalPrice = (basePrice + toppingsPrice + extrasPrice) * quantity;

//   // ✅ Add to Cart Function
//   const handleAddToCart = async () => {
//     const cartItem = {
//       id: selectedItem.id,
//       name: selectedItem.name,
//       toppings: selectedToppings,
//       extras: selectedExtras,
//       quantity,
//       totalPrice,
//     };

//     try {
//       await fetch("/api/cart", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(cartItem),
//       });
//       alert("✅ Burger added to cart!");
//       setSelectedItem(null);
//     } catch {
//       alert("❌ Failed to add to cart");
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       {/* Header */}
//       <div className="text-center mb-8 mt-8">
//         <h1 className="text-3xl font-extrabold text-gray-800 mt-16">Burgers</h1>
//         <p className="text-gray-600 mt-2">
//           Juicy, crispy, and delicious burgers for every craving!
//         </p>
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
//           <img src={nonVegIcon} className="w-4 h-4" alt="non-veg" /> Non-Veg
//         </button>
//       </div>

//       {/* Burger Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {filteredItems.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
//           >
//             <img
//               src={item.img}
//               alt={item.name}
//               className="w-full h-48 object-cover"
//             />

//             <div className="p-5">
//               <div className="flex items-center gap-2 mb-2">
//                 <img
//                   src={item.type === "veg" ? vegIcon : nonVegIcon}
//                   className="w-4 h-4"
//                   alt={item.type}
//                 />
//                 <h3 className="font-semibold text-lg text-gray-800">
//                   {item.name}
//                 </h3>
//               </div>

//               <p className="text-gray-500 text-sm mb-3">{item.desc}</p>

//               <div className="flex items-center justify-between">
//                 <span className="font-bold text-gray-800 text-lg">
//                   ₹ {item.price}
//                 </span>
//                 <button
//                   className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
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

//       {/* ✅ POPUP MODAL */}
//       {selectedItem && (
//         <div
//           className="fixed inset-0 flex justify-center items-center z-50"
//           onClick={() => setSelectedItem(null)}
//         >
//           {/* Background Blur */}
//           <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

//           {/* Popup Content */}
//           <div
//             className="relative bg-white w-full max-w-lg rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh] z-10"
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
//             <p className="font-semibold mb-2">
//               Toppings <span className="text-sm text-gray-500">(₹20 each)</span>
//             </p>
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
//               {extras.map((e) => (
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















import React, { useState } from "react";
import { CartContext } from "../../context/CartContext";
import vegIcon from "../../assets/quickies/veg.png";
import nonVegIcon from "../../assets/quickies/NV.png";

import vegBurger from "../../assets/burger/b1.png";
import nonVegBurger from "../../assets/burger/b2.png";

// ✅ Burger Data
const burgerItems = [
  {
    id: 1,
    name: "Veg Burger",
    desc: "Crispy veg patty with lettuce, tomato & creamy mayo in a soft bun.",
    price: 80,
    img: vegBurger,
    type: "veg",
  },
  {
    id: 2,
    name: "Non-Veg Burger",
    desc: "Juicy chicken patty layered with lettuce, onions & special sauce.",
    price: 100,
    img: nonVegBurger,
    type: "nonveg",
  },
];

// ✅ Customization Options
const toppings = ["Onion", "Tomato", "Cheese Slice", "Jalapeno", "Lettuce", "Extra Mayo"];
const extras = [
  { name: "Cheese Burst Patty", price: 40 },
  { name: "French Fries Combo", price: 60 },
  { name: "Soft Drink", price: 50 },
];

export default function Burgers() {
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);

  // Filtering
  const filteredItems = burgerItems.filter((item) =>
    filter === "all" ? true : item.type === filter
  );

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

  // ✅ Price Calculation
  const basePrice = selectedItem?.price || 0;
  const toppingsPrice = selectedToppings.length * 20; // ₹20 each topping
  const extrasPrice = selectedExtras.reduce((sum, e) => {
    const extra = extras.find((x) => x.name === e);
    return sum + (extra ? extra.price : 0);
  }, 0);
  const totalPrice = (basePrice + toppingsPrice + extrasPrice) * quantity;

  // ✅ Add to Cart (using localStorage)
  const handleAddToCart = () => {
    const cartItem = {
      id: selectedItem.id,
      name: selectedItem.name,
      toppings: selectedToppings,
      extras: selectedExtras,
      quantity,
      totalPrice,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    existingCart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(existingCart));

    alert("✅ Burger added to cart!");
    setSelectedItem(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-8 mt-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mt-16">Burgers</h1>
        <p className="text-gray-600 mt-2">
          Juicy, crispy, and delicious burgers for every craving!
        </p>
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
          <img src={nonVegIcon} className="w-4 h-4" alt="non-veg" /> Non-Veg
        </button>
      </div>

      {/* Burger Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
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
                  ₹ {item.price}
                </span>
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
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

      {/* ✅ POPUP MODAL */}
      {selectedItem && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50"
          onClick={() => setSelectedItem(null)}
        >
          {/* Background Blur */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

          {/* Popup Content */}
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

            {/* Toppings */}
            <p className="font-semibold mb-2">
              Toppings <span className="text-sm text-gray-500">(₹20 each)</span>
            </p>
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
              {extras.map((e) => (
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
              onClick={handleAddToCart}
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
