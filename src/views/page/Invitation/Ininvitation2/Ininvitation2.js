import React from 'react';

import '../../../style/Invitation/Ininvitation2/Ininvitation2.css';

function Ininvitation2() {
    function handleClick(e) {
        window.location.href = '/invite3'
    }
    return (
        <div className='Container' style={{ backgroundImage: `url("./bg.png")`, backgroundSize: 'cover' }}>
            <div className='smartContainer'>
            </div>
            <div className='cardContainer'>
                <div className='cardName'>
                    반복되는 삶은 종종 우리를 축 늘어뜨려요
                    '나 지금 잘하고 있나?'
                    '이게 맞는 길일까?'
                    같은 생각도 떠오르고요.
                </div>
            </div>
            <div className='titleContainer'>
                <div className='titleName'>
                    페이지2
                </div>
            </div>
            <div className='blankContainer'>
            </div>
            <div className='button'>
                <button onClick={handleClick} className='openButton'>
                    다음
                </button>
            </div>
        </div>
    )
}
export default Ininvitation2;