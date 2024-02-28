import React, { useEffect, useState, useRef } from "react";
import { CSSTransition } from 'react-transition-group';
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
        // setTimeout(() => setShowContainer5(true), 15500);
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


    return(
        <div className={styles.backcolor}>
            <video loop muted autoPlay playsInline>
                <source src={videoREC} type='video/mp4'/>
            </video>
            <CSSTransition in={showContainer1} timeout={1500} delay={1000} classNames="motion.slide" mountOnEnter unmountOnExit>
                <div className={styles.firstani}>
                    <div className={styles.starttitle}>{name}님만의 연필이 완성됐어요</div>
                    <div className={styles.fstpencilct}>
                        <img className={styles.fstpencil} alt src={hero}/>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition in={showContainer2} timeout={0} delay={0} classNames="motion-slide" mountOnEnter unmountOnExit>
            <div className={styles.secondani}>
                <div className={styles.secondct}>
                    <img className={ showlastment ? styles.pencilout : styles.secpencil} alt src={hero}/>
                    <img className={ showlastment ? styles.tapeout : styles.sectape} art src={tape}/>
                </div>
                <div className={showoutment1 ? styles.firstmentout : styles.firstment}>우리는 축 늘어질때마다 이 연필을 꺼내들어요<br/>그리고 느슨해진 나를 다시금 팽팽하게 만들죠</div>
                <div className={showlastment ? styles.secondmentout : styles.secondment}>이 무한의 과정 속에서 {name}님이<br/> 잊으면 안되는 사실이 있어요</div>
            </div>
            </CSSTransition>
            <CSSTransition in={showContainer3} timeout={750} delay={500} classNames="motion-slide" mountOnEnter unmountOnExit>
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
            <CSSTransition in={showContainer4} timeout={750} delay={500} classNames="motion-slide" mountOnEnter unmountOnExit>
                <div className={styles.forthani}>
                    <div className={styles.cardmakingtitle}>일상 자극 카드를 만드는 중..</div>
                    <div className={styles.cardct}>
                        <div className={styles.card}>
                            <div className={styles.question}>{'?'}</div>
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