// import React, { useState } from "react";

// import vegIcon from "../../assets/quickies/veg.png";
// import nonVegIcon from "../../assets/quickies/NV.png";

// // 🖼️ Add images for combos
// import comboVegRegular from "../../assets/combo/co2.png";
// import comboVegMedium from "../../assets/combo/co2.png";
// import comboNonVegMedium from "../../assets/combo/co3.png";
// import comboVegLarge from "../../assets/combo/co5.png";
// import comboNonVegLarge from "../../assets/combo/co4.png";

// const comboItems = [
//   {
//     id: 1,
//     name: "Regular Pizza Combo (V1 & NV1)",
//     desc: "Regular Pizza + Fries + Coke (Select Regular pizza from V1 & NV1 categories)",
//     price: 299,
//     img: comboVegRegular,
//     type: "veg",
//   },
//   {
//     id: 2,
//     name: "Medium Pizza Combo (V1)",
//     desc: "Medium Pizza + Fries + Coke (Select Medium V1 pizza)",
//     price: 410,
//     img: comboVegMedium,
//     type: "veg",
//   },
//   {
//     id: 3,
//     name: "Medium Pizza Combo (NV1)",
//     desc: "Medium Pizza + Fries + Coke (Select Medium NV1 pizza)",
//     price: 505,
//     img: comboNonVegMedium,
//     type: "nonveg",
//   },
//   {
//     id: 4,
//     name: "Large Pizza Combo (V1)",
//     desc: "Large Pizza + Garlic Bread + Fries + Coke (Select Large V1 pizza)",
//     price: 570,
//     img: comboVegLarge,
//     type: "veg",
//   },
//   {
//     id: 5,
//     name: "Large Pizza Combo (NV1)",
//     desc: "Large Pizza + Garlic Bread + Fries + Coke (Select Large NV1 pizza)",
//     price: 780,
//     img: comboNonVegLarge,
//     type: "nonveg",
//   },
// ];

// export default function ComboOffer() {
//   const [filter, setFilter] = useState("all");

//   const filteredItems = comboItems.filter((item) => {
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
//           Combo Offer
//         </h1>
//         <p className="text-gray-600 mt-2">
//           Available only for V1 & NV1 categories — includes Coke (250ml) and Fries (small)
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
//                 <h3 className="font-semibold text-lg text-gray-800">
//                   {item.name}
//                 </h3>
//               </div>

//               <p className="text-gray-500 text-sm mb-3">{item.desc}</p>

//               <div className="flex items-center justify-between">
//                 <span className="font-bold text-gray-800 text-lg">
//                   ₹ {item.price}
//                 </span>
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




import React, { useState } from "react";

import vegIcon from "../../assets/quickies/veg.png";
import nonVegIcon from "../../assets/quickies/NV.png";

// 🖼️ Add images for combos
import comboVegRegular from "../../assets/combo/co2.png";
import comboVegMedium from "../../assets/combo/co2.png";
import comboNonVegMedium from "../../assets/combo/co3.png";
import comboVegLarge from "../../assets/combo/co5.png";
import comboNonVegLarge from "../../assets/combo/co4.png";


const comboItems = [
  {
    id: 1,
    name: "Regular Pizza Combo (V1 & NV1)",
    desc: "Regular Pizza + Fries + Coke (Select Regular pizza from V1 & NV1 categories)",
    price: 299,
    img: comboVegRegular,
    type: "veg",
  },
  {
    id: 2,
    name: "Medium Pizza Combo (V1)",
    desc: "Medium Pizza + Fries + Coke (Select Medium V1 pizza)",
    price: 410,
    img: comboVegMedium,
    type: "veg",
  },
  {
    id: 3,
    name: "Medium Pizza Combo (NV1)",
    desc: "Medium Pizza + Fries + Coke (Select Medium NV1 pizza)",
    price: 505,
    img: comboNonVegMedium,
    type: "nonveg",
  },
  {
    id: 4,
    name: "Large Pizza Combo (V1)",
    desc: "Large Pizza + Garlic Bread + Fries + Coke (Select Large V1 pizza)",
    price: 570,
    img: comboVegLarge,
    type: "veg",
  },
  {
    id: 5,
    name: "Large Pizza Combo (NV1)",
    desc: "Large Pizza + Garlic Bread + Fries + Coke (Select Large NV1 pizza)",
    price: 780,
    img: comboNonVegLarge,
    type: "nonveg",
  },
];

export default function ComboOffer() {
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const filteredItems = comboItems.filter((item) => {
    if (filter === "all") return true;
    if (filter === "veg") return item.type === "veg";
    if (filter === "nonveg") return item.type === "nonveg";
    return true;
  });

  // ✅ LocalStorage-based Add to Cart
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const newItem = {
      id: selectedItem.id,
      name: selectedItem.name,
      price: selectedItem.price,
      quantity,
      img: selectedItem.img,
      type: selectedItem.type,
    };

    // If item already exists, update quantity
    const itemIndex = existingCart.findIndex((item) => item.id === newItem.id);
    if (itemIndex >= 0) {
      existingCart[itemIndex].quantity += quantity;
    } else {
      existingCart.push(newItem);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));

    alert(`✅ ${selectedItem.name} added to cart!`);
    setSelectedItem(null);
    setQuantity(1);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-8 mt-8">
          <h1 className="text-3xl font-extrabold text-gray-800 mt-16">
            Combo Offer
          </h1>
          <p className="text-gray-600 mt-2">
            Available only for V1 & NV1 categories — includes Coke (250ml) and Fries (small)
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

        {/* Grid View */}
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
                    onClick={() => setSelectedItem(item)}
                    className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition"
                  >
                    + Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Popup Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50"
          onClick={() => setSelectedItem(null)}
        >
          {/* Background blur */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

          {/* Modal Card */}
          <div
            className="relative bg-white w-full max-w-sm rounded-lg shadow-lg p-6 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black"
            >
              ×
            </button>

            <img
              src={selectedItem.img}
              alt={selectedItem.name}
              className="w-full h-40 object-cover rounded mb-3"
            />

            <h2 className="text-xl font-bold mb-1">{selectedItem.name}</h2>
            <p className="text-gray-600 mb-4">{selectedItem.desc}</p>

            {/* Quantity Selector */}
            <div className="flex justify-between items-center mb-4">
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
                <p className="text-gray-500 text-sm">Total</p>
                <p className="text-xl font-bold text-red-600">
                  ₹{selectedItem.price * quantity}
                </p>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-green-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}
