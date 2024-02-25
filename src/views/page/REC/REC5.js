import React, { useState } from "react";
import styles from "../../../styles/components/REC5.module.css";
import { useLocation } from "react-router-dom";
import videoREC from "../../../video/recBG.mp4";

function REC5(){
    const [colorvalue, setcolor] = useState(0);
    const [color1, boolcolor1] = useState(true);
    const [color2, boolcolor2] = useState(true);
    const [color3, boolcolor3] = useState(true);
    const [color4, boolcolor4] = useState(true);
    const [color5, boolcolor5] = useState(true);

    function ClickColor1(){
        setcolor(1);
        boolcolor1(true);
        boolcolor2(false);
        boolcolor3(false);
        boolcolor4(false);
        boolcolor5(false);
    }
    function ClickColor2(){
        setcolor(2);
        boolcolor2(true);
        boolcolor1(false);
        boolcolor3(false);
        boolcolor4(false);
        boolcolor5(false);
    }
    function ClickColor3(){
        setcolor(3);
        boolcolor3(true);
        boolcolor2(false);
        boolcolor1(false);
        boolcolor4(false);
        boolcolor5(false);
    }
    function ClickColor4(){
        setcolor(4);
        boolcolor4(true);
        boolcolor2(false);
        boolcolor3(false);
        boolcolor1(false);
        boolcolor5(false);
    }
    function ClickColor5(){
        setcolor(5);
        boolcolor5(true);
        boolcolor2(false);
        boolcolor3(false);
        boolcolor4(false);
        boolcolor1(false);
    }

    function handleREC6click(){
        window.location.href = "/REC/tape";
    }
    const location = useLocation();
    const name = location.state.namevalue;
    return(
        <div className={styles.backcolor}>
            <video loop muted autoPlay playsInline>
                <source src={videoREC} type='video/mp4'/>
            </video>
            <div className={styles.title}>자극을 받은 {name}님의 기분은 어떤 색인가요?</div>
            <div className={styles.colorContainer}>
            <div onClick={ClickColor1} className={!color1 ? styles.circle1down : color1 && colorvalue === 0 ? styles.circle1 : styles.circle1up}></div>
            <div onClick={ClickColor2} className={!color2 ? styles.circle2down : color2 && colorvalue === 0 ? styles.circle2 : styles.circle2up}></div>
            <div onClick={ClickColor3} className={!color3 ? styles.circle3down : color3 && colorvalue === 0 ? styles.circle3 : styles.circle3up}></div>
            <div onClick={ClickColor4} className={!color4 ? styles.circle4down : color4 && colorvalue === 0 ? styles.circle4 : styles.circle4up}></div>
            <div onClick={ClickColor5} className={!color5 ? styles.circle5down : color5 && colorvalue === 0 ? styles.circle5 : styles.circle5up}></div>
            
            </div>
            <div className={styles.IconContainer}>
                <svg className={styles.NextIcon} onClick={handleREC6click} width="136" height="136" viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_bd_890_5617)">
                    <circle cx="68" cy="65" r="50" fill="white" fill-opacity="0.25" shape-rendering="crispEdges"/>
                    <circle cx="68" cy="65" r="48.5" stroke="white" stroke-opacity="0.75" stroke-width="3" shape-rendering="crispEdges"/>
                    </g>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M71.4083 45.8368C72.524 44.7211 74.3331 44.7211 75.4489 45.8368L92.5917 62.9797C93.7075 64.0955 93.7075 65.9045 92.5917 67.0203L75.4489 84.1632C74.3331 85.2789 72.524 85.2789 71.4083 84.1632C70.2925 83.0474 70.2925 81.2383 71.4083 80.1226L83.6737 67.8571H44.8571C43.2792 67.8571 42 66.578 42 65C42 63.422 43.2792 62.1429 44.8571 62.1429H83.6737L71.4083 49.8774C70.2925 48.7617 70.2925 46.9526 71.4083 45.8368Z" fill="white"/>
                    <defs>
                    <filter id="filter0_bd_890_5617" x="0" y="0" width="136" height="136" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_890_5617"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="3"/>
                    <feGaussianBlur stdDeviation="9"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                    <feBlend mode="normal" in2="effect1_backgroundBlur_890_5617" result="effect2_dropShadow_890_5617"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_890_5617" result="shape"/>
                    </filter>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default REC5;