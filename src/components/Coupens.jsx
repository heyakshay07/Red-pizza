import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import coup1 from "../assets/coupens/coup1.jpg";
import coup2 from "../assets/coupens/coup2.jpg";
import coup3 from "../assets/coupens/coup3.jpg";
import coup4 from "../assets/coupens/coup4.jpg";
import coup5 from "../assets/coupens/coup5.jpg";

const Coupens = () => {
  const cards = [
    { id: 1, title: "Margherita Pizza", price: "₹299", discount: "20% OFF", img: coup1 },
    { id: 2, title: "Farmhouse Pizza", price: "₹399", discount: "15% OFF", img: coup2 },
    { id: 3, title: "Cheese Burst Pizza", price: "₹449", discount: "25% OFF", img: coup3 },
    { id: 4, title: "Spicy Paneer Pizza", price: "₹349", discount: "10% OFF", img: coup4 },
    { id: 5, title: "Peri Peri Pizza", price: "₹299", discount: "18% OFF", img: coup5 },
  ];

  const [current, setCurrent] = useState(0);

  const cardsPerView = 4; // Show 4 cards in desktop

  const nextSlide = () => {
    if (current < cards.length - cardsPerView) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-12">

      <h2 className="text-3xl font-bold mb-8 text-center">Popular Pizzas</h2>

      {/* ✅ Card Slider Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${current * 25}%)`, // 25% because 4 cards = 100% / 4
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 flex-shrink-0"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">

                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-5">
                  <h3 className="text-lg font-semibold">{card.title}</h3>

                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xl font-bold text-red-600">{card.price}</span>
                    <span className="text-sm text-green-600 font-semibold bg-green-100 px-2 py-1 rounded">
                      {card.discount}
                    </span>
                  </div>

                  <button className="mt-5 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition">
                    Order Now
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Left Arrow */}
      {current > 0 && (
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:bg-gray-100 p-2 rounded-full"
        >
          <ChevronLeft size={24} className="text-red-600" />
        </button>
      )}

      {/* ✅ Right Arrow */}
      {current < cards.length - cardsPerView && (
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 p-2 rounded-full shadow-lg"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      )}
    </div>
  );
};

export default Coupens;
