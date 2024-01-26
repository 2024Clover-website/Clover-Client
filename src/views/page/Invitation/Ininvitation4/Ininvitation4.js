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
                    최근에 문득 이런 생각이 들었어요.
                </div>
                <div className='titleContainer'>
                    <div className='titleName'>
                        6.Think<br/>
                        I suddenly had this thought recently.
                    </div>
                </div>
            </div>
            <div className='cardContainer'>
                <div className='cardName'>
                    나는 어떤 작업을 할때,<br/>
                    자극을 받지? 하고요.
                </div>
                <div className='titleContainer'>
                    <div className='titleName'>
                        7.Passion<br/>
                        What kind of work I get stimulated about?
                    </div>
                </div> {/* 추가된 부분 */}
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
