import React, { useState } from "react";

import vegIcon from "../assets/quickies/veg.png";
import nonVegIcon from "../assets/quickies/NV.png";

import fries from "../assets/quickies/fries.jpg";
import friesPeri from "../assets/quickies/friesPeri.jpg";
import popcorn from "../assets/quickies/popcorn.jpg";
import nuggets from "../assets/quickies/nuggets.jpg";
import cheeseBalls from "../assets/quickies/cheeseBalls.jpg";
import chickenFinger from "../assets/quickies/chickenFinger.jpg";
import kababRoll from "../assets/quickies/kababRoll.jpg";
import kabab from "../assets/quickies/kabab.jpg";

import breadVeg from "../assets/bruschetta/vegBread.jpeg";
import breadNonVeg from "../assets/bruschetta/nonvegBread.jpeg";
import breadCheese from "../assets/bruschetta/cheeseBread.jpeg";

import veg1 from "../assets/pizza/V1.png";
import veg2 from "../assets/pizza/v2.png";
import veg3 from "../assets/pizza/v3.png";
import veg4 from "../assets/pizza/v4.png";
import veg5 from "../assets/pizza/v5.png";
import veg6 from "../assets/pizza/v6.jpeg";
import veg7 from "../assets/pizza/v7.jpeg";
import veg8 from "../assets/pizza/v8.jpeg";
import veg9 from "../assets/pizza/v9.jpeg";
import veg from "../assets/pizza/vegPizza.jpeg";
import nonvegPizza from "../assets/pizza/nonvegPizza.jpeg";
import jain from "../assets/pizza/jain.jpeg";

import pastaVegRed from "../assets/pasta/p.png";
import pastaVegWhite from "../assets/pasta/p2.png";
import pastaNonVegRed from "../assets/pasta/p3.png";
import pastaNonVegWhite from "../assets/pasta/p4.png";

import vegBurger from "../assets/burger/b1.png";
import nonVegBurger from "../assets/burger/b2.png";

import mixVeg from "../assets/salad/s1.png";
import vegHawaiian from "../assets/salad/s2.png";
import chickenHawaiian from "../assets/salad/s3.png";
import mixChicken from "../assets/salad/s4.png";

import coldCoffee from "../assets/beverages/cold-coffee.jpeg";
import softDrink from "../assets/beverages/soft-drink.jpeg";
import soilDrink from "../assets/beverages/soft-drinkk.jpeg";
import water from "../assets/beverages/water.jpeg";
import mocktail from "../assets/beverages/mocktail.jpeg";
import milkShake from "../assets/beverages/milkshake.jpeg";
import mojito from "../assets/beverages/mojito.jpeg";
import iceTea from "../assets/beverages/icetea.jpeg";

import choco from "../assets/dessert/c1.png";
import lava from "../assets/dessert/c2.png";


import comboVegRegular from "../assets/combo/co2.png";
import comboVegMedium from "../assets/combo/co2.png";
import comboNonVegMedium from "../assets/combo/co3.png";
import comboVegLarge from "../assets/combo/co5.png";
import comboNonVegLarge from "../assets/combo/co4.png";

import img from "../assets/navbar/pizza1.jpg";

const MenuPage = () => {
  const [filter, setFilter] = useState("all");

  // Flatten all menu items into a single array
  const menuItems = [
    // Quickies
    { id: "fries-99", name: "French Fries", price: 99, img: fries, type: "veg" },
    { id: "fries-peri-119", name: "French Fries — Peri Peri", price: 119, img: friesPeri, type: "veg" },
    { id: "popcorn-139", name: "Chicken Popcorn", price: 139, img: popcorn, type: "nonveg" },
    { id: "nuggets-139", name: "Chicken Nuggets", price: 139, img: nuggets, type: "nonveg" },
    { id: "cheeseballs-139", name: "Red Cheese Balls", price: 139, img: cheeseBalls, type: "veg" },
    { id: "finger-149", name: "Red Chicken Finger", price: 149, img: chickenFinger, type: "nonveg" },
    { id: "kabab-roll-99", name: "Red Chicken Kabab Roll (2 pcs)", price: 99, img: kababRoll, type: "nonveg" },
    { id: "kabab-119", name: "Red Chicken Kabab (5 pcs)", price: 119, img: kabab, type: "nonveg" },

    // Bruschetta
    { id: "bread-1", name: "Veg Garlic Bread", price: 99, img: breadVeg, type: "veg" },
    { id: "bread-2", name: "Non-Veg Garlic Bread", price: 125, img: breadNonVeg, type: "nonveg" },
    { id: "bread-3", name: "Garlic Bread With Cheese", price: 89, img: breadCheese, type: "veg" },

    // Pizza (flattened)
    { name: "Margherita", desc: "Fresh mozzarella with basil", price: 139, type: "veg", img: veg1 },
    { name: "Simple Veg", desc: "Onion & Tomato", price: 139, type: "veg", img: veg2 },
    { name: "Garlic Pizza", desc: "Garlic & Cheese", price: 139, type: "veg", img: veg3 },
    { name: "Veggie Crunch", desc: "Diced onion, Bell peppers & Mozzarella", price: 139, type: "veg", img: veg4 },
    { name: "Corn Treat", desc: "Mozzarella & Golden Corn", price: 139, type: "veg", img: veg5 },
    { name: "Veggie Mix", desc: "Onion, Capsicum & Tomato", price: 179, type: "veg", img: veg6 },
    { name: "Mushroom Lovers", desc: "Mushroom, Garlic & Green Chili", price: 179, type: "veg", img: veg7 },
    { name: "Corn Exotica", desc: "American Corn, Red Pepper & Cpasicum", price: 179, type: "veg", img: veg8 },
    { name: "Spicy Veg", desc: "Fried Onion & Tomato With Special Spices", price: 179, type: "veg", img: veg9 },

    // Pasta
    { id: "pasta-1", name: "Veg Pasta Red Sauce", price: 215, img: pastaVegRed, type: "veg" },
    { id: "pasta-2", name: "Veg Pasta White Sauce", price: 225, img: pastaVegWhite, type: "veg" },
    { id: "pasta-3", name: "Non-Veg Pasta Red Sauce", price: 225, img: pastaNonVegRed, type: "nonveg" },
    { id: "pasta-4", name: "Non-Veg Pasta White Sauce", price: 225, img: pastaNonVegWhite, type: "nonveg" },

    // Burgers
    { id: "burger-1", name: "Veg Burger", price: 80, img: vegBurger, type: "veg" },
    { id: "burger-2", name: "Non-Veg Burger", price: 100, img: nonVegBurger, type: "nonveg" },

    // Salads
    { id: "salad-1", name: "Mix Veg Salad", desc: "All mixed veggies tossed in sauce & served with icy lettuce.", price: 250, img: mixVeg, type: "veg" },
    { id: "salad-2", name: "Veg Hawaiian Salad", desc: "All mixed veggies & pineapple tossed in sauce & served with juicy lettuce.", price: 250, img: vegHawaiian, type: "veg" },
    { id: "salad-3", name: "Hawaiian Chicken Salad", desc: "Chicken, barbequed pineapple pieces, served with lettuce.", price: 299, img: chickenHawaiian, type: "nonveg" },
    { id: "salad-4", name: "Mix Chicken Salad", desc: "Chicken cubes marinated & veggies tossed to perfection served with lettuce.", price: 299, img: mixChicken, type: "nonveg" },

    // Beverages
    { id: 1, name: "Cold Coffee", priceSmall: 89, sizes: ["S"], desc: "Chilled creamy cold coffee served with ice.", img: coldCoffee, type: "veg" },
    { id: 2, name: "Soft Drink", priceSmall: 25, priceMedium: 50, sizes: ["S", "M"], desc: "Refreshing carbonated soft drink.", img: softDrink, type: "veg" },
    { id: 3, name: "Soil Drink Marany", priceSmall: 15, priceMedium: 25, sizes: ["S", "M"], desc: "Local favorite refreshing drink.", img: soilDrink, type: "veg" },
    { id: 4, name: "Water", priceSmall: 10, priceMedium: 20, sizes: ["S", "M"], desc: "Pure mineral water bottle.", img: water, type: "veg" },
    { id: 5, name: "Mocktail", priceSmall: 40, sizes: ["S"], desc: "Fruity, refreshing mocktail blend.", img: mocktail, type: "veg" },
    { id: 6, name: "Milk Shake", priceSmall: 89, sizes: ["S"], desc: "Thick milkshake with rich flavor.", img: milkShake, type: "veg" },
    { id: 7, name: "Mojito", priceSmall: 89, sizes: ["S"], desc: "Cool minty mojito with soda and lime.", img: mojito, type: "veg" },
    { id: 8, name: "Ice Tea", priceSmall: 59, sizes: ["S"], desc: "Sweet and chilled iced tea.", img: iceTea, type: "veg" },

    {
        id: 1,
        name: "Chocolate Brownie",
        desc: "Rich and creamy chocolate dessert to satisfy your sweet cravings.",
        price: 69,
        img: choco,
        type: "veg",
      },
      {
        id: 2,
        name: "Choco Lava",
        desc: "Warm, gooey choco lava cake with molten chocolate center.",
        price: 99,
        img: lava,
        type: "veg",
      },


      {
          id: 1,
          name: "Regular Pizza Combo (V1 & NV1)",
          desc: "Regular Pizza + Fries + Coke (Select Regular pizza from V1 & NV1 categories)",
          price: 299,
          img: comboVegRegular,
          type: "veg",
        },
        {
          id: 2,
          name: "Medium Pizza Combo (V1)",
          desc: "Medium Pizza + Fries + Coke (Select Medium V1 pizza)",
          price: 410,
          img: comboVegMedium,
          type: "veg",
        },
        {
          id: 3,
          name: "Medium Pizza Combo (NV1)",
          desc: "Medium Pizza + Fries + Coke (Select Medium NV1 pizza)",
          price: 505,
          img: comboNonVegMedium,
          type: "nonveg",
        },
        {
          id: 4,
          name: "Large Pizza Combo (V1)",
          desc: "Large Pizza + Garlic Bread + Fries + Coke (Select Large V1 pizza)",
          price: 570,
          img: comboVegLarge,
          type: "veg",
        },
        {
          id: 5,
          name: "Large Pizza Combo (NV1)",
          desc: "Large Pizza + Garlic Bread + Fries + Coke (Select Large NV1 pizza)",
          price: 780,
          img: comboNonVegLarge,
          type: "nonveg",
        },
  ];

  const filteredItems = menuItems.filter(item => filter === "all" ? true : item.type === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Hero Section */}
      <div className="relative w-full h-[250px] md:h-[400px] mb-10">
        <img src={img} alt="pizza" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Menu Page</h1>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-start items-center gap-4 mb-10">
        <button
          onClick={() => setFilter("all")}
          className={`px-6 py-2 rounded-full font-semibold ${filter === "all" ? "bg-red-500 text-white" : "bg-gray-200"}`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("veg")}
          className={`px-6 py-2 rounded-full flex items-center gap-2 font-semibold ${filter === "veg" ? "bg-green-500 text-white" : "bg-gray-200"}`}
        >
          <img src={vegIcon} alt="veg" className="w-5 h-5" /> Veg
        </button>

        <button
          onClick={() => setFilter("nonveg")}
          className={`px-6 py-2 rounded-full flex items-center gap-2 font-semibold ${filter === "nonveg" ? "bg-red-600 text-white" : "bg-gray-200"}`}
        >
          <img src={nonVegIcon} alt="non-veg" className="w-5 h-5" /> Non-Veg
        </button>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
          <div key={item.id || index} className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                {item.type && <img src={item.type === "veg" ? vegIcon : nonVegIcon} alt={item.type} className="w-5 h-5" />}
              </div>
              {item.desc && <p className="text-gray-500 text-sm mb-3">{item.desc}</p>}
              {(item.price || item.priceSmall) && (
  <div className="flex justify-between items-center">
    <span className="text-lg font-bold text-red-600">
      ₹{item.price || item.priceSmall}
    </span>
    <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">
      + Add
    </button>
  </div>
)}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
