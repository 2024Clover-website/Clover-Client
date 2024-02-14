import React from "react";
import '../../../style/Invitation/InvitePage/InvitePage.css';
import video1 from '../../../../video/InvitePageVideo.mp4';

function InvitePage() {
    function handleClick(e) {
        window.location.href = '/invite1'
    }
    return (
        <div className='PIG1'>
            <video autoPlay loop muted>
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
export default InvitePage;
