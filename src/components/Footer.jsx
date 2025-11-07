import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-10">
        {/* Contact Us */}
        <div className="md:w-1/3">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p>
            U.S.Pizza office: <br />
            1st floor MVR square, above quench liquor store, <br />
            201 CMR road, HRBR layout, 560043, <br />
            Bangalore, Karnataka.
          </p>
          <p className="mt-2">+91-6360266160</p>
          <p>franchise@uspizza.in</p>
        </div>

        {/* Stay Connected */}
        <div className="md:w-1/3">
          <h2 className="text-xl font-bold mb-4">Stay Connected</h2>
          <p className="mb-2">Follow us on social media channels</p>
          <div className="flex gap-4 text-orange-500 text-2xl">
            <FaFacebookF className="hover:text-orange-400 cursor-pointer" />
            <FaInstagram className="hover:text-orange-400 cursor-pointer" />
            <FaTwitter className="hover:text-orange-400 cursor-pointer" />
            <FaYoutube className="hover:text-orange-400 cursor-pointer" />
          </div>
        </div>

        {/* Timings */}
        <div className="md:w-1/3">
          <h2 className="text-xl font-bold mb-4">Timings</h2>
          <p>Monday - Sunday</p>
          <p>11:00 AM - 10:00 PM</p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="container mx-auto px-4 mt-10 border-t border-gray-700 pt-4 flex flex-wrap justify-center gap-4 text-orange-500 font-semibold text-sm">
        {[
          "HOME",
          "ABOUT US",
          "MENU",
          "GALLERY",
          "FRANCHISE",
          "STORE LOCATOR",
          "BLOG",
          "CONTACT US",
          "ORDER NOW",
        ].map((item, index) => (
          <span key={index} className="hover:text-orange-400 cursor-pointer">
            {item}
          </span>
        ))}
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 mt-4 text-center text-white text-sm">
        Copyright © 2024 US Pizza All Rights Reserved. Designed By Samtech Innovations.
      </div>
    </footer>
  );
};

export default Footer;
