import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Replace these with your images
import coup1 from "../assets/coupens/coup1.jpg";
import coup2 from "../assets/coupens/coup2.jpg";
import coup3 from "../assets/coupens/coup3.jpg";
import coup4 from "../assets/coupens/coup4.jpg";
import coup5 from "../assets/coupens/coup5.jpg";

const Coupens = () => {
  const cards = [
    {
      id: 1,
      title: "Margherita Pizza",
      price: "₹299",
      discount: "20% OFF",
      img: "https://images.unsplash.com/photo-1601924582971-d6617b59f5c3?q=80&w=800",
    },
    {
      id: 2,
      title: "Farmhouse Pizza",
      price: "₹399",
      discount: "15% OFF",
      img: "https://images.unsplash.com/photo-1548365328-5a1f91d79c57?q=80&w=800",
    },
    {
      id: 3,
      title: "Cheese Burst Pizza",
      price: "₹449",
      discount: "25% OFF",
      img: "https://images.unsplash.com/photo-1604382354936-07c7e98b8e2f?q=80&w=800",
    },
    {
      id: 4,
      title: "Spicy Paneer Pizza",
      price: "₹349",
      discount: "10% OFF",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800",
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Popular Pizzas</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* Image */}
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold">{card.title}</h3>

              {/* Price & Discount */}
              <div className="flex justify-between items-center mt-2">
                <span className="text-xl font-bold text-red-600">{card.price}</span>
                <span className="text-sm text-green-600 font-semibold bg-green-100 px-2 py-1 rounded">
                  {card.discount}
                </span>
              </div>

              {/* Button */}
              <button className="mt-5 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition">
                Order Now
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};
export default Coupens;
