// src/components/Logo.tsx
import React from 'react';

const Logo: React.FC = () => {
  return (
    <img
      src="/assets/logo.png"
      alt="Logo"
      style={{
        width: '100px',
        height: '100px',
        objectFit: 'contain',
      }}
    />
  );
};

export default Logo;
