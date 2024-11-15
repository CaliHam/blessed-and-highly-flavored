import React from 'react';
import { Cake } from '../types/cakeTypes';

interface CakeCardProps {
  cake: Cake;
}

const CakeCard: React.FC<CakeCardProps> = ({ cake }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img
        src={cake.image_url}
        alt={cake.name}
        className="w-full h-64 object-cover transition-opacity duration-300 group-hover:opacity-20"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-white text-lg px-4">{cake.description || "No description available"}</p>
      </div>
      <div className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1 rounded-lg text-lg font-semibold">
        {cake.name}
      </div>
    </div>
  );
};

export default CakeCard;
