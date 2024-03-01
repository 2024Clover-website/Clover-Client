import React from "react";
import invitepageStyles from '../../../style/Invitation/InvitePage/InvitePage.module.css';


function InvitePageT1() {
    function handleClick(e) {
        window.location.href = '/invite/태산/1'
    }
    return (
        <div className={invitepageStyles.PIG1}>
            <video className={invitepageStyles.mp4piles} loop muted autoPlay playsInline>
                <source src="https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/%E1%84%8C%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%92%E1%85%AA%E1%84%86%E1%85%A7%E1%86%AB+%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC.mp4" type='video/mp4'/>
            </video>
            <div className={invitepageStyles.startContainer}>
                <button onClick={handleClick} className={invitepageStyles.startButton}>
                    초대장 열기
                </button>
            </div>
        </div>
    )
}
export default InvitePageT1;
