import React, { useState } from 'react';

import '../../../style/Invitation/Ininvitation5/Ininvitation5.css'

function Ininvitation5() {
    function handleClick(e) {
        window.location.href = '/last'
    }
    return (
        <div className='container'>
            <div className='smartContainer'>
            </div>
            <div className='cardContainer'>
                <div className='cardName'>
                    제가 만든 작품을 살짝 보여드릴게요.
                    꼭 와서 함께 봐주세요.
                </div>
            </div>
            <div className='titleContainer'>
                <div className='titleName'>
                    페이지5
                </div>
            </div>
            <div className='blankContainer'>
            </div>
            <div className='openContainer'>
                <button onClick={handleClick} className='openButton'>
                    다음
                </button>
            </div>
        </div>
    )
}
export default Ininvitation5;