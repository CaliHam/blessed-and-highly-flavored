import React, { useEffect, useState } from 'react';
import cakeImage from '../assets/cake.png';
import { Cake, Category } from '../types/cakeTypes';
import banner from '../assets/banner.svg'
import CategoryCakes from '../components/CategoryCakes';
import { fetchCategories, fetchCakes } from '../services/cakesService';
import Gallery from './Gallery';

const Home: React.FC= () => {
  const [currentCategory, setCurrentCategory] = useState<number>(1)
  const [categories, setCategories] = useState<Category[]>([]);
	const [cakes, setCakes] = useState<Cake[]>([]);

	useEffect(() => {
		const loadData = async () => {
			try {
				const [categoriesData, cakesData] = await Promise.all([
					fetchCategories(),
					fetchCakes()
				]);
				setCategories(categoriesData);
				setCakes(cakesData);

			} catch (error) {
				console.error('Error loading data:', error);
			}
		};

		loadData();
	}, []);

  return (
    <div className="bg-background">
      <main className="text-center pb-12">
        {/* Hero Section */}
        <section
          className="w-full bg-no-repeat bg-cover bg-center relative"
          style={{ backgroundImage: `url(${banner})`, height: '600px' }}
        >
          {/* Centered Title */}
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center w-full">
            <h2 className="text-7xl font-title text-secondary font-bold ">
              Blessed & Highly Flavored
            </h2>
          </div>

          {/* Cake and Quote Section */}
          <div className="">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Cake Image */}
              <div className="relative pt-24">
                <img
                  src={cakeImage}
                  alt="Beautiful cake"
                  className="w-[300px] md:w-[400px] lg:w-[500px]"
                />
              </div>
            </div>
            {/* Quote Section */}
            <div className="absolute right-10 top-52 text-primary font-cursive italic text-3xl max-w-sm">
              <p>
                “Taste and see that the Lord is good.” <br />
                <span className="font-body text-2xl">Psalm 34:8</span>
              </p>
            </div>
          </div>
        </section>
      </main>

      <section id="gallery"  className="mt-12">
        {/* <h3 className="text-4xl font-title font-semibold text-primary mb-6">Gallery</h3> */}
        <Gallery
          categories={categories}
          cakes={cakes}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />
        <CategoryCakes
          cakes={cakes}
          currentCategory={currentCategory}
        />
      </section>
    </div>
  );
};

export default Home;