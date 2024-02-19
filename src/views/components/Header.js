import React from "react";
import "../../styles/components/Header.css";

import { BsFillRecordFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
	function handleAboutClick() {
		window.location.href = "/About";
	}

	function handleProjectsClick() {
		window.location.href = "/";
	}

	function handleRecordTapeClick() {
		window.location.href = "/REC/start";
	}

	return (
		<div className="header-container">
			<div className="logo-left">in a row</div>
			<div className="nav-element">
				<div onClick={handleAboutClick}>About</div>
				<div onClick={handleProjectsClick}>Projects</div>
				<div onClick={handleRecordTapeClick}>
					REC
					<BsFillRecordFill className="record" />
				</div>
			</div>
			<div className="logo-right">CLOVER</div>
		</div>
	);
}

export default Header;
