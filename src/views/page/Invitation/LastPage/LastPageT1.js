import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import '../../../style/Invitation/LastPage/LastPage.css';
import Backdrop from './components/Backdrop/Backdrop';
import Modal from './components/Modal/Modal';
import video3 from '../../../../video/taishanTeamVideo.mp4';

function LastPageT1() {
    const [value, setValue] = useState('인사동 마루아트 센터 신관');
    const [copied, setCopied] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showContainer1, setShowContainer1] = useState(false);
    const [showContainer2, setShowContainer2] = useState(false);
    const [showContainer3, setShowContainer3] = useState(false);
    const [showContainer4, setShowContainer4] = useState(false);
    const [showContainer5, setShowContainer5] = useState(false);
    const [showContainer6, setShowContainer6] = useState(false);
    setTimeout(() => setShowModal(false), 5000);

    const handleCopy = () => {
        setCopied(true);
        showModalHandler();
    };

    const showModalHandler = () => {
        setShowModal(true);
    };

    const closeModalHandler = () => {
        setShowModal(false);
    };
    
    const countDownDate = new Date('2024-03-02T00:00:00').getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const timeLeftInitial = Math.floor(distance / 1000);

    const [timeLeft, setTimeLeft] = useState(timeLeftInitial);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(timeLeft => timeLeft - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (time) => {
        const days = Math.floor(time / 86400)
        const hours = Math.floor((time % 600) / 24);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${days}:${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
    useEffect(() => {
        setTimeout(() => setShowContainer1(true), 400);
        setTimeout(() => setShowContainer2(true), 800);
        setTimeout(() => setShowContainer3(true), 1200);
        setTimeout(() => setShowContainer4(true), 1600);
        setTimeout(() => setShowContainer5(true), 2000);
        setTimeout(() => setShowContainer6(true), 2400);
        
    }, []);

    return (
        <div className='Container'>
            <video style={{height: window.screen.height}} autoPlay loop muted>
                <source src={video3} type='video/mp4'/>
            </video>
            <CSSTransition in={showContainer1} timeout={300} classNames="motion-slide" unmountOnExit>
                <div className='Container1'>
                    <div className='Container1Frame'>
                        전시까지
                    </div>
                    <div className='Container1Name'>
                        {formatTime(timeLeft)}
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition in={showContainer2} timeout={300} classNames="motion-slide" unmountOnExit>
            <div className='Container2'>
                <div className='Container2Name'>
                    {"4일은 17:00시까지 운영합니다"}
                </div>
            </div>
            </CSSTransition>
            <CSSTransition in={showContainer3} timeout={30000} classNames="motion-slide" unmountOnExit>
            <div className='Container3'>
                <div className='Container3Frame'>
                    일정
                </div>
                <div className='Container3Name'>
                    2.29(목)-3.4(월)
                </div>
            </div>
            </CSSTransition>
            <CSSTransition in={showContainer4} timeout={30000} classNames="motion-slide" unmountOnExit>
            <div className='Container4'>
                <div className='Container4Frame'>
                    관람시간
                </div>
                <div className='Container4Name'>
                    10:30-18:30
                </div>
            </div>
            </CSSTransition>
            <CSSTransition in={showContainer5} timeout={30000} classNames="motion-slide" unmountOnExit>
            <div className='Container5'>
                <div className='Container5Frame'>
                    장소
                </div>
                <div className='Container5Name' onClick={() => setValue('인사동 마루아트 센터 신관')}>
                    인사동<br/>
                    마루아트 센터<br/>
                    신관 3F, 2관<br/>
                </div>
            </div>
            </CSSTransition>
            <CSSTransition in={showContainer6} timeout={3000} classNames="motion-slide" unmountOnExit>
            <div className='Container6'>
                <div className='goBackButton'>
                    <Link to="/">처음으로</Link>
                </div>
                <div className='Container6Name'>
                    <img src='/Clover.png' alt="Icon" className="iconStyle" />
                </div>
            </div>
            </CSSTransition>
            <div className='copyContainers'>
                <CopyToClipboard text={value}
                    onCopy={handleCopy}>
                    <div className='buttonFont'>
                        {copied ? "주소 복사하기" : "주소 복사하기"}
                    </div>
                </CopyToClipboard>
            </div>
            <Modal show={showModal} closed={closeModalHandler} />
            {showModal && <Backdrop show={showModal} />}
        </div>
    )
}
export default LastPageT1;