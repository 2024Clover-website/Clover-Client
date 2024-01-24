import React from "react";
import '../../../style/Invitation/InvitePage/InvitePage.css';

function InvitePage() {
    function handleClick(e) {
        window.location.href = '/invite1'
    }
    return (
        <div className='container' style={{ backgroundImage: `url("./438259dc684760fd3f80b8e0c8b03949 (1).png")`, backgroundSize: 'cover' }}>
            <div className='smartContainer'>
            </div>
            <div className='cardContainer'>
                <div className='cardName'>
                    초대장
                </div>
            </div>
            <div className='titleContainer'>
                <div className='titleName'>
                    <img src="./KakaoTalk_Photo_2024-01-22-12-50-16 2.png" alt="In A Row" />
                </div>
            </div>
            <div className='blankContainer'>
            </div>
            <div className='button'>
                <button onClick={handleClick} className='openButton'>
                    초대장 열기
                </button>
            </div>
        </div>
    )
}
export default InvitePage;
