import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import styles from "../../../../../styles/Projects/Docent/Mobile/DocentContent.module.css";

function PodcastContent() {
	const navigate = useNavigate();

	const [progress, setProgress] = useState(100);
	const [speed, setSpeed] = useState(1);
	const [isMuted, setIsMuted] = useState(false);

	const handleSpeedClick = () => {
		if (speed !== 2) setSpeed(speed * 2);
		else setSpeed(0.5);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((progress) => progress - 0.01);
		}, 10);
	}, []);

	return (
		<div
			style={{ width: window.screen.width, height: window.screen.height }}
			className={styles.background}
		>
			{/** 헤더 */}
			<div className={styles.header}>
				{/** 음소거 버튼 */}
				<div
					className={styles.soundButton}
					onClick={() => {
						setIsMuted(!isMuted);
					}}
				>
					{isMuted ? (
						<img alt src={process.env.PUBLIC_URL + "/off.png"} />
					) : (
						<img alt src={process.env.PUBLIC_URL + "/on.png"} />
					)}
				</div>
				{/** 뒤로가기 버튼 */}
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
					<g filter="url(#filter0_bd_875_3731)">
						<circle
							cx="20"
							cy="20"
							r="20"
							fill="white"
							fill-opacity="0.25"
							shape-rendering="crispEdges"
						/>
					</g>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M22.6705 12.3347C23.1098 12.781 23.1098 13.5047 22.6705 13.951L16.716 20L22.6705 26.049C23.1098 26.4953 23.1098 27.219 22.6705 27.6653C22.2312 28.1116 21.5188 28.1116 21.0795 27.6653L14.3295 20.8081C13.8902 20.3618 13.8902 19.6382 14.3295 19.1919L21.0795 12.3347C21.5188 11.8884 22.2312 11.8884 22.6705 12.3347Z"
						fill="white"
					/>
					<defs>
						<filter
							id="filter0_bd_875_3731"
							x="-4"
							y="0"
							width="76"
							height="76"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB"
						>
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
							<feComposite
								in2="SourceAlpha"
								operator="in"
								result="effect1_backgroundBlur_875_3731"
							/>
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dy="3" />
							<feGaussianBlur stdDeviation="9" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
							/>
							<feBlend
								mode="normal"
								in2="effect1_backgroundBlur_875_3731"
								result="effect2_dropShadow_875_3731"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect2_dropShadow_875_3731"
								result="shape"
							/>
						</filter>
					</defs>
				</svg>
				{/** 배속 버튼 */}
				<div className={styles.speedButton} onClick={handleSpeedClick}>
					<p>{speed}x</p>
				</div>
			</div>

			{/** 내용 container */}
			<div className={styles.container}>
				<div className={styles.avatar}>
					<img
						alt
						src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					/>
				</div>
				<p>느슨해진 마음을 팽팽하게 만드려면 무언가 자극이 필요해요</p>
				<br />
				<p>마치 카세트 테이프에 연필을 꽂아 돌리는 것처럼요.</p>
				<br />
				<div className={styles.image}>
					<img
						alt
						src="https://img.freepik.com/free-vector/fresh-mango-with-slices-and-leaves-illustration_249011-164.jpg?size=626&ext=jpg"
					/>
				</div>

				<br />
				<p>느슨해진 마음을 팽팽하게 만드려면 무언가 자극이 필요해요</p>
				<br />
				<p>마치 카세트 테이프에 연필을 꽂아 돌리는 것처럼요.</p>
				<br />
				<div className={styles.image}>
					<img
						alt
						src="https://img.freepik.com/free-vector/fresh-mango-with-slices-and-leaves-illustration_249011-164.jpg?size=626&ext=jpg"
					/>
				</div>
				<br />
				<p>느슨해진 마음을 팽팽하게 만드려면 무언가 자극이 필요해요</p>
				<br />
				<p>마치 카세트 테이프에 연필을 꽂아 돌리는 것처럼요.</p>
				<br />
				<div className={styles.image}>
					<img
						alt
						src="https://img.freepik.com/free-vector/fresh-mango-with-slices-and-leaves-illustration_249011-164.jpg?size=626&ext=jpg"
					/>
				</div>
				<br />
				<p>느슨해진 마음을 팽팽하게 만드려면 무언가 자극이 필요해요</p>
				<br />
				<p>마치 카세트 테이프에 연필을 꽂아 돌리는 것처럼요.</p>
				<br />
				<div className={styles.image}>
					<img
						alt
						src="https://img.freepik.com/free-vector/fresh-mango-with-slices-and-leaves-illustration_249011-164.jpg?size=626&ext=jpg"
					/>
				</div>
				<br />
				<p>느슨해진 마음을 팽팽하게 만드려면 무언가 자극이 필요해요</p>
				<br />
				<p>마치 카세트 테이프에 연필을 꽂아 돌리는 것처럼요.</p>
				<br />
				<div className={styles.image}>
					<img
						alt
						src="https://img.freepik.com/free-vector/fresh-mango-with-slices-and-leaves-illustration_249011-164.jpg?size=626&ext=jpg"
					/>
				</div>
				<br />
				<p>느슨해진 마음을 팽팽하게 만드려면 무언가 자극이 필요해요</p>
				<br />
				<p>마치 카세트 테이프에 연필을 꽂아 돌리는 것처럼요.</p>
				<br />
			</div>

			{/** 푸터 */}
			<div className={styles.footer}>
				{/** 총 재생시간 */}
				<div className={styles.playTime}>
					<p>2:00</p>
				</div>

				<div
					className={styles.comment}
					onClick={() => {
						window.location.href = "/projects/podcast/comment";
					}}
				>
					<p>100</p>
				</div>

				<div className={styles.playBar}>
					<div
						style={{
							position: "absolute",
							width: `${progress}%`,
							maxWidth: "100%",
							height: "100%",
							backgroundColor: "rgb(113, 111, 111, 0.25)",
						}}
					></div>
					<svg
						width="276"
						height="34"
						viewBox="0 0 276 34"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10 2L10 32"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M18 7L18 27"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M26 14L26 19"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M34 12L34 22"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M42 7L42 27"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M50 12L50 22"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M58 7L58 27"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M66 12L66 22"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M74 2L74 32"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M82 12L82 22"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M90 7L90 27"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M98 7L98 27"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M106 2L106 32"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M114 7L114 27"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M122 2L122 32"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M130 12L130 22"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M138 2L138 32"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M146 9L146 24"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M154 2L154 32"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M162 7L162 27"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M170 4L170 29"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M178 2L178 32"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M186 4L186 29"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M194 14L194 19"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M202 2L202 32"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M210 12L210 22"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M218 2L218 32"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M226 7L226 27"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M234 12L234 22"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M242 2L242 32"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M250 12L250 22"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M258 9L258 24"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M266 12L266 22"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M274 14L274 19"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
						<path
							d="M2 14L2 19"
							stroke="white"
							stroke-width="4"
							stroke-linecap="round"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}

export default PodcastContent;
