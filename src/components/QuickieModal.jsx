import React, { useState } from "react";

export default function QuickieModal({ item, onClose, onAddToCart }) {
  const vegToppings = ["Onion", "Tomato", "Capsicum", "Mushroom", "Jalapeno", "American Corn", "Black Olives", "Baby Corn", "Garlic", "Red Pepper", "Pineapple"];
  const nonVegToppings = ["Spicy Chicken", "Roast Chicken", "Barbequed Chicken", "Plain Chicken", "Chicken Salami", "Chicken Sausage", "Chicken Schezwan", "Chicken Tikka", "Chicken Kheema"];

  const cheeseOptions = [
  { name: "Regular", price: 100 },
  { name: "Medium", price: 125 },
  { name: "Large", price: 140 },
];

  const baseOptions = [
    { name: "Stuffed Crust", sizes: [{ size: "R", price: 105 }, { size: "M", price: 155 }] },
    { name: "Cheese Burst", sizes: [{ size: "R", price: 125 }, { size: "M", price: 159 }] },
    { name: "Thin Crust", sizes: [{ size: "R", price: 79 }, { size: "M", price: 119 }, { size: "L", price: 159 }] },
    { name: "Pan Tossed", sizes: [{ size: "R", price: 79 }, { size: "M", price: 119 }, { size: "L", price: 159 }] },
  ];

  const toppingPrices = {
    veg: { R: 60, M: 85, L: 115 },
    nonveg: { R: 90, M: 110, L: 125 },
  };

  const [tab, setTab] = useState("toppings");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [selectedCheese, setSelectedCheese] = useState(null);
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

  const basePrice = item.price || 0;
  const toppingPrice = vegSelected * vegToppingPrice + nonVegSelected * nonVegToppingPrice;
  const cheesePrice = selectedCheese?.price || 0;
  const baseExtra = selectedBase?.price || 0;
  const totalPrice = (basePrice + toppingPrice + cheesePrice + baseExtra) * quantity;

  const handleAddToCart = () => {
    const cartItem = {
      id: item.id,
      name: item.name,
      img: item.img,        // ✅ image
      price: totalPrice,    // ✅ base price
      size,
      quantity,
      toppings: selectedToppings,
      cheese: selectedCheese?.name,
      base: selectedBase?.name,
      totalPrice,
    };
    onAddToCart(cartItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div
        className="relative bg-white w-full max-w-lg rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh] z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-black"
        >
          ×
        </button>

        <h2 className="text-xl font-bold mb-2">{item.name}</h2>
        <p className="text-gray-600 mb-4">{item.desc}</p>

        {/* SIZE BUTTONS */}
        <div className="flex gap-3 mb-4">
          {["R", "M", "L"].map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`px-3 py-1 rounded border ${
                size === s ? "bg-red-500 text-white border-red-500" : "border-gray-300"
              }`}
            >
              {s === "R" ? "Regular/7″" : s === "M" ? "Medium/10″" : "Large/12″"}
            </button>
          ))}
        </div>

        {/* TAB BUTTONS */}
        <div className="flex border-b mb-4">
          {["toppings", "cheese", "base"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2 font-semibold ${
                tab === t ? "border-b-2 border-red-500 text-red-600" : "text-gray-500"
              }`}
            >
              {t === "toppings" ? "Toppings" : t === "cheese" ? "Cheese" : "Base"}
            </button>
          ))}
        </div>

        {/* TAB CONTENT */}
        {tab === "toppings" && (
          <div>
            <p className="font-semibold mb-2">
              Veg Toppings <span className="text-sm text-gray-500">₹{vegToppingPrice} each</span>
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
              <span className="text-sm text-gray-500">₹{nonVegToppingPrice} each</span>
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

        {tab === "cheese" && (
          <div className="grid grid-cols-3 gap-3">
            {cheeseOptions.map((c) => (
              <label
                key={c.name}
                className={`border p-3 rounded text-center cursor-pointer ${
                  selectedCheese?.name === c.name ? "border-red-500 bg-red-50" : ""
                }`}
                onClick={() => setSelectedCheese(c)}
              >
                <div className="font-semibold">{c.name}</div>
                <div className="text-sm text-gray-600">₹{c.price}</div>
              </label>
            ))}
          </div>
        )}

        {tab === "base" && (
          <div>
            {baseOptions.map((b) => (
              <div key={b.name} className="mb-3">
                <p className="font-semibold mb-1">{b.name}</p>
                <div className="flex flex-wrap gap-2">
                  {b.sizes.map((s) => (
                    <label
                      key={s.size}
                      className={`border px-3 py-1 rounded cursor-pointer ${
                        selectedBase?.name === `${b.name}-${s.size}`
                          ? "border-red-500 bg-red-50"
                          : ""
                      }`}
                      onClick={() =>
                        setSelectedBase({ name: `${b.name}-${s.size}`, price: s.price })
                      }
                    >
                      {s.size} ₹{s.price}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* QUANTITY + TOTAL */}
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

        <button
          onClick={handleAddToCart}
          className="w-full mt-6 bg-green-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-green-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}


// import React, { useState } from "react";

// export default function QuickieModal({ item, onClose, onAddToCart }) {
//   const vegToppings = ["Onion", "Tomato", "Capsicum", "Mushroom", "Jalapeno", "American Corn", "Black Olives", "Baby Corn", "Garlic", "Red Pepper", "Pineapple"];
//   const nonVegToppings = ["Spicy Chicken", "Roast Chicken", "Barbequed Chicken", "Plain Chicken", "Chicken Salami", "Chicken Sausage", "Chicken Schezwan", "Chicken Tikka", "Chicken Kheema"];

//   const cheeseOptions = {
//     R: { name: "Regular", price: 100 },
//     M: { name: "Medium", price: 125 },
//     L: { name: "Large", price: 140 }
//   };

//   const baseOptions = [
//     { name: "Regular Crispy", sizes: [{ size: "R", price: 0 }, { size: "M", price: 0 }, { size: "L", price: 0 }] },
//     { name: "Thin And Crispy", sizes: [{ size: "R", price: 0 }, { size: "M", price: 0 }, { size: "L", price: 0 }] },
//     { name: "Triple Cheesy Fantasy", sizes: [{ size: "R", price: 120 }, { size: "M", price: 120 }, { size: "L", price: 120 }] },
//   ];

//   const toppingPrices = {
//     veg: { R: 40, M: 40, L: 40 },
//     nonveg: { R: 60, M: 60, L: 60 },
//   };

//   const sizePrices = {
//     R: 139,
//     M: 275,
//     L: 429,
    
//   };

//   const [selectedToppings, setSelectedToppings] = useState([]);
//   const [selectedCheese, setSelectedCheese] = useState(null);
//   const [selectedBase, setSelectedBase] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [size, setSize] = useState("R");

//   const toggleTopping = (t) => {
//     setSelectedToppings((prev) =>
//       prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
//     );
//   };

//   const vegToppingPrice = toppingPrices.veg[size];
//   const nonVegToppingPrice = toppingPrices.nonveg[size];
//   const vegSelected = selectedToppings.filter((t) => vegToppings.includes(t)).length;
//   const nonVegSelected = selectedToppings.filter((t) => nonVegToppings.includes(t)).length;

//   const basePrice = item?.price || 130;
//   const sizePrice = sizePrices[size];
//   const toppingPrice = vegSelected * vegToppingPrice + nonVegSelected * nonVegToppingPrice;
//   const cheesePrice = selectedCheese?.price || 0;
//   const baseExtra = selectedBase?.price || 0;
//   const totalPrice = (basePrice + sizePrice + toppingPrice + cheesePrice + baseExtra) * quantity;

//   const handleAddToCart = () => {
//     const cartItem = {
//       id: item?.id || "pizza-1",
//       name: item?.name || "Margherita Pizza",
//       img: item?.img || "",
//       price: totalPrice,
//       size,
//       quantity,
//       toppings: selectedToppings,
//       cheese: selectedCheese?.name,
//       base: selectedBase?.name,
//       totalPrice,
//     };
//     onAddToCart?.(cartItem);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 flex justify-center items-center z-50" onClick={onClose}>
//       <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

//       <div
//         className="relative bg-white w-full max-w-lg rounded-lg shadow-lg overflow-hidden z-10 flex flex-col"
//         style={{ maxHeight: '90vh' }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <style>{`
//           .scrollbar-hide::-webkit-scrollbar {
//             display: none;
//           }
//           .scrollbar-hide {
//             scrollbar-width: none;
//             -ms-overflow-style: none;
//           }
//         `}</style>

//         {/* HEADER - Fixed */}
//         <div className="p-6 pb-4 border-b bg-white">
//           <button
//             onClick={onClose}
//             className="absolute top-3 right-4 text-3xl text-gray-600 hover:text-black leading-none"
//           >
//             ×
//           </button>
//           <h2 className="text-xl font-bold">{item?.name || "Margherita Pizza"}</h2>
//         </div>

//         {/* SCROLLABLE CONTENT */}
//         <div className="flex-1 overflow-y-auto scrollbar-hide px-6 py-4">
          
//           {/* SIZE SELECTION */}
//           <div className="mb-6">
//             <div className="flex justify-between items-center mb-4">
//               <p className="font-semibold text-gray-700">Size</p>
//               <p className="text-sm text-gray-500">1/1 selected</p>
//             </div>

//             <div className="space-y-3">
//               <label
//                 className={`flex justify-between items-center p-4 border rounded-lg cursor-pointer transition ${
//                   size === "R" ? "border-black bg-gray-50" : "border-gray-300 hover:border-gray-400"
//                 }`}
//                 onClick={() => setSize("R")}
//               >
//                 <span className="text-gray-800">Regular (17.78cm) [serve 1]</span>
//                 <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
//                   size === "R" ? "border-black" : "border-gray-300"
//                 }`}>
//                   {size === "R" && <div className="w-3 h-3 rounded-full bg-black"></div>}
//                 </div>
//               </label>

//               <label
//                 className={`flex justify-between items-center p-4 border rounded-lg cursor-pointer transition ${
//                   size === "M" ? "border-black bg-gray-50" : "border-gray-300 hover:border-gray-400"
//                 }`}
//                 onClick={() => setSize("M")}
//               >
//                 <span className="text-gray-800">Medium (25.40cm) [serve 2]</span>
//                 <div className="flex items-center gap-3">
//                   <span className="text-gray-600">+ ₹120</span>
//                   <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
//                     size === "M" ? "border-black" : "border-gray-300"
//                   }`}>
//                     {size === "M" && <div className="w-3 h-3 rounded-full bg-black"></div>}
//                   </div>
//                 </div>
//               </label>

//               <label
//                 className={`flex justify-between items-center p-4 border rounded-lg cursor-pointer transition ${
//                   size === "L" ? "border-black bg-gray-50" : "border-gray-300 hover:border-gray-400"
//                 }`}
//                 onClick={() => setSize("L")}
//               >
//                 <span className="text-gray-800">Large (30.48cm) [serve 3]</span>
//                 <div className="flex items-center gap-3">
//                   <span className="text-gray-600">+ ₹260</span>
//                   <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
//                     size === "L" ? "border-black" : "border-gray-300"
//                   }`}>
//                     {size === "L" && <div className="w-3 h-3 rounded-full bg-black"></div>}
//                   </div>
//                 </div>
//               </label>

//               <label
//                 className={`flex justify-between items-center p-4 border rounded-lg cursor-pointer transition ${
//                   size === "Maha" ? "border-black bg-gray-50" : "border-gray-300 hover:border-gray-400"
//                 }`}
//                 onClick={() => setSize("Maha")}
//               >
//                 <span className="text-gray-800">Maha (50.80cm) [serve 8]</span>
//                 <div className="flex items-center gap-3">
//                   <span className="text-gray-600">+ ₹870</span>
//                   <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
//                     size === "Maha" ? "border-black" : "border-gray-300"
//                   }`}>
//                     {size === "Maha" && <div className="w-3 h-3 rounded-full bg-black"></div>}
//                   </div>
//                 </div>
//               </label>
//             </div>
//           </div>

//           {/* BASE SELECTION */}
//           <div className="mb-6">
//             <div className="flex justify-between items-center mb-4">
//               <p className="font-semibold text-gray-700">
//                 Choice Of Base [{size === "R" ? "Regular" : size === "M" ? "Medium" : size === "L" ? "Large" : "Maha"}]
//               </p>
//               <p className="text-sm text-gray-500">1/1 selected</p>
//             </div>

//             <div className="space-y-3">
//               {baseOptions
//                 .filter((b) => b.sizes.some((s) => s.size === size))
//                 .map((b) => {
//                   const sizeOption = b.sizes.find((s) => s.size === size);
//                   if (!sizeOption) return null;

//                   const isSelected = selectedBase?.name === `${b.name}-${size}`;

//                   return (
//                     <label
//                       key={b.name}
//                       className={`flex justify-between items-center p-4 border rounded-lg cursor-pointer transition ${
//                         isSelected ? "border-black bg-gray-50" : "border-gray-300 hover:border-gray-400"
//                       }`}
//                       onClick={() =>
//                         setSelectedBase({ name: `${b.name}-${size}`, price: sizeOption.price })
//                       }
//                     >
//                       <span className="text-gray-800">{b.name}</span>
//                       <div className="flex items-center gap-3">
//                         {sizeOption.price > 0 && (
//                           <span className="text-gray-600">+ ₹{sizeOption.price}</span>
//                         )}
//                         <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
//                           isSelected ? "border-black" : "border-gray-300"
//                         }`}>
//                           {isSelected && <div className="w-3 h-3 rounded-full bg-black"></div>}
//                         </div>
//                       </div>
//                     </label>
//                   );
//                 })}
//             </div>
//           </div>

//           {/* VEG TOPPINGS */}
//           <div className="mb-6">
//             <p className="font-semibold text-gray-700 mb-4">
//               Choice Of Veg Toppings For Pizzas [{size === "R" ? "regular" : size === "M" ? "medium" : size === "L" ? "large" : "maha"}]
//             </p>

//             <div className="space-y-3">
//               {vegToppings.map((t) => (
//                 <label
//                   key={t}
//                   className="flex justify-between items-center p-4 border rounded-lg cursor-pointer hover:border-gray-400 transition"
//                 >
//                   <span className="text-gray-800">{t}</span>
//                   <div className="flex items-center gap-3">
//                     <span className="text-gray-600">+ ₹{vegToppingPrice}</span>
//                     <input
//                       type="checkbox"
//                       checked={selectedToppings.includes(t)}
//                       onChange={() => toggleTopping(t)}
//                       className="w-5 h-5 accent-black cursor-pointer"
//                     />
//                   </div>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* NON-VEG TOPPINGS */}
//           <div className="mb-6">
//             <p className="font-semibold text-gray-700 mb-4">
//               Choice Of Non-Veg Toppings For Pizzas [{size === "R" ? "regular" : size === "M" ? "medium" : size === "L" ? "large" : "maha"}]
//             </p>

//             <div className="space-y-3">
//               {nonVegToppings.map((t) => (
//                 <label
//                   key={t}
//                   className="flex justify-between items-center p-4 border rounded-lg cursor-pointer hover:border-gray-400 transition"
//                 >
//                   <span className="text-gray-800">{t}</span>
//                   <div className="flex items-center gap-3">
//                     <span className="text-gray-600">+ ₹{nonVegToppingPrice}</span>
//                     <input
//                       type="checkbox"
//                       checked={selectedToppings.includes(t)}
//                       onChange={() => toggleTopping(t)}
//                       className="w-5 h-5 accent-black cursor-pointer"
//                     />
//                   </div>
//                 </label>
//               ))}
//             </div>
//           </div>

//         </div>

//         {/* FOOTER - Fixed */}
//         <div className="p-6 border-t bg-white">
//           <div className="flex justify-between items-center">
//             <p className="text-2xl font-bold">₹{totalPrice}</p>
//             <button
//               onClick={handleAddToCart}
//               className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition uppercase"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Demo wrapper
// function App() {
//   const [showModal, setShowModal] = useState(true);
//   const [cart, setCart] = useState([]);

//   const sampleItem = {
//     id: "marg-pizza",
//     name: "Margherita Pizza",
//     desc: "Classic delight with cheese",
//     img: "pizza.jpg",
//     price: 130
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <button
//         onClick={() => setShowModal(true)}
//         className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
//       >
//         Open Pizza Customization
//       </button>

//       {showModal && (
//         <QuickieModal
//           item={sampleItem}
//           onClose={() => setShowModal(false)}
//           onAddToCart={(item) => {
//             setCart([...cart, item]);
//             console.log("Added to cart:", item);
//           }}
//         />
//       )}

//       {cart.length > 0 && (
//         <div className="mt-8 bg-white p-6 rounded-lg shadow">
//           <h3 className="font-bold text-xl mb-4">Cart Items:</h3>
//           {cart.map((item, i) => (
//             <div key={i} className="mb-2 p-3 bg-gray-50 rounded">
//               <p><strong>{item.name}</strong> - Size: {item.size} - ₹{item.totalPrice}</p>
//               {item.toppings.length > 0 && <p className="text-sm text-gray-600">Toppings: {item.toppings.join(", ")}</p>}
//               {item.base && <p className="text-sm text-gray-600">Base: {item.base}</p>}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }