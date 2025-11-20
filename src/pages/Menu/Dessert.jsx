// import React, { useState } from "react";
// import FilterButtons from "../../components/FilterButtons";

// import vegIcon from "../../assets/quickies/veg.png";
// import nonVegIcon from "../../assets/quickies/NV.png";

// import choco from "../../assets/dessert/c1.png";
// import lava from "../../assets/dessert/c2.png";

// const dessertItems = [
//   {
//     id: 1,
//     name: "Chocolate Brownie",
//     desc: "Rich and creamy chocolate dessert to satisfy your sweet cravings.",
//     price: 69,
//     img: choco,
//     type: "veg",
//   },
//   {
//     id: 2,
//     name: "Choco Lava",
//     desc: "Warm, gooey choco lava cake with molten chocolate center.",
//     price: 99,
//     img: lava,
//     type: "veg",
//   },
// ];

// export default function Dessert() {
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [filter, setFilter] = useState("all");

//   // ✅ Filter logic (controlled by FilterButtons)
//   const filteredItems = dessertItems.filter((item) =>
//     filter === "all" ? true : item.type === filter
//   );

//   const handleAddToCart = async () => {
//     const cartItem = {
//       id: selectedItem.id,
//       name: selectedItem.name,
//       quantity,
//       price: selectedItem.price * quantity,
//     };
//     try {
//       await fetch("/api/cart", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(cartItem),
//       });
//       alert("✅ Added to cart!");
//       setSelectedItem(null);
//       setQuantity(1);
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       alert("❌ Failed to add to cart");
//     }
//   };

//   return (
//     <>
//       <div className="max-w-7xl mx-auto px-4 py-10">
//         {/* Header */}
//         <div className="text-center mb-8 mt-8">
//           <h1 className="text-3xl font-extrabold text-gray-800 mt-16">
//             🍫 Desserts
//           </h1>
//           <p className="text-gray-600 mt-2">
//             Delicious treats to end your meal sweetly!
//           </p>
//         </div>

//         {/* ✅ Shared FilterButtons */}
//         <FilterButtons filter={filter} setFilter={setFilter} />

//         {/* Dessert Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {filteredItems.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
//             >
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="w-full h-40 object-cover"
//               />

//               <div className="p-4">
//                 <div className="flex items-center gap-2 mb-2">
//                   <img
//                     src={item.type === "veg" ? vegIcon : nonVegIcon}
//                     className="w-4 h-4"
//                     alt={item.type}
//                   />
//                   <h3 className="font-semibold text-gray-800">{item.name}</h3>
//                 </div>

//                 <p className="text-gray-500 text-sm mb-3">{item.desc}</p>

//                 <div className="flex items-center justify-between">
//                   <span className="font-bold text-gray-800">₹ {item.price}</span>
//                   <button
//                     onClick={() => setSelectedItem(item)}
//                     className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
//                   >
//                     + Add
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ✅ Popup Modal */}
//       {selectedItem && (
//         <div
//           className="fixed inset-0 flex justify-center items-center z-50"
//           onClick={() => setSelectedItem(null)}
//         >
//           {/* Background Blur */}
//           <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

//           {/* Popup Card */}
//           <div
//             className="relative bg-white w-full max-w-sm rounded-lg shadow-lg p-6 z-10"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={() => setSelectedItem(null)}
//               className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black"
//             >
//               ×
//             </button>

//             <img
//               src={selectedItem.img}
//               alt={selectedItem.name}
//               className="w-full h-40 object-cover rounded mb-3"
//             />
//             <h2 className="text-xl font-bold mb-2">{selectedItem.name}</h2>
//             <p className="text-gray-600 mb-4">{selectedItem.desc}</p>

//             {/* Quantity Selector */}
//             <div className="flex justify-between items-center mb-4">
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
//                 <p className="text-gray-500 text-sm">Total</p>
//                 <p className="text-xl font-bold text-red-600">
//                   ₹{selectedItem.price * quantity}
//                 </p>
//               </div>
//             </div>

//             <button
//               onClick={handleAddToCart}
//               className="w-full bg-green-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-green-700"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }








import React, { useState, useContext, useEffect } from "react";
import FilterButtons from "../../components/FilterButtons";
import { CartContext } from "../../context/CartContext";

import vegIcon from "../../assets/quickies/veg.png";
import nonVegIcon from "../../assets/quickies/NV.png";

import choco from "../../assets/dessert/c1.png";
import lava from "../../assets/dessert/c2.png";

const dessertItems = [
  { id: 1, name: "Chocolate Brownie", desc: "Rich and creamy chocolate dessert.", price: 69, img: choco, type: "veg" },
  { id: 2, name: "Choco Lava", desc: "Warm gooey lava cake with molten chocolate.", price: 99, img: lava, type: "veg" },
];

export default function Dessert() {
  const { handleAddToCart } = useContext(CartContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [filter, setFilter] = useState("all");

   // ✅ Scroll to top when Quickies page loads
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const filteredItems = dessertItems.filter((item) => filter === "all" || item.type === filter);

  const addToCart = () => {
    handleAddToCart({
      id: selectedItem.id,
      name: selectedItem.name,
      price: selectedItem.price,
      quantity,
      img: selectedItem.img,
    });
    setSelectedItem(null);
    setQuantity(1);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-center mb-8 mt-8">
          <h1 className="text-3xl font-extrabold text-gray-800 mt-16">🍫 Desserts</h1>
          <p className="text-gray-600 mt-2">Delicious treats to end your meal sweetly!</p>
        </div>

        <FilterButtons filter={filter} setFilter={setFilter} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img src={item.img} alt={item.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <img src={item.type === "veg" ? vegIcon : nonVegIcon} className="w-4 h-4" alt={item.type} />
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                </div>
                <p className="text-gray-500 text-sm mb-3">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-800">₹ {item.price}</span>
                  <button
                    onClick={() => { setSelectedItem(item); setQuantity(1); }}
                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  >
                    + Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 flex justify-center items-center z-50" onClick={() => setSelectedItem(null)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
          <div className="relative bg-white w-full max-w-sm rounded-lg shadow-lg p-6 z-10" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedItem(null)} className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black">×</button>

            <img src={selectedItem.img} alt={selectedItem.name} className="w-full h-40 object-cover rounded mb-3" />
            <h2 className="text-xl font-bold mb-2">{selectedItem.name}</h2>
            <p className="text-gray-600 mb-4">{selectedItem.desc}</p>

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full text-lg">-</button>
                <span className="font-semibold text-lg">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full text-lg">+</button>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-sm">Total</p>
                <p className="text-xl font-bold text-red-600">₹{selectedItem.price * quantity}</p>
              </div>
            </div>

            <button onClick={addToCart} className="w-full bg-green-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-green-700">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}
