import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import video3 from '../../../../video/taishanTeamVideo.mp4';
import ininvitationStyles from '../../../style/Invitation/Ininvitation1/Ininvitation1.module.css';

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

function IninvitationT1() {
    function handleClick(e) {
        window.location.href = '/invite/태산/2'
    }

    return (
        <div className={ininvitationStyles.container2}>
            <video className={ininvitationStyles.mp4piles} loop muted autoPlay playsInline>
                <source src={video3} type='video/mp4'/>
            </video>
            <div className={ininvitationStyles.topContainer}>
            </div>
            <div className={ininvitationStyles.textContainer}>
                <AnimatedText delay={100} className={ininvitationStyles.text1}>학교<br/></AnimatedText>
                <AnimatedText delay={200} className={ininvitationStyles.text2}>알바<br/></AnimatedText>
                <AnimatedText delay={300} className={ininvitationStyles.text3}>집<br/></AnimatedText>
                <AnimatedText delay={400} className={ininvitationStyles.text4}>학교<br/></AnimatedText>
                <AnimatedText delay={500} className={ininvitationStyles.text5}>알바<br/></AnimatedText>
                <AnimatedText delay={600} className={ininvitationStyles.text6}>집<br/></AnimatedText>
                <AnimatedText delay={700} className={ininvitationStyles.text7}>.<br/></AnimatedText>
                <AnimatedText delay={800} className={ininvitationStyles.text8}>.<br/></AnimatedText>
                <AnimatedText delay={900} className={ininvitationStyles.text9}>.<br/></AnimatedText>
                <CSSTransition in={true} timeout={750} classNames="motion-slide" unmountOnExit>
                    <div className={ininvitationStyles.commitContainer}>
                        <AnimatedText delay={1000} className={ininvitationStyles.commit}>{'<1.merry-go-round>'}</AnimatedText>
                        <AnimatedText delay={1100} className={ininvitationStyles.commit}>School, Part time job, Home,</AnimatedText>
                        <AnimatedText delay={1200} className={ininvitationStyles.commit}>School, Part time job, Home...</AnimatedText>
                    </div>
                </CSSTransition>
            </div>
            <div className={ininvitationStyles.openContainer}>
                <button onClick={handleClick} className={ininvitationStyles.openButton}>다음</button>
            </div>
        </div>
    )
}

export default IninvitationT1;
