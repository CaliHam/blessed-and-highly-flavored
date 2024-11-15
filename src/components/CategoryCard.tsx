import React from 'react';
import { Link } from 'react-router-dom';
import { Cake, Category } from '../types/cakeTypes';

interface CategoryCardProps {
  category: Category;
  cakes: Cake[];
  subcategories: Category[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, cakes, subcategories }) => {
  // Choose a random cake from the cakes array
  const randomCake = cakes[Math.floor(Math.random() * cakes.length)];

  return (
    <div className="flex flex-col items-center bg-secondary rounded-lg shadow-lg p-6 w-full max-w-sm mx-auto mb-8">
      {/* Cake Image */}
      <div className="w-40 h-40 mb-4">
        <img src={randomCake?.image_url} alt={randomCake?.name} className="rounded-lg object-cover w-full h-full" />
      </div>

      {/* Category Title */}
      <h3 className="text-2xl font-semibold text-primary mb-4">{category.name}</h3>

      {/* Subcategories Buttons */}
      <div className="flex flex-wrap justify-center space-x-2">
        {subcategories.map((sub) => (
          <Link key={sub.id} to={`/cakes/${sub.id}`} className="bg-accent hover:bg-hoverPrimary text-white rounded-full px-3 py-1 mb-2">
            {sub.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;