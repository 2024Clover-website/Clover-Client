import React from "react";

import styles from "../../../../styles/Projects/Mobile/Projects.module.css";

function Projects() {
	function handleDocentButton() {
		window.location.href = "/projects/docent/title";
	}

	function handlePodcastButton() {
		window.location.href = "/projects/podcast/title";
	}

	return (
		<div className={styles.container}>
			<div className={styles.descriptionContainer}>
				<div className={styles.titleBox2}>
					<p className={styles.title2}>
						자세히 보고싶은 프로젝트가 있나요?
					</p>
					<p className={styles.category2}>도슨트와 팟캐스트가 준비되어 있어요.</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>도슨트</p>
					</div>
					<p className={styles.tagContents2}>
						작품에 대한 자세한 설명을
						들을 수 있어요
					</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>팟캐스트</p>
					</div>
				<p className={styles.tagContents3} style={{ whiteSpace: 'pre-wrap' }}>
					{'번아웃과 슬럼프,\n그리고 새로운 자극에 대한\n각자만의 스토리를 들을 수 있어요'}
				</p>
				</div>
			</div>
			<div className={styles.ps}>
				<img src="../../../img/Mobilemap.png"/>
			</div>
			
			<div className={styles.descriptionContainer}>
				<div className={styles.titleBox}>
					<p className={styles.section}>A</p>
					<p className={styles.title}>
						Dopamine Addiction: Visualization of symptoms
					</p>
					<p className={styles.category}>3D Motion Graphic</p>
				</div>

				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>디자이너</p>
					</div>
					<p className={styles.tagContents}>강지수·박규리</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>도슨트</p>
					</div>
					<p className={styles.tagContents}>
						2:00
						<img
							src="../../../img/Button01.png"
							onClick={handleDocentButton}
						/>
					</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>팟캐스트</p>
					</div>
					<p className={styles.tagContents}>
						10:00
						<img
							src="../../../img/Button01.png"
							onClick={handlePodcastButton}
						/>
					</p>
				</div>
			</div>
			<div className={styles.ps}>
				<img src="../../../img/Mobilemap.png"/>
			</div>
			<div className={styles.descriptionContainer}>
				<div className={styles.titleBox}>
					<p className={styles.section}>B</p>
					<p className={styles.title}>
						Dopamine Addiction: Visualization of symptoms
					</p>
					<p className={styles.category}>3D Motion Graphic</p>
				</div>

				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>디자이너</p>
					</div>
					<p className={styles.tagContents}>강지수·박규리</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>도슨트</p>
					</div>
					<p className={styles.tagContents}>
						2:00
						<img
							src="../../../img/Button01.png"
							onClick={handleDocentButton}
						/>
					</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>팟캐스트</p>
					</div>
					<p className={styles.tagContents}>
						10:00
						<img
							src="../../../img/Button01.png"
							onClick={handlePodcastButton}
						/>
					</p>
				</div>
			</div>
			<div className={styles.ps}>
				<img src="../../../img/Mobilemap.png"/>
			</div>
			<div className={styles.descriptionContainer}>
				<div className={styles.titleBox}>
					<p className={styles.section}>C</p>
					<p className={styles.title}>
						Dopamine Addiction: Visualization of symptoms
					</p>
					<p className={styles.category}>3D Motion Graphic</p>
				</div>

				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>디자이너</p>
					</div>
					<p className={styles.tagContents}>강지수·박규리</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>도슨트</p>
					</div>
					<p className={styles.tagContents}>
						2:00
						<img
							src="../../../img/Button01.png"
							onClick={handleDocentButton}
						/>
					</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>팟캐스트</p>
					</div>
					<p className={styles.tagContents}>
						10:00
						<img
							src="../../../img/Button01.png"
							onClick={handlePodcastButton}
						/>
					</p>
				</div>
			</div>
			<div className={styles.ps}>
				<img src="../../../img/Mobilemap.png"/>
			</div>
			<div className={styles.descriptionContainer}>
				<div className={styles.titleBox}>
					<p className={styles.section}>D</p>
					<p className={styles.title}>
						Dopamine Addiction: Visualization of symptoms
					</p>
					<p className={styles.category}>3D Motion Graphic</p>
				</div>

				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>디자이너</p>
					</div>
					<p className={styles.tagContents}>강지수·박규리</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>도슨트</p>
					</div>
					<p className={styles.tagContents}>
						2:00
						<img
							src="../../../img/Button01.png"
							onClick={handleDocentButton}
						/>
					</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>팟캐스트</p>
					</div>
					<p className={styles.tagContents}>
						10:00
						<img
							src="../../../img/Button01.png"
							onClick={handlePodcastButton}
						/>
					</p>
				</div>
			</div>
			<div className={styles.ps}>
				<img src="../../../img/Mobilemap.png"/>
			</div>
			<div className={styles.descriptionContainer}>
				<div className={styles.titleBox}>
					<p className={styles.section}>E</p>
					<p className={styles.title}>
						Dopamine Addiction: Visualization of symptoms
					</p>
					<p className={styles.category}>3D Motion Graphic</p>
				</div>

				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>디자이너</p>
					</div>
					<p className={styles.tagContents}>강지수·박규리</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>도슨트</p>
					</div>
					<p className={styles.tagContents}>
						2:00
						<img
							src="../../../img/Button01.png"
							onClick={handleDocentButton}
						/>
					</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>팟캐스트</p>
					</div>
					<p className={styles.tagContents}>
						10:00
						<img
							src="../../../img/Button01.png"
							onClick={handlePodcastButton}
						/>
					</p>
				</div>
			</div>
			<div className={styles.ps}>
				<img src="../../../img/Mobilemap.png"/>
			</div>
			<div className={styles.descriptionContainer}>
				<div className={styles.titleBox}>
					<p className={styles.section}>F</p>
					<p className={styles.title}>
						Dopamine Addiction: Visualization of symptoms
					</p>
					<p className={styles.category}>3D Motion Graphic</p>
				</div>

				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>디자이너</p>
					</div>
					<p className={styles.tagContents}>강지수·박규리</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>도슨트</p>
					</div>
					<p className={styles.tagContents}>
						2:00
						<img
							src="../../../img/Button01.png"
							onClick={handleDocentButton}
						/>
					</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>팟캐스트</p>
					</div>
					<p className={styles.tagContents}>
						10:00
						<img
							src="../../../img/Button01.png"
							onClick={handlePodcastButton}
						/>
					</p>
				</div>
			</div>
			<div className={styles.ps}>
				<img src="../../../img/Mobilemap.png"/>
			</div>
		</div>
	);
}

export default Projects;
