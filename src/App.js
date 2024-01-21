import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//페이지 연결
import InvitePage from "./views/page/Invitation/InvitePage/InvitePage";
import Invitation1 from "./views/page/Invitation/Ininvitation1/Ininvitation1";
import Invitation2 from "./views/page/Invitation/Ininvitation2/Ininvitation2";
import Invitation3 from "./views/page/Invitation/Ininvitation3/Ininvitation3";
import Invitation4 from "./views/page/Invitation/Ininvitation4/Ininvitation4";
import Invitation5 from "./views/page/Invitation/Ininvitation5/Ininvitation5";
import LastPage from "./views/page/Invitation/LastPage/LastPage";


function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div>
				<Routes>
					<Route exact path="/" element={<InvitePage />} />
					<Route exact path="/invite1" element={<Invitation1 />} />
					<Route exact path="/invite2" element={<Invitation2 />} />
					<Route exact path="/invite3" element={<Invitation3 />} />
					<Route exact path="/invite4" element={<Invitation4 />} />
					<Route exact path="/invite5" element={<Invitation5 />} />
					<Route exact path="/last" element={<LastPage />} />
				</Routes>
			</div>
		</Suspense>
	);
}

export default App;
