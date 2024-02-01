import React from "react";
import { BsFillRecordFill } from "react-icons/bs";

import "../../../../../styles/About/Mobile/components/Menu.css";

function Menu() {
	function handleAboutClick() {
		window.location.href = "/";
	}

	function handleProjectsClick() {
		window.location.href = "/";
	}

	function handleRecClick() {
		window.location.href = "/";
	}

	return (
		<div style={{ paddingTop: 100 }}>
			<div className="menu-box">
				<p onClick={handleAboutClick}>ABOUT</p>
			</div>
			<div className="menu-box">
				<p onClick={handleProjectsClick}>PROJECTS</p>
			</div>
			<div className="menu-box">
				<p onClick={handleRecClick}>
					REC
					<BsFillRecordFill className="record" />
				</p>
			</div>
			<div className="menu-box">
				<a>Instagram</a>
			</div>
		</div>
	);
}

export default Menu;
