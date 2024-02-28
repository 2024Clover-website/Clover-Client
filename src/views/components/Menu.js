import React from "react";
import { BsFillRecordFill } from "react-icons/bs";

import styles from "../../styles/components/Menu.module.css";

function Menu() {
	function handleAboutClick() {
		window.location.href = "/";
	}

	function handleProjectsClick() {
		window.location.href = "/projects";
	}

	function handleRecClick() {
		window.location.href = "/REC";
	}

	function handleInstagramClick() {
		window.location.replace(
			"https://www.instagram.com/clover_vimf?igsh=MW9jMXF3MzY2MzhjYw=="
		);
	}

	return (
		<>
			<div
				style={{
					position: "fixed",
					width: window.screen.width,
					height: window.screen.height,
					background: "rgb(113, 111, 111, 0.2)",
					backdropFilter: "blur(50)",
				}}
			></div>
			<div
				style={
					window.location.pathname === "/"
						? {
								paddingTop: 100,
								width: window.screen.width,
								height: window.screen.height,
								backgroundImage: "url('../../../../img/About_background.png')",
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								zIndex: -3,
						  }
						: {
								paddingTop: 100,
								width: window.screen.width,
								height: window.screen.height,
								backgroundImage: "url('../../../../img/Mobilebg.png')",
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
								zIndex: -3,
						  }
				}
			>
				<div className={styles.menuBox}>
					<p onClick={handleAboutClick}>ABOUT</p>
				</div>
				<div className={styles.menuBox}>
					<p onClick={handleProjectsClick}>PROJECTS</p>
				</div>
				<div className={styles.menuBox}>
					<p onClick={handleRecClick}>
						REC
						<BsFillRecordFill className={styles.record} />
					</p>
				</div>
				<div className={styles.menuBox} onClick={handleInstagramClick}>
					<a href="https://www.instagram.com/clover_vimf?igshid=MW9jMXF3MzY2MzhjYw==">
						Instagram
					</a>
				</div>
				<div
					className={styles.MobilecoloverLogo}
					style={{
						position: "absolute",
						width: "84px",
						height: "12px",
						left: "calc(50% - 84px/2 + 0.5px)",
						top: "680px",
					}}
				>
					<img src="../img/Mobile cloverLogo.png" alt="Clover Logo"></img>
				</div>
			</div>
		</>
	);
}

export default Menu;
