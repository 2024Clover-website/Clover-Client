import React, { useEffect, useState } from "react";

import axios from "axios";

import styles from "../../../styles/components/REC6.module.css";
import videoREC from "../../../video/recBG.mp4";

function REC6(){
    const patternId = 1;
    const colorId = 1;

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

    return(
        <div className={styles.backcolor}>
            <video loop muted autoPlay playsInline>
                <source src={videoREC} type='video/mp4'/>
            </video>
            <div>
            <img className={styles.firstpencil} alt src={hero}/>
            </div>

        </div>
    )
}

export default REC6;