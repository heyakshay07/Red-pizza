// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/navbar/logo.jpg";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
//       ${scrolled ? "bg-yellow/80 backdrop-blur-md" : "bg-transparent"}`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         <img
//           src={logo}
//           alt="Logo"
//           className="h-12 w-auto object-contain cursor-pointer"
//         />

//         <div className="hidden md:flex space-x-8 text-white font-semibold text-sm tracking-wide">
//           <Link to="/" className="hover:text-yellow-400">Home</Link>
//           <Link to="/aboutus" className="hover:text-yellow-400">About Us</Link>
//           <Link to="/menupage" className="hover:text-yellow-400">Menu</Link>
//           <Link to="/blog" className="hover:text-yellow-400">Blog</Link>
//           <Link to="/contactus" className="hover:text-yellow-400">Contact Us</Link>
//           <Link to="/newarrival" className="hover:text-yellow-400">New Arrival</Link>

//           <Link to="/order">
//             <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-white">
//               Order Now
//             </button>
//           </Link>
//         </div>

//         <button className="md:hidden text-white text-xl">☰</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/navbar/logo.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // ✅ Check if user is on HOME page
  const isHomePage = location.pathname === "/";

  // ✅ Scroll effect only needed for Home page
  useEffect(() => {
    if (!isHomePage) return; // other pages don't use scroll behavior

    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);

  // ✅ Navbar background logic
  const navbarBackground = isHomePage
    ? scrolled
      ? "bg-yellow/80 backdrop-blur-md"
      : "bg-transparent"
    : "bg-black";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBackground}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <img
          src={logo}
          alt="Logo"
          className="h-12 w-auto cursor-pointer"
        />

        <div className="hidden md:flex space-x-8 text-white font-semibold text-sm tracking-wide">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/aboutus" className="hover:text-yellow-400">About Us</Link>
          <Link to="/menupage" className="hover:text-yellow-400">Menu</Link>
          <Link to="/gallery" className="hover:text-yellow-400">Gallery</Link>
          <Link to="/blog" className="hover:text-yellow-400">Blog</Link>
          <Link to="/contactus" className="hover:text-yellow-400">Contact Us</Link>
          <Link to="/newarrival" className="hover:text-yellow-400">New Arrival</Link>

          <Link to="/order">
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-white">
              Order Now
            </button>
          </Link>
        </div>

        <button className="md:hidden text-white text-xl">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
