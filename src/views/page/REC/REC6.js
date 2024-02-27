import React from "react";
import styles from "../../../styles/components/REC6.module.css";
import videoREC from "../../../video/recBG.mp4";

function REC6(){
    return(
        <div className={styles.backcolor}>
            <video loop muted autoPlay playsInline>
                <source src={videoREC} type='video/mp4'/>
            </video>
        </div>
    )
}

export default REC6;