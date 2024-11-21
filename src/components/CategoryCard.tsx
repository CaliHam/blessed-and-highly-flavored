import React from 'react';
import { Link } from 'react-router-dom';
import { Cake, Category } from '../types/cakeTypes';

interface CategoryCardProps {
  category: Category;
  cakes: Cake[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, cakes }) => {
  // Choose a random cake from the cakes array
  const randomCake = cakes[Math.floor(Math.random() * cakes.length)].image_url;
  const backgroundImage = cakes.length > 0 ? randomCake : '';

  return (
    <Link
      to={`/cakes/category?category=${category.id}`}
      className="relative group w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-out transform hover:scale-105"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70 transition-opacity duration-300 ease-out group-hover:opacity-50"></div>

      {/* Category Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Category Title */}
        <h2 className="text-3xl md:text-5xl font-cursive text-white font-bold drop-shadow-md transition duration-300 ease-out group-hover:text-secondary">
          {category.name}
        </h2>

        {/* Call to Action */}
        <button className="mt-6 px-6 py-2 bg-primary text-white font-medium rounded-lg shadow-md hover:bg-hoverPrimary transition-all duration-300 ease-in-out">
          Explore Cakes
        </button>
      </div>
    </Link>
  );
};

export default CategoryCard;