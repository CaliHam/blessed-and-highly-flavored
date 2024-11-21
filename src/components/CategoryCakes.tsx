import React, { useState } from "react";
import { Cake } from "../types/cakeTypes";

interface CategoryCakesProps {
	cakes: Cake[];
	currentCategory: number;
}

const CategoryCakes: React.FC<CategoryCakesProps> = ({ cakes, currentCategory }) => {
  // Filter cakes in the current category
  const cakesInCategory = cakes.filter((cake) => cake.category_id === currentCategory);
  const [currentCakeIndex, setCurrentCakeIndex] = useState<number>(0);

  // Handlers for thumbnail clicks
  const handleThumbnailClick = (index: number) => {
    setCurrentCakeIndex(index);
  };

  if (cakesInCategory.length === 0) return <p>No cakes in this category.</p>;

  return (
    <div className="mt-8">
      {/* Main Cake Display */}
      <div className="relative w-full max-w-4xl mx-auto mb-4">
        <img
          src={cakesInCategory[currentCakeIndex]?.image_url}
          alt={cakesInCategory[currentCakeIndex]?.name}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
          {cakesInCategory[currentCakeIndex]?.name}
        </div>
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

// const CategoryCakes: React.FC<CategoryCakesProps> = ({ categories, cakes, currentCategory }) => {
// 	const categoryName =
// 		categories.find((category) => category.id === currentCategory)
// 			?.name || "Category";
//   const subcategories = categories.filter(category => category.parent_id === currentCategory);

// 	// Filter cakes by the selected category
// 	const filteredCakes = cakes.filter(
// 		(cake) => cake.category_id === currentCategory
// 	);

// 	return (
// 		<div className="p-6">
// 			<h2 className="text-5xl font-bold font-title text-primary text-center mb-6">
// 				{categoryName} Cakes
// 			</h2>
			
//       {/* Subcategory Links */}
//       {subcategories.length > 0 && (
//         <div className="flex justify-center space-x-4 mb-6">
//           {subcategories.map((subcategory) => (
//             <Link 
//               key={subcategory.id} 
//               to={`/cakes/category?category=${subcategory.id}`} 
//               className="px-4 py-2 bg-secondary text-primary rounded-lg shadow hover:bg-accent transition"
//             >
//               {subcategory.name}
//             </Link>
//           ))}
//         </div>
//       )}

// 			{filteredCakes.length > 0 ? (
// 				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-20">
// 					{filteredCakes.map((cake) => (
// 						<CakeCard key={cake.id} cake={cake} />
// 					))}
// 				</div>
// 			) : (
// 				<p className="text-center text-gray-600">
// 					No cakes found for this category.
// 				</p>
// 			)}
// 		</div>
// 	);
// };

// export default CategoryCakes;
