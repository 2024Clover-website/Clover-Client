import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import About from "./views/page/About/About";
import Header from "./views/components/Header";
import Footer from "./views/components/Footer";

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div>
				<Header />
				<Routes>
					<Route exact path="/" element={<About />} />
				</Routes>
				<Footer />
			</div>
		</Suspense>
	);
}

export default App;
