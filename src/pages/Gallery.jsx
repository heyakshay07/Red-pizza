import React from "react";
import img from "../../src/assets/navbar/pizza1.jpg";
import gallery1 from "../assets/gallery/gallery1.jpeg";
import gallery2 from "../assets/gallery/gallery2.jpg";
import gallery3 from "../assets/gallery/gallery3.jpg";
import gallery4 from "../assets/gallery/gallery4.jpg";
import gallery5 from "../assets/gallery/gallery5.jpeg";
import gallery6 from "../assets/gallery/gallery6.jpg";


const Gallery = () => {
  const images = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    "https://uspizza.in/wp-content/uploads/2023/12/5-2.jpg",
    "https://uspizza.in/wp-content/uploads/2023/12/5-2.jpg",
    "https://uspizza.in/wp-content/uploads/2023/12/6-1.jpg",
    "https://uspizza.in/wp-content/uploads/2023/12/7-1.jpg",
    "https://uspizza.in/wp-content/uploads/2023/12/8-1.jpg",
    "https://uspizza.in/wp-content/uploads/2023/12/5-2.jpg",
  ];

  return (
    <div className="bg-[#e03a3c] min-h-screen py-10 px-6">
            <div className="relative w-full h-[250px] md:h-[400px] mb-10">
              <img
                src={img}
                alt="pizza"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
                  Gallery
                </h1>
              </div>
            </div>
      <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-10 mt-14">
        Our Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg border-2 border-white hover:scale-105 transform transition duration-300"
          >
            <img
              src={src}
              alt={`gallery-${index}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
