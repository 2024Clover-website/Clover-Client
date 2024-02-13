import React from "react";
import '../../../style/Invitation/InvitePage/InvitePage.css';

function InvitePage() {
    function handleClick(e) {
        window.location.href = '/invite1'
    }
    return (
        <div className='PIG1'>
            <div className='PIG2'></div>
            <div className='StartContainer'>
                <button onClick={handleClick} className='StartButton'>
                    초대장 열기
                </button>
            </div>
        </div>
    )
}
export default InvitePage;
