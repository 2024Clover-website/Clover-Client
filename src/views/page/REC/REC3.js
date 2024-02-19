import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../../../styles/components/REC3.module.css"

function REC3(){
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
        <div>
            <div className={styles.title}>슬럼프가 온 {'{'}{name}{'}'}님을 자극하는 건 무엇인가요?</div>
            <div className={styles.WishContainer}>
                <div className={styles.Wish}>타인이 갖는 기대
                <div className={styles.WishText}>어</div></div>
                <div className={styles.Wish}>어떤 재화를 갖고<br/> 싶게끔하는 상황
                <div className={styles.WishText}>머</div></div>
                <div className={styles.Wish}>본받고 싶은<br/>타인의 모습
                <div className={styles.WishText}>련</div></div>
                <div className={styles.Wish}>진심어린<br/> 칭찬과 위로
                <div className={styles.WishText}>들</div></div>
                <div className={styles.Wish}>시간적 여유
                <div className={styles.WishText}>아</div></div>
            </div>
            <div className={styles.IconContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.NextIcon}
                onClick={handleREC4click} width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="50" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M53.4083 30.8368C54.524 29.7211 56.3331 29.7211 57.4489 30.8368L74.5917 47.9797C75.7075 49.0955 75.7075 50.9045 74.5917 52.0203L57.4489 69.1632C56.3331 70.2789 54.524 70.2789 53.4083 69.1632C52.2925 68.0474 52.2925 66.2383 53.4083 65.1226L65.6737 52.8571H26.8571C25.2792 52.8571 24 51.578 24 50C24 48.422 25.2792 47.1429 26.8571 47.1429H65.6737L53.4083 34.8774C52.2925 33.7617 52.2925 31.9526 53.4083 30.8368Z" fill="white"/>
                </svg>
                <div onClick={handleRECsecclick}className={styles.SelfWish}>직접 입력하기</div>
            </div>
        </div>

    )

}

export default REC3;