import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import img from "../../src/assets/navbar/pizza1.jpg";
import mainImg from "../../src/assets/about/img1.jpg"; // main hero image
import drinksImg from "../../src/assets/about/img2.jpg"; // drink glasses
import steakImg from "../assets/img/box3.png"; // steak image

const AboutUs = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // trigger entrance animations after mount
    const id = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(id);
  }, []);

  // helper for common animated classes
  const enterBase =
    "transition-all duration-700 ease-out will-change-transform will-change-opacity";
  const hiddenState = "opacity-0 translate-y-6";
  const visibleState = "opacity-100 translate-y-0";

  return (
    <div className="w-full">
      {/* Hero Image */}
      <div className="relative w-full h-[250px] md:h-[300px] mb-10">
        <img src={img} alt="pizza" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Food Experience Section */}
      <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center mb-20 gap-6 md:gap-8">
        {/* Images side by side */}
        <motion.div
          className="flex flex-row gap-6 md:gap-8 w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={mainImg}
            alt="cheesy food"
            className="rounded-2xl shadow-lg object-cover w-3/3 md:w-2/3 h-[700px]"
          />
          <img
            src={drinksImg}
            alt="drinks"
            className="rounded-2xl shadow-lg object-cover md:w-1/3 h-[300px] mt-70 mx-auto"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="md:w-1/2 flex flex-col justify-left mt-6 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-snug text-center">
            it’s not just food, <br /> it’s an experience.
          </h2>
          <p className="mb-2 text-gray-700 text-lg leading-relaxed text-center m-10">
            At <span className="font-semibold">Red-Pizza</span>, we’re all about
            pushing the boundaries of comfort food. Imagine the gooey, melty
            goodness of cheese combined with the savory satisfaction of burgers
            and pizzas – that’s the heart of what we do.
          </p>
          <p className="mb-4 text-gray-700 text-lg leading-relaxed text-center m-10">
            Quality is our top priority. We use only the freshest ingredients,
            and craft each dish with care and creativity. Our team is dedicated
            to serving meals as fun and unique as our cafe.
          </p>
          <p className="text-gray-800 font-semibold text-lg leading-relaxed text-center m-10">
            Ready to taste the best of both worlds? Come on over and let your
            cravings go wild.
          </p>
        </motion.div>
      </div>

      {/* Vision & Mission Section */}
      <section className="bg-[#f5f7fb] py-16 px-6 md:px-20">
        <div
          className={`text-center mb-10 ${enterBase} ${
            mounted ? visibleState : hiddenState
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <p className="uppercase tracking-widest text-gray-500 text-sm">
            Lets Things
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#2d1d13]">
            That Go Beyond the Ordinary
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Vision Box */}
          <div
            className={`relative z-10 md:w-1/3 rounded-md p-8 bg-white shadow-md border-0 ${enterBase} ${
              mounted ? visibleState : hiddenState
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {/* golden border frame */}
            <div className="absolute inset-0 pointer-events-none rounded-md border-4 border-yellow-300 -z-10"></div>

            <h3 className="text-2xl font-semibold mb-4 text-[#2d1d13]">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              "To be the ultimate destination where comfort food meets
              creativity, bringing people together with unique and delicious
              pizza-burger fusion dishes, and creating a space where every bite
              sparks joy and excitement."
            </p>
          </div>

          {/* Middle Image */}
          <div
            className={`hidden md:block md:w-1/3 rounded-2xl overflow-hidden ${enterBase} ${
              mounted ? visibleState : hiddenState
            }`}
            style={{ transitionDelay: "320ms" }}
          >
            <img
              src={steakImg}
              alt="Cooking"
              className="object-cover w-full h-[400px] transform transition-transform duration-500 ease-out hover:scale-105"
            />
          </div>

          {/* Mission Box */}
          <div
            className={`relative z-10 md:w-1/3 rounded-md p-8 bg-white shadow-md border-0 ${enterBase} ${
              mounted ? visibleState : hiddenState
            }`}
            style={{ transitionDelay: "420ms" }}
          >
            <div className="absolute inset-0 pointer-events-none rounded-md border-4 border-yellow-300 -z-10"></div>

            <h3 className="text-2xl font-semibold mb-4 text-[#2d1d13]">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At Cheesy Crazy Cafe, our mission is to deliver a bold and
              unforgettable dining experience by offering a one-of-a-kind menu
              of delicious, cheesy creations.
            </p>
          </div>
        </div>

        {/* Bottom Images for mobile view */}
        <div
          className={`flex md:hidden justify-center gap-6 mt-10 ${enterBase} ${
            mounted ? visibleState : hiddenState
          }`}
          style={{ transitionDelay: "520ms" }}
        >
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80"
            alt="Food"
            className="rounded-2xl w-1/2 h-[250px] object-cover transform transition-transform duration-500 ease-out hover:scale-105"
          />
          <img
            src="https://images.unsplash.com/photo-1589710752351-70d7b6f88542?auto=format&fit=crop&w=400&q=80"
            alt="Drinks"
            className="rounded-2xl w-1/2 h-[250px] object-cover transform transition-transform duration-500 ease-out hover:scale-105"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
