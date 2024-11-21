import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
// import Contact from './pages/Contact';
// import AboutMe from './pages/AboutMe';

const App: React.FC = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				{/* <Route
					path="/aboutme"
					element={<AboutMe />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/> */}
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
