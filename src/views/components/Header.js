import React from "react";
import "../../styles/components/Header.css";

import { BsFillRecordFill } from "react-icons/bs";

function Header() {
	function handleAboutClick() {
		window.location.href = "/";
	}

	function handleProjectsClick() {
		window.location.href = "/projects";
	}

	function handleRecordTapeClick() {
		window.location.href = "/REC";
	}

	return (
		<div
			style={
				window.location.pathname === "/"
					? {
							borderTop: 0,
							borderLeft: 0,
							borderRight: 0,
							borderBottom: 2,
							borderStyle: "solid",
							borderColor: "black",
					  }
					: {
							borderTop: 0,
							borderLeft: 0,
							borderRight: 0,
							borderBottom: 2,
							borderStyle: "solid",
							borderColor: "white",
					  }
			}
			className="header-container"
		>
			<div className="logo-left">
				{window.location.pathname === "/" ? (
					<img
						style={{ width: 141, height: 24 }}
						src="../../../../img/Inarow_black.png"
						alt="Clover Logo"
					/>
				) : (
					<img src="../../../../img/In a row_logo(1x).png" alt="Clover Logo" />
				)}
			</div>
			<div
				className="nav-element"
				style={
					window.location.pathname === "/"
						? { color: "black" }
						: { color: "#f1f1f1" }
				}
			>
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
			<div className="logo-right">
				{window.location.pathname === "/" ? (
					<img
						style={{ width: 142.23, height: 20.46 }}
						src="../../../../img/Clover_black.png"
						alt="Clover Logo"
					/>
				) : (
					<img src="../../../../img/clove_logo(1x).png" alt="Clover Logo" />
				)}
			</div>
		</div>
	);
}

export default Header;
