import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ininvitationStyles from '../../../style/Invitation/Ininvitation1/Ininvitation1.module.css';
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

function Ininvitation3T2() {
    function handleClick(e) {
        window.location.href = '/invite/이따/4'
    }

    return (
        <div className={ininvitationStyles.container3}>
            <video style={{height: window.screen.height}} loop muted autoPlay playsInline>
                <source src={video4} type='video/mp4'/>
            </video>
            <div className={ininvitationStyles.topContainer}>
            </div>
            <div className={ininvitationStyles.textContainer}>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className={ininvitationStyles.textContainer3}>
                        <AnimatedText delay={400} className={ininvitationStyles.text1}>느슨해진 마음을</AnimatedText>
                        <AnimatedText delay={500} className={ininvitationStyles.text2}>팽팽하게 만드려면,</AnimatedText>
                        <AnimatedText delay={600} className={ininvitationStyles.text3}>무언가 자극이 필요해요.</AnimatedText>
                    </div>
                </CSSTransition>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className={ininvitationStyles.commitContainer}>
                        <AnimatedText delay={700} className={ininvitationStyles.commit}>{'<4.Needs>'}</AnimatedText>
                        <AnimatedText delay={800} className={ininvitationStyles.commit}>To tighten your loose mind, you have to seek</AnimatedText>
                        <AnimatedText delay={900} className={ininvitationStyles.commit}>new stimulation.</AnimatedText>
                    </div>
                </CSSTransition>
                <CSSTransition in={true} timeout={300} classNames="motion-slide" unmountOnExit>
                    <div className={ininvitationStyles.textContainer3}>
                        <AnimatedText delay={1000} className={ininvitationStyles.text4}>마치 카세트 테이프에</AnimatedText>
                        <AnimatedText delay={1100} className={ininvitationStyles.text5}>연필을 꽂아 돌리는</AnimatedText>
                        <AnimatedText delay={1200} className={ininvitationStyles.text6}>것처럼요.</AnimatedText>
                    </div>
                </CSSTransition>
                <CSSTransition in={true} timeout={1300} classNames="motion-slide" unmountOnExit>
                    <div className={ininvitationStyles.commitContainer1}>
                        <AnimatedText delay={1400} className={ininvitationStyles.commit}>{'<5.Pencil>'}</AnimatedText>
                        <AnimatedText delay={1500} className={ininvitationStyles.commit}>Seems like putting a pencil on a cassette tape.</AnimatedText>
                    </div>
                </CSSTransition>
                </div>
                <div className={ininvitationStyles.openContainer}>
                <button onClick={handleClick} className={ininvitationStyles.openButton}>다음</button>
            </div>
        </div>
    )
}

export default Ininvitation3T2;
