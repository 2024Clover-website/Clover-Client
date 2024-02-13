import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../../style/Invitation/Ininvitation2/Ininvitation2.css';

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

function Ininvitation2() {
    function handleClick(e) {
        window.location.href = '/invite3'
    }

    return (
        <div className='container' style={{ backgroundImage: `url("./bg.png")`, backgroundSize: 'cover' }}>
            <div className='textContainer'>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className='textContainer1'>
                        <AnimatedText delay={400} className='text1'>반복되는 삶은 종종</AnimatedText>
                        <AnimatedText delay={500} className='text2'>우리를 축 늘어뜨려요.</AnimatedText>
                    </div>
                </CSSTransition>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className='commitContainer1'>
                        <AnimatedText delay={600} className='commit'>{'<2.Burnout>'}</AnimatedText>
                        <AnimatedText delay={700} className='commit'>We often have burnouts in repeated lives.</AnimatedText>
                    </div>
                </CSSTransition>
                <div className='textContainer2'>
                    <AnimatedText delay={800} className='text3'>나 지금 잘하고 있나?</AnimatedText>
                    <AnimatedText delay={900} className='text4'>이게 맞는 길일까?</AnimatedText>
                    <AnimatedText delay={1000} className='text5'>같은 생각도 떠오르고요.</AnimatedText>
                </div>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className='commitContainer'>
                        <AnimatedText delay={1100} className='commit'>{'<3.Confusion>'}</AnimatedText>
                        <AnimatedText delay={1200} className='commit'>At that time, We think like 'Am I doing well?'</AnimatedText>
                        <AnimatedText delay={1300} className='commit'>or 'Am I on the right path?'.</AnimatedText>
                    </div>
                </CSSTransition>
            </div>
            <div className='blankContainer'></div>
            <div className='openContainer'>
                <button onClick={handleClick} className='openButton'>다음</button>
            </div>
        </div>
    )
}

export default Ininvitation2;