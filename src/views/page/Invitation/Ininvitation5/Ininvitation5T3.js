import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import video5 from '../../../../video/vibemakerTeamVideo.mp4';
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

function AnimatedImage({src, delay, className}) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), delay);
    }, [delay]);

    return (
        <CSSTransition in={show} timeout={750} classNames="motion-slide" unmountOnExit>
            <img className={className} src={src} alt =""/>
        </CSSTransition>
    );
}

function Ininvitation5T3() {
    function handleClick(e) {
        window.location.href = '/invite/VIBEMAKERS/6'
    }

    return (
        <div className={ininvitationStyles.container4}>
            <video className={ininvitationStyles.mp4piles} loop muted autoPlay playsInline>
                <source src={video5} type='video/mp4'/>
            </video>
            <div className={ininvitationStyles.topContainer}>
            </div>
            <div className={ininvitationStyles.textContainer}>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className={ininvitationStyles.textContainer1}>
                        <AnimatedText delay={400} className={ininvitationStyles.text1}>우리가 만든 걸 살짝</AnimatedText>
                        <AnimatedText delay={500} className={ininvitationStyles.text2}>보여드릴게요.</AnimatedText>
                    </div>
                </CSSTransition>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className={ininvitationStyles.commitContainer}>
                        <AnimatedText delay={600} className={ininvitationStyles.commit}>{'<8.Spoiler>'}</AnimatedText>
                        <AnimatedText delay={700} className={ininvitationStyles.commit}>I wanna show you a little bit of what I made.</AnimatedText>
                    </div>
                </CSSTransition>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className={ininvitationStyles.textContainer1}>
                        <AnimatedText delay={800} className={ininvitationStyles.text3}>꼭 와서 눈으로도</AnimatedText>
                        <AnimatedText delay={900} className={ininvitationStyles.text4}>즐겼으면 좋겠어요.</AnimatedText>
                    </div>
                </CSSTransition>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className={ininvitationStyles.commitContainer}>
                        <AnimatedText delay={1000} className={ininvitationStyles.commit}>{'<9.Wish>'}</AnimatedText>
                        <AnimatedText delay={1100} className={ininvitationStyles.commit}>But I really hope you come and enjoy it.</AnimatedText>
                    </div>
                </CSSTransition>
            </div>
            <div className={ininvitationStyles.picture}>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <AnimatedImage delay={1200} className={ininvitationStyles.invitation5Image}src='/public5.gif' alt='공용작업물'/>
                </CSSTransition>
            </div>
                <div className={ininvitationStyles.openContainer}>
                <button onClick={handleClick} className={ininvitationStyles.openButton}>다음</button>
            </div>
        </div>
    )
}

export default Ininvitation5T3;
