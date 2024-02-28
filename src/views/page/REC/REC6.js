import React, { useEffect, useState, useRef } from "react";
import { CSSTransition } from 'react-transition-group';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import {useHorizontalScroll} from "./useSideScroll";
import axios from "axios";

import styles from "../../../styles/components/REC6.module.css";
import videoREC from "../../../video/recBG.mp4";
import tape from "../../../tape.png";
import exclude from "../../../Exclude.png";

import { useLocation } from "react-router-dom";

import { ScrollMenu, VisibilityContext }from "react-horizontal-scrolling-menu";
// type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;
import usePreventBodyScroll from "./enableBodyScroll";
import 'react-horizontal-scrolling-menu/dist/styles.css';


function REC6(){
    const { disableScroll, enableScroll } = usePreventBodyScroll();

    const location = useLocation();
    const patternId = location.state.pattern;
    const colorId = location.state.color;
    const name = location.state.name;
    let wish;
    const cardRef = useRef(null);

	const handleDownload = async () => {
		console.log("download called");
		if (!cardRef.current) return;
		try {
			const div = cardRef.current;
			const canvas = await html2canvas(div, { scale: 2 });
			canvas.toBlob((blob) => {
				if (blob !== null) {
					saveAs(blob, "myPencil.png");
				}
			});
		} catch (error) {
			console.error("Error converting div to image:", error);
		}
	};

	function handleBack() {
		window.location.href = "/REC";
	}

    const [hero, setHero] = useState("");

    // const scrollRef = useHorizontalScroll();
    const [showContainer1, setShowContainer1] = useState(true);
    const [showContainer2, setShowContainer2] = useState(false);
    const [showContainer3, setShowContainer3] = useState(false);
    const [showContainer4, setShowContainer4] = useState(false);
    const [showContainer5, setShowContainer5] = useState(false);
    const [showoutment1, setShowoutment1] = useState(false);
    const [showlastment, setShowLastment] = useState(false);
    const [showoutlastment, setShowOutLastment] = useState(false);
    useEffect(() => {
        if(location.state.wish === 1) wish = "타인이 갖는 기대";
        else if(location.state.wish === 2) wish = "어떤 재화를 갖고 싶게끔하는 상황";
        else if(location.state.wish === 3) wish = "본받고 싶은 타인의 모습";
        else if(location.state.wish === 4) wish = "진심어린 칭찬과 위로";
        else if(location.state.wish === 5) wish = "시간적 여유";
        else wish = location.state.wishtitle;
    },[])
    useEffect(()=> {
        let res;
        async function fetchData() {
            res = await axios.get(`https://api.clover-inarow.site/rec/${patternId}/${colorId}`)
        
            if(res.data.isSuccess) {
                setHero(res.data.result[0].hero);
            } else {
                console.log("failed");
            }
        }
        fetchData();
        console.log(number)
        console.log(hero)
    },[hero]);
    // const scrollRef = useHorizontalScroll();
    useEffect(() => {
        setTimeout(() => setShowContainer1(true), 2000);
        setTimeout(() => setShowContainer2(true), 3500);
        setTimeout(() => setShowoutment1(true), 7500);
        setTimeout(()=> setShowLastment(true), 11500);
        // setTimeout(() => setShowContainer2(false), 12000);
        setTimeout(()=> setShowContainer3(true), 12000);
        // setTimeout(()=> setShowOutLastment(true), 40000);엔딩 크레딧

        // setTimeout(() => setShowContainer2(false), 7500);
        // setTimeout(() => setShowContainer4(true), 11500);
        // setTimeout(() => setShowContainer5(true), 15500);
        // setTimeout(() => setShowContainer4(true), 41000);일상 작업 카드
        setTimeout(() => setShowContainer5(true), 15500);
    }, [])

    const elRef = useRef();
    useEffect(() => {
        const el = elRef.current;
        if (el) {
        const onWheel = e => {
            if (e.deltaY == 0) return;
            e.preventDefault();
            el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "smooth"
            });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
        }
    }, [elRef]);

    let number = `./${patternId}${colorId}.png` 
    
    return(
        <div className={styles.backcolor}>
            <video loop muted autoPlay playsInline>
                <source src={videoREC} type='video/mp4'/>
            </video>
            <CSSTransition
            in={showContainer1} 
            timeout={1500} delay={1000} 
            classNames="motion.slide"
            mountOnEnter 
            unmountOnExit
            style={{ pointerEvents: "none" }}>
                <div className={styles.firstani}>
                    <div className={styles.starttitle}>{name}님만의 연필이 완성됐어요</div>
                    <div className={styles.fstpencilct}>
                        <img className={styles.fstpencil} src = {hero}/>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition 
            in={showContainer2} 
            timeout={0} delay={0} 
            classNames="motion-slide" 
            mountOnEnter unmountOnExit 
            style={{ pointerEvents: "none" }}
            >
            <div className={styles.secondani}>
                <div className={styles.secondct}>
                    <img className={ showlastment ? styles.pencilout : styles.secpencil} alt src={hero}/>
                    <img className={ showlastment ? styles.tapeout : styles.sectape} art src={tape}/>
                </div>
                <div className={showoutment1 ? styles.firstmentout : styles.firstment}>우리는 축 늘어질때마다 이 연필을 꺼내들어요<br/>그리고 느슨해진 나를 다시금 팽팽하게 만들죠</div>
                <div className={showlastment ? styles.secondmentout : styles.secondment}>이 무한의 과정 속에서 {name}님이<br/> 잊으면 안되는 사실이 있어요</div>
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
                        <img className={styles.exclude} alt src={exclude}/>
                            <div className={styles.lastmentct} ref={elRef}>
                                <div  className={styles.lastment} >{name}님 늘어지는 순간은 누구에게나 찾아와요. 중요한 건 우리가 그저 그러한 과정에 놓여있음을 깨닫는 거예요. 잠재력을 갖고 있는 {name}님은 결국엔 회복하여 소중한 일상들을 기록하며 살테니까요.</div>   
                            </div>
                    </div>
                    <div className={styles.mousement}>마우스 휠을 굴려 문구를 확인해보세요</div>
                </div>
            </CSSTransition>
            <CSSTransition 
            in={showContainer4} 
            timeout={750} delay={500} 
            classNames="motion-slide" 
            mountOnEnter unmountOnExit
            style={{ pointerEvents: "none" }}
            >
                <div className={styles.forthani}>
                    <div className={styles.cardmakingtitle}>일상 자극 카드를 만드는 중..</div>
                    <div className={styles.cardct}>
                        <div className={styles.card}>
                            <div className={styles.question}>{'?'}</div>
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
					<div className={styles.fifthct}>
						<div className={styles.fifthct1} ref={cardRef}>
							<div className={styles.fifthcd1}>
								<img alt src = {require(`../../../../public/${patternId}${colorId}.png`)} />
							</div>
							<div className={styles.fifthcd2}>타인이 갖는 기대</div>
						</div>
						<div className={styles.fifthct2}>
							<div className={styles.fifthtxt1}>
								<p>{name}님의 일상이 궁금해요</p>
							</div>
							<div className={styles.fifthtxt2}>
								<p>
									슬럼프가 끝나고 나면, 다시 만난 일상이 새롭게 보일때가 있어요.{" "}
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
        </div>
    )
}

// function onWheel(apiObj, ev) {
//     var isTouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

//     if (isTouchpad) {
//         ev.stopPropagation();
//         return;
//     }

//     if (ev.deltaY < 0) {
//         apiObj.scrollNext();
//     } else if (ev.deltaY > 0) {
//         apiObj.scrollPrev();
//     }
// }

export default REC6;