import React from 'react';
import { Link } from 'react-router-dom';
import { Cake } from '../types/cakeTypes';

interface CategoryCircleProps {
  label: string;
  cakes: Cake[];
  linkTo: string;
}

const CategoryCircle: React.FC<CategoryCircleProps> = ({ label, cakes, linkTo }) => {
  const backgroundImage = cakes.length > 0 ? cakes[0].image_url : '';

  return (
    <Link
      to={linkTo}
      className="group flex flex-col items-center space-y-2 transition-transform duration-300 hover:scale-105"
    >
      <div className="w-52 h-52 rounded-full bg-secondary p-6 flex items-center justify-center shadow-lg border-4 border-secondary overflow-hidden transition-transform duration-300 group-hover:scale-110">
        <img
          src={backgroundImage}
          alt={`${label} category`}
          className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-125"
        />
      </div>
      <span className="text-lg font-semibold text-primary transition-all duration-300 group-hover:text-hoverPrimary group-hover:translate-y-1">
        {label}
      </span>
    </Link>
  );
};

export default CategoryCircle;
