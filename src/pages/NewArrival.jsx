import React from "react";
import { motion } from "framer-motion";
import pizza1 from "../assets/navbar/pizza1.jpg"
import v1 from "../../src/assets/pizza/v1.png"
import v2 from "../../src/assets/pizza/v2.png"
import v3 from "../../src/assets/pizza/v3.png"
import v4 from "../../src/assets/pizza/v4.png"

// Sample pizza data with description
const pizzas = [
  {
    id: 1,
    name: "Margherita",
    price: "₹299",
    description: "Classic delight with 100% real mozzarella cheese.",
    image:v1,
  },
  {
    id: 2,
    name: "Pepperoni",
    price: "₹399",
    description: "Loaded with pepperoni slices and extra cheese.",
    image: v2,
  },
  {
    id: 3,
    name: "Veggie Delight",
    price: "₹349",
    description: "Fresh veggies with a perfect blend of cheese.",
    image: v3,
  },
  {
    id: 4,
    name: "Cheese Burst",
    price: "₹429",
    description: "Cheesy explosion in every bite for cheese lovers.",
    image: v4,
  },
];

const NewArrivals = () => {
  return (
    
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-red-50 p-4 md:p-8">
      {/* Page Banner */}
      <div className="relative w-full h-[250px] md:h-[400px] mb-10">
        <img
          src={pizza1} // Replace with your banner image
          alt="Pizza Banner"
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center animate-pulse">
            🍕 New Arrivals 🍕
          </h1>
        </div>
      </div>

      {/* Pizza Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pizzas.map((pizza, index) => (
          <motion.div
            key={pizza.id}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <img
              src={pizza.image}
              alt={pizza.name}
              className="w-60 h-auto object-contain mb-4"
            />
            <h2 className="text-xl font-semibold text-red-600 mb-2">
              {pizza.name}
            </h2>
            <p className="text-gray-600 text-sm mb-2">{pizza.description}</p>
            <p className="text-red-800 font-bold text-lg">{pizza.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
