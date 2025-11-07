// FoodGrid.jsx
import React from "react";

// Images import (replace with your actual images)
import box1 from "../assets/img/box1.png";
import box22 from "../assets/img/box22.png";
import box2 from "../assets/img/box2.png";
import box3 from "../assets/img/box3.png";
import box5 from "../assets/img/box5.png";
import box7 from "../assets/img/box7.png";
import box4 from "../assets/img/box4.png";
import box8 from "../assets/img/box8.png";
import box9 from "../assets/img/box9.png";

const foodItems = [
  { title: "Quickies", button: "Order Now", image: box1 },
  { title: "Bruschetta(Breads)", button: "Order Now", image: box22},
  { title: "Pizza", button: "Order Now", image: box2 },
  { title: "Pasta", button: "View Menu", image: box3 },
  { title: "Burgers", button: "View Menu", image: box5 },
  { title: "Salad", button: "View Menu", image: box7 },
  { title: "Beverages", button: "View Menu", image: box4 },
  { title: "Dessert", button: "View Menu", image: box8 },
  { title: "Combo Offer", button: "View Menu", image: box9 },
];

const FoodGrid = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-center text-2xl text-black">Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5  ">
        {foodItems.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg "
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full  h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-center text-white font-bold text-center p-4 ">
              <h2 className="text-xl md:text-2xl">{item.title}</h2>
              <button className="mt-2 px-4 py-2 border-2 border-white rounded hover:bg-white hover:text-black transition">
                {item.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGrid;
