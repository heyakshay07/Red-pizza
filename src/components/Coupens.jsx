import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Replace these with your images
import coup1 from "../assets/coupens/coup1.jpg";
import coup2 from "../assets/coupens/coup2.jpg";
import coup3 from "../assets/coupens/coup3.jpg";

const Coupens = () => {
  const sliderImages = [coup1, coup2, coup3];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === sliderImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-10">

      {/* ✅ Slider Container */}
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {sliderImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="coupon banner"
              className="w-full h-64 md:h-72 lg:h-80 object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* ✅ Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:bg-gray-100 p-2 rounded-full"
      >
        <ChevronLeft size={24} className="text-red-600" />
      </button>

      {/* ✅ Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 p-2 rounded-full shadow-lg"
      >
        <ChevronRight size={24} className="text-white" />
      </button>

      {/* ✅ Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-3">
        {sliderImages.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              current === index ? "bg-red-600" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Coupens;
