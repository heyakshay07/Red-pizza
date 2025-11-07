import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // import icons

const Coupens = () => {
  const images = [
    "/src/assets/offerse/of1.jpg",
    "/src/assets/offerse/of2.jpg",
    "/src/assets/offerse/of3.jpg",
    "/src/assets/offerse/of4.jpg",
    "/src/assets/offerse/of5.jpg",
    "/src/assets/offerse/of6.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w < 640) setItemsPerView(1);
      else setItemsPerView(2);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.clientWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [itemsPerView]);

  const maxIndex = Math.max(0, Math.ceil(images.length / itemsPerView) - 1);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [itemsPerView, maxIndex]);

  const handlePrev = () => setIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const translateX = -(index * containerWidth);

  return (
    <section className="relative w-full px-4 py-6">
      <h2 className="text-2xl font-semibold mb-4">Coupons & Offers</h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className={`absolute left-2 top-1/2 z-20 -translate-y-1/2 p-2 rounded-full shadow-lg bg-white/90 hover:bg-white
            ${index === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
        >
          <ChevronLeft size={24} />
        </button>

        {/* Visible Window */}
        <div ref={containerRef} className="overflow-hidden" style={{ width: "100%" }}>
          <div
            className="flex"
            style={{
              transform: `translateX(${translateX}px)`,
              transition: "transform 700ms cubic-bezier(.22,.9,.32,1)",
              willChange: "transform",
            }}
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="shrink-0"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="p-1">
                  <div className="bg-white rounded-md overflow-hidden shadow-md">
                    <img
                      src={src}
                      alt={`coupon-${i + 1}`}
                      className="w-full h-48 object-cover block"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next"
          className={`absolute right-2 top-1/2 z-20 -translate-y-1/2 p-2 rounded-full shadow-lg bg-white/90 hover:bg-white
            ${index === maxIndex ? "opacity-50 cursor-not-allowed" : "opacity-100"}`}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Coupens;
