import React, { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

import Menu from "./Menu";
import "../../styles/components/MobileHeader.css";

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
						<p>in a row</p>
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
