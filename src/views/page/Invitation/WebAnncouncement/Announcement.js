import React, { useCallback } from "react";
import moment from "moment";

import "../../../../styles/invitation/WebAnnouncement/Announcement.css";

function Announcement() {
	const countDownTimer = useCallback((date) => {
		let _vDate = moment(date);
		let _second = 1000;
		let _minute = _second * 60;
		let _hour = _minute * 60;
		let timer;

		function showRemaining() {
			try {
				let now = moment();
				let distDt = _vDate - now;

				if (distDt < 0) {
					clearInterval(timer);
					let HapDate = "00:00:00";
					document.getElementById("timer").innerHTML = HapDate;
					return;
				}
				let hours = Math.floor(distDt / _hour);
				let minutes = Math.floor((distDt % _hour) / _minute);
				let seconds = Math.floor((distDt % _minute) / _second);

				let HapDate =
					hours.toString().padStart(2, "0") +
					":" +
					minutes.toString().padStart(2, "0") +
					":" +
					seconds.toString().padStart(2, "0");
				document.getElementById("timer").innerHTML = HapDate;
			} catch (e) {
				console.log(e);
			}
		}
		timer = setInterval(showRemaining, 1000);
	}, []);

	return (
		<div className="container">
			<div className="title">
				<p>모바일로 봐주세요!</p>
			</div>
			<div className="text-content">
				<p>
					초대장은 모바일로 확인할 수 있어요
					<br />
					카메라로 아래 QR 코드를 찍어 접속해주세요
				</p>
			</div>
			<div className="qr-container">
				<img src="./mobileInvitationQRcode.jpeg" alt />
			</div>
			<div className="timer-container">
				<p id="timer">{countDownTimer("2024-03-02")}</p>
			</div>
		</div>
	);
}

export default Announcement;
