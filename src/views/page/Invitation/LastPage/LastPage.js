import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../../../style/Invitation/LastPage/LastPage.css';

function LastPage() {
    const [value] = useState('서울 종로구 인사동길 35-4');
    const [copied, setCopied] = useState(false);
    const [time, setTime] = useState(180); // 초대장 '폭파'까지 남은 시간을 초 단위로 설정합니다.

    useEffect(() => {
        // 만약 남은 시간이 0보다 크다면, 1초마다 남은 시간을 감소시킵니다.
        if (time > 0) {
            const timer = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [time]);

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
                        {/* 남은 시간이 0이면 '폭파' 메시지를 표시하고, 그렇지 않으면 남은 시간을 표시합니다. */}
                        {time === 0 ? "초대장 폭파!" : `남은 시간: ${time}초`}
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
