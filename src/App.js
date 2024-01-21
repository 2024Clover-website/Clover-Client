import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//페이지 연결
import InvitePage from "./views/page/Invitation/InvitePage/InvitePage";
import LastPage from "./views/page/Invitation/LastPage/LastPage";

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div>
				<Routes>
					<Route exact path="/" element={<InvitePage />} />
					<Route exact path="/" element={<LastPage />} />
				</Routes>
			</div>
		</Suspense>
	);
}

export default App;
