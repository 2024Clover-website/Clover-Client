import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../../../styles/components/REC3sec.module.css"

function REC3sec(){
    const navigate = useNavigate();
    function handleRE4Cclick(){
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
        <div>
            <div className={styles.title}>슬럼프가 온 {'{'}{name}{'}'}님을 자극하는 건 무엇인가요?</div>
            <div className={styles.TextFieldContainer}>
                <input onChange={onInputHandler} minLength={1} className={styles.Namefield} />
            </div>
            <p className={styles.Spannumber}>
                <span>{inputCount}</span>
                <span>/15</span>
            </p>
            <div className={styles.IconContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.NextIcon}
                onClick={handleRE4Cclick} width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="50" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M53.4083 30.8368C54.524 29.7211 56.3331 29.7211 57.4489 30.8368L74.5917 47.9797C75.7075 49.0955 75.7075 50.9045 74.5917 52.0203L57.4489 69.1632C56.3331 70.2789 54.524 70.2789 53.4083 69.1632C52.2925 68.0474 52.2925 66.2383 53.4083 65.1226L65.6737 52.8571H26.8571C25.2792 52.8571 24 51.578 24 50C24 48.422 25.2792 47.1429 26.8571 47.1429H65.6737L53.4083 34.8774C52.2925 33.7617 52.2925 31.9526 53.4083 30.8368Z" fill="white"/>
                </svg>
            </div>
        </div>
    )
}

export default REC3sec;