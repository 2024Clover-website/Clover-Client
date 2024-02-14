import React from "react";
import { IoPlayCircle } from "react-icons/io5";
import styles from "../../../../styles/Projects/PC/Projects.module.css";

function Projects() {
	function handleDocentButton() {
		window.location.href = "/projects/docentAnnounce";
	}

	function handlePodcastButton() {
		window.location.href = "/projects/podcastAnnounce";
	}

	return (
		<div className={styles.container}>
			<div className={styles.CTMain}>
				<img alt src="/img/CTMain.png" />
				<div className={styles.CTA}>
					<img alt src="/img/CTA.png" />
					<div className={styles.alphabetA}>
						<img alt src="/img/alphabetA.png" />
					</div>
				</div>
				<div className={styles.CTB}>
					<img alt src="/img/CTB.png" />
					<div className={styles.alphabetB}>
						<img alt src="/img/alphabetB.png" />
					</div>
				</div>
				<div className={styles.CTC}>
					<img alt src="/img/CTC.png" />
					<div className={styles.alphabetC}>
						<img alt src="/img/alphabetC.png" />
					</div>
				</div>
				<div className={styles.CTD}>
					<img alt src="/img/CTD.png" />
					<div className={styles.alphabetD}>
						<img alt src="/img/alphabetD.png" />
					</div>
				</div>
				<div className={styles.CTE}>
					<img alt src="/img/CTE.png" />
					<div className={styles.alphabetE}>
						<img alt src="/img/alphabetE.png" />
					</div>
				</div>
				<div className={styles.CTF}>
					<img alt src="/img/CTF.png" />
					<div className={styles.alphabetF}>
						<img alt src="/img/alphabetF.png" />
					</div>
				</div>
				<div className={styles.CT01}>
					<img alt src="/img/CT01.png" />
				</div>
				<div className={styles.CT02}>
					<img alt src="/img/CT02.png" />
				</div>
				<div className={styles.CT03}>
					<img alt src="/img/CT03.png" />
				</div>
			</div>
			<div className={styles.descriptionContainer}>
				<div className={styles.titleBox}>
					<div className={styles.titleBoxHead}>
						<p className={styles.title}>
							Dopamine Addiction: Visualization of symptoms
						</p>
						<p className={styles.section}>D</p>
					</div>
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
		</div>
	);
}

export default Projects;
