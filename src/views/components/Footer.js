import React from "react";

import "../../styles/components/Footer.css";

function Footer() {
	function handleInstagramClick() {
		window.location.replace(
			"https://www.instagram.com/clover_vimf?igsh=MW9jMXF3MzY2MzhjYw=="
		);
	}

	return (
		<div
			className="container"
			style={
				window.location.pathname === "/"
					? { color: "black" }
					: { color: "#ffffff" }
			}
		>
			<div className="team">
				MJU Division of Design
				<br />
				CLOVER Final Exhibition 2024
			</div>
			<div className="location">Maru Art Center 3F The Second Gallery</div>
			<div className="instagram" onClick={handleInstagramClick}>
				Instagram
			</div>
		</div>
	);
}

export default Footer;
