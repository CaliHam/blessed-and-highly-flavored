import React from 'react';
import cakeImage from '../assets/cake.png';
import CategoryCircle from '../components/CategoryCircle';
import { Cake, Category } from '../types/cakeTypes';

interface HomeProps {
  categories: Category[];
  cakes: Cake[];
}

const Home: React.FC<HomeProps> = ({ categories, cakes }) => {
  const mainCategories = categories.filter((category) => category.parent_id === null);

  return (
    <div className="bg-background">
      <main className="text-center pb-12 ">
        {/* Hero Section */}
        <section className="w-full flex justify-center items-center bg-custom-gradient">
          <div className="flex w-full flex-col md:flex-row md:items-start md:justify-between space-y-6 md:space-y-0">
            <div className="text-left pt-20 pl-10 md:mb-60 md:w-2/5 lg:w-fit">
              <h2 className="text-7xl  text-secondary">Blessed & Highly Flavored</h2>
            </div>
            {/* Cake Image Section */}
            <div className="relative w-full md:w-1/2 md:mx-auto">
              <img
                src={cakeImage}
                alt="Beautiful cake"
                className="w-[400px] md:w-[500px] xl:w-[600px] md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/4 z-10"
                style={{ maxWidth: 'unset' }} // Optional, to allow it to grow naturally
              />
            </div>
            {/* Quote Section */}
            <section className="text-primary font-cursive italic text-3xl pt-20 pr-10">
              <p className="max-w-xl mx-auto">
                “Taste and see that the Lord is good.” <br/> 
                <span className="font-serif text-2xl">Psalm 34:8</span>
              </p>
            </section>
          </div>
        </section>
        <div className='bg-home-banner h-28 w-full  shadow-lg mb-12'>

        </div>

        {/* Cake Categories */}
        <section className="max-w-5xl mx-auto mb-12">
          <div className="flex justify-center space-x-8">
            {mainCategories.map((category, index) => (
              <CategoryCircle
                key={index}
                label={category.name}
                cakes={cakes.filter(cake => cake.id === category.id)}
                linkTo={`/cakes/category?category=${category.id}`}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;