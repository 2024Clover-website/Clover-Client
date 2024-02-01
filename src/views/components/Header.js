import React from "react";
import "../../styles/components/Header.css";

import { BsFillRecordFill } from "react-icons/bs";

function Header() {
	function handleAboutClick() {
		window.location.href = "/";
	}

	function handleProjectsClick() {
		window.location.href = "/";
	}

	function handleRecordTapeClick() {
		window.location.href = "/";
	}

	return (
		<div className="header-container">
			<div className="logo-left">in a row</div>
			<div className="nav-element">
				<div onClick={handleAboutClick}>
					<p>About</p>
				</div>
				<div onClick={handleProjectsClick}>
					<p>Projects</p>
				</div>
				<div onClick={handleRecordTapeClick}>
					<p>REC</p>
					<BsFillRecordFill className="record-icon" />
				</div>
			</div>
			<div className="logo-right">CLOVER</div>
		</div>
	);
}

export default Header;
