import React, { useEffect } from "react";
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
		window.location.href = "/";
	}

	return (
		<div
			style={{
				paddingTop: 100,
				width: window.screen.width,
				height: window.screen.height,
			}}
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
			<div className={styles.menuBox}>
				<a>Instagram</a>
			</div>
		</div>
	);
}

export default Menu;
