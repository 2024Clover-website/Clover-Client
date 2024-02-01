import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./page/About/PC/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
