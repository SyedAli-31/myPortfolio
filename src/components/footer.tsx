import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright Text */}
        <p className="text-sm text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Syed Ali. All rights reserved.
        </p>

        {/* Social Media Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/"
            className="text-white hover:text-gray-400 flex items-center space-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook text-xl"></i>
            <span className="hidden md:inline">Facebook</span>
          </a>
          <a
            href="https://www.linkedin.com/in/syed-ali-hussaini-84693b2a9/"
            className="text-white hover:text-gray-400 flex items-center space-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin text-xl"></i>
            <span className="hidden md:inline">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
