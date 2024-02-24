import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import lastpageStyles from '../../../style/Invitation/LastPage/LastPage.module.css';
import Backdrop from './components/Backdrop/Backdrop';
import Modal from './components/Modal/Modal';
import video4 from '../../../../video/laterTeamVideo.mp4';
import moment from "moment";

function LastPageT2() {
    const [value, setValue] = useState('서울특별시 종로구 관훈동 196-10');
    const [copied, setCopied] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showContainer1, setShowContainer1] = useState(false);
    const [showContainer2, setShowContainer2] = useState(false);
    const [showContainer3, setShowContainer3] = useState(false);
    const [showContainer4, setShowContainer4] = useState(false);
    const [showContainer5, setShowContainer5] = useState(false);
    const [showContainer6, setShowContainer6] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState("");
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
    
    useEffect(() => {
        const countDownTimer = () => {
        let vDate = moment("2024-02-29");
        let interval = setInterval(() => {
            let now = moment();
            let distDt = vDate - now;
            if (distDt < 0) {
            clearInterval(interval);
            setTimeRemaining("00:00:00:00");
            return;
            }
            let days = Math.floor(distDt / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distDt % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distDt % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distDt % (1000 * 60)) / 1000);
            setTimeRemaining(
            `${days.toString().padStart(2, "0")}:${hours.toString().padStart(
                2,
                "0"
            )}:${minutes.toString().padStart(2, "0")}:${seconds
                .toString()
                .padStart(2, "0")}`
            );
        }, 1000);
          return () => clearInterval(interval); // clearInterval을 반환 함수로 이동
        };
        countDownTimer();
    }, []);
    useEffect(() => {
        setTimeout(() => setShowContainer1(true), 400);
        setTimeout(() => setShowContainer2(true), 800);
        setTimeout(() => setShowContainer3(true), 1200);
        setTimeout(() => setShowContainer4(true), 1600);
        setTimeout(() => setShowContainer5(true), 2000);
        setTimeout(() => setShowContainer6(true), 2400);
        setTimeout(() => setShowModal(false), 5000);
    }, []);


    return (
        <div className={lastpageStyles.ContainerF3}>
            <video style={{height: window.screen.height}} loop muted autoPlay playsInline>
                <source src={video4} type='video/mp4'/>
            </video>
            <CSSTransition in={showContainer1} timeout={300} classNames="motion-slide" unmountOnExit>
                <div className={lastpageStyles.Container1}>
                    <div className={lastpageStyles.Container1Frame}>
                        전시까지
                    </div>
                    <div className={lastpageStyles.Container1Name}>
                        {timeRemaining}
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition in={showContainer2} timeout={300} classNames="motion-slide" unmountOnExit>
            <div className={lastpageStyles.Container3}>
                <div className={lastpageStyles.Container3Frame}>
                    일정
                </div>
                <div className={lastpageStyles.Container3Name}>
                    2.29(목)ㅡ3.4(월)
                </div>
            </div>
            </CSSTransition>
            <CSSTransition in={showContainer3} timeout={30000} classNames="motion-slide" unmountOnExit>
            <div className={lastpageStyles.Container4}>
                <div className={lastpageStyles.Container4Frame}>
                    관람시간
                </div>
                <div className={lastpageStyles.Container4Name}>
                    10:30ㅡ18:30
                </div>
            </div>
            </CSSTransition>
            <CSSTransition in={showContainer4} timeout={30000} classNames="motion-slide" unmountOnExit>
            <div className={lastpageStyles.Container2}>
                <div className={lastpageStyles.blankContainer}>
                </div>
                <div className={lastpageStyles.Container2Name}>
                    {"4일은 17:00시까지 운영합니다"}
                </div>
            </div>
            </CSSTransition>
            <CSSTransition in={showContainer5} timeout={30000} classNames="motion-slide" unmountOnExit>
            <div className={lastpageStyles.Container5}>
                <div className={lastpageStyles.Container5Frame}>
                    장소
                </div>
                <div className={lastpageStyles.Container5Name} onClick={() => setValue('인사동 마루아트센터 신관')}>
                    인사동<br/>
                    마루아트센터<br/>
                    신관 3F, 2관<br/>
                </div>
            </div>
            </CSSTransition>
            <CSSTransition in={showContainer6} timeout={3000} classNames="motion-slide" unmountOnExit>
            <div className={lastpageStyles.Container6}>
                <div className={lastpageStyles.goBackButton}>
                    <Link to="/invite/public">처음으로</Link>
                </div>
                <div className={lastpageStyles.blankBox1}></div>
                <div className={lastpageStyles.Container6Name}>
                    <img className={lastpageStyles.iconStyle} src='/Clover.png' alt="Icon" />
                </div>
            </div>
            </CSSTransition>
            <div className={lastpageStyles.copyContainers}>
                <CopyToClipboard text={value}
                    onCopy={handleCopy}>
                    <div className={lastpageStyles.buttonFont}>
                        {copied ? "주소 복사하기" : "주소 복사하기"}
                    </div>
                </CopyToClipboard>
            </div>
            <Modal show={showModal} closed={closeModalHandler} />
            {showModal && <Backdrop show={showModal} />}
        </div>
    )
}
export default LastPageT2;