import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import About from "./views/page/About/About";
import Header from "./views/components/Header";
import Footer from "./views/components/Footer";

function App() {

	const isPc = useMediaQuery({
		query : "(min-width:1195px)"
	});
	const isTablet = useMediaQuery({
		query : "(min-width:376px) and (max-width:1194px)"
	});
	const isMobile = useMediaQuery({
		query : "(max-width:375px)"
	});


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
