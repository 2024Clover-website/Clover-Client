import React from "react";
import "../../styles/components/Header.css";

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
				<div onClick={handleAboutClick}>About</div>
				<div onClick={handleProjectsClick}>Projects</div>
				<div onClick={handleRecordTapeClick}>Record Tape</div>
			</div>
			<div className="logo-right">CLOVER</div>
		</div>
	);
}

export default Header;
