// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => (
  <header>
    <div className="flex items-center justify-between p-4 bg-headerBg shadow-md">
      {/* Logo and Title */}
      <div className="flex items-center space-x-4">
        <Logo />
        <h1 className="text-1xl text-primary">Cakes by Leanne</h1>
      </div>
      {/* Navigation */}
      <nav className="space-x-6 text-primary">
        <Link
          to="/"
          className="group relative text-1xl transition-colors duration-200"
        >
          Home
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-hoverPrimary transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          to="#gallery"
          className="group relative text-1xl transition-colors duration-200"
        >
          Gallery
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-hoverPrimary transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          to="/contact"
          className="group relative text-1xl transition-colors duration-200"
        >
          Contact
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-hoverPrimary transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;

