import React, { useState } from "react";
import styles from "../../../styles/REC/REC2.module.css";
import { useNavigate } from "react-router-dom";
import videoREC from "../../../video/recBG.mp4";

function REC2() {
	let [inputCount, setInputCount] = useState(0);
	const [nameValue, setName] = useState("");
	const onInputHandler = (e) => {
		if (e.target.value.replace(/(\s*)/g, "").length > 8) {
			e.target.value = e.target.value.substr(0, 8);
		}
		setInputCount(e.target.value.replace(/(\s*)/g, "").length);
		setName(e.target.value);
	};
	const navigate = useNavigate();

	function handlefalse() {
		alert("이름을 입력해주세요.");
	}
	function handleREC3click() {
		navigate("/REC/stimulation", { state: { value: nameValue } });
		window.location.href = "/REC/stimulation";
	}
	// const onTextareaHandler = (e) => {
	//     setInputCount(
	//     e.target.value.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length
	//     );
	// };

	return (
		<div className={styles.backcolor}>
			<video loop muted autoPlay playsInline>
				<source src={videoREC} type="video/mp4" />
			</video>
			<div className={styles.Whatname}>이름이 무엇인가요?</div>
			<div className={styles.TextContainer}>
				<div className={styles.TextFieldContainer}>
					<input
						onChange={onInputHandler}
						minLength={1}
						className={styles.Namefield}
					/>
				</div>
				<p className={styles.Spannumber}>
					<span>{inputCount}</span>
					<span>/8</span>
				</p>
				<div className={styles.IconContainer}>
					<svg
						type="Button"
						className={styles.NextIcon}
						onClick={inputCount === 0 ? handlefalse : handleREC3click}
						width="136"
						height="136"
						viewBox="0 0 136 136"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g filter="url(#filter0_bd_890_5617)">
							<circle
								cx="68"
								cy="65"
								r="50"
								fill="white"
								fill-opacity="0.25"
								shape-rendering="crispEdges"
							/>
							<circle
								cx="68"
								cy="65"
								r="48.5"
								stroke="white"
								stroke-opacity="0.75"
								stroke-width="3"
								shape-rendering="crispEdges"
							/>
						</g>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M71.4083 45.8368C72.524 44.7211 74.3331 44.7211 75.4489 45.8368L92.5917 62.9797C93.7075 64.0955 93.7075 65.9045 92.5917 67.0203L75.4489 84.1632C74.3331 85.2789 72.524 85.2789 71.4083 84.1632C70.2925 83.0474 70.2925 81.2383 71.4083 80.1226L83.6737 67.8571H44.8571C43.2792 67.8571 42 66.578 42 65C42 63.422 43.2792 62.1429 44.8571 62.1429H83.6737L71.4083 49.8774C70.2925 48.7617 70.2925 46.9526 71.4083 45.8368Z"
							fill="white"
						/>
						<defs>
							<filter
								id="filter0_bd_890_5617"
								x="0"
								y="0"
								width="136"
								height="136"
								filterUnits="userSpaceOnUse"
								color-interpolation-filters="sRGB"
							>
								<feFlood flood-opacity="0" result="BackgroundImageFix" />
								<feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
								<feComposite
									in2="SourceAlpha"
									operator="in"
									result="effect1_backgroundBlur_890_5617"
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
									in2="effect1_backgroundBlur_890_5617"
									result="effect2_dropShadow_890_5617"
								/>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="effect2_dropShadow_890_5617"
									result="shape"
								/>
							</filter>
						</defs>
					</svg>
					{/* <svg xmlns="http://www.w3.org/2000/svg" className={styles.NextIcon}
                    onClick={handleRE3Cclick} width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <circle cx="50" cy="50" r="50" fill="black"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M53.4083 30.8368C54.524 29.7211 56.3331 29.7211 57.4489 30.8368L74.5917 47.9797C75.7075 49.0955 75.7075 50.9045 74.5917 52.0203L57.4489 69.1632C56.3331 70.2789 54.524 70.2789 53.4083 69.1632C52.2925 68.0474 52.2925 66.2383 53.4083 65.1226L65.6737 52.8571H26.8571C25.2792 52.8571 24 51.578 24 50C24 48.422 25.2792 47.1429 26.8571 47.1429H65.6737L53.4083 34.8774C52.2925 33.7617 52.2925 31.9526 53.4083 30.8368Z" fill="white"/>
                    </svg> */}
				</div>
			</div>
		</div>
	);
}

export default REC2;
