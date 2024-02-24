import React from "react";
import {motion, Variants} from 'framer-motion';
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../../../styles/components/REC3.module.css"
import videoREC from "../../../video/recBG.mp4";

function REC3(){
    // const variants = {
    //     //클릭 애니매이션
    //     on : {scale : 1.05, easing : bazier.quick, duration : 0.5}
    // }
    const location = useLocation();
    const name = location.state.value;
    const navigate = useNavigate();
    
    function handleREC4click(){
        navigate("/REC/graphic", {state: {nameval : name}});
        window.location.href = "/REC/graphic";
        //내용도 보내야함
    }

    function handleRECsecclick(){
        navigate("/REC/stimulation/self", {state: {value1 : name}});
        window.location.href = "/REC/stimulation/self";
    }

    return(
        <div className={styles.backcolor}>
            <video loop muted autoPlay playsInline>
                <source src={videoREC} type='video/mp4'/>
            </video>
            <div className={styles.title}>슬럼프가 온 {name}님을 자극하는 건 무엇인가요?</div>
            <div className={styles.WishContainer}>
                <div className={styles.Wish}>타인이 갖는 기대
                <div className={styles.WishText}>‘잘 할수 있지?” 누구나 한명쯤은 {name}님에게 기대를 갖고 있어요. 혹시 이러한 기대에 부흥하고자 다시 일어난 경험이 있나요?</div></div>
                <div className={styles.Wish}>어떤 재화를 갖고<br/> 싶게끔하는 상황
                <div className={styles.WishText}>‘돈 벌라면 일해야지…’ 텅 빈 통장을 보고있으면, 없던 마음도 생겨나요. 혹시 {name}님도 금융치료당하는 날만 기다리고 있나요?</div></div>
                <div className={styles.Wish}>본받고 싶은<br/>타인의 모습
                <div className={styles.WishText}>‘와 진짜 멋있다..’ 닮고 싶은 사람이 주변에 있다는 사실만으로도 우리는 가슴이 이글거리곤 해요. {name}님도 이런 감정을 느낀 적이 있나요?</div></div>
                <div className={styles.Wish}>진심어린<br/> 칭찬과 위로
                <div className={styles.WishText}>“기죽지마, 너가 최고야.” 마음이 몽글거리고 다시 일어날 힘이 생겨요. {name}님은 인상깊었던 칭찬과 위로가 있나요?</div></div>
                <div className={styles.Wish}>시간적 여유
                <div className={styles.WishText}>‘아 편안하다..’ 온몸이 퍼지고 스르륵 눈이 감겨요. 가끔은 산책을 즐기기도 하고요. {name}님은 보통 여유로움에서 안정을 찾나요?</div></div>
            </div>
            <div className={styles.IconContainer}>
                <div className={styles.space}>직접 입력하기이ㅇ</div>
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
                <div onClick={handleRECsecclick}className={styles.SelfWish}>직접 입력하기</div>
            </div>
        </div>

    )

}

export default REC3;