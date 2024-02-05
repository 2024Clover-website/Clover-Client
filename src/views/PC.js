import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./page/About/PC/About";
import Projects from "./page/Projects/PC/Projects";
import AnnouncementDocent from "./page/Projects/Docent/PC/Announcement";
import AnnouncementPodcast from "./page/Projects/Podcast/PC/Announcement";

function PC() {
	const isAnnounce =
		window.location.pathname === "/projects/docentAnnounce" ||
		"/projects/podcastAnnounce";

	return (
		<div>
			{!isAnnounce && <Header />}
			<Routes>
				<Route exact path="/" element={<About />} />
				<Route exact path="/projects" element={<Projects />} />
				<Route
					exact
					path="/projects/docentAnnounce"
					element={<AnnouncementDocent />}
				/>
				<Route
					exact
					path="/projects/podcastAnnounce"
					element={<AnnouncementPodcast />}
				/>
			</Routes>
			{!isAnnounce && <Footer />}
		</div>
	);
}

export default PC;
