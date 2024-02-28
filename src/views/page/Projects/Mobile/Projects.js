import React from "react";

import { useNavigate } from "react-router-dom";

import styles from "../../../../styles/Projects/Mobile/Projects.module.css";

function Projects() {
	const navigate = useNavigate();

	return (
		<div className={styles.container}>
			<div className={styles.descriptionContainer}>
				<div className={styles.titleBox2}>
					<p className={styles.title2}>자세히 보고싶은 프로젝트가 있나요?</p>
					<p className={styles.category2}>
						도슨트와 팟캐스트가 준비되어 있어요.
					</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>도슨트</p>
					</div>
					<p className={styles.tagContents2}>
						작품에 대한 자세한 설명을 들을 수 있어요
					</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>팟캐스트</p>
					</div>
					<p className={styles.tagContents3} style={{ whiteSpace: "pre-wrap" }}>
						{
							"번아웃과 슬럼프,\n그리고 새로운 자극에 대한\n각자만의 스토리를 들을 수 있어요"
						}
					</p>
				</div>
			</div>
			<div className={styles.ps}>
				<img alt="" src="/img/MAmap.png" autoPlay loop muted playsInline />
			</div>

			<div className={styles.descriptionContainer}>
				<div className={styles.titleBox}>
					<p className={styles.section}>A</p>
					<p className={styles.title}>About In a row</p>
					<p className={styles.category}>ART DIRECT</p>
				</div>

				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>디자이너</p>
					</div>
					<p className={styles.tagContents4}>
						권예지·조용욱·김혜신
						<br />
						기한나·안서경·허민영
					</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>팟캐스트</p>
					</div>
					<p className={styles.tagContents}>
						15:28
						<img
							src="../../../img/Button01.png"
							onClick={() => {
								navigate("/projects/podcast/title", {
									state: {
										teamId: 1,
									},
								});
								window.location.href = "/projects/podcast/title";
							}}
							alt=""
						/>
					</p>
				</div>
			</div>
			<div className={styles.ps}>
				<img alt="" src="/img/MBmap.png" autoPlay loop muted playsInline />
			</div>
			<div className={styles.descriptionContainer}>
				<div className={styles.titleBox}>
					<p className={styles.section}>B</p>
					<p className={styles.title}>KEYCLE</p>
					<p className={styles.category}>SERVICE DESIGN</p>
				</div>

				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>디자이너</p>
					</div>
					<p className={styles.tagContents4}>
						최재정·김경은
						<br />
						김동재·노유정
					</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>도슨트</p>
					</div>
					<p className={styles.tagContents}>
						2:19
						<img
							src="../../../img/Button01.png"
							onClick={() => {
								navigate("/projects/docent/title", {
									state: {
										teamId: 2,
									},
								});
								window.location.href = "/projects/docent/title";
							}}
							alt=""
						/>
					</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>팟캐스트</p>
					</div>
					<p className={styles.tagContents}>
						10:30
						<img
							src="../../../img/Button01.png"
							onClick={() => {
								navigate("/projects/podcast/title", {
									state: {
										teamId: 2,
									},
								});
								window.location.href = "/projects/podcast/title";
							}}
							alt=""
						/>
					</p>
				</div>
			</div>
			<div className={styles.ps}>
				<img alt="" src="/img/MCmap.png" autoPlay loop muted playsInline />
			</div>
			<div className={styles.descriptionContainer}>
				<div className={styles.titleBox}>
					<p className={styles.section}>C</p>
					<p className={styles.title}>악의 불변</p>
					<p className={styles.category}>GRAPHIC DESIG</p>
				</div>

				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>디자이너</p>
					</div>
					<p className={styles.tagContents4}>
						임로빈·김성연
						<br />
						박금주·박지현
					</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>도슨트</p>
					</div>
					<p className={styles.tagContents}>
						2:48
						<img
							src="../../../img/Button01.png"
							onClick={() => {
								navigate("/projects/docent/title", {
									state: {
										teamId: 3,
									},
								});
								window.location.href = "/projects/docent/title";
							}}
							alt=""
						/>
					</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>팟캐스트</p>
					</div>
					<p className={styles.tagContents}>
						9:45
						<img
							src="../../../img/Button01.png"
							onClick={() => {
								navigate("/projects/podcast/title", {
									state: {
										teamId: 3,
									},
								});
								window.location.href = "/projects/podcast/title";
							}}
							alt=""
						/>
					</p>
				</div>
			</div>
			<div className={styles.ps}>
				<img alt="" src="/img/MDmap.png" autoPlay loop muted playsInline />
			</div>
			<div className={styles.descriptionContainer}>
				<div className={styles.titleBox}>
					<p className={styles.section}>D</p>
					<p className={styles.title}>VIBE MAKERS</p>
					<p className={styles.category}>CHARATER POP-UP</p>
				</div>

				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>디자이너</p>
					</div>
					<p className={styles.tagContents4}>
						정지윤·김나연·박도은
						<br />
						송지윤·오시헌
					</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>도슨트</p>
					</div>
					<p className={styles.tagContents}>
						2:54
						<img
							src="../../../img/Button01.png"
							onClick={() => {
								navigate("/projects/docent/title", {
									state: {
										teamId: 4,
									},
								});
								window.location.href = "/projects/docent/title";
							}}
							alt=""
						/>
					</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>팟캐스트</p>
					</div>
					<p className={styles.tagContents}>
						6:06
						<img
							src="../../../img/Button01.png"
							onClick={() => {
								navigate("/projects/podcast/title", {
									state: {
										teamId: 4,
									},
								});
								window.location.href = "/projects/podcast/title";
							}}
							alt=""
						/>
					</p>
				</div>
			</div>
			<div className={styles.ps}>
				<img alt="" src="/img/MEmap.png" autoPlay loop muted playsInline />
			</div>
			<div className={styles.descriptionContainer}>
				<div className={styles.titleBox}>
					<p className={styles.section}>E</p>
					<p className={styles.title}>
						Dopamine Addiction: Visualization of symptoms
					</p>
					<p className={styles.category}>SIDE PROJECT</p>
				</div>

				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>디자이너</p>
					</div>
					<p className={styles.tagContents4}>정지윤·김나연</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>도슨트</p>
					</div>
					<p className={styles.tagContents}>
						3:01
						<img
							src="../../../img/Button01.png"
							onClick={() => {
								navigate("/projects/docent/title", {
									state: {
										teamId: 5,
									},
								});
								window.location.href = "/projects/docent/title";
							}}
							alt=""
						/>
					</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>팟캐스트</p>
					</div>
					<p className={styles.tagContents}>
						16:27
						<img
							src="../../../img/Button01.png"
							onClick={() => {
								navigate("/projects/podcast/title", {
									state: {
										teamId: 5,
									},
								});
								window.location.href = "/projects/podcast/title";
							}}
							alt=""
						/>
					</p>
				</div>
			</div>
			<div className={styles.ps}>
				<img alt="" src="/img/MFMmap.png" autoPlay loop muted playsInline />
			</div>
			<div className={styles.descriptionContainer}>
				<div className={styles.titleBox}>
					<p className={styles.section}>F</p>
					<p className={styles.title}>Perfect doll factory</p>
					<p className={styles.category}>EXPERIENTIAL MEDIA ART</p>
				</div>

				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>디자이너</p>
					</div>
					<p className={styles.tagContents4}>
						한승우·강지수
						<br />
						박규리·임재윤
					</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>도슨트</p>
					</div>
					<p className={styles.tagContents}>
						1:58
						<img
							src="../../../img/Button01.png"
							onClick={() => {
								navigate("/projects/docent/title", {
									state: {
										teamId: 6,
									},
								});
								window.location.href = "/projects/docent/title";
							}}
							alt=""
						/>
					</p>
				</div>
				<div className={styles.innerBox}>
					<div className={styles.tag}>
						<p>팟캐스트</p>
					</div>
					<p className={styles.tagContents}>
						16:27
						<img
							src="../../../img/Button01.png"
							onClick={() => {
								navigate("/projects/podcast/title", {
									state: {
										teamId: 6,
									},
								});
								window.location.href = "/projects/podcast/title";
							}}
							alt=""
						/>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Projects;
