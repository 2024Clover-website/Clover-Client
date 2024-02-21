import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./page/About/PC/About";

function PC() {
	return (
		<div>
			<Header />
			<Routes>
				<Route exact path="/" element={<About />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default PC;
