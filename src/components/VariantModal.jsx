<<<<<<< HEAD
// // import React, { useEffect, useState } from "react";

// // export default function VariantModal({ item = null, onClose, onConfirm }) {
// //   const [selectedOption, setSelectedOption] = useState("full");
// //   const [qty, setQty] = useState(1);

// //   // Reset when item changes or modal opens
// //   useEffect(() => {
// //     setSelectedOption("full");
// //     setQty(1);
// //   }, [item]);

// //   if (!item) return null;

// //   const halfPrice = Math.ceil(item.price / 2);
// //   const unitPrice = selectedOption === "half" ? halfPrice : item.price;
// //   const total = unitPrice * qty;

// //   return (
// //     <div
// //       className="fixed inset-0 z-50 flex items-center justify-center"
// //       onClick={onClose}
// //     >
// //       <div className="absolute inset-0 bg-black/40"></div>

// //       <div
// //         className="relative bg-white w-full max-w-md rounded-lg shadow-lg p-6 z-10"
// //         onClick={(e) => e.stopPropagation()}
// //       >
// //         <button
// //           onClick={onClose}
// //           className="absolute top-3 right-3 text-lg text-gray-600 hover:text-black"
// //         >
// //           ×
// //         </button>

// //         <div className="flex gap-4 items-center mb-4">
// //           <img
// //             src={item.img}
// //             alt={item.name}
// //             className="w-20 h-20 object-cover rounded-md"
// //           />
// //           <div>
// //             <h3 className="font-semibold text-lg">{item.name}</h3>
// //             <p className="text-sm text-gray-500">Choose Half or Full</p>
// //           </div>
// //         </div>

// //         <div className="flex gap-3 mb-4">
// //           <label
// //             className={`flex-1 border p-3 rounded-lg text-center cursor-pointer ${
// //               selectedOption === "half" ? "border-red-500 bg-red-50" : ""
// //             }`}
// //             onClick={() => setSelectedOption("half")}
// //           >
// //             <div className="font-semibold">Half</div>
// //             <div className="text-sm text-gray-600">₹{halfPrice}</div>
// //           </label>

// //           <label
// //             className={`flex-1 border p-3 rounded-lg text-center cursor-pointer ${
// //               selectedOption === "full" ? "border-red-500 bg-red-50" : ""
// //             }`}
// //             onClick={() => setSelectedOption("full")}
// //           >
// //             <div className="font-semibold">Full</div>
// //             <div className="text-sm text-gray-600">₹{item.price}</div>
// //           </label>
// //         </div>

// //         <div className="flex items-center gap-4 mb-6">
// //           <span className="font-medium">Quantity</span>
// //           <div className="flex items-center gap-3 ml-auto">
// //             <button
// //               onClick={() => setQty((q) => Math.max(1, q - 1))}
// //               className="bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full"
// //             >
              
// //             </button>
// //             <span className="font-semibold text-lg">{qty}</span>
// //             <button
// //               onClick={() => setQty((q) => q + 1)}
// //               className="bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full"
// //             >
// //               +
// //             </button>
// //           </div>
// //         </div>

// //         <div className="flex justify-between items-center mb-4">
// //           <div className="text-sm text-gray-600">Total</div>
// //           <div className="text-xl font-bold text-red-600">₹{total}</div>
// //         </div>

// //         <div className="flex gap-3">
// //           <button
// //             onClick={() => onConfirm(selectedOption, qty)}
// //             className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700"
// //           >
// //             Add to Cart
// //           </button>
// //           <button
// //             onClick={onClose}
// //             className="flex-1 border border-gray-300 py-2 rounded-lg font-semibold hover:bg-gray-50"
// //           >
// //             Cancel
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useEffect, useState } from "react";

// export default function VariantModal({ item = null, onClose, onConfirm }) {
//   const [selectedOption, setSelectedOption] = useState("full");
//   const [qty, setQty] = useState(1);

//   useEffect(() => {
//     setSelectedOption("full");
//     setQty(1);
//   }, [item]);

//   if (!item) return null;

//   const halfPrice = Math.ceil(item.price / 2);
//   const unitPrice = selectedOption === "half" ? halfPrice : item.price;
//   const total = unitPrice * qty;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
//       <div className="absolute inset-0 bg-black/40"></div>

//       <div className="relative bg-white w-full max-w-md rounded-lg shadow-lg p-6 z-10" onClick={(e) => e.stopPropagation()}>
//         <button onClick={onClose} className="absolute top-3 right-3 text-lg text-gray-600 hover:text-black">×</button>

//         <div className="flex gap-4 items-center mb-4">
//           <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
//           <div>
//             <h3 className="font-semibold text-lg">{item.name}</h3>
//             <p className="text-sm text-gray-500">Choose Half or Full</p>
//           </div>
//         </div>

//         <div className="flex gap-3 mb-4">
//           <label className={`flex-1 border p-3 rounded-lg text-center cursor-pointer ${selectedOption === "half" ? "border-red-500 bg-red-50" : ""}`} onClick={() => setSelectedOption("half")}>
//             <div className="font-semibold">Half</div>
//             <div className="text-sm text-gray-600">₹{halfPrice}</div>
//           </label>

//           <label className={`flex-1 border p-3 rounded-lg text-center cursor-pointer ${selectedOption === "full" ? "border-red-500 bg-red-50" : ""}`} onClick={() => setSelectedOption("full")}>
//             <div className="font-semibold">Full</div>
//             <div className="text-sm text-gray-600">₹{item.price}</div>
//           </label>
//         </div>

//         <div className="flex items-center gap-4 mb-6">
//           <span className="font-medium">Quantity</span>
//           <div className="flex items-center gap-3 ml-auto">
//             <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full">-</button>
//             <span className="font-semibold text-lg">{qty}</span>
//             <button onClick={() => setQty((q) => q + 1)} className="bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full">+</button>
//           </div>
//         </div>

//         <div className="flex justify-between items-center mb-4">
//           <div className="text-sm text-gray-600">Total</div>
//           <div className="text-xl font-bold text-red-600">₹{total}</div>
//         </div>

//         <div className="flex gap-3">
//           <button onClick={() => onConfirm(selectedOption, qty)} className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700">Add to Cart</button>
//           <button onClick={onClose} className="flex-1 border border-gray-300 py-2 rounded-lg font-semibold hover:bg-gray-50">Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";

export default function VariantModal({ item = null, onClose, onConfirm }) {
  const [selectedOption, setSelectedOption] = useState("full");
  const [qty, setQty] = useState(1);

  // Reset when modal opens or item changes
  useEffect(() => {
    setSelectedOption("full");
    setQty(1);
  }, [item]);

  if (!item) return null;

  const halfPrice = Math.ceil(item.price / 2);
  const unitPrice = selectedOption === "half" ? halfPrice : item.price;
  const total = unitPrice * qty;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40"></div>

      <div
        className="relative bg-white w-full max-w-md rounded-lg shadow-lg p-6 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-lg text-gray-600 hover:text-black"
        >
          ×
        </button>

        <div className="flex gap-4 items-center mb-4">
          <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
          <div>
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-sm text-gray-500">Choose Half or Full</p>
          </div>
        </div>

        <div className="flex gap-3 mb-4">
          <label
            className={`flex-1 border p-3 rounded-lg text-center cursor-pointer ${
              selectedOption === "half" ? "border-red-500 bg-red-50" : ""
            }`}
            onClick={() => setSelectedOption("half")}
          >
            <div className="font-semibold">Half</div>
            <div className="text-sm text-gray-600">₹{halfPrice}</div>
          </label>

          <label
            className={`flex-1 border p-3 rounded-lg text-center cursor-pointer ${
              selectedOption === "full" ? "border-red-500 bg-red-50" : ""
            }`}
            onClick={() => setSelectedOption("full")}
          >
            <div className="font-semibold">Full</div>
            <div className="text-sm text-gray-600">₹{item.price}</div>
          </label>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <span className="font-medium">Quantity</span>
          <div className="flex items-center gap-3 ml-auto">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full"
            >
              -
            </button>
            <span className="font-semibold text-lg">{qty}</span>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="bg-gray-200 w-8 h-8 flex justify-center items-center rounded-full"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-gray-600">Total</div>
          <div className="text-xl font-bold text-red-600">₹{total}</div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => onConfirm(selectedOption, qty)}
            className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700"
          >
            Add to Cart
          </button>
          <button
            onClick={onClose}
            className="flex-1 border border-gray-300 py-2 rounded-lg font-semibold hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

}



