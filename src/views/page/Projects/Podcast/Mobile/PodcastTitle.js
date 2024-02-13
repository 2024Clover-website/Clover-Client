import React, { useEffect } from "react";

import styles from "../../../../../styles/Projects/Docent/Mobile/DocentTitle.module.css";
import podStyle from "../../../../../styles/Projects/Podcast/Mobile/PodcastTitle.module.css";
import { useNavigate } from "react-router-dom";

function PodcastTitle() {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			window.location.href = "/projects/podcast/content";
		}, 5000);
	}, []);

	return (
		<div
			style={{ width: window.screen.width, height: window.screen.height }}
			className={styles.container}
		>
			<svg
				width="40"
				height="40"
				viewBox="0 0 40 40"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={styles.backButton}
				onClick={() => {
					navigate(-1);
				}}
			>
				<circle cx="20" cy="20" r="20" fill="black" />
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M22.6705 12.3347C23.1098 12.781 23.1098 13.5047 22.6705 13.951L16.716 20L22.6705 26.049C23.1098 26.4953 23.1098 27.219 22.6705 27.6653C22.2312 28.1116 21.5188 28.1116 21.0795 27.6653L14.3295 20.8081C13.8902 20.3618 13.8902 19.6382 14.3295 19.1919L21.0795 12.3347C21.5188 11.8884 22.2312 11.8884 22.6705 12.3347Z"
					fill="white"
				/>
			</svg>
			<div className={styles.demoLoadingBar}></div>
			<div className={styles.category}>
				<p>PODCAST</p>
			</div>
			<div className={podStyle.title}>
				<p>자고 일어났더니 과제가 증발했다</p>
			</div>
			<div className={styles.designer}>
				<p>옥수수수염</p>
			</div>
			<div className={styles.designer}>
				<div
					style={{
						width: 30,
						height: 30,
						marginRight: 10,
						borderRadius: "50%",
						backgroundColor: "blue",
					}}
				></div>
				<p>강지수·시각디자인 3D</p>
			</div>
			<div className={styles.designer}>
				<div
					style={{
						width: 30,
						height: 30,
						marginRight: 10,
						borderRadius: "50%",
						backgroundColor: "blue",
					}}
				></div>
				<p>강지수·시각디자인 3D</p>
			</div>
			<div className={styles.designer}>
				<div
					style={{
						width: 30,
						height: 30,
						marginRight: 10,
						borderRadius: "50%",
						backgroundColor: "blue",
					}}
				></div>
				<p>강지수·시각디자인 3D</p>
			</div>
			<div className={styles.designer}>
				<div
					style={{
						width: 30,
						height: 30,
						marginRight: 10,
						borderRadius: "50%",
						backgroundColor: "blue",
					}}
				></div>
				<p>강지수·시각디자인 3D</p>
			</div>
		</div>
	);
}

export default PodcastTitle;
