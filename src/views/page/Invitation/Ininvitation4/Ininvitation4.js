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
            <div className='textContainer'>
                <div className='textContainer1'>
                    <div className='text'>
                        최근에 문득 이런 생각이
                    </div>
                    <div className='text'>
                        들었어요.
                    </div>
                </div>
                <div className='commitContainer'>
                    <div className='commit1'>
                        6.Think
                    </div>
                    <div className='commit2'>
                        I suddenly had this thought recently.
                    </div>
                </div>
                <div className='textContainer1'>
                    <div className='text'>
                        나는 어떤 작업을 할때,
                    </div>
                    <div className='text'>
                        자극을 받지? 하고요.
                    </div>
                </div>
                <div className='commitContainer'>
                    <div className='commit1'>
                        7.Passion
                    </div>
                    <div className='commit2'>
                        What kind of work I get stimulated about?
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
export default Ininvitation4;
