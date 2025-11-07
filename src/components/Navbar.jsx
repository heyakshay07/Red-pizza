import React, { useState, useEffect } from "react";

// ✅ Import your assets
import pizza1 from "../assets/navbar/pizza1.jpg";
import pizza2 from "../assets/navbar/pizza2.jpg";
import pizza3 from "../assets/navbar/pizza3.jpg";
import logo from "../assets/navbar/logo.jpg";

const Navbar = () => {
  // ✅ Slides Array WITH CUSTOM TEXT
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
  const [scrolled, setScrolled] = useState(false);

  // ✅ Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      slideNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  const slideNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // ✅ Navbar scroll change
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden h-screen">
      {/* ✅ NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
          ${scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto object-contain cursor-pointer"
            />
          </div>

          <div className="hidden md:flex space-x-8 text-white font-semibold text-sm tracking-wide">
            <a href="/" className="hover:text-yellow-400 transition">
              Home
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              About Us
            </a>
            <a href="/Menu" className="hover:text-yellow-400 transition">
              Menu
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              Blog
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              Contact Us
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              New Arrival
            </a>

            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-white">
              Order Now
            </button>
          </div>

          <button className="md:hidden text-white text-xl">☰</button>
        </div>
      </nav>

      {/* ✅ SLIDER */}
      <div
        className="flex h-full transition-transform duration-[1000ms] ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 h-screen relative"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* ✅ Offer Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 z-10">
              {/* Category Text */}
              <span className="text-yellow-400 text-sm uppercase tracking-widest mb-3">
                {slide.category}
              </span>

              {/* Big Offer or Title */}
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-xl leading-tight mb-8 drop-shadow-lg">
                {slide.title}
              </h1>

              {/* Button */}
              <button className="group inline-flex items-center text-white font-semibold text-sm md:text-base uppercase tracking-wide hover:text-yellow-400 transition">
                <span>Order Now</span>
                <div className="ml-4 w-12 h-px bg-white group-hover:bg-yellow-400"></div>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Bottom Indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3 z-20">
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

export default Navbar;
