import React, { useState } from "react";
import { Cake } from "../types/cakeTypes";
import rightChevron from '../assets/right-chevron.png'

interface CategoryCakesProps {
	cakes: Cake[];
	currentCategory: number;
}

const CategoryCakes: React.FC<CategoryCakesProps> = ({ cakes, currentCategory }) => {
  // Filter cakes in the current category
  const cakesInCategory = cakes.filter((cake) => cake.category_id === currentCategory);
  const [currentCakeIndex, setCurrentCakeIndex] = useState<number>(0);

   // Handler for cycling through cakes
   const handleNext = () => {
    setCurrentCakeIndex((prevIndex) => (prevIndex + 1) % cakesInCategory.length);
  };

  const handlePrev = () => {
    setCurrentCakeIndex((prevIndex) =>
      prevIndex === 0 ? cakesInCategory.length - 1 : prevIndex - 1
    );
  };

  // Handlers for thumbnail clicks
  const handleThumbnailClick = (index: number) => {
    setCurrentCakeIndex(index);
  };

  if (cakesInCategory.length === 0) return <p>No cakes in this category.</p>;

  return (
    <div className="mx-20 mt-10 pb-20 pt-5 bg-secondary rounded-xl">
      {/* Main Cake Display with Arrows */}
      <div className="relative flex items-center justify-center w-full max-w-5xl mx-auto mb-10">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute -left-10 text-primary hover:bg-opacity-100 transition"
        >
          <img src={rightChevron}/>
        </button>

        {/* Main Cake Image */}
        <div className="text-center w-full">
          <div className="text-primary font-title text-4xl py-4 rounded-lg">
            {cakesInCategory[currentCakeIndex]?.name}
          </div>
          <img
            src={cakesInCategory[currentCakeIndex]?.image_url}
            alt={cakesInCategory[currentCakeIndex]?.name}
            className="w-full h-[600px] object-contain rounded-lg"
          />
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute -right-10 text-primary hover:bg-opacity-100 transition"
        >
          <img src={rightChevron}/>
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center space-x-4">
        {cakesInCategory.map((cake, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`w-24 h-24 rounded-lg overflow-hidden shadow-md ${
              currentCakeIndex === index ? 'ring-4 ring-accent' : ''
            }`}
          >
            <img
              src={cake.image_url}
              alt={cake.name}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryCakes;