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
//페이지 연결
import Invitation1 from "./page/Invitation/Ininvitation1/Ininvitation1.js";
import Invitation2 from "./page/Invitation/Ininvitation2/Ininvitation2.js";
import Invitation3 from "./page/Invitation/Ininvitation3/Ininvitation3.js";
import Invitation4 from "./page/Invitation/Ininvitation4/Ininvitation4.js";
import Invitation5 from "./page/Invitation/Ininvitation5/Ininvitation5.js";
import InvitePage from "./page/Invitation/InvitePage/InvitePage.js";
import LastPage from "./page/Invitation/LastPage/LastPage.js";

//태산
import InvitationT1 from "./page/Invitation/Ininvitation1/IninvitationT1.js";
import Invitation2T1 from "./page/Invitation/Ininvitation2/Ininvitation2T1.js";
import Invitation3T1 from "./page/Invitation/Ininvitation3/Ininvitation3T1.js";
import Invitation4T1 from "./page/Invitation/Ininvitation4/Ininvitation4T1.js";
import Invitation5T1 from "./page/Invitation/Ininvitation5/Ininvitation5T1.js";
import InvitePageT1 from "./page/Invitation/InvitePage/InvitePageT1.js";
import LastPageT1 from "./page/Invitation/LastPage/LastPageT1.js";

//이따
import InvitationT2 from "./page/Invitation/Ininvitation1/IninvitationT2.js";
import Invitation2T2 from "./page/Invitation/Ininvitation2/Ininvitation2T2.js";
import Invitation3T2 from "./page/Invitation/Ininvitation3/Ininvitation3T2.js";
import Invitation4T2 from "./page/Invitation/Ininvitation4/Ininvitation4T2.js";
import Invitation5T2 from "./page/Invitation/Ininvitation5/Ininvitation5T2.js";
import InvitePageT2 from "./page/Invitation/InvitePage/InvitePageT2.js";
import LastPageT2 from "./page/Invitation/LastPage/LastPageT2.js";

//VIBE MAKERS
import InvitationT3 from "./page/Invitation/Ininvitation1/IninvitationT3.js";
import Invitation2T3 from "./page/Invitation/Ininvitation2/Ininvitation2T3.js";
import Invitation3T3 from "./page/Invitation/Ininvitation3/Ininvitation3T3.js";
import Invitation4T3 from "./page/Invitation/Ininvitation4/Ininvitation4T3.js";
import Invitation5T3 from "./page/Invitation/Ininvitation5/Ininvitation5T3.js";
import InvitePageT3 from "./page/Invitation/InvitePage/InvitePageT3.js";
import LastPageT3 from "./page/Invitation/LastPage/LastPageT3.js";

//도파민중독자들
import InvitationT4 from "./page/Invitation/Ininvitation1/IninvitationT4.js";
import Invitation2T4 from "./page/Invitation/Ininvitation2/Ininvitation2T4.js";
import Invitation3T4 from "./page/Invitation/Ininvitation3/Ininvitation3T4.js";
import Invitation4T4 from "./page/Invitation/Ininvitation4/Ininvitation4T4.js";
import Invitation5T4 from "./page/Invitation/Ininvitation5/Ininvitation5T4.js";
import InvitePageT4 from "./page/Invitation/InvitePage/InvitePageT4.js";
import LastPageT4 from "./page/Invitation/LastPage/LastPageT4.js";

//옥수수수염
import InvitationT5 from "./page/Invitation/Ininvitation1/IninvitationT5.js";
import Invitation2T5 from "./page/Invitation/Ininvitation2/Ininvitation2T5.js";
import Invitation3T5 from "./page/Invitation/Ininvitation3/Ininvitation3T5.js";
import Invitation4T5 from "./page/Invitation/Ininvitation4/Ininvitation4T5.js";
import Invitation5T5 from "./page/Invitation/Ininvitation5/Ininvitation5T5.js";
import InvitePageT5 from "./page/Invitation/InvitePage/InvitePageT5.js";
import LastPageT5 from "./page/Invitation/LastPage/LastPageT5.js";


function MOBILE() {
	var currentHost = window.location.host;
    var currentPath = window.location.pathname;
    console.log(currentHost);
    console.log(currentPath);
	const currentSubdomain = window.location.host.split(".")[0];
	
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


			
			{currentSubdomain==="m"&&(
				<Routes>
					<Route exact path="/invite/public" element={<InvitePage />} />
					<Route exact path="/invite/public/1" element={<Invitation1 />} />
					<Route exact path="/invite/public/2" element={<Invitation2 />} />
					<Route exact path="/invite/public/3" element={<Invitation3 />} />
					<Route exact path="/invite/public/4" element={<Invitation4 />} />
					<Route exact path="/invite/public/5" element={<Invitation5 />} />
					<Route exact path="/invite/public/6" element={<LastPage />} />
				</Routes>
	  
			)}
			{currentSubdomain==="ts"&&(
        
				<Routes>
					<Route exact path="/invite/태산" element={<InvitePageT1 />} />
					<Route exact path="/invite/태산/1" element={<InvitationT1 />} />
					<Route exact path="/invite/태산/2" element={<Invitation2T1 />} />
					<Route exact path="/invite/태산/3" element={<Invitation3T1 />} />
					<Route exact path="/invite/태산/4" element={<Invitation4T1 />} />
					<Route exact path="/invite/태산/5" element={<Invitation5T1 />} />
					<Route exact path="/invite/태산/6" element={<LastPageT1 />} />
				</Routes>

			)}
			{currentSubdomain==="it"&&(
        
				<Routes>
					<Route exact path="/invite/이따" element={<InvitePageT2 />} />
					<Route exact path="/invite/이따/1" element={<InvitationT2 />} />
					<Route exact path="/invite/이따/2" element={<Invitation2T2 />} />
					<Route exact path="/invite/이따/3" element={<Invitation3T2 />} />
					<Route exact path="/invite/이따/4" element={<Invitation4T2 />} />
					<Route exact path="/invite/이따/5" element={<Invitation5T2 />} />
					<Route exact path="/invite/이따/6" element={<LastPageT2 />} />
				</Routes>
			)}
			{currentSubdomain==="vm"&&(
			
				<Routes>
					<Route exact path="/invite/VIBEMAKERS" element={<InvitePageT3 />} />
					<Route exact path="/invite/VIBEMAKERS/1" element={<InvitationT3 />} />
					<Route exact path="/invite/VIBEMAKERS/2" element={<Invitation2T3 />} />
					<Route exact path="/invite/VIBEMAKERS/3" element={<Invitation3T3 />} />
					<Route exact path="/invite/VIBEMAKERS/4" element={<Invitation4T3 />} />
					<Route exact path="/invite/VIBEMAKERS/5" element={<Invitation5T3 />} />
					<Route exact path="/invite/VIBEMAKERS/6" element={<LastPageT3 />} />
				</Routes>
	
			)}
			{currentSubdomain==="dj"&&(
        
				<Routes>
					<Route exact path="/invite/도파민중독자들" element={<InvitePageT4 />} />
					<Route exact path="/invite/도파민중독자들/1" element={<InvitationT4 />} />
					<Route exact path="/invite/도파민중독자들/2" element={<Invitation2T4 />} />
					<Route exact path="/invite/도파민중독자들/3" element={<Invitation3T4 />} />
					<Route exact path="/invite/도파민중독자들/4" element={<Invitation4T4 />} />
					<Route exact path="/invite/도파민중독자들/5" element={<Invitation5T4 />} />
					<Route exact path="/invite/도파민중독자들/6" element={<LastPageT4 />} />
				</Routes>
        
			)}
			{currentSubdomain==="os"&&(
        
				<Routes>
					<Route exact path="/invite/옥수수수염" element={<InvitePageT5 />} />
					<Route exact path="/invite/옥수수수염/1" element={<InvitationT5 />} />
					<Route exact path="/invite/옥수수수염/2" element={<Invitation2T5 />} />
					<Route exact path="/invite/옥수수수염/3" element={<Invitation3T5 />} />
					<Route exact path="/invite/옥수수수염/4" element={<Invitation4T5 />} />
					<Route exact path="/invite/옥수수수염/5" element={<Invitation5T5 />} />
					<Route exact path="/invite/옥수수수염/6" element={<LastPageT5 />} />
          		</Routes>
        
			)}

		</div>
	);
}

export default MOBILE;
