import React from "react";

import styles from "../../../../styles/Projects/Mobile/Projects.module.css";
import { IoPlayCircle } from "react-icons/io5";

function Projects() {
	function handleDocentButton() {
		window.location.href = "/projects/docentAnnounce";
	}

	function handlePodcastButton() {
		window.location.href = "/projects/podcastAnnounce";
	}

	return (
		<div className={styles.container}>
			<div className={styles.descriptionContainer}>
				<div className={styles.titleBox}>
					<p className={styles.section}>D</p>
					<p className={styles.title}>
						Dopamine Addiction: Visualization of symptoms
					</p>

					<p className={styles.category}>3D Motion Graphic</p>
				</div>

				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>디자이너</p>
					</div>
					<p className={styles.tagContents}>강지수·박규리</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>도슨트</p>
					</div>
					<p className={styles.tagContents}>
						2:00
						<IoPlayCircle
							className={styles.playButton}
							onClick={handleDocentButton}
						/>
					</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>팟캐스트</p>
					</div>
					<p className={styles.tagContents}>
						10:00
						<IoPlayCircle
							className={styles.playButton}
							onClick={handlePodcastButton}
						/>
					</p>
				</div>
			</div>
			<div className={styles.ps}>
				<p>D팀과 E팀은 팟캐스트를 공유합니다.</p>
			</div>
		</div>
	);
}

export default Projects;
