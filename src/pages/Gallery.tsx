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
    <div className='mt-20 mb-20'>
      <section className="bg-white mx-auto p-6 rounded-lg shadow-lg max-w-4xl text-center my-24">
        <h3 className="text-2xl font-cursive text-primary mb-4">What Our Customers Are Saying</h3>
        <p className="text-lg text-gray-700 font-body italic">"The best cakes in town! Can’t wait to order my next one."</p>
        <p className="text-sm text-gray-500 font-body">– Placeholder Review</p>
      </section>

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
