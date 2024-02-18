import React from "react";
import '../../../style/Invitation/InvitePage/InvitePage.css';
import video1 from '../../../../video/InvitePageVideo.mp4';
function InvitePageT3() {
    function handleClick(e) {
        window.location.href = '/invite/VIBEMAKERS/1'
    }
    return (
        <div className='PIG1'>
            <video style={{height: window.screen.height}} loop muted autoPlay playsInline>
                <source src={video1} type='video/mp4'/>
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
