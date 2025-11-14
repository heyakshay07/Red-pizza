// src/components/FloatingWhatsAppButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const FloatingWhatsAppButton = () => {
  const location = useLocation();
  // Show only on homepage
  if (location.pathname !== "/") return null;

  const phoneNumber = "918888447667"; // replace with your WhatsApp number (91 + number)
  const message = "Hello Red Pizza! I’d like to place an order 🍕";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat with Red Pizza on WhatsApp"
      className="
        fixed 
        bottom-4 
        right-4 
        sm:bottom-6 
        sm:right-6 
        z-[9999] 
        bg-green-500 
        hover:bg-green-600 
        text-white 
        font-semibold 
        px-4 
        py-3 
        rounded-full 
        shadow-xl 
        flex 
        items-center 
        justify-center 
        gap-2 
        animate-pulse 
        transition-all 
        border-2 
        border-dashed 
        border-white 
        active:scale-95
        focus:outline-none
        focus:ring-2
        focus:ring-green-300
      "
    >
      <FaWhatsapp className="text-2xl sm:text-3xl" />
      <span className="hidden sm:inline text-sm sm:text-base font-bold">
        Chat on WhatsApp
      </span>
    </button>
  );
};

export default FloatingWhatsAppButton;
