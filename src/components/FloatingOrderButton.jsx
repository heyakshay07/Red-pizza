import React from "react";

const FloatingOrderButton = () => {
  return (
    <a
      href="/order" // Change this to your actual order link
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 animate-pulse"
    >
      <button
        className="
          bg-red-600 
          text-white 
          font-semibold 
          px-4 
          py-2 
          sm:px-6 
          sm:py-3 
          rounded-full 
          shadow-lg 
          flex 
          items-center 
          justify-center 
          gap-2 
          hover:bg-red-700 
          transition-all 
          border-2 
          border-dashed 
          border-white 
          active:scale-95
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="white"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h11m-9 4a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"
          />
        </svg>
        <span className="text-sm sm:text-base font-bold">ORDER ONLINE</span>
      </button>
    </a>
  );
};

export default FloatingOrderButton;
