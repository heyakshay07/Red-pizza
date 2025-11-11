// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { ShoppingCart, Search, X } from "lucide-react"; 
// import logo from "../assets/navbar/logo.jpg";
// import { FaUserCircle } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   const isHomePage = location.pathname === "/";

//   useEffect(() => {
//     if (!isHomePage) return;
//     const onScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [isHomePage]);

//   const navbarBackground = isHomePage
//     ? scrolled
//       ? "bg-black"
//       : "bg-black"
//       : "bg-black";

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       console.log("Searching for:", searchQuery);
//     }
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBackground}`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* ✅ Logo */}
//         <Link to="/">
//           <img src={logo} alt="Logo" className="h-12 w-auto cursor-pointer" />
//         </Link>

//         {/* ✅ Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-6 text-white font-semibold text-sm tracking-wide md:mr-[40px]">
//           <Link to="/" className="hover:text-yellow-400">Home</Link>
//           <Link to="/aboutus" className="hover:text-yellow-400">About Us</Link>
//           <Link to="/menupage" className="hover:text-yellow-400">Menu</Link>
//           <Link to="/gallery" className="hover:text-yellow-400">Gallery</Link>
//           <Link to="/blog" className="hover:text-yellow-400">Blog</Link>
//           <Link to="/contactus" className="hover:text-yellow-400">Contact Us</Link>
//           <Link to="/newarrival" className="hover:text-yellow-400">New Arrival</Link>

//           {/* ✅ Search box */}
//           <form onSubmit={handleSearch} className="relative">
//             {searchOpen ? (
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 onBlur={() => setSearchOpen(false)}
//                 placeholder="Search..."
//                 className="px-3 py-1 text-white rounded-md outline-none transition-all w-40 focus:w-56 bg-black/40"
//                 autoFocus
//               />
//             ) : (
//               <Search
//                 className="cursor-pointer w-5 h-5 text-white hover:text-yellow-400"
//                 onClick={() => setSearchOpen(true)}
//               />
//             )}
//           </form>

//           {/* ✅ Cart icon */}
//           <Link to="/cart" className="relative">
//             <ShoppingCart className="w-6 h-6 text-white hover:text-yellow-400" />
//             <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white rounded-full px-1.5">
//               2
//             </span>
//           </Link>

//           {/* ✅ Sign In Button */}
//           <Link to="/order">
//             <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-white">
//               Sign in
//             </button>
//           </Link>

//           {/* ✅ User Icon visible on desktop */}
//            <FaUserCircle
//         className="text-white text-2xl cursor-pointer hover:text-yellow-400"
//         onClick={() => navigate("/profile")}
//       />
//         </div>

//         {/* ✅ Hamburger for mobile */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="md:hidden text-white text-2xl focus:outline-none"
//         >
//           {menuOpen ? <X size={28} /> : "☰"}
//         </button>
//       </div>

//       {/* ✅ Mobile Dropdown Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-black/95 text-white flex flex-col items-center space-y-4 transition-all duration-300 py-4">
//           <Link to="/" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Home</Link>
//           <Link to="/aboutus" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>About Us</Link>
//           <Link to="/menupage" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Menu</Link>
//           <Link to="/gallery" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Gallery</Link>
//           <Link to="/blog" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Blog</Link>
//           <Link to="/contactus" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Contact Us</Link>
//           <Link to="/newarrival" className="hover:text-yellow-400" onClick={() => setMenuOpen(false)}>New Arrival</Link>

//           {/* ✅ Search in mobile */}
//           <form onSubmit={handleSearch} className="flex items-center space-x-2">
//             <Search className="w-5 h-5 text-yellow-400" />
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search..."
//               className="px-3 py-1 rounded-md text-black"
//             />
//           </form>

//           {/* ✅ Cart + Sign In + User Icon on mobile */}
//           <div className="flex items-center space-x-4">
//             <Link to="/cart" onClick={() => setMenuOpen(false)} className="relative">
//               <ShoppingCart className="w-6 h-6 text-white hover:text-yellow-400" />
//               <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white rounded-full px-1.5">
//                 2
//               </span>
//             </Link>

        

//             {/* ✅ User icon on mobile */}
//             <FaUserCircle className="text-white text-2xl cursor-pointer hover:text-yellow-400" />

//                 <Link to="/order" onClick={() => setMenuOpen(false)}>
//               <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-white">
//                 Sign in
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;








import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, X } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/navbar/logo.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // ✅ initialize navigate hook here

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);

  const navbarBackground = "bg-black";

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBackground}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ✅ Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12 w-auto cursor-pointer" />
        </Link>

        {/* ✅ Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-white font-semibold text-sm tracking-wide md:mr-[40px]">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/aboutus" className="hover:text-yellow-400">About Us</Link>
          <Link to="/menupage" className="hover:text-yellow-400">Menu</Link>
          <Link to="/gallery" className="hover:text-yellow-400">Gallery</Link>
          <Link to="/blog" className="hover:text-yellow-400">Blog</Link>
          <Link to="/contactus" className="hover:text-yellow-400">Contact Us</Link>
          <Link to="/newarrival" className="hover:text-yellow-400">New Arrival</Link>

          {/* ✅ Search box */}
          <form onSubmit={handleSearch} className="relative">
            {searchOpen ? (
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onBlur={() => setSearchOpen(false)}
                placeholder="Search..."
                className="px-3 py-1 text-white rounded-md outline-none transition-all w-40 focus:w-56 bg-black/40"
                autoFocus
              />
            ) : (
              <Search
                className="cursor-pointer w-5 h-5 text-white hover:text-yellow-400"
                onClick={() => setSearchOpen(true)}
              />
            )}
          </form>

          {/* ✅ Cart icon */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-white hover:text-yellow-400" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white rounded-full px-1.5">
              2
            </span>
          </Link>

          {/* ✅ Sign In Button */}
          <Link to="/pages/signin">
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-white">
              Sign in
            </button>
          </Link>

          {/* ✅ User Icon (desktop) */}
          <FaUserCircle
            className="text-white text-2xl cursor-pointer hover:text-yellow-400"
            onClick={() => navigate("/pages/profile")}
          />
        </div>

        {/* ✅ Hamburger for mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : "☰"}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 text-white flex flex-col items-center space-y-4 transition-all duration-300 py-4">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">Home</Link>
          <Link to="/aboutus" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">About Us</Link>
          <Link to="/menupage" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">Menu</Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">Gallery</Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">Blog</Link>
          <Link to="/contactus" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">Contact Us</Link>
          <Link to="/newarrival" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">New Arrival</Link>

          {/* ✅ Search (mobile) */}
          <form onSubmit={handleSearch} className="flex items-center space-x-2">
            <Search className="w-5 h-5 text-yellow-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="px-3 py-1 rounded-md text-black"
            />
          </form>

          {/* ✅ Cart + User + Sign In (mobile) */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" onClick={() => setMenuOpen(false)} className="relative">
              <ShoppingCart className="w-6 h-6 text-white hover:text-yellow-400" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white rounded-full px-1.5">
                2
              </span>
            </Link>

            {/* ✅ User icon mobile */}
            <FaUserCircle
              className="text-white text-2xl cursor-pointer hover:text-yellow-400"
              onClick={() => {
                navigate("/pages/profile");
                setMenuOpen(false);
              }}
            />

            <Link to="/order" onClick={() => setMenuOpen(false)}>
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-white">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
