import React from 'react';
import cakeImage from '../assets/cake.png';
// import CategoryLink from '../components/CategoryLink';

const Home: React.FC = () => {
  return (
    <div className="bg-background min-h-screen">
      <main className="text-center pb-12 ">
        {/* Hero Section */}
        <section className="w-full flex justify-center items-center bg-custom-gradient shadow-lg mb-12">
          <div className="flex w-full flex-col md:flex-row md:items-start md:justify-between space-y-6 md:space-y-0">
            <div className="text-left pt-20 pl-10 md:mb-80 md:w-2/5 lg:w-fit">
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
            <section className="text-primary font-cursive italic text-3xl pt-20">
              <p className="max-w-xl mx-auto">
                “Taste and see that the Lord is good.” <br/> 
                <span className="font-serif text-2xl">Psalm 34:8</span>
              </p>
            </section>
          </div>
        </section>

        {/* Cake Categories */}
        {/* <section className="flex justify-center gap-10 mb-12">
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
        </section> */}
      </main>
    </div>
  );
};

export default Home;