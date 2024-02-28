import React from "react";

import styles from "../../../../../styles/Projects/Docent/PC/Announcement.module.css";

import { useNavigate } from "react-router-dom";

function Announcement() {
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<img
                src="../../../img/뒤로가기.png"
				className={styles.backButton}
				onClick={() => {
					navigate(-1);
				}}
			/>
			<div className={styles.docentContainer}>
				<div className={styles.podcastbox}>
					<p>팟캐스트 : 러닝타임 9분 42초</p>
				</div>
					<p>Dopamine Addiction: Visualization of symptoms</p>
			</div>
			<div className={styles.LineContainer}></div>
			<div className={styles.qrContainer}>
				<div className={styles.imgContainer}>
					<img src="../img/podcast qr_Image.png" alt="" />
				</div>
				<div className={styles.textContainer}>
					<p1>모바일로 봐주세요!</p1> <br />
					<p2>
						해당 콘텐츠는 스마트폰으로 감상할 수 있어요 <br />
						카메라로 좌측의 QR코드를 찍어주세요
					</p2>
				</div>
			</div>
		</div>
	);
}

export default Announcement;
