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

function Ininvitation4T1() {
    function handleClick(e) {
        window.location.href = '/invite/태산/5'
    }

    return (
        <div className='Container'>
            <video style={{height: window.screen.height}} autoPlay loop muted>
                <source src={video3} type='video/mp4'/>
            </video>
            <div className='textContainer'>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className='textContainer1'>
                        <AnimatedText delay={400} className='text1'>최근에 문득 이런 생각이</AnimatedText>
                        <AnimatedText delay={500} className='text2'>들었어요.</AnimatedText>
                    </div>
                </CSSTransition>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className='commitContainer'>
                        <AnimatedText delay={600} className='commit'>{'<6.Think>'}</AnimatedText>
                        <AnimatedText delay={700} className='commit'>I suddenly had this thought recently.</AnimatedText>
                    </div>
                </CSSTransition>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className='textContainer1'>
                        <AnimatedText delay={800} className='text3'>나는 어떤 작업을 할때,</AnimatedText>
                        <AnimatedText delay={900} className='text4'>자극을 받지? 하고요.</AnimatedText>
                    </div>
                </CSSTransition>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className='commitContainer'>
                        <AnimatedText delay={1000} className='commit'>{'<7.Passion>'}</AnimatedText>
                        <AnimatedText delay={1100} className='commit'>What kind of work I get stimulated about?</AnimatedText>
                    </div>
                </CSSTransition>
            </div>
            <div className='openContainer'>
                <button onClick={handleClick} className='openButton'>다음</button>
            </div>
        </div>
    )
}
export default Ininvitation4T1;
