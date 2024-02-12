import React from "react";
import { Route, Routes } from "react-router-dom";

import MobileHeader from "./components/MobileHeader";
import Projects from "./page/Projects/Mobile/Projects";
import DocentTitle from "./page/Projects/Docent/Mobile/DocentTitle";

function MOBILE() {
	const isDocent =
		window.location.pathname === "/projects/docent/title" ||
		window.location.pathname === "/projects/docent/content" ||
		window.location.pathname === "/projects/docent/comment";

	const isPodcast = window.location.pathname === "/projects/podcast";

	return (
		<div>
			{!(isDocent || isPodcast) && <MobileHeader />}
			<Routes>
				<Route exact path="/projects" element={<Projects />} />
				<Route exact path="/projects/docent/title" element={<DocentTitle />} />
			</Routes>
		</div>
	);
}

export default MOBILE;
