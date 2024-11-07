// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => (
  <header>
    <div className="flex items-center justify-between p-6 bg-headerBg shadow-md">
      <div className="flex items-center space-x-4">
        <Logo />
        <h1 className="text-2xl font-bold text-primary">Cakes by Leanne</h1>
      </div>
      <nav className="space-x-6 text-primary font-medium">
        <Link
          to="/"
          className="text-2xl hover:text-hoverPrimary transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/cakes"
          className="text-2xl hover:text-hoverPrimary transition-colors duration-200"
        >
          Cakes
        </Link>
        <Link
          to="/contact"
          className="text-2xl hover:text-hoverPrimary transition-colors duration-200"
        >
          Contact
        </Link>
      </nav>
    </div>
    <hr className="border-t-4 border-secondary" />
  </header>
);

export default Header;

