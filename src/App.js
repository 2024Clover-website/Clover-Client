import React, { Suspense } from "react";
import { useMediaQuery } from "react-responsive";

import MOBILE from "./views/MOBILE";
import PC from "./views/PC";

function App() {
	const Mobile = ({ children }) => {
		const isMobile = useMediaQuery({
			query: "(max-width:768px)",
		});
		return <>{isMobile && children}</>;
	};

	const Pc = ({ children }) => {
		const isPc = useMediaQuery({
			query: "(min-width:769px)",
		});
		return <>{isPc && children}</>;
	};

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Pc>
				<PC />
			</Pc>
			<Mobile>
				<MOBILE />
			</Mobile>
		</Suspense>
	);
}

export default App;
