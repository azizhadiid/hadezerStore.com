import { Link } from "react-router-dom";
import { useState } from "react";
import logoHadezer from "./img/icons8-buying-64.png";
import ModalLogout from "./ModalLogout";

const NavbarUser = (props) => {
  const { id } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('password');
    window.location.href = "/login";
  };

  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50 shadow-xl">
      <div className="container mx-auto flex justify-between items-center px-5 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          {/* Ganti SVG dengan Image */}
          <img
            src={logoHadezer}
            alt="Logo"
            className="h-8 w-8 object-contain"
          />
          <span className="text-2xl  font-jersey">HadezerStore</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/beranda" className="hover:text-gray-300 font-poppins font-semibold text-xl">
            Home
          </Link>
          <Link to="/product" className="hover:text-gray-300 font-poppins font-semibold text-xl">
            Product
          </Link>
          <Link to="/contact" className="hover:text-gray-300 font-poppins font-semibold text-xl">
            Contact
          </Link>
          <Link to="/account" className="hover:text-gray-300 font-poppins font-semibold text-xl">
            Account
          </Link>
        </div>

        {/* Login Button */}
        <button className="hidden md:inline-block bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md cursor-pointer font-poppins font-semibold text-xl" onClick={() => setOpen(true)}>
          Logout
        </button>

        <ModalLogout open={open} onClose={() => setOpen(false)}>
          <div className="text-center w-56">
            <div className="mx-auto my-4 w-48">
              <h3 className="text-lg font-black text-gray-800">Confirm Logout</h3>
              <p className="text-sm text-gray-500">
                Are you sure you want to log out from your account?
              </p>
            </div>
            <div className="mx-5 flex gap-4">
              <button className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded-md cursor-pointer font-poppins font-semibold text-xl" onClick={handleLogout}>Logout</button>
              <button
                className="bg-slate-600 hover:bg-slate-700 px-2 py-1 rounded-md cursor-pointer font-poppins font-semibold text-xl"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </ModalLogout>


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
        <Link to="/beranda" className="block hover:text-gray-300 font-poppins">
          Home
        </Link>
        <Link to="/product" className="block hover:text-gray-300 font-poppins">
          Product
        </Link>
        <Link to="/contact" className="block hover:text-gray-300 font-poppins">
          Contact
        </Link>
        <Link to="/account" className="block hover:text-gray-300 font-poppins">
          Account
        </Link>
        <button className="block w-full bg-red-600 hover:bg-red-700 text-center px-4 py-2 rounded-md cursor-pointer font-poppins" onClick={() => setOpen(true)}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavbarUser;