import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import About from "./page/About/PC/About";
import AnnouncementDocent from "./page/Projects/Docent/PC/Announcement";
import Projects from "./page/Projects/PC/Projects";
import AnnouncementPodcast from "./page/Projects/Podcast/PC/Announcement";
//페이지 연결

import Announcement from "./page/Invitation/WebAnncouncement/Announcement";
//태산

import AnnouncementT1 from "./page/Invitation/WebAnncouncement/AnnouncementT1";
//이따

import AnnouncementT2 from "./page/Invitation/WebAnncouncement/AnnouncementT2";
//VIBE MAKERS

import AnnouncementT3 from "./page/Invitation/WebAnncouncement/AnnouncementT3";
//도파민중독자들

import AnnouncementT4 from "./page/Invitation/WebAnncouncement/AnnouncementT4";
//옥수수수염

import AnnouncementT5 from "./page/Invitation/WebAnncouncement/AnnouncementT5";

// REC
import REC from "./page/REC/REC";
import REC2 from "./page/REC/REC2";
import REC3 from "./page/REC/REC3";
import REC3sec from "./page/REC/REC3sec";
import REC4 from "./page/REC/REC4";
import REC5 from "./page/REC/REC5";
import REC6 from "./page/REC/REC6";

function PC() {
	const currentSubdomain = window.location.host.split(".")[0];
	var currentHost = window.location.host;
	var currentPath = window.location.pathname;
	console.log(currentHost);
	console.log(currentPath);
	const isDocentAnnounce =
		window.location.pathname === "/projects/docentAnnounce";

	const isPodcastAnnounce =
		window.location.pathname === "/projects/podcastAnnounce";
	const isInviteAnnounce = window.location.pathname.startsWith("/invite");
	return (
		<div>
			{!(isDocentAnnounce || isPodcastAnnounce || isInviteAnnounce) && (
				<Header />
			)}
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

			<Routes>
				<Route exact path="/REC/start" element={<REC />} />
				<Route exact path="/REC/naming" element={<REC2 />} />
				<Route exact path="/REC/stimulation" element={<REC3 />} />
				<Route exact path="/REC/stimulation/self" element={<REC3sec />} />
				<Route exact path="/REC/graphic" element={<REC4 />} />
				<Route exact path="/REC/color" element={<REC5 />} />
				<Route exact path="/REC/tape" element={<REC6 />} />
			</Routes>
			{currentSubdomain === "www" && (
				<Routes>
					<Route exact path="/invite/public" element={<Announcement />} />
					<Route exact path="/invite/태산" element={<AnnouncementT1 />} />
					<Route exact path="/invite/이따" element={<AnnouncementT2 />} />
					<Route exact path="/invite/VIBEMAKERS" element={<AnnouncementT3 />} />
					<Route
						exact
						path="/invite/도파민중독자들"
						element={<AnnouncementT4 />}
					/>
					<Route exact path="/invite/옥수수수염" element={<AnnouncementT5 />} />
				</Routes>
			)}
			{!(isDocentAnnounce || isPodcastAnnounce || isInviteAnnounce) && (
				<Footer />
			)}
		</div>
	);
}

export default PC;
