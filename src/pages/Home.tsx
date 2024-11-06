import React from 'react';
import { Link } from 'react-router-dom';
import cakeImage from '../assets/cake.png';

const Home: React.FC = () => {
  return (
    <div className="bg-background min-h-screen">
      <main className="text-center py-12 px-4">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto p-6 bg-secondary rounded-lg shadow-lg mb-12">
          <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between space-y-6 md:space-y-0">
            <div className="text-left space-y-4">
              <h2 className="text-4xl font-bold text-primary">Blessed & Highly Flavored</h2>
              <div className="bg-accent text-white py-2 px-6 rounded-full font-semibold w-fit">
                Cakes by Leanne
              </div>
            </div>
            <img src={cakeImage} alt="Beautiful cake" className="rounded-md shadow-md w-full md:w-1/2" />
          </div>
        </section>

        {/* Quote Section */}
        <section className="text-primary italic text-lg mb-12">
          <p className="max-w-xl mx-auto">
            “Taste and see that the Lord is good.” <span className="font-semibold">Psalm 34:8</span>
          </p>
        </section>

        {/* Cake Categories */}
        <section className="flex justify-center space-x-8 mb-12">
          <CategoryLink
            label="Birthday"
            imageSrc={cakeImage} // Placeholder, replace with the actual path
          />
          <CategoryLink
            label="Holiday"
            imageSrc={cakeImage} // Placeholder
          />
          <CategoryLink
            label="Wedding"
            imageSrc={cakeImage} // Placeholder
          />
          <CategoryLink
            label="Special Occasion"
            imageSrc={cakeImage} // Placeholder
          />
        </section>
      </main>
    </div>
  );
};

// Category Link Component for Reusability
const CategoryLink: React.FC<{ label: string; imageSrc: string }> = ({ label, imageSrc }) => (
  <Link
    to="/cakes"
    className="flex flex-col items-center space-y-4 text-primary hover:text-hoverPrimary transition-colors"
  >
    <div className="w-24 h-24 rounded-full bg-secondary p-4 flex items-center justify-center shadow-lg">
      <img src={imageSrc} alt={`${label} cake`} className="rounded-full" />
    </div>
    <span className="text-lg font-semibold">{label}</span>
  </Link>
);

export default Home;