import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import About from "./views/page/About/About";
import Header from "./views/page/About/components/Header";

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Header />
			<Routes>
				<Route exact path="/" element={<About />} />
			</Routes>
		</Suspense>
	);
}

export default App;
