import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-lg font-bold text-white">MyCompany</h2>
            <p className="mt-4 text-sm">
              We are committed to providing the best services and products to
              our customers. Your satisfaction is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-bold text-white">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-lg font-bold text-white">Follow Us</h2>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495V14.708h-3.13v-3.605h3.13V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.796.143v3.244h-1.918c-1.504 0-1.797.715-1.797 1.765v2.313h3.591l-.467 3.605h-3.124V24h6.127c.732 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337 3a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616 2c-2.723 0-4.932 2.209-4.932 4.932 0 .387.044.763.127 1.124C7.728 7.83 4.1 5.924 1.671 3.148A4.822 4.822 0 001.161 4.72c0 1.71.87 3.215 2.188 4.099a4.904 4.904 0 01-2.231-.616v.062c0 2.388 1.699 4.382 3.946 4.835a4.903 4.903 0 01-2.224.084c.627 1.953 2.445 3.377 4.6 3.417A9.87 9.87 0 010 19.539a13.894 13.894 0 007.548 2.213c9.056 0 14.01-7.507 14.01-14.01 0-.213-.005-.426-.015-.637A10.025 10.025 0 0024 4.557z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.259.057 2.152.27 2.973.58a5.992 5.992 0 012.18 1.41 5.992 5.992 0 011.41 2.18c.31.821.523 1.714.58 2.973.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.057 1.259-.27 2.152-.58 2.973a5.992 5.992 0 01-1.41 2.18 5.992 5.992 0 01-2.18 1.41c-.821.31-1.714.523-2.973.58-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.259-.057-2.152-.27-2.973-.58a5.992 5.992 0 01-2.18-1.41 5.992 5.992 0 01-1.41-2.18c-.31-.821-.523-1.714-.58-2.973C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.057-1.259.27-2.152.58-2.973A5.992 5.992 0 014.163 2.163c.821-.31 1.714-.523 2.973-.58C8.416 2.175 8.796 2.163 12 2.163zM12 0C8.74 0 8.332.012 7.052.07 5.778.128 4.68.343 3.633.746A8.26 8.26 0 00.746 3.633c-.403 1.047-.618 2.145-.676 3.419C.012 8.332 0 8.74 0 12c0 3.26.012 3.668.07 4.948.058 1.274.273 2.372.676 3.419a8.26 8.26 0 002.887 2.887c1.047.403 2.145.618 3.419.676C8.332 23.988 8.74 24 12 24c3.26 0 3.668-.012 4.948-.07 1.274-.058 2.372-.273 3.419-.676a8.26 8.26 0 002.887-2.887c.403-1.047.618-2.145.676-3.419.058-1.28.07-1.688.07-4.948 0-3.26-.012-3.668-.07-4.948-.058-1.274-.273-2.372-.676-3.419a8.26 8.26 0 00-2.887-2.887c-1.047-.403-2.145-.618-3.419-.676C15.668.012 15.26 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.207a4.045 4.045 0 110-8.09 4.045 4.045 0 010 8.09zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} MyCompany. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
