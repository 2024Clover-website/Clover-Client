import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

//페이지 연결
import LastPage from "./views/page/Invitation/LastPage/LastPage";

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div>
				<Routes>
					<Route exact path="/" element={<LastPage />} />
				</Routes>
			</div>
		</Suspense>
	);
}

export default App;
