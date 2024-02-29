import React, { useState, useEffect } from "react";

import axios from "axios";

import { useNavigate, useLocation } from "react-router-dom";

import styles from "../../../../../styles/Projects/Docent/Mobile/DocentComment.module.css";
import contentStyles from "../../../../../styles/Projects/Docent/Mobile/DocentContent.module.css";

function DocentComment() {
	const navigate = useNavigate();
	const location = useLocation();

	const teamId = location.state.teamId;

	const background = location.state.background;

	const [text, setText] = useState("");
	const [comment, setComment] = useState([]);

	useEffect(() => {
		let res;
		async function fetchData() {
			res = await axios.get(
				`https://api.clover-inarow.site/teams/${teamId}/comment/docent`
			);
			if (res.data.isSuccess) {
				setComment(res.data.result);
				console.log("comment get success!");
			}
		}

		fetchData();
	}, [teamId]);

	// useEffect(() => {
	// 	const handleResize = () => {
	// 		const windowHeight = window.innerHeight;
	// 		const inputElement = document.querySelector(".textinput");
	// 		const keyboardHeight =
	// 			windowHeight - inputElement.getBoundingClientRect().bottom;

	// 		// 키보드가 나타날 때 높이 조절
	// 		if (keyboardHeight > 0) {
	// 			// const footerElement = document.querySelector(".commentInput");
	// 			const bgElement = document.querySelector(".background");
	// 			// footerElement.style.bottom = keyboardHeight + "px";
	// 			bgElement.style.width = window.innerWidth;
	// 			bgElement.style.height = window.innerHeight;
	// 		} else {
	// 			// 키보드가 사라질 때 높이 초기화
	// 			const bgElement = document.querySelector(".commentInput");
	// 			// const footerElement = document.querySelector(".background");
	// 			// footerElement.style.bottom = "60px";
	// 			bgElement.style.width = window.innerWidth;
	// 			bgElement.style.height = window.innerHeight;
	// 		}
	// 	};

	// 	window.addEventListener("resize", handleResize);

	// 	return () => {
	// 		window.removeEventListener("resize", handleResize);
	// 	};
	// }, []);

	const commentCard = comment.map((comment, index) => {
		const now = new Date();
		const then = new Date(comment.created_at);

		const diff = Math.floor((now - then) / (1000 * 60));

		let when;

		if (diff < 60) {
			when = `${diff}분 전`;
		} else if (diff < 1440) {
			when = `${Math.floor(diff / 60)}시간 전`;
		} else {
			when = `${Math.floor(diff / 1440)}일 전`;
		}

		return (
			<div className={styles.commentBox}>
				<p className={styles.comment}>{comment.comment}</p>
				<div className={styles.commentInfo}>
					<p>No.{index + 1}</p>
					<p>{when}</p>
				</div>
			</div>
		);
	});

	const onChangeText = (e) => {
		setText(e.target.value);
	};

	const onSubmit = async () => {
		await axios
			.post(`https://api.clover-inarow.site/teams/${teamId}/comment/docent`, {
				comment: `${text}`,
			})
			.then((res) => {
				if (res.data.isSuccess) {
					console.log("comment post success");
				}
			})
			.catch((err) => console.log(err));
		setText("");

		window.location.href = "/projects/docent/comment";
	};

	return (
		<>
			<div
				style={{ width: window.innerWidth, height: window.innerHeight }}
				className={styles.background}
			>
				<div
					style={{ width: "100%", height: "100%" }}
					className={styles.backdrop}
				></div>
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

				{/** 헤더 */}
				<div className={contentStyles.header}>
					{/** 뒤로가기 버튼 */}
					<svg
						width="40"
						height="40"
						viewBox="0 0 40 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className={contentStyles.backButton}
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
				</div>
				{/** 내용 */}
				<div className={styles.container}>
					<br />
					<br />
					<br />
					{commentCard}
				</div>
				{/** 푸터 */}
				<div className={styles.commentInput}>
					<input
						type="text"
						placeholder="댓글을 작성하세요"
						value={text}
						onChange={onChangeText}
						className={styles.textinput}
					/>
					<svg
						width="60"
						height="60"
						viewBox="0 0 60 60"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className={styles.sendButton}
						onClick={onSubmit}
					>
						<g filter="url(#filter0_d_875_3615)">
							<path
								d="M28.2916 28.7084L40.3027 16.6973M28.4375 29.0837L31.4439 36.8143C31.7087 37.4954 31.8411 37.8359 32.0319 37.9353C32.1973 38.0215 32.3944 38.0216 32.5599 37.9356C32.7508 37.8364 32.8836 37.496 33.1493 36.8153L40.6881 17.4971C40.9279 16.8826 41.0478 16.5754 40.9822 16.379C40.9253 16.2085 40.7915 16.0747 40.621 16.0178C40.4246 15.9522 40.1174 16.0721 39.5029 16.3119L20.1847 23.8507C19.504 24.1164 19.1636 24.2492 19.0644 24.4401C18.9784 24.6056 18.9785 24.8027 19.0647 24.9681C19.1641 25.1589 19.5046 25.2913 20.1857 25.5561L27.9163 28.5625C28.0545 28.6162 28.1236 28.6431 28.1819 28.6846C28.2334 28.7214 28.2786 28.7666 28.3154 28.8181C28.3569 28.8763 28.3837 28.9455 28.4375 29.0837Z"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								shape-rendering="crispEdges"
							/>
						</g>
						<defs>
							<filter
								id="filter0_d_875_3615"
								x="0"
								y="0.000244141"
								width="60"
								height="59.9998"
								filterUnits="userSpaceOnUse"
								color-interpolation-filters="sRGB"
							>
								<feFlood flood-opacity="0" result="BackgroundImageFix" />
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
									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
								/>
								<feBlend
									mode="normal"
									in2="BackgroundImageFix"
									result="effect1_dropShadow_875_3615"
								/>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="effect1_dropShadow_875_3615"
									result="shape"
								/>
							</filter>
						</defs>
					</svg>
				</div>
			</div>
		</>
	);
}

export default DocentComment;
