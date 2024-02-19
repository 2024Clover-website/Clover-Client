import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import REC from "./views/page/REC/REC";
import REC2 from "./views/page/REC/REC2";
import REC3 from "./views/page/REC/REC3";
import REC3sec from "./views/page/REC/REC3sec";
import REC4 from "./views/page/REC/REC4";
import REC5 from "./views/page/REC/REC5";

import About from "./views/page/About/About";
import Header from "./views/components/Header";
import Footer from "./views/components/Footer";
// import { Recoverable } from "repl";

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
					<Route exact path="/About" element={<About />} />
					<Route exact path="/REC/start" element={<REC/>} />
					<Route exact path="/REC/naming" element={<REC2/>}/>
					<Route exact path="/REC/stimulation" element={<REC3/>}/>
					<Route exact path="/REC/stimulation/self" element={<REC3sec/>}/>
					<Route exact path="/REC/graphic" element={<REC4/>}/>
					<Route exact path="/REC/color" element={<REC5/>}/>
				</Routes>
				<Footer />
			</div>
		</Suspense>
	);
}

export default App;
