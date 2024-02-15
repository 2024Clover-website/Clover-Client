import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '../../../style/Invitation/Ininvitation1/Ininvitation1.css';
import video4 from '../../../../video/laterTeamVideo.mp4';

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

function IninvitationT2() {
    function handleClick(e) {
        window.location.href = '/invite/이따/1/2'
    }

    return (
        <div className='container'>
            <video style={{height: window.screen.height}} autoPlay loop muted>
                <source src={video4} type='video/mp4'/>
            </video>
            <div className='textContainer'>
                <AnimatedText delay={100} className='text1'>학교<br/></AnimatedText>
                <AnimatedText delay={200} className='text2'>알바<br/></AnimatedText>
                <AnimatedText delay={300} className='text3'>집<br/></AnimatedText>
                <AnimatedText delay={400} className='text4'>학교<br/></AnimatedText>
                <AnimatedText delay={500} className='text5'>알바<br/></AnimatedText>
                <AnimatedText delay={600} className='text6'>집<br/></AnimatedText>
                <AnimatedText delay={700} className='text7'>.<br/></AnimatedText>
                <AnimatedText delay={800} className='text8'>.<br/></AnimatedText>
                <AnimatedText delay={900} className='text9'>.<br/></AnimatedText>
                <CSSTransition in={true} timeout={750} classNames="motion-slide" unmountOnExit>
                    <div className='commitContainer'>
                        <AnimatedText delay={1000} className='commit'>{'<1.merry-go-round>'}</AnimatedText>
                        <AnimatedText delay={1100} className='commit'>School, Part time job, Home,</AnimatedText>
                        <AnimatedText delay={1200} className='commit'>School, Part time job, Home...</AnimatedText>
                    </div>
                </CSSTransition>
            </div>
            <div className='openContainer'>
                <button onClick={handleClick} className='openButton'>다음</button>
            </div>
        </div>
    )
}

export default IninvitationT2;
