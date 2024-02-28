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
		window.location.href = "/";
	}

	return (
		<div
			style={{
				paddingTop: 100,
				width: window.screen.width,
				height: window.screen.height,
				backgroundImage: "url('../../../../img/Mobilebg.png')",
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat'
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
			<a href="https://www.instagram.com/clover_vimf?igshid=MW9jMXF3MzY2MzhjYw==">Instagram</a>
			</div>
			<div className={styles.MobilecoloverLogo} 
				style={{
					position: 'absolute',
					width: '84px',
					height: '12px',
					left: 'calc(50% - 84px/2 + 0.5px)',
					top: '680px'
				}}>
				<img src="../img/Mobile cloverLogo.png" alt="Clover Logo"></img>
			</div>
		</div>
	);
}

export default Menu;
