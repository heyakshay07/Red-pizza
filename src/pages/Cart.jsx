import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Trash2, X } from "lucide-react"; // ✅ Added X icon

const Cart = ({ onClose }) => {
  const {
    handleAddToCart,
    setCart,
    cart,
    increaseQty,
    decreaseQty,
    removeItem,
    totalAmount,
  } = useContext(CartContext);

  return (
    <div className="relative w-full max-w-2xl mx-auto p-4 bg-white rounded-xl shadow border mt-24 mb-1">
      {/* ✅ Close Button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
      >
        <X size={24} />
      </button>

      <h2 className="text-2xl font-bold mb-4 text-center">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty 😢</p>
      ) : (
        <div>
          <ul className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-4"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-24 object-contain rounded"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-500 text-sm">₹{item.price}</p>
                    <div className="flex items-center mt-2 border rounded-md overflow-hidden">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-2 py-1 text-xl hover:bg-gray-200"
                      >
                        –
                      </button>
                      <span className="px-4 font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-2 py-1 text-xl hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end">
                  <span className="font-semibold text-sky-600 text-lg">
                    ₹{item.price * item.quantity}
                  </span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="mt-2 bg-sky-500 hover:bg-sky-600 text-white p-2 rounded"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t pt-4 flex justify-between items-center">
            <span className="font-semibold text-lg">Total:</span>
            <span className="text-sky-600 font-bold text-xl">
              ₹{totalAmount}
            </span>
          </div>

          <div className="mt-4 flex gap-3">
            {/* <button className="w-1/2 bg-sky-500 text-white py-2 rounded hover:bg-sky-600">
              View Cart
            </button> */}
            <button className="w-1/2 bg-green-500 text-white py-2 rounded item-end hover:bg-green-600">
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
