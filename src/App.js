


import PC from "./views/PC.js";
import MOBILE from "./views/MOBILE.js";

import React, { Suspense, useEffect } from "react";

import { useMediaQuery } from "react-responsive";


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

	
//   const currentSubdomain = window.location.host.split(".")[0];
  useEffect(()=>{
    // if(currentSubdomain==="m"&&window.innerWidth>450){
    //   //공용
    //   window.location.replace("https://www.clover-inarow.site/invite/public");
    // }else if(currentSubdomain==="ts"&&window.innerWidth>450){
    //   //태산
    //   window.location.replace("https://www.clover-inarow.site/invite/태산");
    // }else if(currentSubdomain==="it"&&window.innerWidth>450){
    //   //이따
    //   window.location.replace("https://www.clover-inarow.site/invite/이따");
    // }else if(currentSubdomain==="vm"&&window.innerWidth>450){
    //   //VIBE MAKERS
    //   window.location.replace("https://www.clover-inarow.site/invite/VIBEMAKERS");
    // }else if(currentSubdomain==="dj"&&window.innerWidth>450){
    //   //도파민 중독자들
    //   window.location.replace("https://www.clover-inarow.site/invite/도파민중독자들");
    // }else if(currentSubdomain==="os"&&window.innerWidth>450){
    //   //옥수수수염
    //   window.location.replace("https://www.clover-inarow.site/invite/옥수수수염");
    // }

    var currentHost = window.location.host;
    var currentPath = window.location.pathname;
	// let today = new Date();
	// const isDay= new Date(today.getFullYear,1,28);

    console.log(currentHost);
    console.log(currentPath);
	
		// if(currentSubdomain==="www"&&currentPath==="/"){
		// window.location.replace("https://www.clover-inarow.site/invite/public")
		// }
		// if(currentHost === "m.clover-inarow.site"&&currentPath==="/"){
		// 	//공용
		// 	window.location.replace("https://m.clover-inarow.site/invite/public");
		// } else if(currentHost === "ts.clover-inarow.site"&&currentPath==="/"){
		// 	//태산
		// 	window.location.replace("https://ts.clover-inarow.site/invite/태산");
		// } else if(currentHost === "it.clover-inarow.site"&&currentPath==="/"){
		// 	//이따
		// 	window.location.replace("https://it.clover-inarow.site/invite/이따");
		// } else if(currentHost === "vm.clover-inarow.site"&&currentPath==="/"){
		// 	//VIBE MAKERS
		// 	window.location.replace("https://vm.clover-inarow.site/invite/VIBEMAKERS");
		// } else if(currentHost === "dj.clover-inarow.site"&&currentPath==="/"){
		// 	//도파민 중독자들
		// 	window.location.replace("https://dj.clover-inarow.site/invite/도파민중독자들");
		// } else if(currentHost === "os.clover-inarow.site"&&currentPath==="/"){
		// 	//옥수수수염
		// 	window.location.replace("https://os.clover-inarow.site/invite/옥수수수염");
		// }
		
		
	

	
});

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
