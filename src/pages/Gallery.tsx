import { Cake, Category } from '../types/cakeTypes';
import CategoryCard from '../components/CategoryCard';

interface CakesProps {
  categories: Category[];
  cakes: Cake[];
}

const Cakes: React.FC<CakesProps> = ({ categories, cakes }) => {
  const mainCategories = categories.filter((category) => category.parent_id === null);

  return (
    <div className="bg-hero-pattern bg-hero-bg bg-repeat p-8 h-full">
      {/* Header Section */}
      <header className="text-center mb-12">
        {/* <h1 className="text-5xl font-bold font-title text-primary mb-4">Categories</h1> */}
        <p className="text-lg text-primary">
          Discover a variety of cakes for every occasion. Explore the galleries below to see past cakes I've made throughout the years.
        </p>
      </header>

      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 pb-10">
        {mainCategories.map((category) => {
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