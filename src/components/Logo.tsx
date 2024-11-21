// src/components/Logo.tsx
import React from 'react';
import logo from "../assets/logo.png"

const Logo: React.FC = () => {
  return (
    <img
      src={logo}
      alt="Logo"
      style={{
        width: '70px',
        height: '70px',
        objectFit: 'contain',
      }}
    />
  );
};

export default Logo;
