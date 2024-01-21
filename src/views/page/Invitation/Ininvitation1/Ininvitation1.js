import React, { useState } from 'react';

import '../../../style/Invitation/Ininvitation1/Ininvitation1.css'

function Ininvitation1() {
    function handleClick(e) {
        window.location.href = '/invite2'
    }
    return (
        <div className='container'>
            <div className='smartContainer'>
            </div>
            <div className='cardContainer'>
                <div className='cardName'>
                    학교 알바 집 학교 알바 집 학교 알바 집...
                </div>
            </div>
            <div className='titleContainer'>
                <div className='titleName'>
                    페이지1
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
export default Ininvitation1;