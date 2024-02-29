import axios from "axios";
import QRCode from "qrcode.react";
import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import exclude from "../../../Exclude.png";
import modalBG from "../../../img/ModalBG.png";
import BackButton from "../../../img/뒤로가기.png";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";


// import loding1 from "../../../circle1.png";
// import loding2 from "../../../circle2.png";
// import loding3 from "../../../circle3.png";
// import loding4 from "../../../circle4.png";
// import loding5 from "../../../circle5.png";
import styles from "../../../styles/REC/REC6.module.css";
import "react-horizontal-scrolling-menu/dist/styles.css";
import tape from "../../../tape.png";
import videoREC from "../../../video/recBG.mp4";
// import { useHorizontalScroll } from "./useSideScroll";

import Modal from "react-modal";
import { useLocation } from "react-router-dom";

function REC6() {
	const [wish, setwish] = useState("");
	const [littlewish, setlittlewish] = useState("");
	const [qrLink, setQRLink] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);

	const LinkQRCodeGenerator = ({ link }) => {
		return <QRCode value={link} size={200} />;
	};
	let link = "www.clover-inarow.site"; // QR 코드로 변환하려는 링크로 변경하세요.

	const location = useLocation();
	const patternId = location.state.pattern;
	const colorId = location.state.color;
	const name = location.state.name;
	const cardRef = useRef(null);
	const uploadImgur = async (url) => {
		try {
			const apiBase = 'https://api.imgbb.com/1/upload';
			const CLIENT_ID = '';

			let body= new FormData()
			body.set('key','836bfb3fbab7fe820615f1ba0324ab80')
			body.append('image',url)
			console.log(url);
			
			const response = await axios({
				method: 'post',
				url:apiBase,
				data: body
			})
			setQRLink(response.data.data.url);
	
			console.log('Image upload successful:', response.data.data.url);
			return response.data.data.url;
		} catch (error) {
			console.error('Error uploading image:', error);
			// 적절하게 오류 처리, 예: 사용자에게 오류 메시지 표시
		}
	};
	const handleDownload = async () => {
		console.log("download called");
		if (!cardRef.current) return;
		try {
			const div = cardRef.current;
			let url="";
			const canvas = await html2canvas(div, { scale: 2 });
			url=canvas.toDataURL("image/png").split(',')[1];
			link=await uploadImgur(url);

			setIsModalOpen(true);
			// canvas.toBlob(async (blob) => {
			// 	console.log("블롭",blob)
				
			// 	if (blob !== null) {
					
			// 		saveAs(blob, "myPencil.png");
			// 	}
			// });
		} catch (error) {
			console.error("Error converting div to image:", error);
		}
	};

	function handleBack() {
		window.location.href = "/REC/start";
	}

	const [hero, setHero] = useState("");

	// const scrollRef = useHorizontalScroll();
	// const [lodingcircle, setlodingcircle] = useState(1);
	const [showContainer1, setShowContainer1] = useState(true);
	const [showContainer2, setShowContainer2] = useState(false);
	const [showContainer3, setShowContainer3] = useState(false);
	const [showContainer4, setShowContainer4] = useState(false);
	const [showContainer5, setShowContainer5] = useState(false);
	const [showoutment1, setShowoutment1] = useState(false);
	const [showlastment, setShowLastment] = useState(false);
	const [showoutlastment, setShowOutLastment] = useState(false);
	const [showoutcardct, setShowOutCardct] = useState(false);

	let number = `./${patternId}${colorId}.png`;

	useEffect(() => {
		if (location.state.wish === 1) setwish("타인이 갖는 기대");
		else if (location.state.wish === 2)
			setwish("어떤 재화를 갖고 싶게끔하는 상황");
		else if (location.state.wish === 3) setwish("본받고 싶은 타인의 모습");
		else if (location.state.wish === 4) setwish("진심어린 칭찬과 위로");
		else if (location.state.wish === 5) setwish("시간적 여유");
		else setwish(location.state.wishtitle);

		if (location.state.wish === 1)
			setlittlewish(
				`기대가 크다는것은 ${name}님의 잠재력을 알아봤다는뜻이겠죠. 지금보다 나아지지 않더라도 괜찮아요. 그저 나아가는 모습을 보여주면, ${name}님을 향한 믿음은 사라지지 않을 거예요.`
			);
		else if (location.state.wish === 2)
			setlittlewish(
				`${name}님은 스스로를 위해 소비해 본 경험이 있나요? 마음에 담아두던 옷이나, 읽고 싶었던 책을 사는 것처럼요. 잊고 지냈던 나의 가치는 종종 나를 위한 투자나 보살핌에서 시작해요.`
			);
		else if (location.state.wish === 3)
			setlittlewish(
				`높은 곳을 바라보다보면, 스스로가 마냥 부족해보일 때가 있어요. 그럴때마다 떠올렸으면 해요. ${name}님 역시 그들이 걸어온 길을 따라 정상에 도달할 수 있음을.`
			);
		else if (location.state.wish === 4)
			setlittlewish(
				`${name}님 주변에는 좋은 사람들이 많아요. 나의 슬픔을 눈치채고, 아낌없이 지지해주죠. 마음에 쌓아둔 짐이 독이 되기전에, 내가 가진 아픔을 솔직히 털어내 보는건 어떨까요?`
			);
		else if (location.state.wish === 5)
			setlittlewish(
				`${name}님, 무언가에 몰두하다보면 쉬어갈 타이밍을 놓치곤 해요. 하지만 무작정 달리기만 하면 결국 숨이 차 쓰러지고 말죠. 아쉬움은 잠깐 내려놓고 크게 심호흡해보는 건 어떤가요?`
			);
		else
			setlittlewish(
				`${name}님은 다시 일어설 방법을 누구보다 잘 알고 있어요. 늘어짐은 단지 인생의 과정 중 하나이고, 결국엔 일상으로 돌아가 좋아하는 것들로 하루하루를 기록하며 살테니까요.`
			);
	}, [wish, location.state.wish, location.state.wishtitle, name]);
	useEffect(() => {
		let res;
		async function fetchData() {
			res = await axios.get(
				`https://api.clover-inarow.site/rec/${patternId}/${colorId}`
			);

			if (res.data.isSuccess) {
				setHero(res.data.result[0].hero);
			} else {
				console.log("failed");
			}
		}
		fetchData();
		// console.log(number);
		console.log(hero);
	}, [hero, colorId, number, patternId]);
	// const scrollRef = useHorizontalScroll();
	useEffect(() => {
		setTimeout(() => setShowContainer1(true), 2000);
		setTimeout(() => setShowContainer2(true), 3500);
		setTimeout(() => setShowoutment1(true), 7500);
		setTimeout(() => setShowLastment(true), 11500);
		// setTimeout(() => setShowContainer2(false), 12000);
		setTimeout(() => setShowContainer3(true), 12000);
		setTimeout(() => setShowOutLastment(true), 52000);

		// setTimeout(() => setShowContainer2(false), 7500);
		// setTimeout(() => setShowContainer4(true), 11500);
		// setTimeout(() => setShowContainer5(true), 15500);
		// setTimeout(() => setShowContainer4(true), 41000);일상 작업 카드
		// setTimeout(() => setShowContainer5(true), 15500);
		setTimeout(() => setShowContainer4(true), 53000);
		setTimeout(() => setShowOutCardct(true), 58000);
		setTimeout(() => setShowContainer4(false), 58100);
		setTimeout(() => setShowContainer5(true), 58100);
		// setTimeout(() => setIsModalOpen(true), 64100);
		// setTimeout(() => setlodingcircle(2), 47000);
		// setTimeout(() => setlodingcircle(3), 48000);
		// setTimeout(() => setlodingcircle(4), 49000);
		// setTimeout(() => setlodingcircle(5), 50000);
	}, []);

	const elRef = useRef();
	useEffect(() => {
		const el = elRef.current;
		if (el) {
			const onWheel = (e) => {
				if (e.deltaY === 0) return;
				e.preventDefault();
				el.scrollTo({
					left: el.scrollLeft + e.deltaY,
					behavior: "smooth",
				});
			};
			el.addEventListener("wheel", onWheel);
			return () => el.removeEventListener("wheel", onWheel);
		}
	}, [elRef]);

	return (
		<div className={styles.backcolor}>
			<video loop muted autoPlay playsInline>
				<source src={videoREC} type="video/mp4" />
			</video>
			<CSSTransition
				in={showContainer1}
				timeout={1500}
				delay={1000}
				classNames="motion.slide"
				mountOnEnter
				unmountOnExit
				style={{ pointerEvents: "none" }}
			>
				<div className={styles.firstani}>
					<div className={styles.starttitle}>
						{name}님만의 연필이 완성됐어요
					</div>
					<div className={styles.fstpencilct}>
						<img className={styles.fstpencil} alt="" src={hero} />
					</div>
				</div>
			</CSSTransition>
			<CSSTransition
				in={showContainer2}
				timeout={0}
				delay={0}
				classNames="motion-slide"
				mountOnEnter
				unmountOnExit
				style={{ pointerEvents: "none" }}
			>
				<div className={styles.secondani}>
					<div className={styles.secondct}>
						<img
							className={showlastment ? styles.pencilout : styles.secpencil}
							alt=""
							src={hero}
						/>
						<img
							className={showlastment ? styles.tapeout : styles.sectape}
							alt=""
							src={tape}
						/>
					</div>
					<div
						className={showoutment1 ? styles.firstmentout : styles.firstment}
					>
						우리는 축 늘어질때마다 이 연필을 꺼내들어요
						<br />
						그리고 느슨해진 나를 다시금 팽팽하게 만들죠
					</div>
					<div
						className={showlastment ? styles.secondmentout : styles.secondment}
					>
						이 무한의 과정 속에서 {name}님이
						<br /> 잊으면 안되는 사실이 있어요
					</div>
				</div>
			</CSSTransition>
			<CSSTransition
				in={showContainer3}
				timeout={750}
				delay={500}
				classNames="motion-slide"
				mountOnEnter
				unmountOnExit
				style={{ pointerEvents: "none" }}
			>
				<div className={showoutlastment ? styles.trdaniout : styles.trdani}>
					<div className={styles.justthat}>그건 바로..</div>
					<div className={styles.scrollct}>
						<img className={styles.exclude} alt="" src={exclude} />

						<div className={styles.lastmentct}>
							<div className={styles.lastment}>
								{name}님 늘어지는 순간은 누구에게나 찾아와요. 중요한 건 우리가
								그저 그러한 과정에 놓여있음을 깨닫는 거예요. 잠재력을 갖고 있는{" "}
								{name}님은 결국엔 회복하여 소중한 일상들을 기록하며 살테니까요.
							</div>
						</div>
					</div>
					<div className={styles.mousement}>문구를 확인해보세요</div>
				</div>
			</CSSTransition>
			<CSSTransition
				in={showContainer4}
				timeout={750}
				delay={500}
				classNames="motion-slide"
				mountOnEnter
				unmountOnExit
				style={{ pointerEvents: "none" }}
			>
				<div className={showoutcardct ? styles.forthaniout : styles.forthani}>
					<div className={styles.cardmakingtitle}>
						일상 자극 카드를 만드는 중..
					</div>
					<div className={styles.cardct}>
						<div className={styles.card}>
							<div className={styles.question}>{"?"}</div>
						</div>
					</div>
				</div>
			</CSSTransition>
			<CSSTransition
				in={showContainer5}
				timeout={0}
				delay={0}
				classNames="motion-slide"
				mountOnEnter
				unmountOnExit
			>
				<div className={styles.fifthani}>
					{/* <img className={styles.loding1} art = "" src = {loding1}/>
                    <img className={styles.loding2} art = "" src = {loding2}/>
                    <img className={styles.loding3} art = "" src = {loding3}/>
                    <img className={styles.loding4} art = "" src = {loding4}/>
                    <img className={styles.loding5} art = "" src = {loding5}/> */}
					<div className={styles.fifthct}>
						<div id ="card" className={styles.fifthct1} ref={cardRef}>
							<div className={styles.fifthcd1}>
								<img
									alt=""
									src={require(`../../../../public/${patternId}${colorId}.png`)}
								/>
							</div>
							<div className={styles.fifthcd2}>
								{wish}
								<p>{littlewish}</p>
							</div>
						</div>
						<div className={styles.fifthct2}>
							<div className={styles.fifthtxt1}>
								<p>{name}님의 일상이 궁금해요</p>
							</div>
							<div className={styles.fifthtxt2}>
								<p>
									슬럼프가 끝나고 나면, 다시 만난 일상이 새롭게 보일때가 있어요.
									{name}님에게는 잃고 싶지 않은 소중한 일상이 있나요? 좋아하는
									사람, 좋아하는 일, 좋아하는 취미 등 나를 움 직이던 것들
									말이에요. 시간이 괜찮다면 종이와 펜에 {name}님의 생각을
									적어주세요. 그리고 이것을 다른 사람들에게도 알려주세요.
								</p>
							</div>
							<div className={styles.fifthtxt3}>
								<div className={styles.fifthbutt1}>
									<button className={styles.imgbutt} onClick={handleDownload}>
										<p>이미지 저장하기</p>
									</button>
								</div>

								<div className={styles.fifthbutt2}>
									<button className={styles.backbutt} onClick={handleBack}>
										<p>처음으로</p>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</CSSTransition>
			<Modal
				isOpen={isModalOpen}
				onRequestClose={() => setIsModalOpen(false)}
				style={{
					content: {
						top: "0%",
						left: "0%",
						right: "0%",
						bottom: "0%",
						backgroundImage: `url(${modalBG})`,
						overflow: "auto",
						WebkitOverflowScrolling: "touch",
						borderRadius: "0", // 모달의 모서리를 직사각형으로 만듭니다.
						outline: "none",
						padding: "0",
					},
				}}
			>
				<img
					src={BackButton}
					alt="뒤로가기"
					onClick={() => setIsModalOpen(false)}
					className={styles.BackButton}
				/>
				<div className={styles.Ct01}>
					<div className={styles.Ct05}>
						{/* <img src={QRSImage} alt="QRS" className={styles.qrs}/> */}
						<div
							style={{ filter: "drop-shadow(0px 3px 18px rgba(0, 0, 0, 0.2))" }}
						>
							<LinkQRCodeGenerator link={qrLink} />
						</div>
						<div className={styles.Ct02}>
							<div className={styles.Ct03}>
								<p>이미지 저장하기</p>
							</div>
							<div className={styles.Ct04}>
								<p>
									{name} 님의 연필을 소중히 간직할 수 있어요 카메라로 아래
									QR코드를 찍어주세요
								</p>
							</div>
						</div>
					</div>
					<div className={styles.blankC}></div>
					<div className={styles.Ct06}>
						<button className={styles.back} onClick={handleBack}>
							<p>처음으로</p>
						</button>
					</div>
				</div>
			</Modal>
		</div>
	);
}

export default REC6;
