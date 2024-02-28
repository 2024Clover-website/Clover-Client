import React, { useEffect, useState } from "react";
import { CSSTransition } from 'react-transition-group';

import axios from "axios";

import styles from "../../../styles/components/REC6.module.css";
import videoREC from "../../../video/recBG.mp4";
import tape from "../../../tape.png";

import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function REC6(){
    const location = useLocation();
    const patternId = location.state.pattern;
    const colorId = location.state.color;
    const name = location.state.name;

    const [hero, setHero] = useState("");

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

    const [showContainer1, setShowContainer1] = useState(true);
    const [showContainer2, setShowContainer2] = useState(false);
    const [showContainer3, setShowContainer3] = useState(false);
    const [showContainer4, setShowContainer4] = useState(false);
    const [showContainer5, setShowContainer5] = useState(false);
    const [showoutment1, setShowoutment1] = useState(false);
    const [showlastment, setShowLastment] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowContainer1(true), 2000);
        setTimeout(() => setShowContainer2(true), 3500);
        setTimeout(() => setShowoutment1(true), 7500);
        setTimeout(()=> setShowLastment(true), 11500);
        // setTimeout(()=> setShowContainer3(true), 12000);

        // setTimeout(() => setShowContainer2(false), 7500);
        // setTimeout(() => setShowContainer4(true), 11500);
        // setTimeout(() => setShowContainer5(true), 15500);
    }, [])


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
        </div>
    )
}

export default REC6;