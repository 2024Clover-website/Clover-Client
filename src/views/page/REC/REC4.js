import React from "react";
import styles from "../../../styles/components/REC4.module.css"
import { useLocation, useNavigate } from "react-router-dom";

function REC4(){
    const navigate = useNavigate();
    function handleREC5click(){
        navigate("/REC/color", {state: {namevalue : name}});
        window.location.href = "/REC/color";
    }
    const location = useLocation();
    const name = location.state.nameval;
    return(
        <div className={styles.backcolor}>
            <div className={styles.title}>그 자극은 어떤 모습으로 {name}님께 다가오나요?</div>
            <div className={styles.PNGContainer}>
                <div className={styles.PNGct2}>
                    <img className = {styles.Vector1} alt = "Vector1" src = "/Vector1.png"></img>
                    <img className = {styles.Vector2} alt = "Vector2" src = "/Vector2.png"></img>
                    <img className = {styles.Vector3} alt = "Vector3" src = "/Vector3.png"></img>
                    <img className = {styles.Vector4} alt = "Vector4" src = "/Vector4.png"></img>
                    <img className = {styles.Vector5}alt = "Vector5" src = "/Vector5.png"></img>
                </div>
            </div>
            <div className={styles.IconContainer}>
                <svg className={styles.NextIcon} onClick={handleREC5click} width="136" height="136" viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export default REC4;