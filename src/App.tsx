import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cakes from './pages/Cakes';
import { mockCakes, mockCategories } from './services/mockData';
import { Category, Cake } from './types/cakeTypes';
// import Contact from './pages/Contact';

const App: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>(mockCategories);
  const [cakes, setCakes] = useState<Cake[]>(mockCakes);

  // Placeholder for useEffect to fetch data from Supabase
  useEffect(() => {
    // Example code for fetching data
    // async function fetchData() {
    //   const categoriesData = await fetchCategoriesFromSupabase();
    //   const cakesData = await fetchCakesFromSupabase();
    //   setCategories(categoriesData);
    //   setCakes(cakesData);
    // }
    // fetchData();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home categories={categories} cakes={cakes}/>}
        />
        <Route
          path="/cakes"
          element={<Cakes categories={categories} cakes={cakes} />}
        />
      </Routes>
    </Router>
  );
};

export default App;

