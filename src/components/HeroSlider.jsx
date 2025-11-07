import React, { useState, useEffect } from "react";
import pizza1 from "../assets/navbar/pizza1.jpg";
import pizza2 from "../assets/navbar/pizza2.jpg";
import pizza3 from "../assets/navbar/pizza3.jpg";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      title: "50% OFF Above ₹1000",
      category: "LIMITED TIME OFFER",
      image: pizza1,
    },
    {
      id: 2,
      title: "30% OFF On All Pizzas",
      category: "SPECIAL DISCOUNT",
      image: pizza2,
    },
    {
      id: 3,
      title: "New Arrivals",
      category: "TRY OUR LATEST MENU",
      image: pizza3,
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="relative w-full overflow-hidden h-screen">
      <div
        className="flex h-full transition-transform duration-[1000ms] ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-screen flex-shrink-0 relative"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-center px-16 z-10">
              <span className="text-yellow-400 text-sm uppercase tracking-widest mb-3">
                {slide.category}
              </span>

              <h1 className="text-white text-5xl md:text-6xl font-extrabold max-w-xl mb-8">
                {slide.title}
              </h1>

              <button className="group inline-flex items-center text-white font-semibold text-sm uppercase hover:text-yellow-400 transition">
                <span>Order Now</span>
                <div className="ml-4 w-12 h-px bg-white group-hover:bg-yellow-400"></div>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-yellow-400" : "bg-white/40"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
