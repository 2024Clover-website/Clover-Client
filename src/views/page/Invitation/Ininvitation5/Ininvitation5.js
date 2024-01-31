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
            <div className='textContainer'>
                <div className='textContainer1'>
                    <div className='text'>
                        제가 만든 걸 살짝
                    </div>
                    <div className='text'>
                        보여드릴게요.
                    </div>
                </div>
                <div className='commitContainer'>
                    <div className='commit1'>
                        8.Spoiler
                    </div>
                    <div className='commit2'>
                        I wanna show you a little bit of what I made.
                    </div>
                </div>
                <div className='textContainer1'>
                    <div className='text'>
                        꼭 와서 눈으로도
                    </div>
                    <div className='text'>
                        즐겼으면 좋겠어요.
                    </div>
                </div>
                <div className='commitContainer'>
                    <div className='commit1'>
                        9.Wish
                    </div>
                    <div className='commit2'>
                        But I really hope you come and enjoy it.
                    </div>
                </div>
            </div>
            <div className='blankContainer'>
                <img className='invitation5Image' src='./image-3 1.png' />
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