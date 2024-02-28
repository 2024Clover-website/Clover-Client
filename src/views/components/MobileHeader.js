import React, { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

import "../../styles/components/MobileHeader.css";
import Menu from "./Menu";

function MobileHeader() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		console.log("started");
	}, [isMenuOpen]);

	function handleMenuOpen() {
		setIsMenuOpen(!isMenuOpen);
	}

	return (
		<div className="about-container">
			{isMenuOpen ? (
				<>
					<div className="about-header">
						<div className="menu-container" onClick={handleMenuOpen}>
							<IoClose className="menu-icon" />
						</div>
					</div>
					<Menu />
					<div className="menu-footer">
						<img src="../img/menuINAROW.png" alt="INALOW Logo"></img>
						<p>MJU Division of Design CLOVER Final Exhibition 2024</p>
					</div>
				</>
			) : (
				<div className="about-header">
					<div className="menu-container" onClick={handleMenuOpen}>
						<IoMenu className="menu-icon" />
					</div>
				</div>
			)}
		</div>
	);
}

export default MobileHeader;
