import React from 'react';

import '../../../style/Invitation/Ininvitation4/Ininvitation4.css';

function Ininvitation4() {
    function handleClick(e) {
        window.location.href = '/invite5'
    }
    return (
        <div className='Container' style={{ backgroundImage: `url("./bg.png")`, backgroundSize: 'cover' }}>
            <div className='smartContainer'>
            </div>
            <div className='cardContainer'>
                <div className='cardName'>
                    최근에 저도 비슷한 고민을 했어요.
                    '나는 어떤 작업을 할때 가장 행복하지?' 하고요.
                </div>
            </div>
            <div className='titleContainer'>
                <div className='titleName'>
                    페이지4
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
export default Ininvitation4;