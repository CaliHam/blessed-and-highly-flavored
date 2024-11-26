import React from 'react';
import { Cake, Category } from '../types/cakeTypes';

interface CategoryCardProps {
  category: Category;
  cakes: Cake[];
  currentCategory: number;
  setCurrentCategory: React.Dispatch<React.SetStateAction<number>>;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, cakes, currentCategory, setCurrentCategory }) => {
  // Choose a random cake from the cakes array
  // const randomCake = cakes[Math.floor(Math.random() * cakes.length)].image_url;
  const backgroundImage = cakes.length > 0 ? cakes[0].image_url : '';

  const buttonClass = `relative group w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-out transform hover:scale-105 ${
    category.id === currentCategory ? 'border-2 border-accent' : ''
  }`;

  const headerClass = `text-3xl md:text-5xl font-cursive font-bold drop-shadow-md transition duration-300 ease-out group-hover:text-accent ${
    category.id === currentCategory ? 'text-accent' : 'text-white'
  }`

  const overlayClass = `absolute inset-0 bg-gradient-to-t from-black via-transparent to-black transition-opacity duration-300 ease-out group-hover:opacity-50 ${
    category.id === currentCategory ? 'opacity-50' : 'opacity-70'
  }`

  return (
    <button
      onClick={() => setCurrentCategory(category.id)}
      className={buttonClass}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Overlay */}
      <div className={overlayClass}></div>

      {/* Category Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Category Title */}
        <h2 className={headerClass}>
          {category.name}
        </h2>
      </div>
    </button>
  );
};

export default CategoryCard;