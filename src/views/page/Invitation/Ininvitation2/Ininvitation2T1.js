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

function Ininvitation2T1() {
    function handleClick(e) {
        window.location.href = '/invite/태산/3'
    }

    return (
        <div className={ininvitationStyles.container2}>
            <video className={ininvitationStyles.mp4piles} loop muted autoPlay playsInline>
                <source src={video3} type='video/mp4'/>
            </video>
            <div className={ininvitationStyles.topContainer}>
            </div>
            <div className={ininvitationStyles.textContainer}>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className={ininvitationStyles.textContainer1}>
                        <AnimatedText delay={400} className={ininvitationStyles.text1}>반복되는 삶은 종종</AnimatedText>
                        <AnimatedText delay={500} className={ininvitationStyles.text2}>우리를 축 늘어뜨려요.</AnimatedText>
                    </div>
                </CSSTransition>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className={ininvitationStyles.commitContainer1}>
                        <AnimatedText delay={600} className={ininvitationStyles.commit}>{'<2.Burnout>'}</AnimatedText>
                        <AnimatedText delay={700} className={ininvitationStyles.commit}>We often have burnouts in repeated lives.</AnimatedText>
                    </div>
                </CSSTransition>
                <div className={ininvitationStyles.textContainer2}>
                    <AnimatedText delay={800} className={ininvitationStyles.text3}>나 지금 잘하고 있나?</AnimatedText>
                    <AnimatedText delay={900} className={ininvitationStyles.text4}>이게 맞는 길일까?</AnimatedText>
                    <AnimatedText delay={1000} className={ininvitationStyles.text5}>같은 생각도 떠오르고요.</AnimatedText>
                </div>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className={ininvitationStyles.commitContainer}>
                        <AnimatedText delay={1100} className={ininvitationStyles.commit}>{'<3.Confusion>'}</AnimatedText>
                        <AnimatedText delay={1200} className={ininvitationStyles.commit}>At that time, We think like 'Am I doing well?'</AnimatedText>
                        <AnimatedText delay={1300} className={ininvitationStyles.commit}>or 'Am I on the right path?'.</AnimatedText>
                    </div>
                </CSSTransition>
            </div>
            <div className={ininvitationStyles.openContainer}>
                <button onClick={handleClick} className={ininvitationStyles.openButton}>다음</button>
            </div>
        </div>
    )
}

export default Ininvitation2T1;
