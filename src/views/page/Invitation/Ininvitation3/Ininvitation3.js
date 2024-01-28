import React from 'react';

import '../../../style/Invitation/Ininvitation3/Ininvitation3.css';

function Ininvitation3() {
    function handleClick(e) {
        window.location.href = '/invite4'
    }
    return (
        <div className='container' style={{ backgroundImage: `url("./bg.png")`, backgroundSize: 'cover' }}>
            <div className='smartContainer'>
            </div>
            <div className='textContainer'>
                <div className='textContainer1'>
                    <div className='text'>
                        느슨해진 마음을
                    </div>
                    <div className='text'>
                        팽팽하게 만드려면,
                    </div>
                    <div className='text'>
                        무언가 자극이 필요해요.
                    </div>
                </div>
                <div className='commitContainer'>
                    <div className='commit1'>
                        4.Needs
                    </div>
                    <div className='commit'>
                        To tighten your loose mind, you have to seek 
                    </div>
                    <div className='commit2'>
                        new stimulation.
                    </div>
                </div>
                <div className='textContainer1'>
                    <div className='text'>
                        마치 카세트 테이프에
                    </div>
                    <div className='text'>
                        연필을 꽂아 돌리는
                    </div>
                    <div className='text'>
                        것처럼요.
                    </div>
                </div>
                <div className='commitContainer1'>
                    <div className='commit1'>
                        5.Pencil
                    </div>
                    <div className='commit'>
                        Seems like putting a pencil on a cassette tape.
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
export default Ininvitation3;