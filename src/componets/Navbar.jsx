import { Link } from "lucide-react";
import React, { useState } from "react";
import { Search, Plus } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showUploadForm, setShowUploadForm] = useState(false);

  const handleUpload = () => {
    setShowUploadForm(!showUploadForm);
  };

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold hover:text-blue-300">
              MyLogo
            </Link>
          </div>

          {/* Links - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-300">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-300">
              About
            </Link>
            <Link to="/services" className="hover:text-blue-300">
              Services
            </Link>
            <Link to="/contact" className="hover:text-blue-300">
              Contact
            </Link>
            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 pl-4 pr-10 py-2 border rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
              </div>
              {/* Post Job Button */}
              <button
                onClick={handleUpload}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-full shadow-md transition"
              >
                <Plus className="w-4 h-4" />
                Post Job
              </button>
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={handleToggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <Link
            to="/"
            className="block px-4 py-2 text-white hover:bg-blue-600"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-white hover:bg-blue-600"
          >
            About
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2 text-white hover:bg-blue-600"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-white hover:bg-blue-600"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
