import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import styles from "../../../../../styles/Projects/Docent/Mobile/DocentContent.module.css";

function DocentContent() {
	const navigate = useNavigate();

	const [progress, setProgress] = useState(100);

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
			{/* <div
				style={{ width: window.screen.width, height: window.screen.height }}
				className={styles.background}
			></div> */}
			{/** 헤더 */}
			<div className={styles.header}>
				{/** 음소거 버튼 */}
				<svg
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className={styles.soundButton}
				>
					<g filter="url(#filter0_bd_875_3575)">
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
						d="M35.7479 29.3305L33.3165 31.7618C33.3064 31.7719 33.2961 31.7823 33.2855 31.7929C33.1702 31.9088 33.025 32.0548 32.8474 32.1637C32.6933 32.2581 32.5254 32.3276 32.3497 32.3698C32.1471 32.4184 31.9413 32.4179 31.7778 32.4175C31.7628 32.4174 31.7481 32.4174 31.7338 32.4174H30.2383C29.983 32.4174 29.8433 32.4181 29.743 32.4263C29.739 32.4266 29.7352 32.4269 29.7316 32.4272C29.7313 32.4308 29.7309 32.4346 29.7306 32.4386C29.7224 32.539 29.7217 32.6786 29.7217 32.9339V37.0661C29.7217 37.3214 29.7224 37.461 29.7306 37.5614C29.7309 37.5654 29.7313 37.5692 29.7316 37.5728C29.7352 37.5731 29.739 37.5734 29.743 37.5737C29.8433 37.5819 29.983 37.5826 30.2383 37.5826H31.7338C31.7481 37.5826 31.7628 37.5826 31.7778 37.5825C31.9413 37.5821 32.1471 37.5816 32.3497 37.6302C32.5254 37.6724 32.6933 37.7419 32.8474 37.8363C33.025 37.9452 33.1702 38.0912 33.2855 38.2071C33.2961 38.2177 33.3064 38.2281 33.3165 38.2382L35.7479 40.6695V29.3305ZM36.077 27.004C36.4891 26.9716 36.8918 27.1384 37.1602 27.4527C37.4006 27.7341 37.4388 28.0727 37.4533 28.237C37.4697 28.4212 37.4696 28.65 37.4696 28.8828C37.4696 28.8934 37.4696 28.9041 37.4696 28.9148L37.4696 41.1172C37.4696 41.35 37.4697 41.5788 37.4533 41.763C37.4388 41.9273 37.4006 42.2659 37.1602 42.5473C36.8918 42.8616 36.4891 43.0284 36.077 42.996C35.708 42.967 35.4416 42.7546 35.3151 42.6487C35.1733 42.53 35.0115 42.3682 34.847 42.2036L32.0991 39.4556C32.0193 39.3759 31.9794 39.3363 31.9491 39.3087C31.9484 39.3079 31.9476 39.3072 31.9469 39.3066C31.9459 39.3065 31.9448 39.3065 31.9438 39.3064C31.9029 39.3046 31.8466 39.3044 31.7338 39.3044L30.2108 39.3044C29.9936 39.3044 29.782 39.3044 29.6028 39.2898C29.406 39.2737 29.1738 39.2358 28.9401 39.1167C28.6161 38.9516 28.3527 38.6882 28.1877 38.3643C28.0686 38.1306 28.0307 37.8984 28.0146 37.7016C28 37.5224 28 37.3108 28 37.0936L28 32.9339C28 32.9247 28 32.9156 28 32.9064C28 32.6892 28 32.4776 28.0146 32.2984C28.0307 32.1016 28.0686 31.8694 28.1877 31.6357C28.3527 31.3118 28.6161 31.0484 28.9401 30.8833C29.1738 30.7642 29.406 30.7263 29.6028 30.7102C29.7819 30.6956 29.9935 30.6956 30.2108 30.6956C30.22 30.6956 30.2291 30.6956 30.2383 30.6956H31.7338C31.8466 30.6956 31.9029 30.6954 31.9438 30.6936C31.9448 30.6935 31.9459 30.6935 31.9469 30.6934C31.9476 30.6928 31.9484 30.6921 31.9491 30.6913C31.9794 30.6638 32.0193 30.6241 32.0991 30.5444L34.8243 27.8191C34.8319 27.8115 34.8394 27.804 34.847 27.7964C35.0115 27.6318 35.1733 27.47 35.3151 27.3513C35.4416 27.2454 35.708 27.033 36.077 27.004ZM43.6368 28.2751C44.0228 27.9974 44.5607 28.0852 44.8384 28.4712C46.1604 30.3089 46.9392 32.5648 46.9392 35C46.9392 37.4352 46.1604 39.6911 44.8384 41.5288C44.5607 41.9148 44.0228 42.0026 43.6368 41.7249C43.2509 41.4473 43.1631 40.9093 43.4407 40.5234C44.559 38.9688 45.2174 37.0626 45.2174 35C45.2174 32.9374 44.559 31.0312 43.4407 29.4766C43.1631 29.0907 43.2509 28.5527 43.6368 28.2751ZM40.2013 30.8504C40.5913 30.5784 41.1279 30.6741 41.3999 31.064C42.1783 32.1799 42.6348 33.5379 42.6348 35C42.6348 36.4621 42.1783 37.8201 41.3999 38.936C41.1279 39.3259 40.5913 39.4216 40.2013 39.1496C39.8114 38.8776 39.7158 38.3409 39.9878 37.951C40.5711 37.1147 40.9131 36.0986 40.9131 35C40.9131 33.9014 40.5711 32.8853 39.9878 32.049C39.7158 31.6591 39.8114 31.1224 40.2013 30.8504Z"
						fill="white"
					/>
					<defs>
						<filter
							id="filter0_bd_875_3575"
							x="0"
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
								result="effect1_backgroundBlur_875_3575"
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
								in2="effect1_backgroundBlur_875_3575"
								result="effect2_dropShadow_875_3575"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect2_dropShadow_875_3575"
								result="shape"
							/>
						</filter>
					</defs>
				</svg>
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
				<svg
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className={styles.speedButton}
				>
					<g filter="url(#filter0_bd_875_3578)">
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
						d="M32.608 31.36L30.336 33.36L28.976 31.792L32.672 28.672H34.912V40H32.608V31.36ZM40.4128 35.84L37.8208 32.224H40.6528L42.0288 34.336L43.3568 32.224H46.0288L43.5008 35.84L46.4928 40H43.6608L41.9648 37.408L40.1408 40H37.3407L40.4128 35.84Z"
						fill="#F1F1F1"
					/>
					<defs>
						<filter
							id="filter0_bd_875_3578"
							x="0"
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
								result="effect1_backgroundBlur_875_3578"
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
								in2="effect1_backgroundBlur_875_3578"
								result="effect2_dropShadow_875_3578"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect2_dropShadow_875_3578"
								result="shape"
							/>
						</filter>
					</defs>
				</svg>
			</div>

			{/** 내용 container */}
			<div className={styles.container}>
				<p>느슨해진 마음을 팽팽하게 만드려면 무언가 자극이 필요해요</p>
				<br />
				<p>마치 카세트 테이프에 연필을 꽂아 돌리는 것처럼요.</p>
				<br />
				<img alt src="../../../../../../public/logo512.png" />
				<br />
				<p>느슨해진 마음을 팽팽하게 만드려면 무언가 자극이 필요해요</p>
				<br />
				<p>마치 카세트 테이프에 연필을 꽂아 돌리는 것처럼요.</p>
				<br />
				<img alt src="../../../../../../public/logo512.png" />
				<br />
				<p>느슨해진 마음을 팽팽하게 만드려면 무언가 자극이 필요해요</p>
				<br />
				<p>마치 카세트 테이프에 연필을 꽂아 돌리는 것처럼요.</p>
				<br />
				<img alt src="../../../../../../public/logo512.png" />
				<br />
				<p>느슨해진 마음을 팽팽하게 만드려면 무언가 자극이 필요해요</p>
				<br />
				<p>마치 카세트 테이프에 연필을 꽂아 돌리는 것처럼요.</p>
				<br />
				<img alt src="../../../../../../public/logo512.png" />
				<br />
				<p>느슨해진 마음을 팽팽하게 만드려면 무언가 자극이 필요해요</p>
				<br />
				<p>마치 카세트 테이프에 연필을 꽂아 돌리는 것처럼요.</p>
				<br />
				<img alt src="../../../../../../public/logo512.png" />
				<br />
				<p>느슨해진 마음을 팽팽하게 만드려면 무언가 자극이 필요해요</p>
				<br />
				<p>마치 카세트 테이프에 연필을 꽂아 돌리는 것처럼요.</p>
				<br />
				<img alt src="../../../../../../public/logo512.png" />
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
						window.location.href = "/projects/docent/comment";
					}}
				>
					<p>100</p>
				</div>

				<div id="play" className={styles.playBar}>
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
