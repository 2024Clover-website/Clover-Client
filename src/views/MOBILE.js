import React from "react";
import { Route, Routes } from "react-router-dom";

import MobileHeader from "./components/MobileHeader";
import Projects from "./page/Projects/Mobile/Projects";

function MOBILE() {
	return (
		<div>
			<MobileHeader />
			<Routes>
				<Route exact path="/projects" element={<Projects />} />
			</Routes>
		</div>
	);
}

export default MOBILE;
