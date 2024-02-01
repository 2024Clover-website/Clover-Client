import React from "react";

import "../../styles/components/Footer.css";

function Footer() {
	function handleInstagramClick() {
		window.location.replace("https://www.instagram.com");
	}

	return (
		<div className="container">
			<div className="team">
				MJU Division of Design CLOVER Final Exhibition 2024
			</div>
			<div className="location">Maru Art Center 3F The Second Gallery</div>
			<div className="instagram" onClick={handleInstagramClick}>
				Instagram
			</div>
		</div>
	);
}

export default Footer;
