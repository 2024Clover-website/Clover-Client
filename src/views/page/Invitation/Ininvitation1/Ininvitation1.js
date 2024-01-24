import React from 'react';

import '../../../style/Invitation/Ininvitation1/Ininvitation1.css';

function Ininvitation1() {
    function handleClick(e) {
        window.location.href = '/invite2'
    }
    return (
        <div className='Container' style={{ backgroundImage: `url("./bg.png")`, backgroundSize: 'cover' }}>
            <div className='smartContainer'>
            </div>
            <div className='cardContainer'>
                <div className='cardName'>
                학교<br/>
                알바<br/>
                집<br/>
                학교<br/>
                알바<br/>
                집<br/>
                .<br/>
                .<br/>
                .
                </div>
            </div>
            <div className='titleContainer'>
                <div className='titleName'>
                1.merry-go-round <br/>
                School, Part time job, Home,School,<br/>
                Part time job, Home...
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
export default Ininvitation1;