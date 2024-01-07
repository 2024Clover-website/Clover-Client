import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./views/page/Home/HomePage";

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
