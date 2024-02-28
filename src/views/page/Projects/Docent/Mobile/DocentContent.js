import React, { useState, useEffect, useRef } from "react";

import axios from "axios";

import { useNavigate, useLocation } from "react-router-dom";

import styles from "../../../../../styles/Projects/Docent/Mobile/DocentContent.module.css";

function DocentContent() {
	const navigate = useNavigate();
	const location = useLocation();

	const audioRef = useRef();

	const record = location.state.record;
	const teamId = location.state.teamId;
	const background = location.state.background;
	const commentCount = location.state.commentCount;

	const [progress, setProgress] = useState(100);
	const [playbackRate, setPlaybackRate] = useState(1);
	const [isMuted, setIsMuted] = useState(false);
	const [script, setScript] = useState([]);
	const [runningTime, setRunningTime] = useState(0);

	let relativePosition;

	const handleSpeedClick = () => {
		if (audioRef.current) {
			if (!audioRef.current.paused) {
				if (playbackRate !== 2) {
					setPlaybackRate(playbackRate * 2);
					audioRef.current.playbackRate *= 2;
				} else {
					setPlaybackRate(0.5);
					audioRef.current.playbackRate = 0.5;
				}
			}
		}
	};

	useEffect(() => {
		async function fetchData() {
			const res = await axios.get(
				`https://api.clover-inarow.site/teams/${teamId}/docent/script`
			);
			if (res.data.isSuccess) {
				console.log("successed!");
				setScript(res.data.result);

				const lastScript = res.data.result.slice(-1)[0];
				if (lastScript) {
					setRunningTime(lastScript.end_time);
				}
			} else {
				console.log("failed");
			}
		}

		if (progress === 100) fetchData();

		const interval = setInterval(() => {
			setProgress((progress) => progress - 0.01);
		}, 10);

		setTimeout(() => {
			clearInterval(interval);
		}, runningTime * 1000);

		return () => {
			clearTimeout(interval);
		};
	}, [runningTime, playbackRate,progress,teamId]);

	const scriptCard = script.map((script, index) => {
		return (
			<>
				<p
					style={
						audioRef.current.currentTime <= script.end_time &&
						audioRef.current.currentTime >= script.start_time
							? {
									opacity: 1,
									transition: "opacity 0.5s cubic-bezier(0.42, 0, 0.58, 1)",
							  }
							: {
									opacity: 0.4,
									transition: "opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1)",
							  }
					}
					onClick={() => {
						if (audioRef.current) {
							audioRef.current.play();
							audioRef.current.currentTime = script.start_time;
							setProgress(100 - (script.start_time * 100) / runningTime);
						}
					}}
				>
					{script.script}
				</p>
				<br />
			</>
		);
	});

	const handleProgressBar = (event) => {
		// 클릭한 위치의 x 좌표 구하기
		const clickX = event.clientX;

		// div 요소 가져오기
		const div = document.getElementById("play");

		// div의 위치 및 너비 구하기
		const divRect = div.getBoundingClientRect();
		const divX = divRect.left;
		const divWidth = divRect.width;

		// 클릭한 위치의 div 내부에서의 상대적인 x 좌표 구하기
		const relativeX = clickX - divX;

		// 클릭한 위치의 div 내부에서의 상대적인 위치 (0 ~ 1) 구하기
		relativePosition = (relativeX / divWidth).toFixed(3);

		// 상대적인 위치 출력
		console.log("Relative position:", relativePosition);

		audioRef.current.play();
		audioRef.current.currentTime = relativePosition * runningTime;
		setProgress(100 - relativePosition * 100);
	};

	return (
		<div
			style={{ width: window.innerWidth, height: window.innerHeight }}
			className={styles.background}
		>
			{background === "" ? (
				<div></div>
			) : (
				<video
					loop
					muted
					playsInline
					autoPlay={true}
					style={{ height: "100%" }}
					className={styles.background}
				>
					<source src={background} type="video/mp4" />
				</video>
			)}
			<audio ref={audioRef} autoPlay={true} muted={isMuted}>
				<source src={record} type="audio/mp3" />
			</audio>
			{/** 헤더 */}
			<div className={styles.header}>
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
							fillOpacity="0.25"
							shapeRendering="crispEdges"
						/>
					</g>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
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
							colorInterpolationFilters="sRGB"
						>
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
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
					<p>{playbackRate}x</p>
				</div>
				{/** 음소거 버튼 */}
				<div
					className={styles.soundButton}
					onClick={() => {
						setIsMuted(!isMuted);
					}}
				>
					{isMuted ? (
						<img alt="" src={process.env.PUBLIC_URL + "/off.png"} />
					) : (
						<img alt="" src={process.env.PUBLIC_URL + "/on.png"} />
					)}
				</div>
			</div>

			{/** 내용 container */}
			<div className={styles.container}>{scriptCard}</div>

			{/** 푸터 */}
			<div className={styles.footer}>
				{/** 총 재생시간 */}
				<div className={styles.playTime}>
					<p>
						{Math.floor(runningTime / 60)}:{Math.floor(runningTime % 60)}
					</p>
				</div>

				<div
					className={styles.comment}
					onClick={() => {
						navigate("/projects/docent/comment", {
							state: {
								background: background,
								teamId: teamId,
							},
						});
						window.location.href = "/projects/docent/comment";
					}}
				>
					<img alt="" src={process.env.PUBLIC_URL + "/comment(1x).png"} />
					<p>{commentCount}</p>
				</div>

				<div id="play" className={styles.playBar} onClick={handleProgressBar}>
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

export default DocentContent;
