import { Link } from "react-router-dom";
import { useState } from "react";
import logoHadezer from "./img/icons8-buying-64.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          {/* Ganti SVG dengan Image */}
          <img
            src={logoHadezer}
            alt="Logo"
            className="h-8 w-8 object-contain"
          />
          <span className="text-2xl font-bold">Brand</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-gray-300 font-semibold text-xl">
            Home
          </Link>
          <Link to="/product" className="hover:text-gray-300 font-semibold text-xl">
            Product
          </Link>
          <Link to="/services" className="hover:text-gray-300 font-semibold text-xl">
            Services
          </Link>
          <Link to="/contact" className="hover:text-gray-300 font-semibold text-xl">
            Contact
          </Link>
        </div>

        {/* Login Button */}
        <Link to='/login' className="hidden md:inline-block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md cursor-pointer font-medium text-xl">
          Log In
        </Link>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-gray-400 hover:text-white"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${isOpen ? "block" : "hidden"
          } md:hidden bg-gray-700 px-4 pt-2 pb-4 space-y-2`}
      >
        <Link to="/" className="block hover:text-gray-300">
          Home
        </Link>
        <Link to="/about" className="block hover:text-gray-300">
          About
        </Link>
        <Link to="/services" className="block hover:text-gray-300">
          Services
        </Link>
        <Link to="/contact" className="block hover:text-gray-300">
          Contact
        </Link>
        <Link to="/login" className="block w-full bg-blue-600 hover:bg-blue-700 text-center px-4 py-2 rounded-md cursor-pointer">
          Log In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;