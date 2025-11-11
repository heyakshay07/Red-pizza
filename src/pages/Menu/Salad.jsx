// import React, { useState } from "react";

// import vegIcon from "../../assets/quickies/veg.png";
// import nonVegIcon from "../../assets/quickies/NV.png";

// import mixVeg from "../../assets/salad/s1.png";
// import vegHawaiian from "../../assets/salad/s2.png";
// import chickenHawaiian from "../../assets/salad/s3.png";
// import mixChicken from "../../assets/salad/s4.png";

// const saladItems = [
//   {
//     id: 1,
//     name: "Mix Veg Salad",
//     desc: "All mixed veggies tossed in sauce & served with icy lettuce.",
//     price: 250,
//     img: mixVeg,
//     type: "veg",
//   },
//   {
//     id: 2,
//     name: "Veg Hawaiian Salad",
//     desc: "All mixed veggies & pineapple tossed in sauce & served with juicy lettuce.",
//     price: 250,
//     img: vegHawaiian,
//     type: "veg",
//   },
//   {
//     id: 3,
//     name: "Hawaiian Chicken Salad",
//     desc: "Chicken, barbequed pineapple pieces, served with lettuce.",
//     price: 299,
//     img: chickenHawaiian,
//     type: "nonveg",
//   },
//   {
//     id: 4,
//     name: "Mix Chicken Salad",
//     desc: "Chicken cubes marinated & veggies tossed to perfection served with lettuce.",
//     price: 299,
//     img: mixChicken,
//     type: "nonveg",
//   },
// ];

// export default function Salad() {
//   const [filter, setFilter] = useState("all");

//   const filteredItems = saladItems.filter((item) => {
//     if (filter === "all") return true;
//     if (filter === "veg") return item.type === "veg";
//     if (filter === "nonveg") return item.type === "nonveg";
//     return true;
//   });

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       {/* Header */}
//       <div className="text-center mb-8 mt-8">
//         <h1 className="text-3xl font-extrabold text-gray-800 mt-16">
//           Salad
//         </h1>
//         <p className="text-gray-600 mt-2">Fresh, crunchy, and healthy salads made to perfection!</p>
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

// import mixVeg from "../../assets/salad/s1.png";
// import vegHawaiian from "../../assets/salad/s2.png";
// import chickenHawaiian from "../../assets/salad/s3.png";
// import mixChicken from "../../assets/salad/s4.png";

// const saladItems = [
//   {
//     id: 1,
//     name: "Mix Veg Salad",
//     desc: "All mixed veggies tossed in sauce & served with icy lettuce.",
//     price: 250,
//     img: mixVeg,
//     type: "veg",
//   },
//   {
//     id: 2,
//     name: "Veg Hawaiian Salad",
//     desc: "All mixed veggies & pineapple tossed in sauce & served with juicy lettuce.",
//     price: 250,
//     img: vegHawaiian,
//     type: "veg",
//   },
//   {
//     id: 3,
//     name: "Hawaiian Chicken Salad",
//     desc: "Chicken, barbequed pineapple pieces, served with lettuce.",
//     price: 299,
//     img: chickenHawaiian,
//     type: "nonveg",
//   },
//   {
//     id: 4,
//     name: "Mix Chicken Salad",
//     desc: "Chicken cubes marinated & veggies tossed to perfection served with lettuce.",
//     price: 299,
//     img: mixChicken,
//     type: "nonveg",
//   },
// ];

// // 🥗 Custom Options
// const dressings = [
//   { name: "Caesar", price: 30 },
//   { name: "Ranch", price: 25 },
//   { name: "Thousand Island", price: 35 },
//   { name: "Italian", price: 20 },
// ];

// const toppings = [
//   { name: "Croutons", price: 20 },
//   { name: "Cheese", price: 25 },
//   { name: "Boiled Egg", price: 30 },
//   { name: "Corn", price: 20 },
//   { name: "Olives", price: 25 },
//   { name: "Jalapeno", price: 25 },
// ];

// const addOns = [
//   { name: "Grilled Chicken", price: 60 },
//   { name: "Paneer Cubes", price: 50 },
//   { name: "Avocado", price: 70 },
// ];

// export default function Salad() {
//   const [filter, setFilter] = useState("all");
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [selectedDressings, setSelectedDressings] = useState([]);
//   const [selectedToppings, setSelectedToppings] = useState([]);
//   const [selectedAddOns, setSelectedAddOns] = useState([]);
//   const [quantity, setQuantity] = useState(1);

//   const filteredItems = saladItems.filter((item) =>
//     filter === "all" ? true : item.type === filter
//   );

//   const toggleSelection = (item, setFn) => {
//     setFn((prev) =>
//       prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
//     );
//   };

//   const basePrice = selectedItem?.price || 0;
//   const dressingPrice = selectedDressings.reduce(
//     (sum, d) => sum + (dressings.find((x) => x.name === d)?.price || 0),
//     0
//   );
//   const toppingPrice = selectedToppings.reduce(
//     (sum, t) => sum + (toppings.find((x) => x.name === t)?.price || 0),
//     0
//   );
//   const addOnPrice = selectedAddOns.reduce(
//     (sum, a) => sum + (addOns.find((x) => x.name === a)?.price || 0),
//     0
//   );

//   const totalPrice = (basePrice + dressingPrice + toppingPrice + addOnPrice) * quantity;

//   const handleAddToCart = async () => {
//     const cartItem = {
//       id: selectedItem.id,
//       name: selectedItem.name,
//       desc: selectedItem.desc,
//       dressings: selectedDressings,
//       toppings: selectedToppings,
//       addOns: selectedAddOns,
//       quantity,
//       totalPrice,
//     };
//     try {
//       await fetch("/api/cart", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(cartItem),
//       });
//       alert("✅ Salad added to cart!");
//       setSelectedItem(null);
//     } catch {
//       alert("❌ Failed to add to cart");
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       {/* Header */}
//       <div className="text-center mb-8 mt-8">
//         <h1 className="text-3xl font-extrabold text-gray-800 mt-16">Salad</h1>
//         <p className="text-gray-600 mt-2">
//           Fresh, crunchy, and healthy salads made to perfection!
//         </p>
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
//             {type === "veg" && <img src={vegIcon} className="w-4 h-4" alt="veg" />}
//             {type === "nonveg" && <img src={nonVegIcon} className="w-4 h-4" alt="non-veg" />}
//             {type === "all" ? "All" : type === "veg" ? "Veg" : "Non-Veg"}
//           </button>
//         ))}
//       </div>

//       {/* Grid View */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {filteredItems.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
//           >
//             <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />

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
//                 <button
//                   onClick={() => {
//                     setSelectedItem(item);
//                     setSelectedDressings([]);
//                     setSelectedToppings([]);
//                     setSelectedAddOns([]);
//                     setQuantity(1);
//                   }}
//                   className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
//                 >
//                   + Add
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* 🥗 POPUP MODAL */}
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

//             {/* Dressings */}
//             <p className="font-semibold mb-2">
//               Dressings <span className="text-sm text-gray-500">(Select any)</span>
//             </p>
//             <div className="grid grid-cols-2 gap-2 mb-4">
//               {dressings.map((d) => (
//                 <label key={d.name} className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     checked={selectedDressings.includes(d.name)}
//                     onChange={() => toggleSelection(d.name, setSelectedDressings)}
//                   />
//                   {d.name} (₹{d.price})
//                 </label>
//               ))}
//             </div>

//             {/* Toppings */}
//             <p className="font-semibold mb-2">Toppings</p>
//             <div className="grid grid-cols-2 gap-2 mb-4">
//               {toppings.map((t) => (
//                 <label key={t.name} className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     checked={selectedToppings.includes(t.name)}
//                     onChange={() => toggleSelection(t.name, setSelectedToppings)}
//                   />
//                   {t.name} (₹{t.price})
//                 </label>
//               ))}
//             </div>

//             {/* Add-ons */}
//             <p className="font-semibold mb-2">Add-ons</p>
//             <div className="grid grid-cols-2 gap-2 mb-4">
//               {addOns.map((a) => (
//                 <label key={a.name} className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     checked={selectedAddOns.includes(a.name)}
//                     onChange={() => toggleSelection(a.name, setSelectedAddOns)}
//                   />
//                   {a.name} (₹{a.price})
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
















import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";

import vegIcon from "../../assets/quickies/veg.png";
import nonVegIcon from "../../assets/quickies/NV.png";

import mixVeg from "../../assets/salad/s1.png";
import vegHawaiian from "../../assets/salad/s2.png";
import chickenHawaiian from "../../assets/salad/s3.png";
import mixChicken from "../../assets/salad/s4.png";

const saladItems = [
  {
    id: 1,
    name: "Mix Veg Salad",
    desc: "All mixed veggies tossed in sauce & served with icy lettuce.",
    price: 250,
    img: mixVeg,
    type: "veg",
  },
  {
    id: 2,
    name: "Veg Hawaiian Salad",
    desc: "All mixed veggies & pineapple tossed in sauce & served with juicy lettuce.",
    price: 250,
    img: vegHawaiian,
    type: "veg",
  },
  {
    id: 3,
    name: "Hawaiian Chicken Salad",
    desc: "Chicken, barbequed pineapple pieces, served with lettuce.",
    price: 299,
    img: chickenHawaiian,
    type: "nonveg",
  },
  {
    id: 4,
    name: "Mix Chicken Salad",
    desc: "Chicken cubes marinated & veggies tossed to perfection served with lettuce.",
    price: 299,
    img: mixChicken,
    type: "nonveg",
  },
];

// 🥗 Custom Options
const dressings = [
  { name: "Caesar", price: 30 },
  { name: "Ranch", price: 25 },
  { name: "Thousand Island", price: 35 },
  { name: "Italian", price: 20 },
];

const toppings = [
  { name: "Croutons", price: 20 },
  { name: "Cheese", price: 25 },
  { name: "Boiled Egg", price: 30 },
  { name: "Corn", price: 20 },
  { name: "Olives", price: 25 },
  { name: "Jalapeno", price: 25 },
];

const addOns = [
  { name: "Grilled Chicken", price: 60 },
  { name: "Paneer Cubes", price: 50 },
  { name: "Avocado", price: 70 },
];

export default function Salad() {
  const { cart, setCart } = useContext(CartContext);
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedDressings, setSelectedDressings] = useState([]);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const filteredItems = saladItems.filter((item) =>
    filter === "all" ? true : item.type === filter
  );

  const toggleSelection = (item, setFn) => {
    setFn((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  const basePrice = selectedItem?.price || 0;
  const dressingPrice = selectedDressings.reduce(
    (sum, d) => sum + (dressings.find((x) => x.name === d)?.price || 0),
    0
  );
  const toppingPrice = selectedToppings.reduce(
    (sum, t) => sum + (toppings.find((x) => x.name === t)?.price || 0),
    0
  );
  const addOnPrice = selectedAddOns.reduce(
    (sum, a) => sum + (addOns.find((x) => x.name === a)?.price || 0),
    0
  );

  const totalPrice = (basePrice + dressingPrice + toppingPrice + addOnPrice) * quantity;

  // ✅ Add to Cart handler (localStorage + Context)
  const handleAddToCart = () => {
    if (!selectedItem) return;

    const newCartItem = {
      id: `${selectedItem.id}-${Date.now()}`, // unique id
      name: selectedItem.name,
      desc: selectedItem.desc,
      image: selectedItem.img,
      dressings: selectedDressings,
      toppings: selectedToppings,
      addOns: selectedAddOns,
      quantity,
      price: selectedItem.price,
      totalPrice,
    };

    const updatedCart = [...cart, newCartItem];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert("✅ Salad added to cart!");
    setSelectedItem(null);
  };

  // ✅ Keep localStorage in sync
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-8 mt-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mt-16">🥗 Salads</h1>
        <p className="text-gray-600 mt-2">
          Fresh, crunchy, and healthy salads made to perfection!
        </p>
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
                  : "bg-red-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {type === "veg" && <img src={vegIcon} className="w-4 h-4" alt="veg" />}
            {type === "nonveg" && (
              <img src={nonVegIcon} className="w-4 h-4" alt="nonveg" />
            )}
            {type === "all" ? "All" : type === "veg" ? "Veg" : "Non-Veg"}
          </button>
        ))}
      </div>

      {/* Salad Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />

            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={item.type === "veg" ? vegIcon : nonVegIcon}
                  className="w-4 h-4"
                  alt={item.type}
                />
                <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
              </div>

              <p className="text-gray-500 text-sm mb-3">{item.desc}</p>

              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-800 text-lg">₹ {item.price}</span>
                <button
                  onClick={() => {
                    setSelectedItem(item);
                    setSelectedDressings([]);
                    setSelectedToppings([]);
                    setSelectedAddOns([]);
                    setQuantity(1);
                  }}
                  className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-sky-600 transition"
                >
                  + Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🥗 Popup Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50"
          onClick={() => setSelectedItem(null)}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

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

            {/* Dressings */}
            <p className="font-semibold mb-2">Dressings</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {dressings.map((d) => (
                <label key={d.name} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedDressings.includes(d.name)}
                    onChange={() => toggleSelection(d.name, setSelectedDressings)}
                  />
                  {d.name} (₹{d.price})
                </label>
              ))}
            </div>

            {/* Toppings */}
            <p className="font-semibold mb-2">Toppings</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {toppings.map((t) => (
                <label key={t.name} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedToppings.includes(t.name)}
                    onChange={() => toggleSelection(t.name, setSelectedToppings)}
                  />
                  {t.name} (₹{t.price})
                </label>
              ))}
            </div>

            {/* Add-ons */}
            <p className="font-semibold mb-2">Add-ons</p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {addOns.map((a) => (
                <label key={a.name} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedAddOns.includes(a.name)}
                    onChange={() => toggleSelection(a.name, setSelectedAddOns)}
                  />
                  {a.name} (₹{a.price})
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
