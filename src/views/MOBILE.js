import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./page/About/Mobile/About";

function PC() {
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<About />} />
			</Routes>
		</div>
	);
}

export default PC;
