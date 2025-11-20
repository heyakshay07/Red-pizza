// import React, { useState, useContext, useEffect } from "react";
// import QuickieModal from "../../components/QuickieModal";
// import FilterButtons from "../../components/FilterButtons"; // ✅ NEW
// import { CartContext } from "../../context/CartContext";

// import vegIcon from "../../assets/quickies/veg.png";
// import nonVegIcon from "../../assets/quickies/NV.png";

// import fries from "../../assets/quickies/fries.jpg";
// import friesPeri from "../../assets/quickies/friesPeri.jpg";
// import popcorn from "../../assets/quickies/popcorn.jpg";
// import nuggets from "../../assets/quickies/nuggets.jpg";
// import cheeseBalls from "../../assets/quickies/cheeseBalls.jpg";
// import chickenFinger from "../../assets/quickies/chickenFinger.jpg";
// import kababRoll from "../../assets/quickies/kababRoll.jpg";
// import kabab from "../../assets/quickies/kabab.jpg";

// const Quickies = () => {
//   const { handleAddToCart } = useContext(CartContext);
//   const [filter, setFilter] = useState("all");
//   const [selectedItem, setSelectedItem] = useState(null);

//    // ✅ Scroll to top when Quickies page loads
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const items = [
//     { id: "fries-99", name: "French Fries", price: 99, desc: "Crispy golden fries, lightly salted — classic & comforting.", img: fries, type: "veg" },
//     { id: "fries-peri-119", name: "French Fries — Peri Peri", price: 119, desc: "Spicy peri-peri seasoning for a bold, zesty bite.", img: friesPeri, type: "veg" },
//     { id: "popcorn-139", name: "Chicken Popcorn", price: 139, desc: "Tender bite-sized chicken pieces, fried to crunchy perfection.", img: popcorn, type: "nonveg" },
//     { id: "nuggets-139", name: "Chicken Nuggets", price: 139, desc: "Classic golden nuggets — great with dips.", img: nuggets, type: "nonveg" },
//     { id: "cheeseballs-139", name: "Red Cheese Balls", price: 139, desc: "Crispy shell, melty cheesy core — crowd favorite.", img: cheeseBalls, type: "veg" },
//     { id: "finger-149", name: "Red Chicken Finger", price: 149, desc: "Spiced chicken fingers, crunchy outside, juicy inside.", img: chickenFinger, type: "nonveg" },
//     { id: "kabab-roll-99", name: "Red Chicken Kabab Roll (2 pcs)", price: 99, desc: "Two rolls filled with spiced chicken kabab — quick & filling.", img: kababRoll, type: "nonveg" },
//     { id: "kabab-119", name: "Red Chicken Kabab (5 pcs)", price: 119, desc: "Minced chicken, garlic, onion, tomato, spices — juicy kebabs.", img: kabab, type: "nonveg" },
//   ];

//   const filteredItems = items.filter((item) =>
//     filter === "all" ? true : item.type === filter
//   );

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-10 mt-20">
//       <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
//         🧁 Quickies
//       </h2>

//       {/* ✅ Reusable Filter Buttons */}
//       <FilterButtons filter={filter} setFilter={setFilter} />

//       {/* ✅ Quickies Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {filteredItems.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
//           >
//             <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <div className="flex justify-between items-center mb-2">
//                 <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
//                 <img src={item.type === "veg" ? vegIcon : nonVegIcon} alt={item.type} className="w-5 h-5" />
//               </div>
//               <p className="text-gray-500 text-sm mb-3">{item.desc}</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg font-bold text-red-600">₹{item.price}</span>
//                 <button
//                   onClick={() => setSelectedItem(item)}
//                   className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
//                 >
//                  + Add
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ✅ Modal */}
//       {selectedItem && (
//         <QuickieModal
//           item={selectedItem}
//           onClose={() => setSelectedItem(null)}
//           onAddToCart={(itemData) => {
//             handleAddToCart(itemData);
//             setSelectedItem(null);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default Quickies;





import React, { useState, useContext } from "react";
import FilterButtons from "../../components/FilterButtons";
<<<<<<< HEAD
=======
import VariantModal from "../../components/VariantModal";
>>>>>>> 7717614aa4f6c3e662ec35a2e26a302cd158021e
import { CartContext } from "../../context/CartContext";

import vegIcon from "../../assets/quickies/veg.png";
import nonVegIcon from "../../assets/quickies/NV.png";

import fries from "../../assets/quickies/fries.jpg";
import friesPeri from "../../assets/quickies/friesPeri.jpg";
import popcorn from "../../assets/quickies/popcorn.jpg";
import nuggets from "../../assets/quickies/nuggets.jpg";
import cheeseBalls from "../../assets/quickies/cheeseBalls.jpg";
import chickenFinger from "../../assets/quickies/chickenFinger.jpg";
import kababRoll from "../../assets/quickies/kababRoll.jpg";
import kabab from "../../assets/quickies/kabab.jpg";

const Quickies = () => {
  const { handleAddToCart } = useContext(CartContext);
  const [filter, setFilter] = useState("all");
<<<<<<< HEAD
  const [selectedHalfFull, setSelectedHalfFull] = useState({}); // { [item.id]: 'half'/'full' }
  const [quantities, setQuantities] = useState({}); // { [item.id]: 1 }

  const items = [
    { id: "fries-99", name: "French Fries", price: 99, type: "veg", img: fries, desc: "Crispy golden fries, lightly salted — classic & comforting." },
    { id: "fries-peri-119", name: "French Fries — Peri Peri", price: 119, type: "veg", img: friesPeri, desc: "Spicy peri-peri seasoning for a bold, zesty bite." },
    { id: "popcorn-139", name: "Chicken Popcorn", price: 139, type: "nonveg", img: popcorn, desc: "Tender bite-sized chicken pieces, fried to crunchy perfection." },
    { id: "nuggets-139", name: "Chicken Nuggets", price: 139, type: "nonveg", img: nuggets, desc: "Classic golden nuggets — great with dips." },
    { id: "cheeseballs-139", name: "Red Cheese Balls", price: 139, type: "veg", img: cheeseBalls, desc: "Crispy shell, melty cheesy core — crowd favorite." },
    { id: "finger-149", name: "Red Chicken Finger", price: 149, type: "nonveg", img: chickenFinger, desc: "Spiced chicken fingers, crunchy outside, juicy inside." },
    { id: "kabab-roll-99", name: "Red Chicken Kabab Roll (2 pcs)", price: 99, type: "nonveg", img: kababRoll, desc: "Two rolls filled with spiced chicken kabab — quick & filling." },
    { id: "kabab-119", name: "Red Chicken Kabab (5 pcs)", price: 119, type: "nonveg", img: kabab, desc: "Minced chicken, garlic, onion, tomato, spices — juicy kebabs." },
  ];

  const filteredItems = items.filter(item => filter === "all" ? true : item.type === filter);

  const onAddClicked = (item) => {
    const isRed = item.name.includes("Red");
    const option = selectedHalfFull[item.id] || "full"; // default full
    const qty = quantities[item.id] || 1;

    const unitPrice = option === "half" ? Math.ceil(item.price / 2) : item.price;
    const totalPrice = unitPrice * qty;

    const cartItem = {
      id: `${item.id}-${option}`,
      name: isRed ? `${item.name} (${option === "half" ? "Half" : "Full"})` : item.name,
      img: item.img,
      price: unitPrice,
      quantity: qty,
      size: isRed ? (option === "half" ? "Half" : "Full") : "R",
      toppings: [],
      cheese: null,
      base: null,
      totalPrice,
    };

    handleAddToCart(cartItem);
  };

  const handleQtyChange = (itemId, change) => {
    setQuantities(prev => ({ ...prev, [itemId]: Math.max(1, (prev[itemId] || 1) + change) }));
  };
=======
  const [modalItem, setModalItem] = useState(null);

  const items = [
    {
      id: "fries-99",
      name: "French Fries",
      price: 99,
      desc: "Crispy golden fries, lightly salted — classic & comforting.",
      img: fries,
      type: "veg",
    },
    {
      id: "fries-peri-119",
      name: "French Fries — Peri Peri",
      price: 119,
      desc: "Spicy peri-peri seasoning for a bold, zesty bite.",
      img: friesPeri,
      type: "veg",
    },
    {
      id: "popcorn-139",
      name: "Chicken Popcorn",
      price: 139,
      desc: "Tender bite-sized chicken pieces, fried to crunchy perfection.",
      img: popcorn,
      type: "nonveg",
    },
    {
      id: "nuggets-139",
      name: "Chicken Nuggets",
      price: 139,
      desc: "Classic golden nuggets — great with dips.",
      img: nuggets,
      type: "nonveg",
    },
    {
      id: "cheeseballs-139",
      name: "Red Cheese Balls",
      price: 139,
      desc: "Crispy shell, melty cheesy core — crowd favorite.",
      img: cheeseBalls,
      type: "veg",
    },
    {
      id: "finger-149",
      name: "Red Chicken Finger",
      price: 149,
      desc: "Spiced chicken fingers, crunchy outside, juicy inside.",
      img: chickenFinger,
      type: "nonveg",
    },
    {
      id: "kabab-roll-99",
      name: "Red Chicken Kabab Roll (2 pcs)",
      price: 99,
      desc: "Two rolls filled with spiced chicken kabab — quick & filling.",
      img: kababRoll,
      type: "nonveg",
    },
    {
      id: "kabab-119",
      name: "Red Chicken Kabab (5 pcs)",
      price: 119,
      desc: "Minced chicken, garlic, onion, tomato, spices — juicy kebabs.",
      img: kabab,
      type: "nonveg",
    },
  ];

  // 🔥 Filter logic
  const filteredItems = items.filter((item) =>
    filter === "all" ? true : item.type === filter
  );
>>>>>>> 7717614aa4f6c3e662ec35a2e26a302cd158021e

  // 🔥 Open modal
  const onAddClicked = (item) => {
    setModalItem(item);
  };

  // 🔥 Handle Modal Confirm
  const handleModalConfirm = (option, qty) => {
    if (!modalItem) return;

    const basePrice = modalItem.price;
    const unitPrice = option === "half" ? Math.ceil(basePrice / 2) : basePrice;
    const totalPrice = unitPrice * qty;

    const cartItem = {
      id: `${modalItem.id}-${option}`,
      name: `${modalItem.name} (${option === "half" ? "Half" : "Full"})`,
      img: modalItem.img,
      price: unitPrice,
      quantity: qty,
      size: option === "half" ? "Half" : "Full",
      toppings: [],
      cheese: null,
      base: null,
      totalPrice,
    };

    handleAddToCart(cartItem);
    setModalItem(null);
  };

  const closeModal = () => setModalItem(null);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 mt-20">
<<<<<<< HEAD
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">🧁 Quickies</h2>
      <FilterButtons filter={filter} setFilter={setFilter} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredItems.map(item => {
          const isRed = item.name.includes("Red");
          const option = selectedHalfFull[item.id] || "full";
          const qty = quantities[item.id] || 1;
          const unitPrice = option === "half" ? Math.ceil(item.price / 2) : item.price;

          return (
            <div key={item.id} className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                  <img src={item.type === "veg" ? vegIcon : nonVegIcon} alt={item.type} className="w-5 h-5" />
                </div>
                <p className="text-gray-500 text-sm mb-3">{item.desc}</p>

                {isRed && (
                  <div className="flex gap-2 mb-2">
                    <button
                      onClick={() => setSelectedHalfFull(prev => ({ ...prev, [item.id]: "half" }))}
                      className={`flex-1 border p-2 rounded-lg ${option === "half" ? "border-red-500 bg-red-50" : ""}`}
                    >
                      Half ₹{Math.ceil(item.price / 2)}
                    </button>
                    <button
                      onClick={() => setSelectedHalfFull(prev => ({ ...prev, [item.id]: "full" }))}
                      className={`flex-1 border p-2 rounded-lg ${option === "full" ? "border-red-500 bg-red-50" : ""}`}
                    >
                      Full ₹{item.price}
                    </button>
                  </div>
                )}

                {isRed && (
                  <div className="flex items-center gap-2 mb-2">
                    <button onClick={() => handleQtyChange(item.id, -1)} className="px-2 py-1 border rounded">-</button>
                    <span>{qty}</span>
                    <button onClick={() => handleQtyChange(item.id, 1)} className="px-2 py-1 border rounded">+</button>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-red-600">₹{isRed ? unitPrice * qty : item.price}</span>
                  <button onClick={() => onAddClicked(item)} className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">
                    + Add
                  </button>
                </div>
=======
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🧁 Quickies
      </h2>

      {/* Filter Buttons */}
      <FilterButtons filter={filter} setFilter={setFilter} />

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />

            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                <img
                  src={item.type === "veg" ? vegIcon : nonVegIcon}
                  alt={item.type}
                  className="w-5 h-5"
                />
              </div>

              <p className="text-gray-500 text-sm mb-3">{item.desc}</p>

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-red-600">₹{item.price}</span>

                <button
                  onClick={() => onAddClicked(item)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                >
                  + Add
                </button>
>>>>>>> 7717614aa4f6c3e662ec35a2e26a302cd158021e
              </div>
            </div>
          );
        })}
      </div>
<<<<<<< HEAD
=======

      {/* Variant Modal */}
      {modalItem && (
        <VariantModal
          item={modalItem}
          onClose={closeModal}
          onConfirm={handleModalConfirm}
        />
      )}
>>>>>>> 7717614aa4f6c3e662ec35a2e26a302cd158021e
    </div>
  );
};

export default Quickies;
