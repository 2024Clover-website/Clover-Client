import React from "react";

import styles from "../../../../styles/Projects/PC/Projects.module.css";
import { IoPlayCircle } from "react-icons/io5";

function Projects() {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<img alt src="./logo512.png" />
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
						<IoPlayCircle className={styles.playButton} />
					</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>팟캐스트</p>
					</div>
					<p className={styles.tagContents}>
						10:00
						<IoPlayCircle className={styles.playButton} />
					</p>
				</div>
			</div>
		</div>
	);
}

export default Projects;
