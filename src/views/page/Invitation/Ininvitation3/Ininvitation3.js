import React from 'react';

import '../../../style/Invitation/Ininvitation3/Ininvitation3.css';

function Ininvitation3() {
    function handleClick(e) {
        window.location.href = '/invite4'
    }
    return (
        <div className='Container' style={{ backgroundImage: `url("./bg.png")`, backgroundSize: 'cover' }}>
            <div className='smartContainer'>
            </div>
            <div className='cardContainer'>
                <div className='cardName'>
                    느슨해진 마음을 다시금 팽팽하게
                    만드려면, 새로운 자극이 필요해요.
                    마치 카세트 테이프에 연필을 꽃아 돌리는 것 처럼요.
                </div>
            </div>
            <div className='titleContainer'>
                <div className='titleName'>
                    페이지3
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
export default Ininvitation3;