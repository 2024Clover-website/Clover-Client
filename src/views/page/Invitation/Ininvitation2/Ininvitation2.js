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
                    반복되는 삶은 종종<br/>
                    우리를 축 늘어뜨려요
                    <div className='titleContainer'>
                        <div className='titleName'>
                        2.Burnout<br/>
                        We often have burnouts in repeated lives.
                        </div>
                    </div>
                </div>
            </div>
            <div className='cardContainer'>
                <div className='cardName'>
                    '나 지금 잘하고 있나?'<br/>
                    '이게 맞는 길일까?'<br/>
                    같은 생각도 떠오르고요.
                </div>
                <div className='titleContainer'>
                    <div className='titleName'>
                        3.Confusion<br/>
                        At that time, We think like 'Am I doing well?'
                        or 'Am I on the right path?'.<br/>
                    </div>
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
export default Ininvitation2;