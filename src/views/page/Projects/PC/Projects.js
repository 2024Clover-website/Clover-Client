import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import styles from '../../../../styles/Projects/PC/Projects.module.css';

const customStyles = {
    content : {
        top                   : '0%',
        left                  : '0%',
        right                 : '0%',
        bottom                : '0%',
        marginRight           : '0%',
        transform             : 'translate(0%, 0%)',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        border                : 'none', // 테두리 제거
        padding               : '0', // 패딩 제거
        overflow              : 'hidden' // 스크롤 제거
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.15)', // 알파값을 0.75로 높임
        backdropFilter: 'blur(40px)' // 블러 효과 추가
    }
};

function Projects() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(10 * 60);  // 타이머의 남은 시간 (초)
    const [description, setDescription] = useState({});  // descriptionContainer의 내용
	const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

    const descriptions = {
        'CTA': {
            title: 'Dopamine Addiction: Visualization of symptoms',
            section: 'A',
            category: '3D Motion Graphic',
            designer: '유민기',
            docentTime: '2:00',
            podcastTime: '10:00'
        },
		'CTB': {
            title: 'Dopamine Addiction: Visualization of symptoms',
            section: 'B',
            category: '3D Motion Graphic',
            designer: '장준용',
            docentTime: '2:00',
            podcastTime: '10:00'
        },
		'CTC': {
            title: 'Dopamine Addiction: Visualization of symptoms',
            section: 'C',
            category: '3D Motion Graphic',
            designer: '권상훈',
            docentTime: '2:00',
            podcastTime: '10:00'
        },
		'CTD': {
            title: 'Dopamine Addiction: Visualization of symptoms',
            section: 'D',
            category: '3D Motion Graphic',
            designer: '남병준',
            docentTime: '2:00',
            podcastTime: '10:00'
        },
		'CTE': {
            title: 'Dopamine Addiction: Visualization of symptoms',
            section: 'E',
            category: '3D Motion Graphic',
            designer: '김성진',
            docentTime: '2:00',
            podcastTime: '10:00'
        },
		'CTF': {
            title: 'Dopamine Addiction: Visualization of symptoms',
            section: 'F',
            category: '3D Motion Graphic',
            designer: '디자이너',
            docentTime: '2:00',
            podcastTime: '10:00'
        },
        // 다른 이미지에 대한 설명을 여기에 추가하세요
    };

    function handlePodcastButton() {
        setModalIsOpen(true);
        setTimeRemaining(10 * 60);  // 타이머를 10분으로 설정
    }

    function handleDocentButton() {
        window.location.href = "/projects/docentAnnounce";
    }

    function handleImageClick(image) {
        // 이미지에 따라 descriptionContainer의 내용을 변경
        setDescription(descriptions[image]);
		setIsDescriptionVisible(true);
    }

    // 타이머 설정
    useEffect(() => {
        if (timeRemaining > 0) {
            const timerId = setTimeout(() => {
                setTimeRemaining(timeRemaining - 1);
            }, 1000);
            return () => clearTimeout(timerId);  // 컴포넌트가 언마운트되면 타이머를 제거
        } else {
            setModalIsOpen(false);  // 타이머가 끝나면 모달을 닫음
        }
    }, [timeRemaining]);

    return (
        <div className={styles.container}>
            <div className={styles.CTMain}>
                <img alt src="/img/CTMain.png" onClick={() => handleImageClick('CTMain')} />
                <div className={styles.CTA}>
                    <img alt src="/img/CTA.png" onClick={() => handleImageClick('CTA')} />
                </div>
				<div className={styles.CTB}>
                    <img alt src="/img/CTB.png" onClick={() => handleImageClick('CTB')} />
                </div>
				<div className={styles.CTC}>
                    <img alt src="/img/CTC.png" onClick={() => handleImageClick('CTC')} />
                </div>
				<div className={styles.CTD}>
                    <img alt src="/img/CTD.png" onClick={() => handleImageClick('CTD')} />
                </div>
				<div className={styles.CTE}>
                    <img alt src="/img/CTE.png" onClick={() => handleImageClick('CTE')} />
                </div>
				<div className={styles.CTF}>
                    <img alt src="/img/CTF.png" onClick={() => handleImageClick('CTF')} />
                </div>
				<div className={styles.CT01}>
                    <img alt src="/img/CT01.png"/>
                </div>
				<div className={styles.CT02}>
                    <img alt src="/img/CT02.png"/>
                </div>
				<div className={styles.CT03}>
                    <img alt src="/img/CT03.png"/>
                </div>
            </div>
			{isDescriptionVisible && (
				<div className={styles.descriptionContainer}>
					<div className={styles.titleBox}>
						<div className={styles.titleBoxHead}>
							<p className={styles.title}>
								{description.title}
							</p>
							<p className={styles.section}>{description.section}</p>
						</div>
						<p className={styles.category}>{description.category}</p>
					</div>
					<div className={styles.innerBox}>
						<div className={styles.tag}>
							<p>디자이너</p>
						</div>
						<p className={styles.tagContents}>{description.designer}</p>
					</div>
					<div className={styles.innerBox}>
						<div className={styles.tag}>
							<p>도슨트</p>
						</div>
						<p className={styles.tagContents}>
							{description.docentTime}
							<img
								src="../../../img/Button01.png"
								className={styles.playButton}
								onClick={handleDocentButton}
							/>
						</p>
					</div>
					<div className={styles.innerBox}>
						<div className={styles.tag}>
							<p>팟캐스트</p>
						</div>
						<p className={styles.tagContents}>
							{description.podcastTime}
							<img
								src="../../../img/Button01.png"
								className={styles.playButton}
								onClick={handlePodcastButton}
							/>
						</p>
					</div>
            </div>
			)}
                <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className={styles.Modalcontainer}>
                    <img
                        src="../../../img/뒤로가기.png"
                        className={styles.backButton}
                        onClick={() => {
                            setModalIsOpen(false);
                        }}
                    />
                    <div className={styles.docentContainer}>
                        <div className={styles.podcastbox}>
                        <p>팟캐스트 : 러닝타임 {Math.floor(timeRemaining / 60)}분 {timeRemaining % 60}초</p>
                        </div>
                            <p>Dopamine Addiction: Visualization of symptoms</p>
                    </div>
                    <div className={styles.LineContainer}></div>
                    <div className={styles.qrContainer}>
                        <div className={styles.imgContainer}>
                            <img src="../img/podcast qr_Image.png" alt />
                        </div>
                        <div className={styles.textContainer}>
                            <p1>모바일로 봐주세요!</p1> <br />
                            <p2>
                                해당 콘텐츠는 스마트폰으로 감상할 수 있어요 <br />
                                카메라로 좌측의 QR코드를 찍어주세요
                            </p2>
                        </div>
                    </div>
                </div>
            </Modal>

        </div>
    );
}

export default Projects;

