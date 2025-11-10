import React from "react";
import img from "../assets/navbar/pizza1.jpg";

const AboutUs = () => {
  return (
    <div>
      {/* 🔹 Banner Section */}
      <div className="relative w-full h-[400px] md:h-[450px] mb-10">
        <img src={img} alt="pizza" className="w-full h-full object-cover" />
        <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            About Us
          </h1>
        </div>
      </div>

      {/* 🔹 About Content Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-gray-800 text-center">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>

        {/* Divider line */}
        <div className="w-16 h-[2px] bg-gray-400 mx-auto mb-6"></div>

        {/* Subtext */}
        <p className="italic text-lg md:text-xl text-gray-700 mb-12">
          An exclusive connection to Italian artisans for more meaningful buying. <br />
          <span className="font-semibold text-gray-900">
            Menswear and accessories crafted for you in numerous colours and refined materials.
          </span>
        </p>

        {/* 🔹 Who We Are */}
        <div className="space-y-5 mb-14">
          <h2 className="text-2xl font-semibold">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Starting in 2014 out of our family workshop in Como, Italy, we have teamed up with 8
            fellow Italian <em>artigiani</em> or craftsmen — all very eager to showcase their
            artisanal heritage and quintessential designs. (read more on{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Our Artisans
            </a>
            )
          </p>
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
            From hand-hemmed tips to hand-stitched shoulders, our artisans craft all 40 Colori
            garments and accessories according to the highest quality standards to create
            hard-wearing everyday pieces for a timeless casual elegance.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
            To make this happen, we provide them with the canvas to turn into their next creation.
            We travel around Italy, visiting mills and merchants to find the best fabrics and yarns,
            ensuring they are natural, colourful and responsibly sourced. (read more on{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Our Materials
            </a>
            )
          </p>
        </div>

        {/* 🔹 How We Work */}
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold">How We Work</h2>
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
            We opted for a direct-to-artisan distribution model focused on made-to-order and custom
            services to ensure that we produce exactly what is needed, reducing waste and optimizing
            resources. All with honest pricing, because meaningful buying should not be a luxury.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Shop now our core collection of timeless designs that we truly love. Our core collection
            is rarely available immediately but always available on demand. Anything not in stock,
            you can have it Made to Order and our artisans will craft it exclusively for you in
            3–6 weeks.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Feeling creative? Our Custom Made and Made to Measure services let you design each
            garment exactly how you want it — no compromises on style or fit! Visit our Bloomsbury
            store or book an online consultation to get started.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
