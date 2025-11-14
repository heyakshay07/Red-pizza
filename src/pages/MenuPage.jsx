import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import QuickieModal from "../components/QuickieModal";
import FilterButtons from "../components/FilterButtons"; // ✅ Shared filter


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
import veg10 from "../assets/pizza/v10.webp";
import veg11 from "../assets/pizza/v11.webp";
import veg12 from "../assets/pizza/v12.webp";
import veg13 from "../assets/pizza/v13.webp";
import veg14 from "../assets/pizza/v14.webp";
import veg15 from "../assets/pizza/v15.webp";
import veg16 from "../assets/pizza/v16.webp";
import veg17 from "../assets/pizza/v17.webp";
import veg18 from "../assets/pizza/v18.webp";
import veg19 from "../assets/pizza/v19.webp";
import veg20 from "../assets/pizza/v20.webp";
import veg21 from "../assets/pizza/v21.webp";
import veg22 from "../assets/pizza/v22.webp";
import veg23 from "../assets/pizza/v23.webp";
import veg24 from "../assets/pizza/v24.webp";
import veg25 from "../assets/pizza/v25.webp";
import veg26 from "../assets/pizza/v26.webp";
import veg27 from "../assets/pizza/v27.webp";
import veg28 from "../assets/pizza/v28.webp";
import veg29 from "../assets/pizza/v29.webp";
import veg30 from "../assets/pizza/v30.webp";
import veg31 from "../assets/pizza/v31.webp";
import veg32 from "../assets/pizza/v32.webp";
import veg33 from "../assets/pizza/v33.webp";
import veg34 from "../assets/pizza/v34.webp";
import veg35 from "../assets/pizza/v35.webp";
import veg36 from "../assets/pizza/v36.webp";
import veg37 from "../assets/pizza/v37.webp";
import veg38 from "../assets/pizza/v38.webp";
import veg39 from "../assets/pizza/v39.webp";
import veg40 from "../assets/pizza/v40.webp";
import veg41 from "../assets/pizza/v41.webp";
import veg42 from "../assets/pizza/v42.webp";
import veg43 from "../assets/pizza/v43.webp";
import veg44 from "../assets/pizza/v44.webp";
import veg45 from "../assets/pizza/v45.webp";
import veg46 from "../assets/pizza/v46.webp";
import veg47 from "../assets/pizza/v47.webp";
import veg48 from "../assets/pizza/v48.webp";

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
  const [selectedItem, setSelectedItem] = useState(null); // ✅ For QuickieModal

  // ✅ Your menuItems remain untouched
  const menuItems = [
        // Quickies
    { id: "fries-99", name: "French Fries", price: 99, desc: "Crispy golden fries, lightly salted — classic & comforting.", img: fries, type: "veg" },
        { id: "fries-peri-119", name: "French Fries — Peri Peri", price: 119, desc: "Spicy peri-peri seasoning for a bold, zesty bite.", img: friesPeri, type: "veg" },
        { id: "popcorn-139", name: "Chicken Popcorn", price: 139, desc: "Tender bite-sized chicken pieces, fried to crunchy perfection.", img: popcorn, type: "nonveg" },
        { id: "nuggets-139", name: "Chicken Nuggets", price: 139, desc: "Classic golden nuggets — great with dips.", img: nuggets, type: "nonveg" },
        { id: "cheeseballs-139", name: "Red Cheese Balls", price: 139, desc: "Crispy shell, melty cheesy core — crowd favorite.", img: cheeseBalls, type: "veg" },
        { id: "finger-149", name: "Red Chicken Finger", price: 149, desc: "Spiced chicken fingers, crunchy outside, juicy inside.", img: chickenFinger, type: "nonveg" },
        { id: "kabab-roll-99", name: "Red Chicken Kabab Roll (2 pcs)", price: 99, desc: "Two rolls filled with spiced chicken kabab — quick & filling.", img: kababRoll, type: "nonveg" },
        { id: "kabab-119", name: "Red Chicken Kabab (5 pcs)", price: 119, desc: "Minced chicken, garlic, onion, tomato, spices — juicy kebabs.", img: kabab, type: "nonveg" },

    // Bruschetta
    {
        id: 1,
        name: "Veg Garlic Bread",
        desc: "Baked with love, cheese, and some spices to perfection",
        price: 99,
        img: breadVeg,
        type: "veg",
      },
      {
        id: 2,
        name: "Non-Veg Garlic Bread",
        desc: "Baked with love, Shredded Chicken topped with Mint sauce & a secret sauce to surprise you in every bite",
        price: 125,
        img: breadNonVeg,
        type: "nonveg",
      },
      {
        id: 3,
        name: "Garlic Bread With Cheese",
        desc: "Baked garlic bread topped with melted cheese",
        price: 89,
        img: breadCheese,
        type: "veg",
      },

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


      { name: "Paneer Tikka", desc: "Paneer, Capsicum & Red Pepper", price: 209, medium: 419, large: 549, type: "veg", img: veg10 },
      { name: "Veg Hawaiian", desc: "Pineapple, Jalapeno, American Corn & Capsicum", price: 209, medium: 419, large: 549, type: "veg", img: veg11 },
      { name: "Veggie Senorita", desc: "Jalapeno, American Corn, Tomato, Black Olives", price: 209, medium: 419, large: 549, type: "veg", img: veg12 },
      { name: "Jain Pizza", desc: "Mushroom, American Corn, Black Olives & Extra Cheese", price: 209, medium: 419, large: 549, type: "jain", img: veg13 },
      { name: "Classic Supreme", desc: "Paneer Schezwan, Capsicum, Baby Corn, Mushroom, Onion & Jalapeno", price: 209, medium: 419, large: 549, type: "veg", img: veg14 },
      { name: "Paneer & Onion", desc: "Fresh Paneer with Onion", price: 209, medium: 419, large: 549, type: "veg", img: veg15 },
      { name: "Spicy Paneer", desc: "Paneer, Onion, Capsicum & Green Chili cooked in Chinese style", price: 209, medium: 419, large: 549, type: "veg", img: veg16 },
      { name: "Golden Delight", desc: "Corn, Onion, Capsicum & Tomato", price: 209, medium: 419, large: 549, type: "veg" ,img: veg17},
      { name: "Red Passion", desc: "Onion, Red Pepper, Jalapeno & Green Chili", price: 209, medium: 419, large: 549, type: "veg",img: veg18 },
 
      {
        name: "Punjabi Retreat",
        desc: "Tandoori Paneer, American Corn, Tomato, Mushroom & Extra Cheese",
        price: 255,
        medium: 475,
        large: 625,
        type: "veg",
        img: veg19
      },
      {
        name: "Veg Extravaganza",
        desc: "Onion, Capsicum, Tomato, American Corn, Mushroom, Black Olives, Oregano, Basil & Extra Cheese",
        price: 255,
        medium: 475,
        large: 625,
        type: "veg",
        img: veg20
      },

      {
        name: "Spicy Chicken",
        desc: "Cheese & Spicy Chicken",
        price: 169,
        medium: 365,
        large: 499,
        type: "nonveg",
        img: veg21
      },
      {
        name: "Roast Chicken",
        desc: "Cheese, Roast Chicken & Onion",
        price: 169,
        medium: 365,
        large: 499,
        type: "nonveg",
        img: veg22
      },
      {
        name: "Half Roast Half Spicy",
        desc: "Spicy Chicken Chunks & Roasted Chunks with Cheese",
        price: 169,
        medium: 365,
        large: 499,
        type: "nonveg",
        img: veg23
      },
      {
        name: "Plain Chicken",
        desc: "Plain Chicken Chunks & Cheese",
        price: 169,
        medium: 365,
        large: 499,
        type: "nonveg",
        img: veg24
      },
      {
        name: "Chicken Tikka",
        desc: "Red Pepper added, and Cheese",
        price: 265,       // Regular 7"
        medium: 520,      // Medium 10"
        large: 625,       // Large 12"
        type: "nonveg",
        img: veg25
      },
      {
        name: "Chicken Salami",
        desc: "Onion, Garlic & Cheese",
        price: 265,
        medium: 520,
        large: 625,
        type: "nonveg",
        img: veg26
      },
      {
        name: "Chicken Schezwan",
        desc: "Spring Onion & Schezwan Chicken Chunks",
        price: 265,
        medium: 520,
        large: 625,
        type: "nonveg",
        img: veg27
      },
      {
        name: "Chicken Sausage",
        desc: "Cooked in Green Chilly Sauce with Onion & Capsicum",
        price: 265,
        medium: 520,
        large: 625,
        type: "nonveg",
        img: veg28
      },
      {
        name: "Barbecue Chicken",
        desc: "Mushroom, Barbecue Chicken Chunks & Onion",
        price: 299,      // Regular 7"
        medium: 549,     // Medium 10"
        large: 689,      // Large 12"
        type: "nonveg",
        img: veg29
      },
      {
        name: "Grocy Italian",
        desc: "Roast Chicken, Chicken Sausage, Garlic, Onion & Mushroom",
        price: 299,
        medium: 549,
        large: 689,
        type: "nonveg",
        img: veg30
      },
      {
        name: "Mix Chicken",
        desc: "Hot & Spicy Chicken, Chicken Tikka & Plain Chicken",
        price: 299,
        medium: 549,
        large: 689,
        type: "nonveg",
        img: veg31
      },
      {
        name: "RED Supreme",
        desc: "Spicy Chicken Sausage, Onion, Barbequed Chicken & Jalapeno",
        price: 299,
        medium: 549,
        large: 689,
        type: "nonveg",
        img: veg32
      },
      {
        name: "RED Hawaiian",
        desc: "Barbequed Chicken, Pineapple & Jalapeno",
        price: 299,
        medium: 549,
        large: 689,
        type: "nonveg",
        img: veg33
      },
      {
        name: "Chilly Chicken",
        desc: "Capsicum, Onion & Green Chilly cooked in Chinese style",
        price: 299,
        medium: 549,
        large: 689,
        type: "nonveg",
        img: veg34
      },
      {
        name: "Golden Chicken",
        desc: "American Corn, Chicken Tikka & Extra Cheese",
        price: 299,
        medium: 549,
        large: 689,
        type: "nonveg",
        img: veg35
      },
      {
        name: "RED Feast",
        desc: "Chicken Sausage & Barbecue Chunks",
        price: 299,
        medium: 549,
        large: 689,
        type: "nonveg",
        img: veg36
      },
      {
        name: "RED Dopiaza",
        desc: "Two types of Chicken & Fried Omelet",
        price: 299,
        medium: 549,
        large: 689,
        type: "nonveg",
        img: veg37
      },
      {
        name: "Butter Chicken",
        desc: "Rich buttery chicken with cheese",
        price: 299,
        medium: 549,
        large: 689,
        type: "nonveg",
        img: veg38
      },
      {
        name: "RED Lazania",
        desc: "Fried Chicken marinated with Special Sauce",
        price: 299,
        medium: 549,
        large: 689,
        type: "nonveg",
        img: veg39
      },
      {
        name: "American Delight",
        desc: "Chicken, American Corn, Tomato, Olives & Jalapeno",
        price: 299,
        medium: 549,
        large: 689,
        type: "nonveg",
        img: veg40
      },
      {
        name: "RED LE",
        desc: "Chicken Shreds, Cheese, Fried Chicken & Sausage",
        price: 299,
        medium: 549,
        large: 689,
        type: "nonveg",
        img: veg41
      },
      {
        name: "RED Mexican",
        desc: "Spicy Chicken, Salami, Jalapeno & Capsicum",
        price: 299,
        medium: 549,
        large: 689,
        type: "nonveg",
        img: veg42
      },
      {
        name: "RED Special",
        desc: "Plain Chicken, Sausage, Salami, Onion, Garlic & Extra Cheese",
        price: 345,      // Regular 7"
        medium: 629,     // Medium 10"
        large: 859,      // Large 12"
        type: "nonveg",
        img: veg43
      },
      {
        name: "RED Indigo",
        desc: "Schezwan Chicken, Black Olives, Onion, Capsicum & Extra Cheese",
        price: 345,
        medium: 629,
        large: 859,
        type: "nonveg",
        img: veg44
      },
      {
        name: "RED Hochste",
        desc: "Chicken Sausage, Chicken Salami, Chicken Kheema, Onion, Capsicum, Tomato & Extra Cheese",
        price: 345,
        medium: 629,
        large: 859,
        type: "nonveg",
        img: veg45
      },
      {
        name: "RED Preferita",
        desc: "Fried Chicken, Spicy Chicken, Chicken Sausage, Onion, Capsicum & Extra Cheese",
        price: 345,
        medium: 629,
        large: 859,
        type: "nonveg",
        img: veg46
      },
      {
        name: "RED Extravaganza",
        desc: "Chicken Tikka, Barbeque Chicken, Chicken Sausage, Onion, Black Olives, Mushroom & Extra Cheese",
        price: 345,
        medium: 629,
        large: 859,
        type: "nonveg",
        img: veg47
      },
        { name: "Jain Classic", desc: "Pure Jain pizza base", price: 159, type: "jain", img: veg48 },



    // Pasta
     {
        id: 1,
        name: "Veg Pasta Red Sauce",
        desc: "Red Sauce, Veggies, Tossed together",
        price: 215,
        img: pastaVegRed,
        type: "veg",
      },
      {
        id: 2,
        name: "Veg Pasta White Sauce",
        desc: "Made in White Sauce, Golden Corn, Capsicum & Cheese",
        price: 225,
        img: pastaVegWhite,
        type: "veg",
      },
      {
        id: 3,
        name: "Non-Veg Pasta Red Sauce",
        desc: "Shredded Chicken, Broccoli, Mushrooms tossed in Red Sauce",
        price: 225,
        img: pastaNonVegRed,
        type: "nonveg",
      },
      {
        id: 4,
        name: "Non-Veg Pasta White Sauce",
        desc: "Chicken Cubes cooked in White Cheesy Sauce, and Veggies",
        price: 225,
        img: pastaNonVegWhite,
        type: "nonveg",
      },

    // Burgers
    {
        id: 1,
        name: "Veg Burger",
        desc: "Crispy veg patty with lettuce, tomato & creamy mayo in a soft bun.",
        price: 80,
        img: vegBurger,
        type: "veg",
      },
      {
        id: 2,
        name: "Non-Veg Burger",
        desc: "Juicy chicken patty layered with lettuce, onions & special sauce.",
        price: 100,
        img: nonVegBurger,
        type: "nonveg",
      },

    // Salads
    { id: 1, name: "Mix Veg Salad", desc: "All mixed veggies...", price: 250, img: mixVeg, type: "veg" },
      { id: 2, name: "Veg Hawaiian Salad", desc: "Veggies & pineapple...", price: 250, img: vegHawaiian, type: "veg" },
      { id: 3, name: "Hawaiian Chicken Salad", desc: "Chicken & pineapple...", price: 299, img: chickenHawaiian, type: "nonveg" },
      { id: 4, name: "Mix Chicken Salad", desc: "Chicken cubes & veggies...", price: 299, img: mixChicken, type: "nonveg" },

    // Beverages
    { id: 1, name: "Cold Coffee", priceSmall: 89, sizes: ["S"], desc: "Chilled creamy cold coffee.", img: coldCoffee },
      { id: 2, name: "Soft Drink", priceSmall: 25, priceMedium: 50, sizes: ["S", "M"], desc: "Refreshing carbonated drink.", img: softDrink },
      { id: 3, name: "Soil Drink Marany", priceSmall: 15, priceMedium: 25, sizes: ["S", "M"], desc: "Local favorite refreshing drink.", img: soilDrink },
      { id: 4, name: "Water", priceSmall: 10, priceMedium: 20, sizes: ["S", "M"], desc: "Pure mineral water bottle.", img: water },
      { id: 5, name: "Mocktail", priceSmall: 40, sizes: ["S"], desc: "Fruity refreshing mocktail.", img: mocktail },
      { id: 6, name: "Milk Shake", priceSmall: 89, sizes: ["S"], desc: "Thick milkshake with rich flavor.", img: milkShake },
      { id: 7, name: "Mojito", priceSmall: 89, sizes: ["S"], desc: "Cool minty mojito with soda and lime.", img: mojito },
      { id: 8, name: "Ice Tea", priceSmall: 59, sizes: ["S"], desc: "Sweet and chilled iced tea.", img: iceTea },

    { id: 1, name: "Chocolate Brownie", desc: "Rich and creamy chocolate dessert.", price: 69, img: choco, type: "veg" },
      { id: 2, name: "Choco Lava", desc: "Warm gooey lava cake with molten chocolate.", price: 99, img: lava, type: "veg" },

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
  


  const location = useLocation();
const params = new URLSearchParams(location.search);
const searchTerm = params.get("search") || "";

  const filteredItems = menuItems.filter((item) => {
  const itemName = item.name.toLowerCase();
  const itemDesc = item.desc ? item.desc.toLowerCase() : "";
  const search = searchTerm.toLowerCase();

  const matchesFilter = filter === "all" ? true : item.type === filter;

  const matchesSearch =
    searchTerm.trim() === "" ||
    itemName.includes(search) ||
    itemDesc.includes(search);

  return matchesFilter && matchesSearch;
});


  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[250px] md:h-[400px] mb-10">
        <img src={img} alt="pizza" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Menu Page</h1>
        </div>
      </div>

      {/* ✅ Reusable FilterButtons */}
      <div className="mb-10 max-w-7xl mx-auto px-4 py-2">
        <FilterButtons filter={filter} setFilter={setFilter} />
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-10 pb-40">
        {filteredItems.map((item, index) => (
          <div
            key={item.id || index}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                {item.type && (
                  <img
                    src={item.type === "veg" ? vegIcon : nonVegIcon}
                    alt={item.type}
                    className="w-5 h-5"
                  />
                )}
              </div>
              {item.desc && <p className="text-gray-500 text-sm mb-3">{item.desc}</p>}

              {(item.price || item.priceSmall) && (
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-red-600">
                    ₹{item.price || item.priceSmall}
                  </span>
                  <button
                    onClick={() => setSelectedItem(item)} // ✅ Opens QuickieModal
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                  >
                    + Add
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ✅ QuickieModal Component */}
      {selectedItem && (
        <QuickieModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
};

export default MenuPage;





// import React, { useState, createContext, useContext } from "react";
// import { Trash2, X } from "lucide-react";
// import fries from "../assets/quickies/fries.jpg";
// import friesPeri from "../assets/quickies/friesPeri.jpg";
// import popcorn from "../assets/quickies/popcorn.jpg";
// import nuggets from "../assets/quickies/nuggets.jpg";
// import cheeseBalls from "../assets/quickies/cheeseBalls.jpg";
// import chickenFinger from "../assets/quickies/chickenFinger.jpg";
// import kababRoll from "../assets/quickies/kababRoll.jpg";
// import kabab from "../assets/quickies/kabab.jpg";

// import breadVeg from "../assets/bruschetta/vegBread.jpeg";
// import breadNonVeg from "../assets/bruschetta/nonvegBread.jpeg";
// import breadCheese from "../assets/bruschetta/cheeseBread.jpeg";

// import veg1 from "../assets/pizza/V1.png";
// import veg2 from "../assets/pizza/v2.png";
// import veg3 from "../assets/pizza/v3.png";
// import veg4 from "../assets/pizza/v4.png";
// import veg5 from "../assets/pizza/v5.png";
// import veg6 from "../assets/pizza/v6.jpeg";
// import veg7 from "../assets/pizza/v7.jpeg";
// import veg8 from "../assets/pizza/v8.jpeg";
// import veg9 from "../assets/pizza/v9.jpeg";
// import veg10 from "../assets/pizza/v10.webp";
// import veg11 from "../assets/pizza/v11.webp";
// import veg12 from "../assets/pizza/v12.webp";
// import veg13 from "../assets/pizza/v13.webp";
// import veg14 from "../assets/pizza/v14.webp";
// import veg15 from "../assets/pizza/v15.webp";
// import veg16 from "../assets/pizza/v16.webp";
// import veg17 from "../assets/pizza/v17.webp";
// import veg18 from "../assets/pizza/v18.webp";
// import veg19 from "../assets/pizza/v19.webp";
// import veg20 from "../assets/pizza/v20.webp";
// import veg21 from "../assets/pizza/v21.webp";
// import veg22 from "../assets/pizza/v22.webp";
// import veg23 from "../assets/pizza/v23.webp";
// import veg24 from "../assets/pizza/v24.webp";
// import veg25 from "../assets/pizza/v25.webp";
// import veg26 from "../assets/pizza/v26.webp";
// import veg27 from "../assets/pizza/v27.webp";
// import veg28 from "../assets/pizza/v28.webp";
// import veg29 from "../assets/pizza/v29.webp";
// import veg30 from "../assets/pizza/v30.webp";
// import veg31 from "../assets/pizza/v31.webp";
// import veg32 from "../assets/pizza/v32.webp";
// import veg33 from "../assets/pizza/v33.webp";
// import veg34 from "../assets/pizza/v34.webp";
// import veg35 from "../assets/pizza/v35.webp";
// import veg36 from "../assets/pizza/v36.webp";
// import veg37 from "../assets/pizza/v37.webp";
// import veg38 from "../assets/pizza/v38.webp";
// import veg39 from "../assets/pizza/v39.webp";
// import veg40 from "../assets/pizza/v40.webp";
// import veg41 from "../assets/pizza/v41.webp";
// import veg42 from "../assets/pizza/v42.webp";
// import veg43 from "../assets/pizza/v43.webp";
// import veg44 from "../assets/pizza/v44.webp";
// import veg45 from "../assets/pizza/v45.webp";
// import veg46 from "../assets/pizza/v46.webp";
// import veg47 from "../assets/pizza/v47.webp";
// import veg48 from "../assets/pizza/v48.webp";

// import pastaVegRed from "../assets/pasta/p.png";
// import pastaVegWhite from "../assets/pasta/p2.png";
// import pastaNonVegRed from "../assets/pasta/p3.png";
// import pastaNonVegWhite from "../assets/pasta/p4.png";

// import vegBurger from "../assets/burger/b1.png";
// import nonVegBurger from "../assets/burger/b2.png";

// import mixVeg from "../assets/salad/s1.png";
// import vegHawaiian from "../assets/salad/s2.png";
// import chickenHawaiian from "../assets/salad/s3.png";
// import mixChicken from "../assets/salad/s4.png";

// import coldCoffee from "../assets/beverages/cold-coffee.jpeg";
// import softDrink from "../assets/beverages/soft-drink.jpeg";
// import soilDrink from "../assets/beverages/soft-drinkk.jpeg";
// import water from "../assets/beverages/water.jpeg";
// import mocktail from "../assets/beverages/mocktail.jpeg";
// import milkShake from "../assets/beverages/milkshake.jpeg";
// import mojito from "../assets/beverages/mojito.jpeg";
// import iceTea from "../assets/beverages/icetea.jpeg";

// import choco from "../assets/dessert/c1.png";
// import lava from "../assets/dessert/c2.png";

// import comboVegRegular from "../assets/combo/co2.png";
// import comboVegMedium from "../assets/combo/co2.png";
// import comboNonVegMedium from "../assets/combo/co3.png";
// import comboVegLarge from "../assets/combo/co5.png";
// import comboNonVegLarge from "../assets/combo/co4.png";

// import img from "../../src/assets/navbar/pizza1.jpg";

// // Placeholder images - replace with your actual imports
// import vegIcon from "../assets/quickies/veg.png";
// import nonVegIcon from "../assets/quickies/NV.png";

// // Cart Context
// const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (item) => {
//     setCart((prev) => {
//       const existing = prev.find((i) => i.cartId === item.cartId);
//       if (existing) {
//         return prev.map((i) =>
//           i.cartId === item.cartId
//             ? { ...i, quantity: i.quantity + item.quantity }
//             : i
//         );
//       }
//       return [...prev, item];
//     });
//   };

//   const increaseQty = (cartId) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item.cartId === cartId ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const decreaseQty = (cartId) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item.cartId === cartId && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     );
//   };

//   const removeItem = (cartId) => {
//     setCart((prev) => prev.filter((item) => item.cartId !== cartId));
//   };

//   const totalAmount = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         increaseQty,
//         decreaseQty,
//         removeItem,
//         totalAmount,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// // QuickieModal Component
// const QuickieModal = ({ item, onClose }) => {
//   const { addToCart } = useContext(CartContext);

//   const vegToppings = [
//     "Onion",
//     "Tomato",
//     "Capsicum",
//     "Mushroom",
//     "Jalapeno",
//     "American Corn",
//     "Black Olives",
//     "Baby Corn",
//     "Garlic",
//     "Red Pepper",
//     "Pineapple",
//   ];
//   const nonVegToppings = [
//     "Spicy Chicken",
//     "Roast Chicken",
//     "Barbequed Chicken",
//     "Plain Chicken",
//     "Chicken Salami",
//     "Chicken Sausage",
//     "Chicken Schezwan",
//     "Chicken Tikka",
//     "Chicken Kheema",
//   ];

//   const baseOptions = [
//     {
//       name: "Regular Crispy",
//       sizes: [
//         { size: "R", price: 0 },
//         { size: "M", price: 0 },
//         { size: "L", price: 0 },
//       ],
//     },
//     {
//       name: "Thin And Crispy",
//       sizes: [
//         { size: "R", price: 0 },
//         { size: "M", price: 0 },
//         { size: "L", price: 0 },
//       ],
//     },
//     {
//       name: "Triple Cheesy Fantasy",
//       sizes: [
//         { size: "R", price: 120 },
//         { size: "M", price: 120 },
//         { size: "L", price: 120 },
//       ],
//     },
//   ];

//   const toppingPrices = {
//     veg: { R: 40, M: 40, L: 40 },
//     nonveg: { R: 60, M: 60, L: 60 },
//   };

//   const sizePrices = { R: 0, M: 120, L: 260, Maha: 870 };

//   const [selectedToppings, setSelectedToppings] = useState([]);
//   const [selectedBase, setSelectedBase] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [size, setSize] = useState("R");

//   const toggleTopping = (t) => {
//     setSelectedToppings((prev) =>
//       prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
//     );
//   };

//   const vegToppingPrice = toppingPrices.veg[size];
//   const nonVegToppingPrice = toppingPrices.nonveg[size];
//   const vegSelected = selectedToppings.filter((t) =>
//     vegToppings.includes(t)
//   ).length;
//   const nonVegSelected = selectedToppings.filter((t) =>
//     nonVegToppings.includes(t)
//   ).length;

//   const basePrice = item?.price || 139;
//   const sizePrice = sizePrices[size];
//   const toppingPrice =
//     vegSelected * vegToppingPrice + nonVegSelected * nonVegToppingPrice;
//   const baseExtra = selectedBase?.price || 0;
//   const totalPrice =
//     (basePrice + sizePrice + toppingPrice + baseExtra) * quantity;

//   const handleAddToCart = () => {
//     const cartItem = {
//       cartId: `${item?.id}-${size}-${Date.now()}`,
//       id: item?.id,
//       name: item?.name || "Pizza",
//       img: item?.img || "",
//       price: totalPrice / quantity,
//       size,
//       quantity,
//       toppings: selectedToppings,
//       base: selectedBase?.name,
//       totalPrice,
//     };
//     addToCart(cartItem);
//     onClose();
//   };

//   return (
//     <div
//       className="fixed inset-0 flex justify-center items-center z-50"
//       onClick={onClose}
//     >
//       <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

//       <div
//         className="relative bg-white w-full max-w-lg rounded-lg shadow-lg overflow-hidden z-10 flex flex-col"
//         style={{ maxHeight: "90vh" }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <style>{`
//           .scrollbar-hide::-webkit-scrollbar { display: none; }
//           .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
//         `}</style>

//         <div className="p-6 pb-4 border-b bg-white">
//           <button
//             onClick={onClose}
//             className="absolute top-3 right-4 text-3xl text-gray-600 hover:text-black"
//           >
//             ×
//           </button>
//           <h2 className="text-xl font-bold">{item?.name || "Pizza"}</h2>
//         </div>

//         <div className="flex-1 overflow-y-auto scrollbar-hide px-6 py-4">
//           <div className="mb-6">
//             <div className="flex justify-between items-center mb-4">
//               <p className="font-semibold text-gray-700">Size</p>
//               <p className="text-sm text-gray-500">1/1 selected</p>
//             </div>

//             <div className="space-y-3">
//               {["R", "M", "L", "Maha"].map((s) => (
//                 <label
//                   key={s}
//                   className={`flex justify-between items-center p-4 border rounded-lg cursor-pointer transition ${
//                     size === s
//                       ? "border-black bg-gray-50"
//                       : "border-gray-300 hover:border-gray-400"
//                   }`}
//                   onClick={() => setSize(s)}
//                 >
//                   <span className="text-gray-800">
//                     {s === "R"
//                       ? "Regular (17.78cm) [serve 1]"
//                       : s === "M"
//                       ? "Medium (25.40cm) [serve 2]"
//                       : s === "L"
//                       ? "Large (30.48cm) [serve 3]"
//                       : "Maha (50.80cm) [serve 8]"}
//                   </span>
//                   <div className="flex items-center gap-3">
//                     {sizePrices[s] > 0 && (
//                       <span className="text-gray-600">+ ₹{sizePrices[s]}</span>
//                     )}
//                     <div
//                       className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
//                         size === s ? "border-black" : "border-gray-300"
//                       }`}
//                     >
//                       {size === s && (
//                         <div className="w-3 h-3 rounded-full bg-black"></div>
//                       )}
//                     </div>
//                   </div>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="mb-6">
//             <p className="font-semibold text-gray-700 mb-4">Choice Of Base</p>
//             <div className="space-y-3">
//               {baseOptions.map((b) => {
//                 const sizeOption = b.sizes.find((s) => s.size === size);
//                 if (!sizeOption) return null;
//                 const isSelected = selectedBase?.name === `${b.name}-${size}`;

//                 return (
//                   <label
//                     key={b.name}
//                     className={`flex justify-between items-center p-4 border rounded-lg cursor-pointer transition ${
//                       isSelected
//                         ? "border-black bg-gray-50"
//                         : "border-gray-300 hover:border-gray-400"
//                     }`}
//                     onClick={() =>
//                       setSelectedBase({
//                         name: `${b.name}-${size}`,
//                         price: sizeOption.price,
//                       })
//                     }
//                   >
//                     <span className="text-gray-800">{b.name}</span>
//                     <div className="flex items-center gap-3">
//                       {sizeOption.price > 0 && (
//                         <span className="text-gray-600">
//                           + ₹{sizeOption.price}
//                         </span>
//                       )}
//                       <div
//                         className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
//                           isSelected ? "border-black" : "border-gray-300"
//                         }`}
//                       >
//                         {isSelected && (
//                           <div className="w-3 h-3 rounded-full bg-black"></div>
//                         )}
//                       </div>
//                     </div>
//                   </label>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="mb-6">
//             <p className="font-semibold text-gray-700 mb-4">Veg Toppings</p>
//             <div className="space-y-3">
//               {vegToppings.map((t) => (
//                 <label
//                   key={t}
//                   className="flex justify-between items-center p-4 border rounded-lg cursor-pointer hover:border-gray-400"
//                 >
//                   <span className="text-gray-800">{t}</span>
//                   <div className="flex items-center gap-3">
//                     <span className="text-gray-600">+ ₹{vegToppingPrice}</span>
//                     <input
//                       type="checkbox"
//                       checked={selectedToppings.includes(t)}
//                       onChange={() => toggleTopping(t)}
//                       className="w-5 h-5 accent-black cursor-pointer"
//                     />
//                   </div>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="mb-6">
//             <p className="font-semibold text-gray-700 mb-4">Non-Veg Toppings</p>
//             <div className="space-y-3">
//               {nonVegToppings.map((t) => (
//                 <label
//                   key={t}
//                   className="flex justify-between items-center p-4 border rounded-lg cursor-pointer hover:border-gray-400"
//                 >
//                   <span className="text-gray-800">{t}</span>
//                   <div className="flex items-center gap-3">
//                     <span className="text-gray-600">
//                       + ₹{nonVegToppingPrice}
//                     </span>
//                     <input
//                       type="checkbox"
//                       checked={selectedToppings.includes(t)}
//                       onChange={() => toggleTopping(t)}
//                       className="w-5 h-5 accent-black cursor-pointer"
//                     />
//                   </div>
//                 </label>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="p-6 border-t bg-white">
//           <div className="flex justify-between items-center">
//             <p className="text-2xl font-bold">₹{totalPrice}</p>
//             <button
//               onClick={handleAddToCart}
//               className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition uppercase"
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Cart Component
// const Cart = ({ onClose }) => {
//   const { cart, increaseQty, decreaseQty, removeItem, totalAmount } =
//     useContext(CartContext);

//   return (
//     <div className="fixed inset-0 flex justify-center items-center z-50">
//       <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
//       <div className="relative w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg z-10">
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
//         >
//           <X size={24} />
//         </button>

//         <h2 className="text-2xl font-bold mb-4 text-center">🛒 Your Cart</h2>

//         {cart.length === 0 ? (
//           <p className="text-center text-gray-500">Your cart is empty 😢</p>
//         ) : (
//           <div>
//             <ul className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
//               {cart.map((item) => (
//                 <li
//                   key={item.cartId}
//                   className="flex justify-between items-start border-b pb-4"
//                 >
//                   <div className="flex items-start gap-4 w-full">
//                     <img
//                       src={item.img || "https://via.placeholder.com/80"}
//                       alt={item.name}
//                       className="w-20 h-24 object-contain rounded"
//                     />
//                     <div className="flex-1 flex flex-col justify-between">
//                       <h3 className="font-semibold text-gray-800">
//                         {item.name}
//                       </h3>
//                       {item.size && (
//                         <p className="text-sm text-gray-500">
//                           Size: {item.size}
//                         </p>
//                       )}
//                       {item.toppings?.length > 0 && (
//                         <p className="text-sm text-gray-500">
//                           Toppings: {item.toppings.join(", ")}
//                         </p>
//                       )}
//                       {item.base && (
//                         <p className="text-sm text-gray-500">
//                           Base: {item.base}
//                         </p>
//                       )}
//                       <p className="text-gray-500 text-sm">₹{item.price}</p>

//                       <div className="flex items-center mt-2 border rounded-md overflow-hidden w-[140px]">
//                         <button
//                           onClick={() => decreaseQty(item.cartId)}
//                           className="px-3 py-1 text-xl hover:bg-gray-200"
//                         >
//                           –
//                         </button>
//                         <input
//                           type="number"
//                           readOnly
//                           value={item.quantity}
//                           className="w-16 h-8 text-center font-semibold outline-none border-l border-r"
//                         />
//                         <button
//                           onClick={() => increaseQty(item.cartId)}
//                           className="px-3 py-1 text-xl hover:bg-gray-200"
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex flex-col items-end ml-4">
//                     <span className="font-semibold text-red-600 text-lg">
//                       ₹{item.price * item.quantity}
//                     </span>
//                     <button
//                       onClick={() => removeItem(item.cartId)}
//                       className="mt-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded"
//                     >
//                       <Trash2 size={16} />
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-6 pt-4 flex justify-between items-center border-t">
//               <span className="font-semibold text-lg">Total:</span>
//               <span className="text-red-600 font-bold text-xl">
//                 ₹{totalAmount}
//               </span>
//             </div>

//             <button className="w-full mt-4 bg-red-500 text-white py-3 rounded hover:bg-red-600 transition">
//               Place Order
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Filter Buttons
// const FilterButtons = ({ filter, setFilter }) => {
//   return (
//     <div className="flex justify-center gap-4 flex-wrap">
//       {["all", "veg", "nonveg", "jain"].map((f) => (
//         <button
//           key={f}
//           onClick={() => setFilter(f)}
//           className={`px-6 py-2 rounded-full font-semibold transition ${
//             filter === f
//               ? "bg-red-500 text-white"
//               : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//           }`}
//         >
//           {f === "all"
//             ? "All"
//             : f === "veg"
//             ? "Veg"
//             : f === "nonveg"
//             ? "Non-Veg"
//             : "Jain"}
//         </button>
//       ))}
//     </div>
//   );
// };

// // Menu Page
// const MenuPage = () => {
//   const [filter, setFilter] = useState("all");
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [showCart, setShowCart] = useState(false);
//   const { cart } = useContext(CartContext);

//   // Flattened menu items with unique IDs
//   const menuItems = [
//     // Quickies
//     {
//       id: "fries-99",
//       name: "French Fries",
//       price: 99,
//       desc: "Crispy golden fries, lightly salted — classic & comforting.",
//       img: fries,
//       type: "veg",
//     },
//     {
//       id: "fries-peri-119",
//       name: "French Fries — Peri Peri",
//       price: 119,
//       desc: "Spicy peri-peri seasoning for a bold, zesty bite.",
//       img: friesPeri,
//       type: "veg",
//     },
//     {
//       id: "popcorn-139",
//       name: "Chicken Popcorn",
//       price: 139,
//       desc: "Tender bite-sized chicken pieces, fried to crunchy perfection.",
//       img: popcorn,
//       type: "nonveg",
//     },
//     {
//       id: "nuggets-139",
//       name: "Chicken Nuggets",
//       price: 139,
//       desc: "Classic golden nuggets — great with dips.",
//       img: nuggets,
//       type: "nonveg",
//     },
//     {
//       id: "cheeseballs-139",
//       name: "Red Cheese Balls",
//       price: 139,
//       desc: "Crispy shell, melty cheesy core — crowd favorite.",
//       img: cheeseBalls,
//       type: "veg",
//     },
//     {
//       id: "finger-149",
//       name: "Red Chicken Finger",
//       price: 149,
//       desc: "Spiced chicken fingers, crunchy outside, juicy inside.",
//       img: chickenFinger,
//       type: "nonveg",
//     },
//     {
//       id: "kabab-roll-99",
//       name: "Red Chicken Kabab Roll (2 pcs)",
//       price: 99,
//       desc: "Two rolls filled with spiced chicken kabab — quick & filling.",
//       img: kababRoll,
//       type: "nonveg",
//     },
//     {
//       id: "kabab-119",
//       name: "Red Chicken Kabab (5 pcs)",
//       price: 119,
//       desc: "Minced chicken, garlic, onion, tomato, spices — juicy kebabs.",
//       img: kabab,
//       type: "nonveg",
//     },

//     // Bruschetta
//     {
//       id: 1,
//       name: "Veg Garlic Bread",
//       desc: "Baked with love, cheese, and some spices to perfection",
//       price: 99,
//       img: breadVeg,
//       type: "veg",
//     },
//     {
//       id: 2,
//       name: "Non-Veg Garlic Bread",
//       desc: "Baked with love, Shredded Chicken topped with Mint sauce & a secret sauce to surprise you in every bite",
//       price: 125,
//       img: breadNonVeg,
//       type: "nonveg",
//     },
//     {
//       id: 3,
//       name: "Garlic Bread With Cheese",
//       desc: "Baked garlic bread topped with melted cheese",
//       price: 89,
//       img: breadCheese,
//       type: "veg",
//     },
//     // Pizzas - Veg V1
//     {
//       name: "Margherita",
//       desc: "Fresh mozzarella with basil",
//       price: 139,
//       type: "veg",
//       img: veg1,
//     },
//     {
//       name: "Simple Veg",
//       desc: "Onion & Tomato",
//       price: 139,
//       type: "veg",
//       img: veg2,
//     },
//     {
//       name: "Garlic Pizza",
//       desc: "Garlic & Cheese",
//       price: 139,
//       type: "veg",
//       img: veg3,
//     },
//     {
//       name: "Veggie Crunch",
//       desc: "Diced onion, Bell peppers & Mozzarella",
//       price: 139,
//       type: "veg",
//       img: veg4,
//     },
//     {
//       name: "Corn Treat",
//       desc: "Mozzarella & Golden Corn",
//       price: 139,
//       type: "veg",
//       img: veg5,
//     },
//     {
//       name: "Veggie Mix",
//       desc: "Onion, Capsicum & Tomato",
//       price: 179,
//       type: "veg",
//       img: veg6,
//     },
//     {
//       name: "Mushroom Lovers",
//       desc: "Mushroom, Garlic & Green Chili",
//       price: 179,
//       type: "veg",
//       img: veg7,
//     },
//     {
//       name: "Corn Exotica",
//       desc: "American Corn, Red Pepper & Cpasicum",
//       price: 179,
//       type: "veg",
//       img: veg8,
//     },
//     {
//       name: "Spicy Veg",
//       desc: "Fried Onion & Tomato With Special Spices",
//       price: 179,
//       type: "veg",
//       img: veg9,
//     },
//     {
//       name: "Paneer Tikka",
//       desc: "Paneer, Capsicum & Red Pepper",
//       price: 209,
//       medium: 419,
//       large: 549,
//       type: "veg",
//       img: veg10,
//     },
//     {
//       name: "Veg Hawaiian",
//       desc: "Pineapple, Jalapeno, American Corn & Capsicum",
//       price: 209,
//       medium: 419,
//       large: 549,
//       type: "veg",
//       img: veg11,
//     },
//     {
//       name: "Veggie Senorita",
//       desc: "Jalapeno, American Corn, Tomato, Black Olives",
//       price: 209,
//       medium: 419,
//       large: 549,
//       type: "veg",
//       img: veg12,
//     },
//     {
//       name: "Jain Pizza",
//       desc: "Mushroom, American Corn, Black Olives & Extra Cheese",
//       price: 209,
//       medium: 419,
//       large: 549,
//       type: "jain",
//       img: veg13,
//     },
//     {
//       name: "Classic Supreme",
//       desc: "Paneer Schezwan, Capsicum, Baby Corn, Mushroom, Onion & Jalapeno",
//       price: 209,
//       medium: 419,
//       large: 549,
//       type: "veg",
//       img: veg14,
//     },
//     {
//       name: "Paneer & Onion",
//       desc: "Fresh Paneer with Onion",
//       price: 209,
//       medium: 419,
//       large: 549,
//       type: "veg",
//       img: veg15,
//     },
//     {
//       name: "Spicy Paneer",
//       desc: "Paneer, Onion, Capsicum & Green Chili cooked in Chinese style",
//       price: 209,
//       medium: 419,
//       large: 549,
//       type: "veg",
//       img: veg16,
//     },
//     {
//       name: "Golden Delight",
//       desc: "Corn, Onion, Capsicum & Tomato",
//       price: 209,
//       medium: 419,
//       large: 549,
//       type: "veg",
//       img: veg17,
//     },
//     {
//       name: "Red Passion",
//       desc: "Onion, Red Pepper, Jalapeno & Green Chili",
//       price: 209,
//       medium: 419,
//       large: 549,
//       type: "veg",
//       img: veg18,
//     },
//     {
//       name: "Punjabi Retreat",
//       desc: "Tandoori Paneer, American Corn, Tomato, Mushroom & Extra Cheese",
//       price: 255,
//       medium: 475,
//       large: 625,
//       type: "veg",
//       img: veg19,
//     },
//     {
//       name: "Veg Extravaganza",
//       desc: "Onion, Capsicum, Tomato, American Corn, Mushroom, Black Olives, Oregano, Basil & Extra Cheese",
//       price: 255,
//       medium: 475,
//       large: 625,
//       type: "veg",
//       img: veg20,
//     },
//     {
//       name: "Spicy Chicken",
//       desc: "Cheese & Spicy Chicken",
//       price: 169,
//       medium: 365,
//       large: 499,
//       type: "nonveg",
//       img: veg21,
//     },
//     {
//       name: "Roast Chicken",
//       desc: "Cheese, Roast Chicken & Onion",
//       price: 169,
//       medium: 365,
//       large: 499,
//       type: "nonveg",
//       img: veg22,
//     },
//     {
//       name: "Half Roast Half Spicy",
//       desc: "Spicy Chicken Chunks & Roasted Chunks with Cheese",
//       price: 169,
//       medium: 365,
//       large: 499,
//       type: "nonveg",
//       img: veg23,
//     },
//     {
//       name: "Plain Chicken",
//       desc: "Plain Chicken Chunks & Cheese",
//       price: 169,
//       medium: 365,
//       large: 499,
//       type: "nonveg",
//       img: veg24,
//     },
//     {
//       name: "Chicken Tikka",
//       desc: "Red Pepper added, and Cheese",
//       price: 265, // Regular 7"
//       medium: 520, // Medium 10"
//       large: 625, // Large 12"
//       type: "nonveg",
//       img: veg25,
//     },
//     {
//       name: "Chicken Salami",
//       desc: "Onion, Garlic & Cheese",
//       price: 265,
//       medium: 520,
//       large: 625,
//       type: "nonveg",
//       img: veg26,
//     },
//     {
//       name: "Chicken Schezwan",
//       desc: "Spring Onion & Schezwan Chicken Chunks",
//       price: 265,
//       medium: 520,
//       large: 625,
//       type: "nonveg",
//       img: veg27,
//     },
//     {
//       name: "Chicken Sausage",
//       desc: "Cooked in Green Chilly Sauce with Onion & Capsicum",
//       price: 265,
//       medium: 520,
//       large: 625,
//       type: "nonveg",
//       img: veg28,
//     },
//     {
//       name: "Barbecue Chicken",
//       desc: "Mushroom, Barbecue Chicken Chunks & Onion",
//       price: 299, // Regular 7"
//       medium: 549, // Medium 10"
//       large: 689, // Large 12"
//       type: "nonveg",
//       img: veg29,
//     },
//     {
//       name: "Grocy Italian",
//       desc: "Roast Chicken, Chicken Sausage, Garlic, Onion & Mushroom",
//       price: 299,
//       medium: 549,
//       large: 689,
//       type: "nonveg",
//       img: veg30,
//     },
//     {
//       name: "Mix Chicken",
//       desc: "Hot & Spicy Chicken, Chicken Tikka & Plain Chicken",
//       price: 299,
//       medium: 549,
//       large: 689,
//       type: "nonveg",
//       img: veg31,
//     },
//     {
//       name: "RED Supreme",
//       desc: "Spicy Chicken Sausage, Onion, Barbequed Chicken & Jalapeno",
//       price: 299,
//       medium: 549,
//       large: 689,
//       type: "nonveg",
//       img: veg32,
//     },
//     {
//       name: "RED Hawaiian",
//       desc: "Barbequed Chicken, Pineapple & Jalapeno",
//       price: 299,
//       medium: 549,
//       large: 689,
//       type: "nonveg",
//       img: veg33,
//     },
//     {
//       name: "Chilly Chicken",
//       desc: "Capsicum, Onion & Green Chilly cooked in Chinese style",
//       price: 299,
//       medium: 549,
//       large: 689,
//       type: "nonveg",
//       img: veg34,
//     },
//     {
//       name: "Golden Chicken",
//       desc: "American Corn, Chicken Tikka & Extra Cheese",
//       price: 299,
//       medium: 549,
//       large: 689,
//       type: "nonveg",
//       img: veg35,
//     },
//     {
//       name: "RED Feast",
//       desc: "Chicken Sausage & Barbecue Chunks",
//       price: 299,
//       medium: 549,
//       large: 689,
//       type: "nonveg",
//       img: veg36,
//     },
//     {
//       name: "RED Dopiaza",
//       desc: "Two types of Chicken & Fried Omelet",
//       price: 299,
//       medium: 549,
//       large: 689,
//       type: "nonveg",
//       img: veg37,
//     },
//     {
//       name: "Butter Chicken",
//       desc: "Rich buttery chicken with cheese",
//       price: 299,
//       medium: 549,
//       large: 689,
//       type: "nonveg",
//       img: veg38,
//     },
//     {
//       name: "RED Lazania",
//       desc: "Fried Chicken marinated with Special Sauce",
//       price: 299,
//       medium: 549,
//       large: 689,
//       type: "nonveg",
//       img: veg39,
//     },
//     {
//       name: "American Delight",
//       desc: "Chicken, American Corn, Tomato, Olives & Jalapeno",
//       price: 299,
//       medium: 549,
//       large: 689,
//       type: "nonveg",
//       img: veg40,
//     },
//     {
//       name: "RED LE",
//       desc: "Chicken Shreds, Cheese, Fried Chicken & Sausage",
//       price: 299,
//       medium: 549,
//       large: 689,
//       type: "nonveg",
//       img: veg41,
//     },
//     {
//       name: "RED Mexican",
//       desc: "Spicy Chicken, Salami, Jalapeno & Capsicum",
//       price: 299,
//       medium: 549,
//       large: 689,
//       type: "nonveg",
//       img: veg42,
//     },
//     {
//       name: "RED Special",
//       desc: "Plain Chicken, Sausage, Salami, Onion, Garlic & Extra Cheese",
//       price: 345, // Regular 7"
//       medium: 629, // Medium 10"
//       large: 859, // Large 12"
//       type: "nonveg",
//       img: veg43,
//     },
//     {
//       name: "RED Indigo",
//       desc: "Schezwan Chicken, Black Olives, Onion, Capsicum & Extra Cheese",
//       price: 345,
//       medium: 629,
//       large: 859,
//       type: "nonveg",
//       img: veg44,
//     },
//     {
//       name: "RED Hochste",
//       desc: "Chicken Sausage, Chicken Salami, Chicken Kheema, Onion, Capsicum, Tomato & Extra Cheese",
//       price: 345,
//       medium: 629,
//       large: 859,
//       type: "nonveg",
//       img: veg45,
//     },
//     {
//       name: "RED Preferita",
//       desc: "Fried Chicken, Spicy Chicken, Chicken Sausage, Onion, Capsicum & Extra Cheese",
//       price: 345,
//       medium: 629,
//       large: 859,
//       type: "nonveg",
//       img: veg46,
//     },
//     {
//       name: "RED Extravaganza",
//       desc: "Chicken Tikka, Barbeque Chicken, Chicken Sausage, Onion, Black Olives, Mushroom & Extra Cheese",
//       price: 345,
//       medium: 629,
//       large: 859,
//       type: "nonveg",
//       img: veg47,
//     },
//     {
//       name: "Jain Classic",
//       desc: "Pure Jain pizza base",
//       price: 159,
//       type: "jain",
//       img: veg48,
//     },
//     // Pasta
//     {
//       id: 1,
//       name: "Veg Pasta Red Sauce",
//       desc: "Red Sauce, Veggies, Tossed together",
//       price: 215,
//       img: pastaVegRed,
//       type: "veg",
//     },
//     {
//       id: 2,
//       name: "Veg Pasta White Sauce",
//       desc: "Made in White Sauce, Golden Corn, Capsicum & Cheese",
//       price: 225,
//       img: pastaVegWhite,
//       type: "veg",
//     },
//     {
//       id: 3,
//       name: "Non-Veg Pasta Red Sauce",
//       desc: "Shredded Chicken, Broccoli, Mushrooms tossed in Red Sauce",
//       price: 225,
//       img: pastaNonVegRed,
//       type: "nonveg",
//     },
//     {
//       id: 4,
//       name: "Non-Veg Pasta White Sauce",
//       desc: "Chicken Cubes cooked in White Cheesy Sauce, and Veggies",
//       price: 225,
//       img: pastaNonVegWhite,
//       type: "nonveg",
//     },

//     // Burgers
//     {
//       id: 1,
//       name: "Veg Burger",
//       desc: "Crispy veg patty with lettuce, tomato & creamy mayo in a soft bun.",
//       price: 80,
//       img: vegBurger,
//       type: "veg",
//     },
//     {
//       id: 2,
//       name: "Non-Veg Burger",
//       desc: "Juicy chicken patty layered with lettuce, onions & special sauce.",
//       price: 100,
//       img: nonVegBurger,
//       type: "nonveg",
//     },

//     //salad
//     {
//       id: 1,
//       name: "Mix Veg Salad",
//       desc: "All mixed veggies...",
//       price: 250,
//       img: mixVeg,
//       type: "veg",
//     },
//     {
//       id: 2,
//       name: "Veg Hawaiian Salad",
//       desc: "Veggies & pineapple...",
//       price: 250,
//       img: vegHawaiian,
//       type: "veg",
//     },
//     {
//       id: 3,
//       name: "Hawaiian Chicken Salad",
//       desc: "Chicken & pineapple...",
//       price: 299,
//       img: chickenHawaiian,
//       type: "nonveg",
//     },
//     {
//       id: 4,
//       name: "Mix Chicken Salad",
//       desc: "Chicken cubes & veggies...",
//       price: 299,
//       img: mixChicken,
//       type: "nonveg",
//     },

//     // Beverages
//     {
//       id: 1,
//       name: "Cold Coffee",
//       priceSmall: 89,
//       sizes: ["S"],
//       desc: "Chilled creamy cold coffee.",
//       img: coldCoffee,
//     },
//     {
//       id: 2,
//       name: "Soft Drink",
//       priceSmall: 25,
//       priceMedium: 50,
//       sizes: ["S", "M"],
//       desc: "Refreshing carbonated drink.",
//       img: softDrink,
//     },
//     {
//       id: 3,
//       name: "Soil Drink Marany",
//       priceSmall: 15,
//       priceMedium: 25,
//       sizes: ["S", "M"],
//       desc: "Local favorite refreshing drink.",
//       img: soilDrink,
//     },
//     {
//       id: 4,
//       name: "Water",
//       priceSmall: 10,
//       priceMedium: 20,
//       sizes: ["S", "M"],
//       desc: "Pure mineral water bottle.",
//       img: water,
//     },
//     {
//       id: 5,
//       name: "Mocktail",
//       priceSmall: 40,
//       sizes: ["S"],
//       desc: "Fruity refreshing mocktail.",
//       img: mocktail,
//     },
//     {
//       id: 6,
//       name: "Milk Shake",
//       priceSmall: 89,
//       sizes: ["S"],
//       desc: "Thick milkshake with rich flavor.",
//       img: milkShake,
//     },
//     {
//       id: 7,
//       name: "Mojito",
//       priceSmall: 89,
//       sizes: ["S"],
//       desc: "Cool minty mojito with soda and lime.",
//       img: mojito,
//     },
//     {
//       id: 8,
//       name: "Ice Tea",
//       priceSmall: 59,
//       sizes: ["S"],
//       desc: "Sweet and chilled iced tea.",
//       img: iceTea,
//     },

//     // Desserts
//     {
//       id: 1,
//       name: "Chocolate Brownie",
//       desc: "Rich and creamy chocolate dessert.",
//       price: 69,
//       img: choco,
//       type: "veg",
//     },
//     {
//       id: 2,
//       name: "Choco Lava",
//       desc: "Warm gooey lava cake with molten chocolate.",
//       price: 99,
//       img: lava,
//       type: "veg",
//     },

//     //combo
//     {
//       id: 1,
//       name: "Regular Pizza Combo (V1 & NV1)",
//       desc: "Regular Pizza + Fries + Coke (Select Regular pizza from V1 & NV1 categories)",
//       price: 299,
//       img: comboVegRegular,
//       type: "veg",
//     },
//     {
//       id: 2,
//       name: "Medium Pizza Combo (V1)",
//       desc: "Medium Pizza + Fries + Coke (Select Medium V1 pizza)",
//       price: 410,
//       img: comboVegMedium,
//       type: "veg",
//     },
//     {
//       id: 3,
//       name: "Medium Pizza Combo (NV1)",
//       desc: "Medium Pizza + Fries + Coke (Select Medium NV1 pizza)",
//       price: 505,
//       img: comboNonVegMedium,
//       type: "nonveg",
//     },
//     {
//       id: 4,
//       name: "Large Pizza Combo (V1)",
//       desc: "Large Pizza + Garlic Bread + Fries + Coke (Select Large V1 pizza)",
//       price: 570,
//       img: comboVegLarge,
//       type: "veg",
//     },
//     {
//       id: 5,
//       name: "Large Pizza Combo (NV1)",
//       desc: "Large Pizza + Garlic Bread + Fries + Coke (Select Large NV1 pizza)",
//       price: 780,
//       img: comboNonVegLarge,
//       type: "nonveg",
//     },
//   ];

//   const filteredItems = menuItems.filter(
//     (item) => filter === "all" || item.type === filter
//   );

//   return (
//     <div className="w-full ">
//       {/* Hero Image */}
//       <div className="relative w-full h-[220px] sm:h-[280px] md:h-[400px] mb-8">
//         <img src={img} alt="pizza" className="w-full h-full object-cover" />
//         <div className="absolute inset-0  flex items-center justify-center">
//           <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white text-center">
//             Menu page
//           </h1>
//         </div>
//       </div>

//       <div className="mb-10">
//         <FilterButtons filter={filter} setFilter={setFilter} />
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto py-10">
//         {filteredItems.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
//           >
//             <img
//               src={item.img}
//               alt={item.name}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4">
//               <div className="flex justify-between items-center mb-2">
//                 <h3 className="font-semibold text-lg text-gray-800">
//                   {item.name}
//                 </h3>
//                 {item.type && (
//                   <img
//                     src={
//                       item.type === "veg" || item.type === "jain"
//                         ? vegIcon
//                         : nonVegIcon
//                     }
//                     alt={item.type}
//                     className="w-5 h-5"
//                   />
//                 )}
//               </div>
//               <p className="text-gray-500 text-sm mb-3">{item.desc}</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-lg font-bold text-red-600">
//                   ₹{item.price}
//                 </span>
//                 <button
//                   onClick={() => setSelectedItem(item)}
//                   className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
//                 >
//                   + Add
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedItem && (
//         <QuickieModal
//           item={selectedItem}
//           onClose={() => setSelectedItem(null)}
//         />
//       )}
//       {showCart && <Cart onClose={() => setShowCart(false)} />}
//     </div>
//   );
// };

// // Main App
// export default function App() {
//   return (
//     <CartProvider>
//       <div className="min-h-screen bg-gray-50">
//         <MenuPage />
//       </div>
//     </CartProvider>
//   );
// }
