import React from "react";
import styles from "../../../styles/components/REC.module.css"
import pencilimg from "../../../pencil.png"

function REC(){
    function handleRE2Cclick(){
        window.location.href = "/REC/naming";
    }
    return(
        <div className={styles.backcolor} >
            <div className={styles.Start}>나만의 연필을 만들어볼까요?</div>
            <div className={styles.pencilContainer}>
                <img className={styles.pencil} src={pencilimg} alt="loding Image"></img>
            </div>
            <div className={styles.ButtonContainer}>
                <button onClick={handleRE2Cclick} className={styles.stButton}>시작하기</button>
            </div>
        </div>
    );
}

export default REC;