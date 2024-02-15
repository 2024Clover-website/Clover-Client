import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

//페이지 연결
import Invitation1 from "./views/page/Invitation/Ininvitation1/Ininvitation1";
import Invitation2 from "./views/page/Invitation/Ininvitation2/Ininvitation2";
import Invitation3 from "./views/page/Invitation/Ininvitation3/Ininvitation3";
import Invitation4 from "./views/page/Invitation/Ininvitation4/Ininvitation4";
import Invitation5 from "./views/page/Invitation/Ininvitation5/Ininvitation5";
import InvitePage from "./views/page/Invitation/InvitePage/InvitePage";
import LastPage from "./views/page/Invitation/LastPage/LastPage";
import Announcement from "./views/page/Invitation/WebAnncouncement/Announcement";

function App() {
	const Mobile = ({ children }) => {
		const isMobile = useMediaQuery({
			query: "(max-width:450px)",
		});
		return <>{isMobile && children}</>;
	};

	const Pc = ({ children }) => {
		const isPc = useMediaQuery({
			query: "(min-width:450px)",
		});
		return <>{isPc && children}</>;
	};

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Pc>
				<Routes>
					<Route exact path="/" element={<Announcement />} />
				</Routes>
			</Pc>
			<Mobile>
				<Routes>
					<Route exact path="/" element={<InvitePage />} />
					<Route exact path="/invite/public/1" element={<Invitation1 />} />
					<Route exact path="/invite/public/1/2" element={<Invitation2 />} />
					<Route exact path="/invite/public/1/2/3" element={<Invitation3 />} />
					<Route exact path="/invite/public/1/2/3/4" element={<Invitation4 />} />
					<Route exact path="/invite/public/1/2/3/4/5" element={<Invitation5 />} />
					<Route exact path="/invite/public/1/2/3/4/5/6" element={<LastPage />} />
				</Routes>
			</Mobile>
		</Suspense>
	);
}

export default App;
