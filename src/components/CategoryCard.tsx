import React from 'react';
import { Link } from 'react-router-dom';
import { Cake, Category } from '../types/cakeTypes';

interface CategoryCardProps {
  category: Category;
  cakes: Cake[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, cakes }) => {
  // Choose a random cake from the cakes array
  // const randomCake = cakes[Math.floor(Math.random() * cakes.length)];

  const backgroundImage = cakes.length > 0 ? cakes[0].image_url : '';

  return (
    <Link
      to={`/cakes/category?category=${category.id}`}
      className="relative group w-full h-[500px] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-out transform hover:scale-105"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 transition-opacity duration-300 ease-out group-hover:opacity-40"></div>

      {/* Category Title */}
      <div className="absolute bottom-4 left-4">
        <h2 className="text-5xl font-cursive text-red-300 font-bold transition duration-300 ease-out group-hover:text-secondary">
          {category.name}
        </h2>
      </div>
    </Link>
  );
};

export default CategoryCard;