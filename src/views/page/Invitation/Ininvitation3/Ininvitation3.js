import React from 'react';

import '../../../style/Invitation/Ininvitation3/Ininvitation3.css';

function Ininvitation3() {
    function handleClick(e) {
        window.location.href = '/invite4'
    }
    return (
        <div className='Container' style={{ backgroundImage: `url("./bg.png")`, backgroundSize: 'cover' }}>
            <div className='smartContainer'>
            </div>
            <div className='cardContainer'>
                <div className='cardName'>
                    느슨해진 마음을<br/>
                    팽팽하게 만드려면,<br/>
                    무언가 자극이 필요해요.
                    <div className='titleContainer'>
                        <div className='titleName'>
                            4.Needs<br/>
                            To tighten your loose mind, you have to seek new stimulation.
                        </div>
                    </div>
                </div>
            </div>
            <div className='cardContainer'>
                <div className='cardName'>
                    마치 카세트 테이프에<br/>
                    연필을 꽃아 돌리는
                    것 처럼요.<br/>
                    <div className='titleContainer'>
                        <div className='titleName'>
                            5.Pencil<br/>
                            Seems like putting a pencil on a cassette tape.
                        </div>
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