import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../../../style/Invitation/LastPage/LastPage.css';

function LastPage() {
    const [value] = useState('서울 종로구 인사동길 35-4'); // 복사할 텍스트를 '서울 종로구 인사동길 35-4'로 설정합니다.
    const [copied, setCopied] = useState(false); // 복사 상태를 추적합니다.
    const [time, setTime] = useState(new Date()); // 현재 시간을 설정합니다.

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='container'>
            <div className='smartContainer'>
            </div>
            <div className='cardContainer'>
                <div className='cardName'>
                    초대장
                </div>
            </div>
            <div className='titleContainer'>
                <div className='titleName'>
                    <div className='cardName'>
                        현재 시간: {time.toLocaleTimeString()}
                    </div>
                </div>
            </div>
            <div className='blankContainer'>
                <div className='titleName'>
                    서울 종로구 인사동길 35-4
                </div>
            </div>
            <div className='openContainer'>
                <CopyToClipboard text={value}
                    onCopy={() => setCopied(true)}>
                    <div className='openButton'>
                        {copied ? "복사 완료!" : "주소 복사하기"}
                    </div>
                </CopyToClipboard>
            </div>
        </div>
    )
}
export default LastPage;

