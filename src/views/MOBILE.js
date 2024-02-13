import React from "react";
import { Route, Routes } from "react-router-dom";

import MobileHeader from "./components/MobileHeader";
import Projects from "./page/Projects/Mobile/Projects";
import DocentTitle from "./page/Projects/Docent/Mobile/DocentTitle";
import PodcastTitle from "./page/Projects/Podcast/Mobile/PodcastTitle";

function MOBILE() {
	const isDocent =
		window.location.pathname === "/projects/docent/title" ||
		window.location.pathname === "/projects/docent/content" ||
		window.location.pathname === "/projects/docent/comment";

	const isPodcast =
		window.location.pathname === "/projects/podcast/title" ||
		window.location.pathname === "/projects/podcast/content" ||
		window.location.pathname === "/projects/podcast/comment";

	return (
		<div>
			{!(isDocent || isPodcast) && <MobileHeader />}
			<Routes>
				<Route exact path="/projects" element={<Projects />} />
				<Route exact path="/projects/docent/title" element={<DocentTitle />} />
				<Route
					exact
					path="/projects/podcast/title"
					element={<PodcastTitle />}
				/>
			</Routes>
		</div>
	);
}

export default MOBILE;
