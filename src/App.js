import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

//페이지 연결
import Invitation1 from "./views/page/Invitation/Ininvitation1/Ininvitation1";
import Invitation2 from "./views/page/Invitation/Ininvitation2/Ininvitation2";
import Invitation3 from "./views/page/Invitation/Ininvitation3/Ininvitation3";
import Invitation4 from "./views/page/Invitation/Ininvitation4/Ininvitation4";
import Invitation5 from "./views/page/Invitation/Ininvitation5/Ininvitation5";
import InvitePage from "./views/page/Invitation/InvitePage/InvitePage";
import LastPage from "./views/page/Invitation/LastPage/LastPage";
import Announcement from "./views/page/Invitation/WebAnncouncement/Announcement";
//태산
import InvitationT1 from "./views/page/Invitation/Ininvitation1/IninvitationT1";
import Invitation2T1 from "./views/page/Invitation/Ininvitation2/Ininvitation2T1";
import Invitation3T1 from "./views/page/Invitation/Ininvitation3/Ininvitation3T1";
import Invitation4T1 from "./views/page/Invitation/Ininvitation4/Ininvitation4T1";
import Invitation5T1 from "./views/page/Invitation/Ininvitation5/Ininvitation5T1";
import InvitePageT1 from "./views/page/Invitation/InvitePage/InvitePageT1";
import LastPageT1 from "./views/page/Invitation/LastPage/LastPageT1";
import AnnouncementT1 from "./views/page/Invitation/WebAnncouncement/AnnouncementT1";
//이따
import InvitationT2 from "./views/page/Invitation/Ininvitation1/IninvitationT2";
import Invitation2T2 from "./views/page/Invitation/Ininvitation2/Ininvitation2T2";
import Invitation3T2 from "./views/page/Invitation/Ininvitation3/Ininvitation3T2";
import Invitation4T2 from "./views/page/Invitation/Ininvitation4/Ininvitation4T2";
import Invitation5T2 from "./views/page/Invitation/Ininvitation5/Ininvitation5T2";
import InvitePageT2 from "./views/page/Invitation/InvitePage/InvitePageT2";
import LastPageT2 from "./views/page/Invitation/LastPage/LastPageT2";
import AnnouncementT2 from "./views/page/Invitation/WebAnncouncement/AnnouncementT2";
//VIBE MAKERS
import InvitationT3 from "./views/page/Invitation/Ininvitation1/IninvitationT3";
import Invitation2T3 from "./views/page/Invitation/Ininvitation2/Ininvitation2T3";
import Invitation3T3 from "./views/page/Invitation/Ininvitation3/Ininvitation3T3";
import Invitation4T3 from "./views/page/Invitation/Ininvitation4/Ininvitation4T3";
import Invitation5T3 from "./views/page/Invitation/Ininvitation5/Ininvitation5T3";
import InvitePageT3 from "./views/page/Invitation/InvitePage/InvitePageT3";
import LastPageT3 from "./views/page/Invitation/LastPage/LastPageT3";
import AnnouncementT3 from "./views/page/Invitation/WebAnncouncement/AnnouncementT3";
//도파민중독자들
import InvitationT4 from "./views/page/Invitation/Ininvitation1/IninvitationT4";
import Invitation2T4 from "./views/page/Invitation/Ininvitation2/Ininvitation2T4";
import Invitation3T4 from "./views/page/Invitation/Ininvitation3/Ininvitation3T4";
import Invitation4T4 from "./views/page/Invitation/Ininvitation4/Ininvitation4T4";
import Invitation5T4 from "./views/page/Invitation/Ininvitation5/Ininvitation5T4";
import InvitePageT4 from "./views/page/Invitation/InvitePage/InvitePageT4";
import LastPageT4 from "./views/page/Invitation/LastPage/LastPageT4";
import AnnouncementT4 from "./views/page/Invitation/WebAnncouncement/AnnouncementT4";
//옥수수수염
import InvitationT5 from "./views/page/Invitation/Ininvitation1/IninvitationT5";
import Invitation2T5 from "./views/page/Invitation/Ininvitation2/Ininvitation2T5";
import Invitation3T5 from "./views/page/Invitation/Ininvitation3/Ininvitation3T5";
import Invitation4T5 from "./views/page/Invitation/Ininvitation4/Ininvitation4T5";
import Invitation5T5 from "./views/page/Invitation/Ininvitation5/Ininvitation5T5";
import InvitePageT5 from "./views/page/Invitation/InvitePage/InvitePageT5";
import LastPageT5 from "./views/page/Invitation/LastPage/LastPageT5";
import AnnouncementT5 from "./views/page/Invitation/WebAnncouncement/AnnouncementT5";

function App() {
	const Mobile = ({ children }) => {
		const isMobile = useMediaQuery({
			query: "(max-width:450px)",
		});
		return <>{isMobile && children}</>;
	};

	const Pc = ({ children }) => {
		const isPc = useMediaQuery({
			query: "(min-width:450px)",
		});
		return <>{isPc && children}</>;
	};
  const currentSubdomain = window.location.host.split(".")[0];
  useEffect(()=>{
    if(currentSubdomain==="m"&&window.innerWidth>450){
      //공용
      window.location.replace("https://www.clover-inarow.site/invite/public");
    }else if(currentSubdomain==="ts"&&window.innerWidth>450){
      //태산
      window.location.replace("https://www.clover-inarow.site/invite/태산");
    }else if(currentSubdomain==="it"&&window.innerWidth>450){
      //이따
      window.location.replace("https://www.clover-inarow.site/invite/이따");
    }else if(currentSubdomain==="vm"&&window.innerWidth>450){
      //VIBE MAKERS
      window.location.replace("https://www.clover-inarow.site/invite/VIBEMAKERS");
    }else if(currentSubdomain==="dj"&&window.innerWidth>450){
      //도파민 중독자들
      window.location.replace("https://www.clover-inarow.site/invite/도파민중독자들");
    }else if(currentSubdomain==="os"&&window.innerWidth>450){
      //옥수수수염
      window.location.replace("https://www.clover-inarow.site/invite/옥수수수염");
    }

    var currentHost = window.location.host;
    var currentPath = window.location.pathname;
    console.log(currentHost);
    console.log(currentPath);
    if(currentSubdomain==="www"&&currentPath==="/"){
      window.location.replace("https://www.clover-inarow.site/invite/public")
    }
    if(currentHost === "m.clover-inarow.site"&&currentPath==="/"){
        //공용
        window.location.replace("https://m.clover-inarow.site/invite/public");
    } else if(currentHost === "ts.clover-inarow.site"&&currentPath==="/"){
        //태산
        window.location.replace("https://ts.clover-inarow.site/invite/태산");
    } else if(currentHost === "it.clover-inarow.site"&&currentPath==="/"){
        //이따
        window.location.replace("https://it.clover-inarow.site/invite/이따");
    } else if(currentHost === "vm.clover-inarow.site"&&currentPath==="/"){
        //VIBE MAKERS
        window.location.replace("https://vm.clover-inarow.site/invite/VIBEMAKERS");
    } else if(currentHost === "dj.clover-inarow.site"&&currentPath==="/"){
        //도파민 중독자들
        window.location.replace("https://dj.clover-inarow.site/invite/도파민중독자들");
    } else if(currentHost === "os.clover-inarow.site"&&currentPath==="/"){
        //옥수수수염
        window.location.replace("https://os.clover-inarow.site/invite/옥수수수염");
    }
    
  })
 
	return (
		<Suspense fallback={<div>Loading...</div>}>
      {currentSubdomain ==="www" &&(
        <Pc>
          <Routes>
            <Route exact path="/invite/public" element={<Announcement />} />
            <Route exact path="/invite/태산" element={<AnnouncementT1 />} />
            <Route exact path="/invite/이따" element={<AnnouncementT2 />} />
            <Route exact path="/invite/VIBEMAKERS" element={<AnnouncementT3 />} />
            <Route exact path="/invite/도파민중독자들" element={<AnnouncementT4 />} />
            <Route exact path="/invite/옥수수수염" element={<AnnouncementT5 />} />
          </Routes>
			</Pc>
      )}
      {currentSubdomain==="m"&&(
        

        <Mobile>
				  <Routes>
            <Route exact path="/invite/public" element={<InvitePage />} />
            <Route exact path="/invite/public/1" element={<Invitation1 />} />
            <Route exact path="/invite/public/2" element={<Invitation2 />} />
            <Route exact path="/invite/public/3" element={<Invitation3 />} />
            <Route exact path="/invite/public/4" element={<Invitation4 />} />
            <Route exact path="/invite/public/5" element={<Invitation5 />} />
            <Route exact path="/invite/public/6" element={<LastPage />} />
          </Routes>
        </Mobile>
      )}
      {currentSubdomain==="ts"&&(
        <Mobile>
				  <Routes>
            <Route exact path="/invite/태산" element={<InvitePageT1 />} />
            <Route exact path="/invite/태산/1" element={<InvitationT1 />} />
            <Route exact path="/invite/태산/2" element={<Invitation2T1 />} />
            <Route exact path="/invite/태산/3" element={<Invitation3T1 />} />
            <Route exact path="/invite/태산/4" element={<Invitation4T1 />} />
            <Route exact path="/invite/태산/5" element={<Invitation5T1 />} />
            <Route exact path="/invite/태산/6" element={<LastPageT1 />} />
          </Routes>
        </Mobile>
      )}
      {currentSubdomain==="it"&&(
        <Mobile>
				  <Routes>
            <Route exact path="/invite/이따" element={<InvitePageT2 />} />
            <Route exact path="/invite/이따/1" element={<InvitationT2 />} />
            <Route exact path="/invite/이따/2" element={<Invitation2T2 />} />
            <Route exact path="/invite/이따/3" element={<Invitation3T2 />} />
            <Route exact path="/invite/이따/4" element={<Invitation4T2 />} />
            <Route exact path="/invite/이따/5" element={<Invitation5T2 />} />
            <Route exact path="/invite/이따/6" element={<LastPageT2 />} />
          </Routes>
        </Mobile>
      )}
      {currentSubdomain==="vm"&&(
        <Mobile>
				  <Routes>
            <Route exact path="/invite/VIBEMAKERS" element={<InvitePageT3 />} />
            <Route exact path="/invite/VIBEMAKERS/1" element={<InvitationT3 />} />
            <Route exact path="/invite/VIBEMAKERS/2" element={<Invitation2T3 />} />
            <Route exact path="/invite/VIBEMAKERS/3" element={<Invitation3T3 />} />
            <Route exact path="/invite/VIBEMAKERS/4" element={<Invitation4T3 />} />
            <Route exact path="/invite/VIBEMAKERS/5" element={<Invitation5T3 />} />
            <Route exact path="/invite/VIBEMAKERS/6" element={<LastPageT3 />} />
          </Routes>
        </Mobile>
      )}
      {currentSubdomain==="dj"&&(
        <Mobile>
				  <Routes>
            <Route exact path="/invite/도파민중독자들" element={<InvitePageT4 />} />
            <Route exact path="/invite/도파민중독자들/1" element={<InvitationT4 />} />
            <Route exact path="/invite/도파민중독자들/2" element={<Invitation2T4 />} />
            <Route exact path="/invite/도파민중독자들/3" element={<Invitation3T4 />} />
            <Route exact path="/invite/도파민중독자들/4" element={<Invitation4T4 />} />
            <Route exact path="/invite/도파민중독자들/5" element={<Invitation5T4 />} />
            <Route exact path="/invite/도파민중독자들/6" element={<LastPageT4 />} />
          </Routes>
        </Mobile>
      )}
      {currentSubdomain==="os"&&(
        <Mobile>
				  <Routes>
            <Route exact path="/invite/옥수수수염" element={<InvitePageT5 />} />
            <Route exact path="/invite/옥수수수염/1" element={<InvitationT5 />} />
            <Route exact path="/invite/옥수수수염/2" element={<Invitation2T5 />} />
            <Route exact path="/invite/옥수수수염/3" element={<Invitation3T5 />} />
            <Route exact path="/invite/옥수수수염/4" element={<Invitation4T5 />} />
            <Route exact path="/invite/옥수수수염/5" element={<Invitation5T5 />} />
            <Route exact path="/invite/옥수수수염/6" element={<LastPageT5 />} />
          </Routes>
        </Mobile>
      )}
      

      
      {/* <Pc>
          <Routes>
            <Route exact path="/invite/public" element={<Announcement />} />
            <Route exact path="/invite/태산" element={<AnnouncementT1 />} />
            <Route exact path="/invite/이따" element={<AnnouncementT2 />} />
            <Route exact path="/invite/VIBEMAKERS" element={<AnnouncementT3 />} />
            <Route exact path="/invite/도파민중독자들" element={<AnnouncementT4 />} />
            <Route exact path="/invite/옥수수수염" element={<AnnouncementT5 />} />
          </Routes>
			</Pc>
			<Mobile>
				<Routes>
					<Route exact path="/invite/public" element={<InvitePage />} />
					<Route exact path="/invite/태산" element={<InvitePageT1 />} />
					<Route exact path="/invite/이따" element={<InvitePageT2 />} />
					<Route exact path="/invite/VIBEMAKERS" element={<InvitePageT3 />} />
					<Route exact path="/invite/도파민중독자들" element={<InvitePageT4 />} />
					<Route exact path="/invite/옥수수수염" element={<InvitePageT5 />} />

					<Route exact path="/invite/public/1" element={<Invitation1 />} />
					<Route exact path="/invite/태산/1" element={<InvitationT1 />} />
					<Route exact path="/invite/이따/1" element={<InvitationT2 />} />
					<Route exact path="/invite/VIBEMAKERS/1" element={<InvitationT3 />} />
					<Route exact path="/invite/도파민중독자들/1" element={<InvitationT4 />} />
					<Route exact path="/invite/옥수수수염/1" element={<InvitationT5 />} />

					<Route exact path="/invite/public/2" element={<Invitation2 />} />
					<Route exact path="/invite/태산/2" element={<Invitation2T1 />} />
					<Route exact path="/invite/이따/2" element={<Invitation2T2 />} />
					<Route exact path="/invite/VIBEMAKERS/2" element={<Invitation2T3 />} />
					<Route exact path="/invite/도파민중독자들/2" element={<Invitation2T4 />} />
					<Route exact path="/invite/옥수수수염/2" element={<Invitation2T5 />} />

					<Route exact path="/invite/public/3" element={<Invitation3 />} />
					<Route exact path="/invite/태산/3" element={<Invitation3T1 />} />
					<Route exact path="/invite/이따/3" element={<Invitation3T2 />} />
					<Route exact path="/invite/VIBEMAKERS/3" element={<Invitation3T3 />} />
					<Route exact path="/invite/도파민중독자들/3" element={<Invitation3T4 />} />
					<Route exact path="/invite/옥수수수염/3" element={<Invitation3T5 />} />

					<Route exact path="/invite/public/4" element={<Invitation4 />} />
					<Route exact path="/invite/태산/4" element={<Invitation4T1 />} />
					<Route exact path="/invite/이따/4" element={<Invitation4T2 />} />
					<Route exact path="/invite/VIBEMAKERS/4" element={<Invitation4T3 />} />
					<Route exact path="/invite/도파민중독자들/4" element={<Invitation4T4 />} />
					<Route exact path="/invite/옥수수수염/4" element={<Invitation4T5 />} />

					<Route exact path="/invite/public/5" element={<Invitation5 />} />
					<Route exact path="/invite/태산/5" element={<Invitation5T1 />} />
					<Route exact path="/invite/이따/5" element={<Invitation5T2 />} />
					<Route exact path="/invite/VIBEMAKERS/5" element={<Invitation5T3 />} />
					<Route exact path="/invite/도파민중독자들/5" element={<Invitation5T4 />} />
					<Route exact path="/invite/옥수수수염/5" element={<Invitation5T5 />} />

					<Route exact path="/invite/public/6" element={<LastPage />} />
					<Route exact path="/invite/태산/6" element={<LastPageT1 />} />
					<Route exact path="/invite/이따/6" element={<LastPageT2 />} />
					<Route exact path="/invite/VIBEMAKERS/6" element={<LastPageT3 />} />
					<Route exact path="/invite/도파민중독자들/6" element={<LastPageT4 />} />
					<Route exact path="/invite/옥수수수염/6" element={<LastPageT5 />} />
				</Routes>
			</Mobile> */}
		</Suspense>
	);
}

export default App;
