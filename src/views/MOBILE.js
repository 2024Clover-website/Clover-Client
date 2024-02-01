import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./page/About/Mobile/About";

function MOBILE() {
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<About />} />
			</Routes>
		</div>
	);
}

export default MOBILE;
