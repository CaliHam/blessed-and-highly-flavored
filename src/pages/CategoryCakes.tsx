import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Cake, Category } from "../types/cakeTypes";
import CakeCard from "../components/CakeCard";

interface CategoryCakesProps {
	categories: Category[];
	cakes: Cake[];
}

const CategoryCakes: React.FC<CategoryCakesProps> = ({ categories, cakes }) => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const categoryId = Number(queryParams.get('category'));
	const categoryName =
		categories.find((category) => category.id === categoryId)
			?.name || "Category";
	const mainCategories = categories.filter((category) => category.parent_id === null && category.id !== categoryId);
  const subcategories = categories.filter(category => category.parent_id === categoryId);

	// Filter cakes by the selected category
	const filteredCakes = cakes.filter(
		(cake) => cake.category_id === categoryId
	);

	return (
		<div className="p-6">
			<h2 className="text-5xl font-bold font-title text-primary text-center mb-6">
				{categoryName} Cakes
			</h2>
			{/* Main Category Links */}
			{mainCategories.length > 0 && (
        <div className="flex justify-center space-x-4 mb-6">
          {mainCategories.map((category) => (
            <Link 
              key={category.id} 
              to={`/cakes/category?category=${category.id}`} 
              className="px-4 py-2 bg-secondary text-primary rounded-lg shadow hover:bg-accent transition"
            >
              {category.name}
            </Link>
          ))}
        </div>
      )}
      {/* Subcategory Links */}
      {subcategories.length > 0 && (
        <div className="flex justify-center space-x-4 mb-6">
          {subcategories.map((subcategory) => (
            <Link 
              key={subcategory.id} 
              to={`/cakes/category?category=${subcategory.id}`} 
              className="px-4 py-2 bg-secondary text-primary rounded-lg shadow hover:bg-accent transition"
            >
              {subcategory.name}
            </Link>
          ))}
        </div>
      )}

			{filteredCakes.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-20">
					{filteredCakes.map((cake) => (
						<CakeCard key={cake.id} cake={cake} />
					))}
				</div>
			) : (
				<p className="text-center text-gray-600">
					No cakes found for this category.
				</p>
			)}
		</div>
	);
};

export default CategoryCakes;
