import React, { useState, useEffect } from "react";
import moment from "moment";
import webanncouncementStyles from "../../../../views/style/Invitation/WebAnnouncement/Announcement.module.css";

function AnnouncementT2() {
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
	<div className={webanncouncementStyles.webContainer}>
		<div className={webanncouncementStyles.CT1}>
			<div className={webanncouncementStyles.webmainContainer1}>
				<div className={webanncouncementStyles.webtimerContainer}>
					<div className={webanncouncementStyles.Textbox}>
						<p>전시까지 남은 시간</p>
					</div>
					<div className={webanncouncementStyles.blankLine1}>
					</div>
					<div className={webanncouncementStyles.timerContainer}>
						<p id="timer">{timeRemaining}</p>
					</div>
				</div>
				<div className={webanncouncementStyles.blankLine2}>
				</div>
				<div className={webanncouncementStyles.blankLine}>
				</div>
				<div className={webanncouncementStyles.blankLine2}>
				</div>
			</div>
			<div className={webanncouncementStyles.webmainContainer2}>
				<div className={webanncouncementStyles.qrContainer}>
					<img src="/laterQR.png" alt="이따QR코드" /> {/* alt 속성 추가 */}
				</div>
				<div className={webanncouncementStyles.blankLine3}>
				</div>
				<div className={webanncouncementStyles.textContent}>
					<div className={webanncouncementStyles.textContent1}>
						<p>모바일로 봐주세요!</p>
					</div>
					<div className={webanncouncementStyles.textContent2}>
						<p>
						초대장은 모바일로 확인할 수 있어요
							<br />
						카메라로 아래 QR 코드를 찍어 접속해주세요
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);
}
export default AnnouncementT2;
