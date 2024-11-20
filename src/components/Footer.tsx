import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent2 text-primary py-8">
      {/* Footer Content Wrapper */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-hoverPrimary transition-colors duration-300"
          >
            {/* Replace with your icon */}
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-hoverPrimary transition-colors duration-300"
          >
            {/* Replace with your icon */}
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-hoverPrimary transition-colors duration-300"
          >
            {/* Replace with your icon */}
            Instagram
          </a>
        </div>

        {/* Quote Section */}
        <div className="text-center">
          <p className="font-cursive italic text-lg md:text-xl">
            “Taste and see that the Lord is good.”
          </p>
          <span className="font-body text-sm md:text-base">Psalm 34:8</span>
        </div>

        {/* Copyright Section */}
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Cakes by Leanne. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;