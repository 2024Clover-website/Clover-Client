import React from 'react';

import '../../../style/Invitation/Ininvitation5/Ininvitation5.css';

function Ininvitation5() {
    function handleClick(e) {
        window.location.href = '/last'
    }
    return (
        <div className='Container' style={{ backgroundImage: `url("./bg.png")`, backgroundSize: 'cover' }}>
            <div className='smartContainer'>
            </div>
            <div className='cardContainer'>
                <div className='cardName'>
                    제가 만든 걸 살짝<br/>
                    보여드릴게요.<br/>
                </div>
                <div className='titleContainer'>
                    <div className='titleName'>
                    8.Spoiler<br/>
                    I wanna show you a little bit of what I made.
                    </div>
                </div>
            </div>
            <div className='cardContainer'>
                <div className='cardName'>
                    꼭 와서 눈으로도<br/>
                    즐겼으면 좋겠어요.
                </div>
                <div className='titleContainer'>
                    <div className='titleName'>
                    9.Wish<br/>
                    But I really hope you come and enjoy it.
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
export default Ininvitation5;