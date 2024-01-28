import React from 'react';

import '../../../style/Invitation/Ininvitation2/Ininvitation2.css';

function Ininvitation2() {
    function handleClick(e) {
        window.location.href = '/invite3'
    }
    return (
        <div className='container' style={{ backgroundImage: `url("./bg.png")`, backgroundSize: 'cover' }}>
            <div className='smartContainer'>
            </div>
            <div className='textContainer'>
                <div className='textContainer1'>
                    <div className='text'>
                        반복되는 삶은 종종
                    </div>
                    <div className='text'>
                        우리를 축 늘어뜨려요.
                    </div>
                </div>
                <div className='commitContainer1'>
                    <div className='commit1'>
                        2.Burnout
                    </div>
                    <div className='commit2'>
                        We often have burnouts in repeated lives.
                    </div>
                </div>
                <div className='textContainer2'>
                    <div className='text'>
                        나 지금 잘하고 있나?
                    </div>
                    <div className='text'>
                        이게 맞는 길일까?
                    </div>
                    <div className='text'>
                        같은 생각도 떠오르고요.
                    </div>
                </div>
                <div className='commitContainer'>
                    <div className='commit1'>
                        3.Confusion
                    </div>
                    <div className='commit'>
                        At that time, We think like 'Am I doing well?'
                    </div>
                    <div className='commit'>
                        or 'Am I on the right path?'.
                    </div>
                </div>
                <div className='blankContainer'>
                </div>
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