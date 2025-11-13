// import React, { useState, useContext } from "react";
// import QuickieModal from "../../components/QuickieModal";
// import { CartContext } from "../../context/CartContext";
// import FilterButtons from "../../components/FilterButtons"; // ✅ Shared FilterButtons

// import vegIcon from "../../assets/quickies/veg.png";
// import nonVegIcon from "../../assets/quickies/NV.png";

// import vegBurger from "../../assets/burger/b1.png";
// import nonVegBurger from "../../assets/burger/b2.png";

// // 🍔 Burger Data
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

// export default function Burgers() {
//   const [filter, setFilter] = useState("all");
//   const [selectedItem, setSelectedItem] = useState(null);
//   const { addToCart } = useContext(CartContext);

//   // ✅ Filter by veg/nonveg using shared logic
//   const filteredItems = burgerItems.filter((item) =>
//     filter === "all" ? true : item.type === filter
//   );

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       {/* Header */}
//       <div className="text-center mb-8 mt-8">
//         <h1 className="text-3xl font-extrabold text-gray-800 mt-16">Burgers</h1>
//         <p className="text-gray-600 mt-2">
//           Juicy, crispy, and delicious burgers for every craving!
//         </p>
//       </div>

//       {/* ✅ Shared FilterButtons */}
//       <FilterButtons filter={filter} setFilter={setFilter} />

      

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
//                   onClick={() => setSelectedItem(item)} // ✅ Opens modal
//                 >
//                   + Add
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ✅ QuickieModal */}
//       {selectedItem && (
//         <QuickieModal
//           item={selectedItem}
//           onClose={() => setSelectedItem(null)}
//           onAddToCart={(details) => {
//             addToCart(details);
//             setSelectedItem(null);
//           }}
//         />
//       )}
//     </div>
//   );
// }





// pages/Burgers.js
import React, { useState, useContext } from "react";
import QuickieModal from "../../components/QuickieModal";
import { CartContext } from "../../context/CartContext";
import FilterButtons from "../../components/FilterButtons"; // ✅ Shared FilterButtons

import vegIcon from "../../assets/quickies/veg.png";
import nonVegIcon from "../../assets/quickies/NV.png";

import vegBurger from "../../assets/burger/b1.png";
import nonVegBurger from "../../assets/burger/b2.png";
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

export default function Burgers() {
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const { handleAddToCart } = useContext(CartContext);

  const filteredItems = burgerItems.filter((item) =>
    filter === "all" ? true : item.type === filter
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-8 mt-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mt-16">Burgers</h1>
        <p className="text-gray-600 mt-2">
          Juicy, crispy, and delicious burgers for every craving!
        </p>
      </div>

      <FilterButtons filter={filter} setFilter={setFilter} />

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
                <span className="font-bold text-gray-800 text-lg">₹ {item.price}</span>
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
                  onClick={() => setSelectedItem(item)}
                >
                  + Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <QuickieModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onAddToCart={(details) => {
            handleAddToCart(details);
            setSelectedItem(null);
          }}
        />
      )}
    </div>
  );
}
