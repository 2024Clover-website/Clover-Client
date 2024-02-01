import React, { useEffect, useState } from 'react'; // useEffect 추가
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import '../../../style/Invitation/LastPage/LastPage.css';
import Backdrop from './components/Backdrop/Backdrop';
import Modal from './components/Modal/Modal';

function LastPage() {
    const [value, setValue] = useState('인사동 마루아트 센터 신관');
    const [copied, setCopied] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showContainer1, setShowContainer1] = useState(false);
    const [showContainer2, setShowContainer2] = useState(false);
    const [showContainer3, setShowContainer3] = useState(false);
    const [showContainer4, setShowContainer4] = useState(false);
    const [showContainer5, setShowContainer5] = useState(false);
    const [showContainer6, setShowContainer6] = useState(false);
    setTimeout(() => setShowModal(false), 2000);
    
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

    // 페이지가 로드되면 컨테이너 애니메이션을 시작
    useEffect(() => {
        setTimeout(() => setShowContainer1(true), 400);
        setTimeout(() => setShowContainer2(true), 800);
        setTimeout(() => setShowContainer3(true), 1200);
        setTimeout(() => setShowContainer4(true), 1600);
        setTimeout(() => setShowContainer5(true), 2000);
        setTimeout(() => setShowContainer6(true), 2400);
        // ... 나머지 컨테이너에 대한 setTimeout ...
    }, []);

    return (
        <div className='Container' style={{ backgroundImage: `url("./bg.png")`, backgroundSize: 'cover' }}>
                <div className='blankContainer1'>
                </div>
            <CSSTransition in={showContainer1} timeout={300} classNames="fade-slide" unmountOnExit>
                <div className='Container1'>
                    <div className='Container1Frame'>
                        전시까지
                    </div>
                    <div className='Container1Name'>
                        72:00:00
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition in={showContainer2} timeout={300} classNames="fade-slide" unmountOnExit>
            <div className='Container2'>
                <div className='Container2Name'>
                    Clover 2024 Exhibition
                </div>
            </div>
            </CSSTransition>
            <CSSTransition in={showContainer3} timeout={30000} classNames="fade-slide" unmountOnExit>
            <div className='Container3'>
                <div className='Container3Frame'>
                    일정
                </div>
                <div className='Container3Name'>
                    2.29(목)-3.4(월)
                </div>
            </div>
            </CSSTransition>
            <CSSTransition in={showContainer4} timeout={30000} classNames="fade-slide" unmountOnExit>
            <div className='Container4'>
                <div className='Container4Frame'>
                    관람시간
                </div>
                <div className='Container4Name'>
                    10:00-17:00
                </div>
            </div>
            </CSSTransition>
            <CSSTransition in={showContainer5} timeout={30000} classNames="fade-slide" unmountOnExit>
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
            </CSSTransition>
            <CSSTransition in={showContainer6} timeout={3000} classNames="fade-slide" unmountOnExit>
            <div className='Container6'>
                <div className='goBackButton'>
                    <Link to="/">처음으로</Link>
                </div>
                <div className='Container6Name'>
                    <img src="./Clover.svg" alt="Icon" className="iconStyle" />
                </div>
            </div>
            </CSSTransition>
            <div className='openContainer'>
                <CopyToClipboard text={value}
                    onCopy={handleCopy}>
                    <div className='buttonFont'>
                        {copied ? "주소 복사하기" : "주소 복사하기"}
                    </div>
                </CopyToClipboard>
            </div>
            <Modal show={showModal} closed={closeModalHandler} />
            {showModal && <Backdrop show={showModal} />}
            <div className='blankContainer2'>
            </div>
        </div>
    )
}
export default LastPage;