import React from "react";

import styles from "../../../../../styles/Projects/Docent/PC/Announcement.module.css";
import { IoChevronBackCircle } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

function Announcement() {
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<IoChevronBackCircle
				className={styles.backButton}
				onClick={() => {
					navigate(-1);
				}}
			/>
			<div className={styles.docentContainer}>
				<p>도슨트</p>
			</div>
			<div className={styles.titleContainer}>
				<p>Dopamine Addiction: Visualization of symptoms</p>
			</div>
			<div className={styles.designerContainer}>
				<p>강지수·박규리</p>
			</div>
			<div className={styles.qrContainer}>
				<img src="../../../../../../public/mobileInvitationQRcode.jpeg" alt />
			</div>
			<div className={styles.textContainer}>
				<p>
					해당 콘텐츠는 스마트폰으로 감상할 수 있어요
					<br />
					카메라로 상단의 QR코드를 찍어주세요
				</p>
			</div>
			<div className={styles.timeContainer}>
				<p>러닝타임 2:00</p>
			</div>
		</div>
	);
}

export default Announcement;
