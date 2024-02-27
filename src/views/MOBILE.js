import React from "react";
import { Route, Routes } from "react-router-dom";
import MobileHeader from "./components/MobileHeader";
import About from "./page/About/Mobile/About";
import DocentComment from "./page/Projects/Docent/Mobile/DocentComment";
import DocentContent from "./page/Projects/Docent/Mobile/DocentContent";
import DocentTitle from "./page/Projects/Docent/Mobile/DocentTitle";
import Projects from "./page/Projects/Mobile/Projects";
import PodcastComment from "./page/Projects/Podcast/Mobile/PodcastComment";
import PodcastContent from "./page/Projects/Podcast/Mobile/PodcastContent";
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
				<Route exact path="/" element={<About />} />
				<Route exact path="/projects" element={<Projects />} />
				<Route exact path="/projects/docent/title" element={<DocentTitle />} />
				<Route
					exact
					path="/projects/podcast/title"
					element={<PodcastTitle />}
				/>
				<Route
					exact
					path="/projects/docent/content"
					element={<DocentContent />}
				/>
				<Route
					exact
					path="/projects/podcast/content"
					element={<PodcastContent />}
				/>
				<Route
					exact
					path="/projects/docent/comment"
					element={<DocentComment />}
				/>
				<Route
					exact
					path="/projects/podcast/comment"
					element={<PodcastComment />}
				/>
			</Routes>
		</div>
	);
}

export default MOBILE;
