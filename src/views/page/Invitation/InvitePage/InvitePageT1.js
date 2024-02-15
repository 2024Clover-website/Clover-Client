import React from "react";
import '../../../style/Invitation/InvitePage/InvitePage.css';
import video3 from '../../../../video/taishanTeamVideo.mp4';

function InvitePageT1() {
    function handleClick(e) {
        window.location.href = '/invite/태산/1'
    }
    return (
        <div className='PIG1'>
            <video style={{height: window.screen.height}} autoPlay loop muted>
                <source src={video3} type='video/mp4'/>
            </video>
            <div className='startContainer'>
                <button onClick={handleClick} className='startButton'>
                    초대장 열기
                </button>
            </div>
        </div>
    )
}
export default InvitePageT1;
