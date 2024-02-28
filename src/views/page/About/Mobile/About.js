import React from "react";

import styles from "../../../../styles/About/Mobile/About.module.css";

function About() {
	return (
		<div className={styles.Mcontainer}>
			<img className={styles.responsiveImage} src="./img/aboutMimg1.png" alt="description" />
			
			<div className={styles.Mpage}>
				<div className={styles.MLinecontainer}></div>
				<div className={styles.MC1}>
					<p0>Overview</p0>
					<p1>01</p1>
				</div>
				<div className={styles.MC2}>
					<p>In a row</p>
				</div>
				<div className={styles.MC3}>
					<p>삶의 기나긴 선상에 놓인 우리는 마치 하나의 카세트처럼
						움직이는 것 같아요. 같은 동작을 반복하며 느슨해졌다가,
						무언가의 힘을 빌려 본래의 선율을 되찾기 때문이죠.</p>
				</div>
			</div>
			<video className={styles.responsiveImage} src="./img/About_1.mp4" alt="description" autoPlay loop muted playsInline />
			
			<div className={styles.Mpage}>
				<div className={styles.MLinecontainer}></div>
				<div className={styles.MC1}>
					<p0>Design Concept1</p0>
					<p1>02</p1>
				</div>
				<div className={styles.MC2}>
					<p1>릴을 돌려 팽팽하게</p1>
				</div>
				<div className={styles.MC3}>
					<p1>릴이 돌아가다 보면 느슨해졌던 테이프가 다시금 팽팽해집니다.
						그렇게 제자리로 돌아온 우리는 잡음을 줄이고, 또다시 하루하루
						를 살아갑니다.</p1>
				</div>
			</div>
			<video className={styles.responsiveImage} src="./img/About_2.mp4" alt="description" autoPlay loop muted playsInline/>
			<div className={styles.Mpage}>
				<div className={styles.MLinecontainer}></div>
				<div className={styles.MC1}>
					<p0>Design Concept2</p0>
					<p1>03</p1>
				</div>
				<div className={styles.MC2}>
					<p1>나를 감싸던 것</p1>
				</div>
				<div className={styles.MC3}>
					<p1>테이프 커버에 곡에 대한 정보가 빼곡히 적혀있듯이, 내 주변에
						는 그동안 쌓아온 삶과 경험들로 가득해요. 이것들을 차근차근
						돌아보면, 내가 좋아하는 것들이 무엇인지 알 수 있어요.</p1>
				</div>
			</div>
			<video className={styles.responsiveImage} src="./img/About_3.mp4" alt="description" autoPlay loop muted playsInline/>
			<div className={styles.Mpage}>
				<div className={styles.MLinecontainer}></div>
				<div className={styles.MC1}>
					<p0>Design Concept3</p0>
					<p1>04</p1>
				</div>
				<div className={styles.MC2}>
					<p1>일상으로의 회복</p1>
				</div>
				<div className={styles.MC3}>
					<p1>지루했던 일상이 다채로워 보이고, 무엇이든지 해낼 수 있을 거
						같은 자신감도 생겨요. 언제 다시 번아웃과 슬럼프가 찾아올 지
						모르지만, 지금의 감정은 이루 다 말할 수 없어요.</p1>
				</div>
			</div>
			<video className={styles.responsiveImage} src="./img/About_4.mp4" alt="description" autoPlay loop muted playsInline/>
			<div className={styles.Mpage}>
				<div className={styles.MC3}>
					<p>알파벳 순서대로 보면 보다 쾌적하게 전시를 관람할수 있습니다. 또한 기프트존을 따로 마련해두었습니다.
						다른 관람객들을 위해, 방문자님의 소중한 마음은 꼭 기프트존에만 놓아주세요.</p>
				</div>
			</div>
			<img className={styles.responsiveImage} src="./img/aboutMimg6.png" alt="description" />
			<div className={styles.Mpage}>
				<div className={styles.MC3}>
					<p>온라인으로도 전시를 관람하실 수 있습니다. About 페이지에서 이번 전시에 대한 전문을 읽어보실 수 있으
						며, Projects 페이지에서 각 팀 별 도슨트와 슬럼프에 대한 이야기를 팟캐스트 형식으로 들어볼 수 있습니다.
						마지막으로 REC 페이지에서는 나만의 자극 카드를 만드는 인터랙티브한 경험을 즐기실 수 있습니다.</p>
				</div>
			</div>
			<img className={styles.responsiveImage} src="./img/aboutMimg7.png" alt="description" />
			<div className={styles.MC4}>
				<p>Graphic Detail</p>
			</div>
			<img className={styles.responsiveImage} src="./img/aboutMimg8.png" alt="description" />
			<img className={styles.responsiveImage} src="./img/aboutMimg9.png" alt="description" />
			<img className={styles.responsiveImage} src="./img/aboutMimg10.png" alt="description" />
			<img className={styles.responsiveImage} src="./img/aboutMimg11.png" alt="description" />
			<img className={styles.responsiveImage} src="./img/aboutMimg12.png" alt="description" />
			<div className={styles.MC5}>
				<p>Thanks to</p>
			</div>
			<div className={styles.Mpage}>
				<div className={styles.MLinecontainer}></div>
				<div className={styles.MC6}>
					<p0>전시 브랜딩</p0>
					<p1>01</p1>
				</div>
				<div className={styles.MC7}>
					<p0>About In a row</p0>
					<p1>ART DIRECT</p1>
				</div>
				<div className={styles.MC8}>
					<div className={styles.Member}>
						<p0>권예지</p0>
						<p1>Director & generalize design</p1>
					</div>
					<div className={styles.Member}>
						<p0>조용욱</p0>
						<p1>Director & interective design</p1>
					</div>
					<div className={styles.Member}>
						<p0>김혜신</p0>
						<p1>Graphic design</p1>
					</div>
					<div className={styles.Member}>
						<p0>기한나</p0>
						<p1>Graphic design</p1>
					</div>
					<div className={styles.Member}>
						<p0>안서경</p0>
						<p1>Layout design</p1>
					</div>
					<div className={styles.Member}>
						<p0>허민영</p0>
						<p1>Space design</p1>
					</div>
				</div>
			</div>
			<div className={styles.Mpage}>
				<div className={styles.MLinecontainer}></div>
				<div className={styles.MC6}>
					<p0>태산</p0>
					<p1>02</p1>
				</div>
				<div className={styles.MC7}>
					<p0>KEYCLE</p0>
					<p1>SERVICE DESIGN</p1>
				</div>
				<div className={styles.MC8}>
					<div className={styles.Member}>
						<p0>최재정</p0>
						<p1>BX design</p1>
					</div>
					<div className={styles.Member}>
						<p0>김경은 </p0>
						<p1>UIUX design</p1>
					</div>
					<div className={styles.Member}>
						<p0>김동제</p0>
						<p1>Product design</p1>
					</div>
					<div className={styles.Member}>
						<p0>노유정</p0>
						<p1>Product design</p1>
					</div>
				</div>
			</div>
			<div className={styles.Mpage}>
				<div className={styles.MLinecontainer}></div>
				<div className={styles.MC6}>
					<p0>이따</p0>
					<p1>03</p1>
				</div>
				<div className={styles.MC7}>
					<p0>악의 불변</p0>
					<p1>GRAPHIC DESIGN</p1>
				</div>
				<div className={styles.MC8}>
					<div className={styles.Member}>
						<p0>임로빈</p0>
						<p1>Space design</p1>
					</div>
					<div className={styles.Member}>
						<p0>김성연</p0>
						<p1>Graphic design</p1>
					</div>
					<div className={styles.Member}>
						<p0>박금주</p0>
						<p1>Graphic design</p1>
					</div>
					<div className={styles.Member}>
						<p0>박지헌</p0>
						<p1>Graphic design</p1>
					</div>
				</div>
			</div>
			<div className={styles.Mpage}>
				<div className={styles.MLinecontainer}></div>
				<div className={styles.MC6}>
					<p0>VIBE<br/>MAKERS</p0>
					<p1>04</p1>
				</div>
				<div className={styles.MC7}>
					<p0>VIBE WITH</p0>
					<p1>CHARATER POP-UP</p1>
				</div>
				<div className={styles.MC8}>
					<div className={styles.Member}>
						<p0>정지윤</p0>
						<p1>Visual design</p1>
					</div>
					<div className={styles.Member}>
						<p0>김나연</p0>
						<p1>Graphic design</p1>
					</div>
					<div className={styles.Member}>
						<p0>박도은</p0>
						<p1>Graphic design</p1>
					</div>
					<div className={styles.Member}>
						<p0>송지윤</p0>
						<p1>Visual design</p1>
					</div>
					<div className={styles.Member}>
						<p0>오시현</p0>
						<p1>Product design</p1>
					</div>
				</div>
			</div>
			<div className={styles.Mpage}>
				<div className={styles.MLinecontainer}></div>
				<div className={styles.MC6}>
					<p0>도파민<br/>중독자들</p0>
					<p1>05</p1>
				</div>
				<div className={styles.MC7}>
					<p0>Dopamine Addiction:
						Visualization of symptoms</p0>
					<p1>SIDE PROJECT</p1>
				</div>
				<div className={styles.MC8}>
					<div className={styles.Member}>
						<p0>강지수</p0>
						<p1>3D graphic design</p1>
					</div>
					<div className={styles.Member}>
						<p0>박규리</p0>
						<p1>3D graphic design</p1>
					</div>
				</div>
			</div>
			<div className={styles.Mpage}>
				<div className={styles.MLinecontainer}></div>
				<div className={styles.MC6}>
					<p0>옥수수수염</p0>
					<p1>06</p1>
				</div>
				<div className={styles.MC7}>
					<p0>Perfect doll factory</p0>
					<p1>EXPERIENTIAL MEDIA ART</p1>
				</div>
				<div className={styles.CT3}>
					<div className={styles.Member}>
						<p0>한승우</p0>
						<p1>3D motion graphic design</p1>
					</div>
					<div className={styles.Member}>
						<p0>강지수</p0>
						<p1>3D graphic design</p1>
					</div>
					<div className={styles.Member}>
						<p0>박규리</p0>
						<p1>3D graphic design</p1>
					</div>
					<div className={styles.Member}>
						<p0>임재윤</p0>
						<p1>2D motion graphic design</p1>
					</div>
				</div>
			</div>
			<div className={styles.Mpage}>
				<div className={styles.MLinecontainer}></div>
				<div className={styles.MC6}>
					<p0>닥사모</p0>
					<p1>07</p1>
				</div>
				<div className={styles.MC7}>
					<p0>초대장, 웹사이트</p0>
					<p1>SIDE DEVELOPER</p1>
				</div>
				<div className={styles.MC8}>
					<div className={styles.Member}>
						<p0>장준용</p0>
						<p1>Dev/Server</p1>
					</div>
					<div className={styles.Member}>
						<p0>김성진</p0>
						<p1>Web/FE</p1>
					</div>
					<div className={styles.Member}>
						<p0>남병준</p0>
						<p1>Web(mobile)/FE</p1>
					</div>
					<div className={styles.Member}>
						<p0>권상훈</p0>
						<p1>Web/FE</p1>
					</div>
					<div className={styles.Member}>
						<p0>유민기</p0>
						<p1>Web(mobile)/FE</p1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
