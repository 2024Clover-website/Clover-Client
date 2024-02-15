import React from "react";
import '../../../style/Invitation/InvitePage/InvitePage.css';
import video5 from '../../../../video/vibemakerTeamVideo.mp4';

function InvitePageT3() {
    function handleClick(e) {
        window.location.href = '/invite/VIBE MAKERS/1'
    }
    return (
        <div className='PIG1'>
            <video style={{height: window.screen.height}} autoPlay loop muted>
                <source src={video5} type='video/mp4'/>
            </video>
            <div className='startContainer'>
                <button onClick={handleClick} className='startButton'>
                    초대장 열기
                </button>
            </div>
        </div>
    )
}
export default InvitePageT3;
