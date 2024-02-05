import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./page/About/PC/About";
import Projects from "./page/Projects/PC/Projects";

function PC() {
	return (
		<div>
			<Header />
			<Routes>
				<Route exact path="/" element={<About />} />
				<Route exact path="/projects" element={<Projects />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default PC;
