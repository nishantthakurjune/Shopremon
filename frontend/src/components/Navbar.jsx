import cartImg from "../assets/images/icon-cart.svg";
import image from "../assets/images/profile.jpg";
import { Link } from "react-router";
import { useState } from "react";
import { useSelector } from "react-redux"; // Add this import

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity); // Add this line

  return (
    <nav className="navbar border-b border-gray-300 p-5 font-custom">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="box1">
          <Link to="/">
            <div className="heading text-2xl font-bold">Shopremon</div>
          </Link>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`box2 flex flex-col md:flex-row md:items-center gap-6 absolute md:static bg-white md:bg-transparent w-full md:w-auto left-0 top-16 p-5 md:p-0 transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          } md:translate-y-0`}
        >
          <Link to="/collections">
            <div className="text-orange hover:text-gray-700">Collections</div>
          </Link>
          <Link to="/men">
            <div className="hover:text-gray-700">Men</div>
          </Link>
          <Link to="/women">
            <div className="hover:text-gray-700">Women</div>
          </Link>
          <Link to="/about">
            <div className="hover:text-gray-700">About</div>
          </Link>
          <Link to="/listing">
            <div className="hover:text-gray-700">Listing</div>
          </Link>
        </div>

        {/* Profile and Cart */}
        <div className="box3 flex gap-5 items-center">
          <div className="shop relative">
            <Link to="/cart">
              <img src={cartImg} alt="CartImg" />
              {totalQuantity > 0 && (
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalQuantity}
                </div>
              )}
            </Link>
          </div>
          <div className="w-8 h-8 overflow-hidden rounded-full">
            <Link to="/profile">
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;