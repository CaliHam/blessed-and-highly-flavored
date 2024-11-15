import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cakes from "./pages/Cakes";
// import { mockCakes, mockCategories } from "./services/mockData";
import { Category, Cake } from "./types/cakeTypes";
import CategoryCakes from "./pages/CategoryCakes";
import { fetchCategories, fetchCakes } from "./services/cakesService";
// import Contact from './pages/Contact';

const App: React.FC = () => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [cakes, setCakes] = useState<Cake[]>([]);

	useEffect(() => {
    const loadData = async () => {
      try {
        const categoriesData = await fetchCategories();
        const cakesData = await fetchCakes();
        setCategories(categoriesData);
        setCakes(cakesData);
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadData();
  }, []);

	return (
		<Router>
			<Header />
			<Routes>
				<Route
					path="/"
					element={<Home categories={categories} cakes={cakes} />}
				/>
				<Route
					path="/cakes"
					element={<Cakes categories={categories} cakes={cakes} />}
				/>
				<Route
					path="/cakes/category"
					element={<CategoryCakes categories={categories} cakes={cakes} />}
				/>
			</Routes>
		</Router>
	);
};

export default App;
