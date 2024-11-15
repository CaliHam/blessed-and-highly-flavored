import { useEffect, useState } from 'react';
import { mockCakes, mockCategories } from '../services/mockData';
import { Cake, Category } from '../types/cakeTypes';
import CategoryCard from '../components/CategoryCard';

const Cakes = () => {
  const [categories, setCategories] = useState<Category[]>(mockCategories);
  const [cakes, setCakes] = useState<Cake[]>(mockCakes);

  const mainCategories = categories.filter((category) => category.parent_id === null);

  return (
    <div className="bg-cake-categories p-8">
      {/* Header Section */}
      {/* <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Categories</h1>
        <p className="text-lg text-primary">
          Discover a variety of cakes for every occasion. Click on a category to see the delicious options available!
        </p>
      </header> */}

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
        {mainCategories.map((category) => {
          // Filter cakes by category
          const cakesInCategory = cakes.filter((cake) => cake.category_id === category.id);

          return (
            <CategoryCard
              key={category.id}
              category={category}
              cakes={cakesInCategory}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cakes;
