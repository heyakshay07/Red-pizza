import React from "react";
import img from "../../src/assets/navbar/pizza1.jpg";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="w-full mb-20">
      {/* Hero Section as Background */}
      <div className="relative w-full h-[250px] md:h-[400px] mb-10">
        <img
          src={img}
          alt="pizza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Location & Contact Side by Side - Centered */}
      <div className="mt-10 flex flex-col md:flex-row gap-10 justify-center items-start md:items-stretch">
        {/* Location */}
        <div className="w-full md:w-1/2 max-w-md bg-white p-6 rounded-lg shadow-lg text-center md:text-left">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4 justify-center md:justify-start">
            <MapPin className="text-orange-500 w-6 h-6" />
            Our Location
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Shop No.04, Radiant Ivy, opposite to Brahma Exuberance, next to Eisha Loreals, Kausar Baugh, Kondhwa, Pune, Maharashtra 411048
          </p>



        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/2 max-w-md bg-white p-6 rounded-lg shadow-lg text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <div className="flex flex-col gap-3 text-lg text-gray-700">
            <div className="flex items-start gap-2">
              <Phone className="text-orange-500 w-5 h-5 mt-1" />
              <p>
                +91-93224 33843 <br />
                +91-74988 53593 <br />
                +91-84848 38692
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="text-orange-500 w-5 h-5" />
              <span>redpizzapune@gmail.com</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 text-orange-500 text-2xl mt-4 justify-center md:justify-start">
              <FaFacebookF className="hover:text-orange-400 cursor-pointer" />
              <FaInstagram className="hover:text-orange-400 cursor-pointer" />
              <FaTwitter className="hover:text-orange-400 cursor-pointer" />
              <FaYoutube className="hover:text-orange-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Map */}
    <div className="mt-4 w-full max-w-3xl mx-auto h-[450px]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7568.361109556275!2d73.8845908641815!3d18.475478976345624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebb2574aef1d%3A0x23a5cb4234854902!2sRed%20Pizza!5e0!3m2!1sen!2sin!4v1762765411096!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="rounded-lg shadow-lg"
  ></iframe>
</div>

      {/* Contact Form */}
      <div className="form mt-10 max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2">
          We'd Love To Hear <br /> From You!
        </h1>
        <p className="text-gray-600 mb-6">Please use the form below.</p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            placeholder="Your Email Address"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>

          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
