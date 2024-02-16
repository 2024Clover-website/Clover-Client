import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../../style/Invitation/Ininvitation1/Ininvitation1.css';
import video2 from '../../../../video/publicPageVideo.mp4';

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

function Ininvitation3() {
    function handleClick(e) {
        window.location.href = '/invite/public/4'
    }

    return (
        <div className='container'>
            <video style={{height: window.screen.height}} autoPlay loop muted>
                <source src={video2} type='video/mp4'/>
            </video>
            <div className='topContainer'>
            </div>
            <div className='textContainer'>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className='textContainer3'>
                        <AnimatedText delay={400} className='text1'>느슨해진 마음을</AnimatedText>
                        <AnimatedText delay={500} className='text2'>팽팽하게 만드려면,</AnimatedText>
                        <AnimatedText delay={600} className='text3'>무언가 자극이 필요해요.</AnimatedText>
                    </div>
                </CSSTransition>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className='commitContainer'>
                        <AnimatedText delay={700} className='commit'>{'<4.Needs>'}</AnimatedText>
                        <AnimatedText delay={800} className='commit'>To tighten your loose mind, you have to seek</AnimatedText>
                        <AnimatedText delay={900} className='commit'>new stimulation.</AnimatedText>
                    </div>
                </CSSTransition>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className='textContainer3'>
                        <AnimatedText delay={1000} className='text4'>마치 카세트 테이프에</AnimatedText>
                        <AnimatedText delay={1100} className='text5'>연필을 꽂아 돌리는</AnimatedText>
                        <AnimatedText delay={1200} className='text6'>것처럼요.</AnimatedText>
                    </div>
                </CSSTransition>
                <CSSTransition in={true} timeout={1300} classNames="motion-slide" unmountOnExit>
                    <div className='commitContainer1'>
                        <AnimatedText delay={1400} className='commit'>{'<5.Pencil>'}</AnimatedText>
                        <AnimatedText delay={1500} className='commit'>Seems like putting a pencil on a cassette tape.</AnimatedText>
                    </div>
                </CSSTransition>
                </div>
            <div className='openContainer'>
                <button onClick={handleClick} className='openButton'>다음</button>
            </div>
        </div>
    )
}

export default Ininvitation3;
