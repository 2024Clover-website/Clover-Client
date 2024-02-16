import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../../style/Invitation/Ininvitation1/Ininvitation1.css';
import video3 from '../../../../video/taishanTeamVideo.mp4';

function AnimatedText({children, delay, className}) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), delay);
    }, [delay]);

    return (
        <CSSTransition in={show} timeout={750} classNames="motion-slide" unmountOnExit>
            <div className={className}>{children}</div>
        </CSSTransition>
    );
}

function AnimatedImage({src, delay, className}) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), delay);
    }, [delay]);

    return (
        <CSSTransition in={show} timeout={750} classNames="motion-slide" unmountOnExit>
            <img className={className} src={src} />
        </CSSTransition>
    );
}

function Ininvitation5T1() {
    function handleClick(e) {
        window.location.href = '/invite/태산/6'
    }

    return (
        <div className='container'>
            <video style={{height: window.screen.height}} autoPlay loop muted>
                <source src={video3} type='video/mp4'/>
            </video>
            <div className='topContainer'>
            </div>
            <div className='textContainer'>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className='textContainer1'>
                        <AnimatedText delay={400} className='text1'>제가 만든 걸 살짝</AnimatedText>
                        <AnimatedText delay={500} className='text2'>보여드릴게요.</AnimatedText>
                    </div>
                </CSSTransition>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className='commitContainer'>
                        <AnimatedText delay={600} className='commit'>{'<8.Spoiler>'}</AnimatedText>
                        <AnimatedText delay={700} className='commit'>I wanna show you a little bit of what I made.</AnimatedText>
                    </div>
                </CSSTransition>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className='textContainer1'>
                        <AnimatedText delay={800} className='text3'>꼭 와서 눈으로도</AnimatedText>
                        <AnimatedText delay={900} className='text4'>즐겼으면 좋겠어요.</AnimatedText>
                    </div>
                </CSSTransition>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className='commitContainer'>
                        <AnimatedText delay={1000} className='commit'>{'<9.Wish>'}</AnimatedText>
                        <AnimatedText delay={1100} className='commit'>But I really hope you come and enjoy it.</AnimatedText>
                    </div>
                </CSSTransition>
            </div>
            <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
            <div className='picture'>
                <AnimatedImage delay={1200} className='invitation5Image'src='/image5.png'/>
            </div>
            </CSSTransition>
            <div className='openContainer'>
                <button onClick={handleClick} className='openButton'>
                    다음
                </button>
            </div>
        </div>
    )
}

export default Ininvitation5T1;
