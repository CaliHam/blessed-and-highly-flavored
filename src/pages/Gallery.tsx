import { Cake, Category } from '../types/cakeTypes';
import CategoryCard from '../components/CategoryCard';

interface GalleryProps {
  categories: Category[];
  cakes: Cake[];
  currentCategory: number;
  setCurrentCategory: React.Dispatch<React.SetStateAction<number>>;
}

const Gallery: React.FC<GalleryProps> = ({ categories, cakes, currentCategory, setCurrentCategory }) => {
  const mainCategories = categories.filter((category) => category.parent_id === null);

  return (
    <div className='mt-20'>
      {/* Category Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-16 pb-10">
        {mainCategories.map((category) => {
          const cakesInCategory = cakes.filter((cake) => cake.category_id === category.id);

          return (
            <CategoryCard
              key={category.id}
              category={category}
              cakes={cakesInCategory}
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
