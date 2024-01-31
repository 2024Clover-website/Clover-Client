import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import '../../../style/Invitation/LastPage/LastPage.css';

function LastPage() {
    const [value, setValue] = useState('유민기!!!');
    const [copied, setCopied] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleCopy = () => {
        setCopied(true);
        setShowModal(true);
        setTimeout(() => setShowModal(false), 2000);
    };

    return (
        <div className='Container' style={{ backgroundImage: `url("./bg.png")`, backgroundSize: 'cover' }}>
            <div className='blankContainer1'>
            </div>
            <div className='Container1'>
                <div className='Container1Frame'>
                    전시까지
                </div>
                <div className='Container1Name'>
                    72:00:00
                </div>
            </div>
            <div className='Container2'>
                <div className='Container2Name'>
                    Clover 2024 Exhibition
                </div>
            </div>
            <div className='Container3'>
                <div className='Container3Frame'>
                    일정
                </div>
                <div className='Container3Name'>
                    2.29(목)-3.4(월)
                </div>
            </div>
            <div className='Container4'>
                <div className='Container4Frame'>
                    관람시간
                </div>
                <div className='Container4Name'>
                    10:00-17:00
                </div>
            </div>
            <div className='Container5'>
                <div className='Container5Frame'>
                    장소
                </div>
                <div className='Container5Name' onClick={() => setValue('인사동 마루아트 센터 신관')}>
                    인사동<br/>
                    마루아트 센터<br/>
                    신관 3F<br/>
                </div>
            </div>
            <div className='Container6'>
                <div className='goBackButton'>
                    <Link to="/">처음으로</Link>
                </div>
                <div className='Container6Name'>
                    clover
                </div>
            </div>
            <div className='blankContainer2'>
            </div>
            <div className='openContainer'>
                <CopyToClipboard text={value}
                    onCopy={handleCopy}>
                    <div className='buttonFont'>
                        {copied ? "주소 복사하기" : "주소 복사하기"}
                    </div>
                </CopyToClipboard>
            </div>
            {showModal && (
                <div className='modal'>
                    <img src="./Exclude.svg" />
                    <div className= 'modalText'>
                        주소를 복사했어요
                    </div>
                </div>
            )}
        </div>
    )
}
export default LastPage;
