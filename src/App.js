import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//페이지 연결
import InvitePage from "./views/page/Invitation/InvitePage/InvitePage";
import Ininvitation1 from "./views/page/Invitation/Ininvitation1/Ininvitation1";
import Ininvitation2 from "./views/page/Invitation/Ininvitation2/Ininvitation2";
import Ininvitation3 from "./views/page/Invitation/Ininvitation3/Ininvitation3";
import Ininvitation4 from "./views/page/Invitation/Ininvitation4/Ininvitation4";
import Ininvitation5 from "./views/page/Invitation/Ininvitation5/Ininvitation5";
import LastPage from "./views/page/Invitation/LastPage/LastPage";

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div>
				<Routes>
					<Route exact path="/" element={<HomePage />} />
				</Routes>
			</div>
		</Suspense>
	);
}

export default App;
