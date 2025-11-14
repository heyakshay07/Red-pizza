import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Trash2, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cart = ({ onClose }) => {
  const { cart, increaseQty, decreaseQty, removeItem, totalAmount } =
    useContext(CartContext);

  const navigate = useNavigate();

  return (
    <div className="relative w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-24 mb-1">
      {/* Close Button */}
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
                className="flex justify-between items-start border-b pb-4"
              >
                <div className="flex items-start gap-4 w-full">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-24 object-contain rounded"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <h3 className="font-semibold text-gray-800 truncate">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-sm">₹{item.price}</p>

                    {/* Quantity Controller */}
                    <div className="flex items-center mt-2 border rounded-md overflow-hidden w-max">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-3 py-1 text-xl hover:bg-gray-200 transition"
                      >
                        –
                      </button>
                      <input
                        type="number"
                        readOnly
                        value={item.quantity}
                        className="w-16 h-8 text-center font-semibold outline-none border-l border-r border-gray-200"
                      />
                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3 py-1 text-xl hover:bg-gray-200 transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end ml-4">
                  <span className="font-semibold text-red-600 text-lg">
                    ₹{item.price * item.quantity}
                  </span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="mt-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded transition"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Total */}
          <div className="mt-6 border-t pt-4 flex justify-between items-center">
            <span className="font-semibold text-lg">Total:</span>
            <span className="text-red-600 font-bold text-xl">
              ₹{totalAmount}
            </span>
          </div>``

          {/* Place Order */}
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => navigate("/order", { state: { order: cart } })}
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
