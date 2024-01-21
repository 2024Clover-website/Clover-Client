import { GoogleApiWrapper, Map } from 'google-maps-react';
import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import '../../../style/Invitation/LastPage/LastPage.css';

const mapStyles = {
  width: '376px',
  height: '300px'
};

function LastPage() {
    const [value] = useState('서울 종로구 인사동길 35-4 마루아트 센터'); // 복사할 텍스트를 '서울 종로구 인사동길 35-4'로 설정합니다.
    const [copied, setCopied] = useState(false); // 복사 상태를 추적합니다.
    const [time, setTime] = useState(new Date()); // 현재 시간을 설정합니다.
    const [location, setLocation] = useState({ lat: 37.571400, lng: 126.976881 }); // 사용자의 현재 위치를 설정합니다.

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            });
        }
    }, []);

    return (
        <div className='container'>
            <div className='smartContainer'>
                <div className='cardName'>
                    초대장
                </div>
            </div>
            <div className='cardContainer'>
                <div className='cardName'>
                        현재 시간: {time.toLocaleTimeString()}
                </div>
            </div>
            <div className='titleContainer'>
                <Map
                    google={window.google}
                    zoom={18} // 최대 확대 수준을 설정합니다.
                    style={mapStyles}
                    initialCenter={location} // 사용자의 현재 위치로 지도의 중심을 설정합니다.
                />
            </div>
            <div className='blankContainer'>
                <div className='titleName'>
                    서울 종로구 인사동길 35-4
                </div>
            </div>
            <div className='openContainer'>
                <CopyToClipboard text={value}
                    onCopy={() => setCopied(true)}>
                    <button className='openButton'>
                        {copied ? "복사 완료!" : "주소 복사하기"}
                    </button>
                </CopyToClipboard>
            </div>
        </div>
    )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAah2DqACHQqtCBnBclfTOE2r3VEsdqyao' // 여기에 구글 맵 API 키를 넣어주세요.
})(LastPage);
