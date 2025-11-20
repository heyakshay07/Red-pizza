import React, { useState } from "react";
import img from "../../src/assets/navbar/pizza1.jpg";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const WHATSAPP_NUMBER = "919209078692";


const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.message.trim()) return "Please enter your message.";
    if (!form.phone.trim() && !form.email.trim())
      return "Please provide at least a phone number or email.";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      alert(error);
      return;
    }

    setSubmitting(true);

    // Prepare WhatsApp message
    const textLines = [
      `Hello Red Pizza 👋,`,
      `Name: ${form.name}`,
      form.phone ? `Phone: ${form.phone}` : "",
      form.email ? `Email: ${form.email}` : "",
      `Message: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const encoded = encodeURIComponent(textLines);
   const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;


    // Open WhatsApp in new tab
    window.open(waUrl, "_blank");

    // Reset form after sending
    setTimeout(() => {
      setForm({ name: "", email: "", phone: "", message: "" });
      setSubmitting(false);
    }, 500);
  };

  return (
    <div className="w-full mb-20 ">
      {/* Hero Section */}
      <div className="relative w-full h-[220px] md:h-[380px] mb-8 rounded-lg overflow-hidden shadow-lg">
        <img src={img} alt="pizza" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/40 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center px-4">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Location & Contact Side by Side */}
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-stretch max-w-6xl mx-auto">
        {/* Location */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold flex items-center gap-3 mb-4 justify-center lg:justify-start">
            <MapPin className="text-orange-500 w-6 h-6" />
            Our Location
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-center lg:text-left text-sm">
            Shop No.04, Radiant Ivy, opposite to Brahma Exuberance, next to Eisha Loreals, Kausar Baugh, Kondhwa, Pune, Maharashtra 411048
          </p>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-4 justify-center lg:justify-start">
            <div className="flex items-center gap-3">
              <Phone className="text-orange-500 w-5 h-5" />
              <div className="text-sm">
                <div>+91 93224 33843</div>
                <div>+91 74988 53593</div>
                <div>+91 84848 38692</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-orange-500 w-5 h-5" />
              <div className="text-sm">redpizzapune@gmail.com</div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-center lg:text-left">Contact Us</h2>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-orange-500 text-2xl">
              <FaFacebookF className="hover:text-orange-400 cursor-pointer" aria-hidden />
              <FaInstagram className="hover:text-orange-400 cursor-pointer" aria-hidden />
              <FaTwitter className="hover:text-orange-400 cursor-pointer" aria-hidden />
              <FaYoutube className="hover:text-orange-400 cursor-pointer" aria-hidden />
            </div>
            <p className="text-gray-600 mt-4 text-sm">
              We're available on WhatsApp — click Submit on the form below and your message will open in WhatsApp so you can send it directly.
            </p>
          </div>

          <div className="mt-6 text-center lg:text-left">
            <a
              className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 transition"
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M16 2H8A6 6 0 002 8v8a6 6 0 006 6h8a6 6 0 006-6V8a6 6 0 00-6-6z" stroke="white" strokeWidth="0" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Embedded Map */}
      <div className="mt-8 w-full max-w-4xl mx-auto h-[340px] sm:h-[420px] rounded-lg overflow-hidden shadow-md">
        <iframe
          title="Red Pizza Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7568.361109556275!2d73.8845908641815!3d18.475478976345624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebb2574aef1d%3A0x23a5cb4234854902!2sRed%20Pizza!5e0!3m2!1sen!2sin!4v1762765411096!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Contact Form */}
  <div className="form mt-10 max-w-xl mx-auto bg-white px-4 py-6 sm:px-6 sm:py-6 rounded-lg shadow-md">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
          We'd Love To Hear From You!
        </h1>
        <p className="text-gray-600 mb-6 text-center">Please use the form below and press Submit to send via WhatsApp.</p>
<form onSubmit={handleSubmit} className="flex flex-col gap-4" >
  <input
    name="name"
    value={form.name}
    onChange={handleChange}
    type="text"
    placeholder="Your Name *"
    aria-label="Your Name"
    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
    required
  />

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <input
      name="email"
      value={form.email}
      onChange={handleChange}
      type="email"
      placeholder="Your Email"
      aria-label="Your Email"
      className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
    />
    <input
      name="phone"
      value={form.phone}
      onChange={handleChange}
      type="tel"
      placeholder="Phone Number"
      aria-label="Phone Number"
      className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
    />
  </div>

  <textarea
    name="message"
    value={form.message}
    onChange={handleChange}
    placeholder="Message *"
    rows="5"
    aria-label="Message"
    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
    required
  />

  <button
    type="submit"
    disabled={submitting}
    className="w-full bg-orange-500 text-white font-semibold py-3 rounded-md hover:bg-orange-600 transition disabled:opacity-60"
  >
    {submitting ? "Opening WhatsApp..." : "Submit & Open WhatsApp"}
  </button>
</form>

      </div>
    </div>

  );
};

export default ContactUs;



