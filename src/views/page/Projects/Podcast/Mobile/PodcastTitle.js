import React, { useEffect, useState, useRef } from "react";

import axios from "axios";

import styles from "../../../../../styles/Projects/Docent/Mobile/DocentTitle.module.css";
import podStyle from "../../../../../styles/Projects/Podcast/Mobile/PodcastTitle.module.css";
import { useNavigate } from "react-router-dom";

function PodcastTitle() {
	

	const navigate = useNavigate();

	const [progress, setProgress] = useState(0);

	const [title, setTitle] = useState("");
	const [teamName, setTeamName] = useState("");
	const [member, setMember] = useState([]);
	const [background, setBackground] = useState("");

	let teamId = 5;

	useEffect(() => {
		let res;
		async function fetchData() {
			res = await axios.get(
				`https://api.clover-inarow.site/teams/${teamId}/podcast`
			);
			if (res.data.isSuccess) {
				setTitle(res.data.result.title);
				setMember(res.data.result.member);
				setBackground(res.data.result.background);
			} else {
				console.log("failed");
			}
		}

		fetchData().then(() => {
			switch (teamId) {
				case 1:
					setTeamName("전시 브랜딩");
					break;
				case 2:
					setTeamName("태산");
					break;
				case 3:
					setTeamName("이따");
					break;
				case 4:
					setTeamName("VIBE Makers");
					break;
				case 5:
					setTeamName("옥수수수염");
					break;
				case 6:
					setTeamName("옥수수수염");
					break;
			}
		});
		const interval = setInterval(() => {
			setProgress((progress) => progress + 0.1);
		}, 10);

		setTimeout(() => {
			clearInterval(interval);
			navigate("/projects/podcast/content", {
				state: {
					record: res.data.result.record,
					background: res.data.result.background,
					teamId: teamId,
					commentCount: res.data.result.comment_count,
				},
			});
			window.location.href = "/projects/podcast/content";
		}, 5000);
	}, [navigate,teamId]);

	const memberCard = member.map((member, index) => {
		return (
			<div className={styles.designer}>
				<div className={styles.profile}>
					<img alt src={member.profile} />
				</div>
				<p>
					{member.name}·{member.role}
				</p>
			</div>
		);
	});

	return (
		<>
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
			<div
				style={{ width: window.screen.width, height: window.screen.height }}
				className={styles.background}
			></div>
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
				<div className={styles.demoLoadingBar}>
					<div
						style={{
							width: `${progress}%`,
							maxWidth: "100%",
							height: "100%",
							backgroundColor: "#ffffff",
							borderRadius: 2,
						}}
					></div>
				</div>
				<div className={styles.category}>
					<p>PODCAST</p>
				</div>
				<div className={podStyle.title}>
					<p>{title}</p>
				</div>
				<div className={styles.designer}>
					<p>{teamName}</p>
				</div>
				{memberCard}
			</div>
		</>
	);
}

export default PodcastTitle;
