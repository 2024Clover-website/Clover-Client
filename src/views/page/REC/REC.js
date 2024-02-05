import React from "react";
import "../../../styles/components/REC.css"
import pencilimg from "../../../pencil.png"

function REC(){
    return(
        <div>
            <div className="Start">나만의 연필을 만들어볼까요?</div>
            <div className="pencilContainer">
                <img className="pencil" src={pencilimg} alt="loding Image"></img>
            </div>
            <div className="ButtonContainer">
                <button className="stButton">시작하기</button>
            </div>
        </div>
    );
}

export default REC;