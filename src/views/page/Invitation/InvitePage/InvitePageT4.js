import React from "react";
import '../../../style/Invitation/InvitePage/InvitePage.css';
import video6 from '../../../../video/dopaminTeamVideo.mp4';

function InvitePageT4() {
    function handleClick(e) {
        window.location.href = '/invite/도파민중독자들/1'
    }
    return (
        <div className='PIG1'>
            <video style={{height: window.screen.height}} autoPlay loop muted>
                <source src={video6} type='video/mp4'/>
            </video>
            <div className='startContainer'>
                <button onClick={handleClick} className='startButton'>
                    초대장 열기
                </button>
            </div>
        </div>
    )
}
export default InvitePageT4;
