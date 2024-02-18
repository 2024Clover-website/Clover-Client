import React, { useState, useEffect } from "react";
import moment from "moment";
import "../../../../styles/invitation/WebAnnouncement/Announcement.css";
import video6 from '../../../../video/dopaminTeamVideo.mp4';

function AnnouncementT4() {
const [timeRemaining, setTimeRemaining] = useState("");

useEffect(() => {
    const countDownTimer = () => {
    let vDate = moment("2024-02-29");
    let interval = setInterval(() => {
        let now = moment();
        let distDt = vDate - now;
        if (distDt < 0) {
        clearInterval(interval);
        setTimeRemaining("00:00:00:00");
        return;
        }
        let days = Math.floor(distDt / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distDt % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distDt % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distDt % (1000 * 60)) / 1000);
        setTimeRemaining(
        `${days.toString().padStart(2, "0")}:${hours.toString().padStart(
            2,
            "0"
        )}:${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`
        );
    }, 1000);
      return () => clearInterval(interval); // clearInterval을 반환 함수로 이동
    };
    countDownTimer();
}, []);

return (
	<div className="webContainer">
		<video style={{height: window.screen.height}} loop muted autoPlay playsInline>
			<source src={video6} type='video/mp4'/>
		</video>
		<div className="CT1">
		</div>
		<div className="webmainContainer1">
			<div className="webtimerContainer">
				<div className="Textbox">
					<p>전시까지 남은 시간</p>
				</div>
				<div className="blankLine1">
				</div>
				<div className="timer-container">
					<p id="timer">{timeRemaining}</p>
				</div>
			</div>
			<div className="blankLine2">
			</div>
			<div className="blankLine">
			</div>
			<div className="blankLine2">
			</div>
		</div>
		<div className="webmainContainer2">
			<div className="qr-container">
				  <img src="/dopaminQR.png" alt="도파민R코드" /> {/* alt 속성 추가 */}
			</div>
			<div className="blankLine3">
			</div>
			<div className="text-content">
				<div className="text-content1">
					<p>모바일로 봐주세요!</p>
				</div>
				<div className="text-content2">
					<p>
					초대장은 모바일로 확인할 수 있어요
						<br />
					   카메라로 아래 QR 코드를 찍어 접속해주세요
				 </p>
				</div>
			</div>
		 </div>
		 <div className="CT2">
		</div>
	</div>
);
}

export default AnnouncementT4;
