import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../../../styles/components/REC3sec.module.css"

function REC3sec(){
    const navigate = useNavigate();
    function handleREC3click(){
        navigate(-1);
    }
    function handleREC4click(){
        navigate("/REC/graphic", {state: {nameval : name}});
        window.location.href = "/REC/graphic";
        //여기다 보낼 페이지 적어야댐 이름, 내용 포함
    }
    let [inputCount, setInputCount] = useState(0);
    const [TitleValue, setTitle] = useState('');
    const onInputHandler = (e) => {
        if(e.target.value.replace(/(\s*)/g,"").length > 15){
            e.target.value = e.target.value.substr(0, 15)
        }
        setInputCount(e.target.value.replace(/(\s*)/g,"").length);
        setTitle(e.target.value);
    };
    const onTextareaHandler = (e) => {
        setInputCount(
        e.target.value.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length
        );
      };

    const location = useLocation();
    const name = location.state.value1;

    return(
        <div className={styles.backcolor}>
            <div className={styles.title}>슬럼프가 온 {name}님을 자극하는 건 무엇인가요?</div>
            <div className={styles.TextContainer}>
                <div className={styles.TextFieldContainer}>
                    <input onChange={onInputHandler} minLength={1} className={styles.Namefield} />
                </div>
                <p className={styles.Spannumber}>
                    <span>{inputCount}</span>
                    <span>/15</span>
                </p>
                <div className={styles.IconContainer}>
                    <div className={styles.space}>이전으으로</div>
                    <svg className={styles.NextIcon} onClick={handleREC4click} width="136" height="136" viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <div onClick={handleREC3click}className={styles.prevbt}>이전으로</div>
                </div>
            </div>
        </div>
    )
}

export default REC3sec;