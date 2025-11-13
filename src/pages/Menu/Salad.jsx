// import React, { useState, useContext } from "react";
// import QuickieModal from "../../components/QuickieModal";
// import { CartContext } from "../../context/CartContext";
// import FilterButtons from "../../components/FilterButtons";

// import vegIcon from "../../assets/quickies/veg.png";
// import nonVegIcon from "../../assets/quickies/NV.png";

// import mixVeg from "../../assets/salad/s1.png";
// import vegHawaiian from "../../assets/salad/s2.png";
// import chickenHawaiian from "../../assets/salad/s3.png";
// import mixChicken from "../../assets/salad/s4.png";

// // 🥗 Salad Data
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
//   const { addToCart } = useContext(CartContext);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [filter, setFilter] = useState("all");

//   // ✅ Apply filter to salad items
//   const filteredItems = saladItems.filter((item) =>
//     filter === "all" ? true : item.type === filter
//   );

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10">
//       {/* Header */}
//       <div className="text-center mb-8 mt-8">
//         <h1 className="text-3xl font-extrabold text-gray-800 mt-16">🥗 Salads</h1>
//         <p className="text-gray-600 mt-2">
//           Fresh, crunchy, and healthy salads made to perfection!
//         </p>
//       </div>

//       {/* ✅ Shared Filter Buttons (connected to Salad state) */}
//       <FilterButtons filter={filter} setFilter={setFilter} />

//       {/* Salad Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {filteredItems.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
//             onClick={() => setSelectedItem(item)}
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
//                   className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setSelectedItem(item);
//                   }}
//                 >
//                   View
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ✅ Quickie Modal */}
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




// pages/Salad.js
import React, { useState, useContext } from "react";
import QuickieModal from "../../components/QuickieModal";
import { CartContext } from "../../context/CartContext";
import FilterButtons from "../../components/FilterButtons";

import vegIcon from "../../assets/quickies/veg.png";
import nonVegIcon from "../../assets/quickies/NV.png";

import mixVeg from "../../assets/salad/s1.png";
import vegHawaiian from "../../assets/salad/s2.png";
import chickenHawaiian from "../../assets/salad/s3.png";
import mixChicken from "../../assets/salad/s4.png";

const saladItems = [
  { id: 1, name: "Mix Veg Salad", desc: "All mixed veggies...", price: 250, img: mixVeg, type: "veg" },
  { id: 2, name: "Veg Hawaiian Salad", desc: "Veggies & pineapple...", price: 250, img: vegHawaiian, type: "veg" },
  { id: 3, name: "Hawaiian Chicken Salad", desc: "Chicken & pineapple...", price: 299, img: chickenHawaiian, type: "nonveg" },
  { id: 4, name: "Mix Chicken Salad", desc: "Chicken cubes & veggies...", price: 299, img: mixChicken, type: "nonveg" },
];

export default function Salad() {
  const { handleAddToCart } = useContext(CartContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [filter, setFilter] = useState("all");

  const filteredItems = saladItems.filter((item) => filter === "all" ? true : item.type === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-8 mt-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mt-16">🥗 Salads</h1>
        <p className="text-gray-600 mt-2">Fresh, crunchy, and healthy salads!</p>
      </div>

      <FilterButtons filter={filter} setFilter={setFilter} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
            onClick={() => setSelectedItem(item)}
          >
            <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <img src={item.type === "veg" ? vegIcon : nonVegIcon} className="w-4 h-4" alt={item.type} />
                <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
              </div>
              <p className="text-gray-500 text-sm mb-3">{item.desc}</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-gray-800 text-lg">₹ {item.price}</span>
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
                  onClick={(e) => { e.stopPropagation(); setSelectedItem(item); }}
                >
                  View
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
          onAddToCart={(details) => { handleAddToCart(details); setSelectedItem(null); }}
        />
      )}
    </div>
  );
}
