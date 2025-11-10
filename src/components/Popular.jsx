import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import coup1 from "../assets/coupens/coup1.jpg";
import coup2 from "../assets/coupens/coup2.jpg";
import coup3 from "../assets/coupens/coup3.jpg";
import coup4 from "../assets/coupens/coup4.jpg";
import coup5 from "../assets/coupens/coup5.jpg";

const Popular = () => {
  const cards = [
    { id: 1, title: "Margherita Pizza", price: "₹299", discount: "20% OFF", img: coup1 },
    { id: 2, title: "Farmhouse Pizza", price: "₹399", discount: "15% OFF", img: coup2 },
    { id: 3, title: "Cheese Burst Pizza", price: "₹449", discount: "25% OFF", img: coup3 },
    { id: 4, title: "Spicy Paneer Pizza", price: "₹349", discount: "10% OFF", img: coup4 },
    { id: 5, title: "Peri Peri Pizza", price: "₹299", discount: "18% OFF", img: coup5 },
  ];

  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // ✅ Dynamic cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 768) setCardsPerView(2);
      else if (window.innerWidth < 1024) setCardsPerView(3);
      else setCardsPerView(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (current < cards.length - cardsPerView) setCurrent(current + 1);
  };
  const prevSlide = () => {
    if (current > 0) setCurrent(current - 1);
  };

  // ✅ Swipe support
  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const handleTouchEnd = () => {
    const delta = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (delta > threshold) nextSlide();
    else if (delta < -threshold) prevSlide();
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-12 bg-[#f7f1e9] rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center sm:text-left">Popular Pizzas</h2>

      {/* ✅ Slider Container */}
      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(current * 100) / cardsPerView}%)`,
          }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-3 flex-shrink-0"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col h-full">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-44 sm:h-52 md:h-56 object-cover"
                />

                <div className="p-3 sm:p-4 flex flex-col flex-grow">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                    {card.title}
                  </h3>

                  <div className="flex justify-between items-center mt-2">
                    <span className="text-base sm:text-lg font-bold text-red-600">{card.price}</span>
                    <span className="text-xs sm:text-sm text-green-600 font-semibold bg-green-100 px-2 py-0.5 rounded">
                      {card.discount}
                    </span>
                  </div>

                  {/* ✅ Fully Responsive Auto-sized Button */}
                  <div className="mt-auto flex justify-center">
                    <button
                      className="mt-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition active:scale-95 
                                 text-xs sm:text-sm md:text-base 
                                 px-3 sm:px-4 md:px-5 
                                 py-1 sm:py-1.5 md:py-2"
                    >
                      Order Online 
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Arrows */}
      {current > 0 && (
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:bg-gray-100 p-2 rounded-full"
        >
          <ChevronLeft size={22} className="text-red-600" />
        </button>
      )}

      {current < cards.length - cardsPerView && (
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 p-2 rounded-full shadow-lg"
        >
          <ChevronRight size={22} className="text-white" />
        </button>
      )}
    </div>
  );
};

export default Popular;
