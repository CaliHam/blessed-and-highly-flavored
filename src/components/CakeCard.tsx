import React from 'react';
import { Cake } from '../types/cakeTypes';

interface CakeCardProps {
  cake: Cake;
}

const CakeCard: React.FC<CakeCardProps> = ({ cake }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      {/* Image Section */}
      <img
        src={cake.image_url}
        alt={cake.name}
        className="w-full h-90 object-cover"
      />

      {/* Content Section */}
      <div className="p-4 text-center">
        {/* Title */}
        <h3 className="text-lg font-semibold text-primary mb-2">{cake.name}</h3>
        
        {/* Description */}
        {cake.description && (
          <p className="text-sm text-gray-600">{cake.description}</p>
        )}
      </div>
    </div>
  );
};

export default CakeCard;