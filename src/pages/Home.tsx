import React from 'react';
import cakeImage from '../assets/cake.png';
import CategoryCircle from '../components/CategoryCircle';
import { Cake, Category } from '../types/cakeTypes';
import banner from '../assets/banner.svg'

interface HomeProps {
  categories: Category[];
  cakes: Cake[];
}

const Home: React.FC<HomeProps> = ({ categories, cakes }) => {
  const mainCategories = categories.filter((category) => category.parent_id === null);

  return (
    <div className="bg-background">
      <main className="text-center pb-12">
        {/* Hero Section */}
        <section
          className="w-full bg-no-repeat bg-cover bg-center relative"
          style={{ backgroundImage: `url(${banner})`, height: '700px' }}
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
              <div className="relative pt-18">
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

        {/* Cake Categories */}
        <section className="max-w-5xl mx-auto mb-12">
          <div className="flex justify-center space-x-8">
            {mainCategories.map((category, index) => {
              const filteredCakes = cakes.filter(cake => cake.category_id === category.id);
              return (
                <CategoryCircle
                  key={index}
                  label={category.name}
                  cakes={filteredCakes}
                  linkTo={`/cakes/category?category=${category.id}`}
                />
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;