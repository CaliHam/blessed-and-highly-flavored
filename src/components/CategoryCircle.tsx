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
    <Link to={linkTo} className="flex flex-col items-center space-y-2">
      <div className="w-52 h-52 rounded-full bg-secondary p-6 flex items-center justify-center shadow-lg border-4 border-secondary overflow-hidden">
        <img src={backgroundImage} alt={`${label} category`} className="w-full h-full object-cover rounded-full" />
      </div>
      <span className="text-lg font-semibold text-primary">{label}</span>
    </Link>
  );
};

export default CategoryCircle;
