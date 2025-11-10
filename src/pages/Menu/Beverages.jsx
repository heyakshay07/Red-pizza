import React, { useState } from "react";

// ✅ Import beverage images
import coldCoffee from "../../assets/beverages/cold-coffee.jpeg";
import softDrink from "../../assets/beverages/soft-drink.jpeg";
import soilDrink from "../../assets/beverages/soft-drinkk.jpeg";
import water from "../../assets/beverages/water.jpeg";
import mocktail from "../../assets/beverages/mocktail.jpeg";
import milkShake from "../../assets/beverages/milkshake.jpeg";
import mojito from "../../assets/beverages/mojito.jpeg";
import iceTea from "../../assets/beverages/icetea.jpeg";

const beverageItems = [
  {
    id: 1,
    name: "Cold Coffee",
    priceSmall: 89,
    sizes: ["S"],
    desc: "Chilled creamy cold coffee served with ice.",
    img: coldCoffee,
  },
  {
    id: 2,
    name: "Soft Drink",
    priceSmall: 25,
    priceMedium: 50,
    sizes: ["S", "M"],
    desc: "Refreshing carbonated soft drink.",
    img: softDrink,
  },
  {
    id: 3,
    name: "Soil Drink Marany",
    priceSmall: 15,
    priceMedium: 25,
    sizes: ["S", "M"],
    desc: "Local favorite refreshing drink.",
    img: soilDrink,
  },
  {
    id: 4,
    name: "Water",
    priceSmall: 10,
    priceMedium: 20,
    sizes: ["S", "M"],
    desc: "Pure mineral water bottle.",
    img: water,
  },
  {
    id: 5,
    name: "Mocktail",
    priceSmall: 40,
    sizes: ["S"],
    desc: "Fruity, refreshing mocktail blend.",
    img: mocktail,
  },
  {
    id: 6,
    name: "Milk Shake",
    priceSmall: 89,
    sizes: ["S"],
    desc: "Thick milkshake with rich flavor.",
    img: milkShake,
  },
  {
    id: 7,
    name: "Mojito",
    priceSmall: 89,
    sizes: ["S"],
    desc: "Cool minty mojito with soda and lime.",
    img: mojito,
  },
  {
    id: 8,
    name: "Ice Tea",
    priceSmall: 59,
    sizes: ["S"],
    desc: "Sweet and chilled iced tea.",
    img: iceTea,
  },
];

export default function Beverages() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [size, setSize] = useState("S");
  const [quantity, setQuantity] = useState(1);

  // ✅ Add to cart (localStorage)
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const basePrice =
      size === "M" ? selectedItem.priceMedium || selectedItem.priceSmall : selectedItem.priceSmall;

    const newItem = {
      id: `${selectedItem.id}-${size}`,
      name: selectedItem.name,
      size,
      price: basePrice,
      quantity,
      totalPrice: basePrice * quantity,
      img: selectedItem.img, // ✅ Store image in cart too
    };

    const index = existingCart.findIndex((i) => i.id === newItem.id);
    if (index >= 0) {
      existingCart[index].quantity += quantity;
      existingCart[index].totalPrice =
        existingCart[index].price * existingCart[index].quantity;
    } else {
      existingCart.push(newItem);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert(`✅ ${selectedItem.name} (${size}) added to cart!`);
    setSelectedItem(null);
    setQuantity(1);
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-10 mt-16">
          <h1 className="text-3xl font-extrabold text-gray-800">Beverages</h1>
          <p className="text-gray-600 mt-2">
            Cool and refreshing drinks to energize your day!
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {beverageItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-5 flex flex-col justify-between"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-contain mb-4 rounded"
              />
              <div>
                <h2 className="font-bold text-lg text-gray-800 mb-1">
                  {item.name}
                </h2>
                <p className="text-gray-500 text-sm mb-3">{item.desc}</p>
                <div className="flex gap-4 mb-3">
                  {item.sizes.includes("S") && (
                    <span className="text-gray-700 font-medium">
                      S - ₹{item.priceSmall}
                    </span>
                  )}
                  {item.sizes.includes("M") && item.priceMedium && (
                    <span className="text-gray-700 font-medium">
                      M - ₹{item.priceMedium}
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedItem(item);
                  setSize("S");
                  setQuantity(1);
                }}
                className="mt-auto bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                + Add
              </button>
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
          {/* Background Blur */}
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
              className="w-full h-48 object-contain rounded mb-3"
            />

            <h2 className="text-xl font-bold mb-2">{selectedItem.name}</h2>
            <p className="text-gray-500 mb-4">{selectedItem.desc}</p>

            {/* Size Selector */}
            <div className="flex gap-4 mb-4">
              {selectedItem.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-4 py-1 rounded-full border ${
                    size === s
                      ? "bg-red-500 text-white border-red-500"
                      : "border-gray-300"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Quantity & Price */}
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
                  ₹
                  {(size === "M"
                    ? selectedItem.priceMedium || selectedItem.priceSmall
                    : selectedItem.priceSmall) * quantity}
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
