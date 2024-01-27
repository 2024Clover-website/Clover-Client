import React from 'react';

import '../../../style/Invitation/Ininvitation1/Ininvitation1.css';

function Ininvitation1() {
    function handleClick(e) {
        window.location.href = '/invite2'
    }
    return (
        <div className='container' style={{ backgroundImage: `url("./bg.png")`, backgroundSize: 'cover' }}>
            <div className='smartContainer'>
            </div>
            <div className='textContainer'>
                <div className='text'>
                    학교<br/>
                </div>
                <div className='text'>
                    알바<br/>
                </div>
                <div className='text'>
                    집<br/>
                </div>
                <div className='text'>
                    학교<br/>
                </div>
                <div className='text'>
                    알바<br/>
                </div>
                <div className='text'>
                    집<br/>
                </div>
                <div className='text'>
                    .<br/>
                </div>
                <div className='text'>
                    .<br/>
                </div>
                <div className='text'>
                    .<br/>
                </div>
                <div className='commitContainer'>
                    <div className='commit1'>
                        1.merry-go-round
                    </div>
                    <div className='commit'>
                        School, Part time job, Home,
                    </div>
                    <div className='commit'>
                        School, Part time job, Home...
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
export default Ininvitation1;