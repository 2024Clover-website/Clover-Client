import React from "react";
import styles from "../../../styles/REC/REC.module.css"
import pencilimg from "../../../img/Hero.png";
import videoREC from "../../../video/recBG.mp4";

function REC(){
    function handleRE2Cclick(){
        window.location.href = "/REC/naming";
    }
    return(
        <div className={styles.backcolor} >
            <video loop muted autoPlay playsInline>
                <source src={videoREC} type='video/mp4'/>
            </video>
            <div className={styles.Start}>나만의 연필을 만들어볼까요?</div>
            <div className={styles.pencilContainer}>
                <img className={styles.pencil} src={pencilimg} alt=""/>
                <div className={styles.ButtonContainer}>
                    <button onClick={handleRE2Cclick} className={styles.stButton}>시작하기</button>
                </div>
            </div>
        </div>
    );
}

export default REC;