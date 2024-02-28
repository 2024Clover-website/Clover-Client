import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import styles from '../../../../styles/Projects/PC/Projects.module.css';

const customStyles = {
    content: {
        top: '0%',
        left: '0%',
        right: '0%',
        bottom: '0%',
        marginRight: '0%',
        transform: 'translate(0%, 0%)',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        border: 'none',
        padding: '0',
        overflow: 'hidden'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.15)',
        backdropFilter: 'blur(40px)'
    }
};

function Projects() {
    const [isDescriptionContainer2Visible, setIsDescriptionContainer2Visible] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [timeRemaining, setTimeRemaining] = useState(10 * 60);
    const [description, setDescription] = useState({});
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
    const [podcastModalIsOpen, setPodcastModalIsOpen] = useState(false);
    const [docentModalIsOpen, setDocentModalIsOpen] = useState(false);
    const [imageSrc, setImageSrc] = useState({
        CTA: "/img/CTA.png",
        CTB: "/img/CTB.png",
        CTC: "/img/CTC.png",
        CTD: "/img/CTD.png",
        CTE: "/img/CTE.png",
        CTF: "/img/CTF.png"
    });
    const descriptions = {
        'CTA': {
            title: 'About In a row',
            section: 'A',
            category: 'ART DIRECT',
            designer: '권예지·조용욱·김혜신',
            designer2: '기한나·안서경·허민영',
            podcastTime: '15:28',

            podcastqrImage: "../img/전시브랜딩팀_팟캐스트.png"
        },
        'CTB': {
            title: 'KEYCLE',
            section: 'B',
            category: 'SERVICE DESIGN',
            designer: '최재정·김경은·김동재·노유정',
            docentTime: '2:19',
            podcastTime: '10:30',
            docentqrImage: "../img/태산_도슨트.png",
            podcastqrImage: "../img/태산_팟캐스트.png",
        },
        'CTC': {
            title: '악의 불변',
            section: 'C',
            category: 'GRAPHIC DESIGN',
            designer: '임로빈·김성연·박금주·박지현',
            docentTime: '2:48',
            podcastTime: '9:45',
            docentqrImage: "../img/이따팀_도슨트.png",
            podcastqrImage: "../img/이따팀 _팟캐스트.png",
        },
        'CTD': {
            title: 'VIBE MAKERS',
            section: 'D',
            category: 'CHARATER POP-UP',
            designer: '정지윤·김나연·박도은',
            designer2: '송지윤·오시헌',
            docentTime: '2:54',
            podcastTime: '6:06',
            docentqrImage: "../img/바이브 메이커스_도슨트.png",
            podcastqrImage: "../img/바이브 메이커스_도슨트.png",
        },
        'CTE': {
            title: 'Dopamine Addiction: Visualization of symptoms',
            section: 'E',
            category: 'SIDE PROJECT',
            designer: '정지윤·김나연',
            docentTime: '3:01',
            podcastTime: '16:27',
            docentqrImage: "../img/도파민중독자들_도슨트.png",
            podcastqrImage: "../img/도파민중독자들_도슨트.png"
        },
        'CTF': {
            title: 'Perfect doll factory',
            section: 'F',
            category: 'EXPERIENTIAL MEDIA ART',
            designer: '한승우·강지수·박규리·임재윤',
            docentTime: '1:58',
            podcastTime: '16:27',
            docentqrImage: "../img/옥수수수염_도슨트.png",
            podcastqrImage: "../img/옥수수수염_팟케스트.png"
        },
    };

    function handlePodcastButton() {
        setModalIsOpen(true);
        setTimeRemaining(10 * 60);
    }

    function handleDocentButton() {
        setModalIsOpen(true);
        setTimeRemaining(10 * 60);
    }

    function handleImageClick(image) {
        setDescription(descriptions[image]);
        setIsDescriptionVisible(true);
        setImageSrc(prevState => ({ ...prevState, [image]: `/img/${image}.gif` }))
    }
    function handlePodcastButton() {
        setPodcastModalIsOpen(true);
        setTimeRemaining(10 * 60);
    }

    function handleDocentButton() {
        setDocentModalIsOpen(true);
        setTimeRemaining(10 * 60);
    }


    useEffect(() => {
        if (timeRemaining > 0) {
            const timerId = setTimeout(() => {
                setTimeRemaining(timeRemaining - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        } else {
            setModalIsOpen(false);
        }
    }, [timeRemaining]);

    return (
        <div className={styles.container}>
            <div className={styles.CTMain} onClick={() => setIsDescriptionContainer2Visible(false)}>
                <img alt src="/img/CTMain.png" />
                <div>
                    <img className={`${styles.CTA} ${styles.hoverImage}`} alt src="/img/CTA.gif" onClick={() => handleImageClick('CTA')} />
                    <img className={`${styles.CTB} ${styles.hoverImage}`} alt src="/img/CTB.gif" onClick={() => handleImageClick('CTB')} />
                    <img className={`${styles.CTC} ${styles.hoverImage}`} alt src="/img/CTC.gif" onClick={() => handleImageClick('CTC')} />
                    <img className={`${styles.CTD} ${styles.hoverImage}`} alt src="/img/CTD.gif" onClick={() => handleImageClick('CTD')} />
                    <img className={`${styles.CTE} ${styles.hoverImage}`} alt src="/img/CTE.gif" onClick={() => handleImageClick('CTE')} />
                    <img className={`${styles.CTF} ${styles.hoverImage}`} alt src="/img/CTF.gif" onClick={() => handleImageClick('CTF')} />
                </div>
            </div>
            {isDescriptionContainer2Visible && (
                <div className={styles.descriptionContainer2}>
                    <div className={styles.titleBox2}>
                        <div className={styles.titleBoxHead2}>
                            <p className={styles.title2}>
                                자세히 보고 싶은 프로젝트가 있나요?
                            </p>
                            <p className={styles.subtitle1}>
                                도슨트와 팟캐스트가 준비되어 있어요.
                                재생 버튼을 클릭하여 감상해보세요.
                            </p>
                        </div>
                        <p className={styles.category}>{description.category}</p>
                    </div>
                    <div className={styles.innerBox}>
                        <div className={styles.tag}>
                            <p>도슨트</p>
                        </div>
                        <p className={styles.subtitle2}>
                            작품에 대한 자세한 설명을 들을 수 있어요
                        </p>
                    </div>
                    <div className={styles.innerBox}>
                        <div className={styles.tag}>
                            <p>팟캐스트</p>
                        </div>
                        <p className={styles.subtitle3}>
                            번아웃과 슬럼프, 그리고 새로운 자극에 대한
                            각자만의 스토리를 들을 수 있어요
                        </p>
                    </div>
                </div>
            )}

            {!isDescriptionContainer2Visible && isDescriptionVisible && (
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
                        <p className={styles.tagContents}>{description.designer}<br />{description.designer2}</p>

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
                isOpen={docentModalIsOpen}
                onRequestClose={() => setDocentModalIsOpen(false)}
                style={customStyles}
                contentLabel="Docent Modal"
            >
                <div className={styles.Modalcontainer}>
                    <img
                        src="../../../img/뒤로가기.png"
                        className={styles.backButton}
                        onClick={() => {
                            setPodcastModalIsOpen(false);
                            setDocentModalIsOpen(false);
                        }}
                    />
                    <div className={styles.docentContainer}>
                        <div className={styles.podcastbox}>
                            <p>도슨트 : 러닝타임 {description.docentTime}</p>
                        </div>
                        <p>{description.title}</p>
                    </div>

                    <div className={styles.LineContainer}></div>
                    <div className={styles.qrContainer}>
                        <div className={styles.imgContainer}>
                            <img src={description.docentqrImage} alt="" />
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
            <Modal
                isOpen={podcastModalIsOpen}
                onRequestClose={() => setPodcastModalIsOpen(false)}
                style={customStyles}
                contentLabel="Podcast Modal"
            >
                <div className={styles.Modalcontainer}>
                    <img
                        src="../../../img/뒤로가기.png"
                        className={styles.backButton}
                        onClick={() => {
                            setPodcastModalIsOpen(false);
                            setDocentModalIsOpen(false);
                        }}
                    />
                    <div className={styles.docentContainer}>
                        <div className={styles.podcastbox}>
                            <p>팟캐스트 : 러닝타임 {description.podcastTime}</p>
                        </div>
                        <p>{description.title}</p>
                    </div>

                    <div className={styles.LineContainer}></div>
                    <div className={styles.qrContainer}>
                        <div className={styles.imgContainer}>
                            <img src={description.podcastqrImage} alt="" />
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

