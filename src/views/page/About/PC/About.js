import React from "react";
import styles from '../../../../styles/About/PC/About.module.css';

function About() {
    return (
        <div className={styles.container}>
                <img src="./img/casetteTape.png"></img>
            <div className={styles.page}>
                <div className={styles.Linecontainer}></div>
                <div className={styles.text}>
                        <div className={styles.textarea1}>
                            <p>Overview</p>
                            <p1>In a row</p1>
                        </div>
                        <div className={styles.textarea2}>
                            <p>01</p>
                            <p1>삶의 기나긴 선상에 놓인 우리는 마치 하나의 카세트처럼 움직
                                이는 것 같아요. 같은 동작을 반복하며 느슨해졌다가, 무언가의
                                힘을 빌려 본래의 선율을 되찾기 때문이죠.</p1>
                        </div>
                </div>
            </div>
            <img src="./img/dog.png"></img>
            <div className={styles.page}>
                <div className={styles.Linecontainer}></div>
                <div className={styles.text}>
                        <div className={styles.textarea1}>
                            <p>Design Concept1</p>
                            <p1>릴을 돌려 팽팽하게</p1>
                        </div>
                        <div className={styles.textarea2}>
                            <p>02</p>
                            <p1>릴이 돌아가다 보면 느슨해졌던 테이프가 다시금 팽팽해집니다.
                                그렇게 제자리로 돌아온 우리는 잡음을 줄이고, 또다시 하루하루
                                를 살아갑니다.</p1>
                        </div>
                </div>
            </div>
            <img src="./img/dog.png"></img>
            <div className={styles.page}>
                <div className={styles.Linecontainer}></div>
                <div className={styles.text}>
                        <div className={styles.textarea1}>
                            <p>Design Concept2</p>
                            <p1>나를 감싸던 것</p1>
                        </div>
                        <div className={styles.textarea2}>
                            <p>03</p>
                            <p1>테이프 커버에 곡에 대한 정보가 빼곡히 적혀있듯이, 내 주변에
                                는 그동안 쌓아온 삶과 경험들로 가득해요. 이것들을 차근차근
                                돌아보면, 내가 좋아하는 것들이 무엇인지 알 수 있어요.</p1>
                        </div>
                </div>
            </div>
            <img src="./img/dog.png"></img>
            <div className={styles.page}>
                <div className={styles.Linecontainer}></div>
                <div className={styles.text}>
                        <div className={styles.textarea1}>
                            <p>Design Concept3</p>
                            <p1>일상으로의 회복</p1>
                        </div>
                        <div className={styles.textarea2}>
                            <p>03</p>
                            <p1>지루했던 일상이 다채로워 보이고, 무엇이든지 해낼 수 있을 거
                                같은 자신감도 생겨요. 언제 다시 번아웃과 슬럼프가 찾아올 지
                                모르지만, 지금의 감정은 이루 다 말할 수 없어요.</p1>
                        </div>
                </div>
            </div>
            <img src="./img/dog.png"></img>
            <div className={styles.textarea3}>
                <p>알파벳 순서대로 보면 보다 쾌적하게 전시를 관람할수 있습니다. 또한 기프트존을 따로 마련해두었습니다.
                    다른 관람객들을 위해, 방문자님의 소중한 마음은 꼭 기프트존에만 놓아주세요.</p>
            </div>
            <img src="./img/dog.png"></img>
            <div className={styles.textarea3}>
                <p>온라인으로도 전시를 관람하실 수 있습니다. About 페이지에서 이번 전시에 대한 전문을 읽어보실 수 있으
                    며, Projects 페이지에서 각 팀 별 도슨트와 슬럼프에 대한 이야기를 팟캐스트 형식으로 들어볼 수 있습니다.
                    마지막으로 REC 페이지에서는 나만의 자극 카드를 만드는 인터랙티브한 경험을 즐기실 수 있습니다.</p>
            </div>
            <img src="./img/dog.png"></img>
            <div className={styles.textarea3}>
                <p>Graphic Detail</p>
            </div>
            <img src="./img/aboutimg1.png"></img>
            <img src="./img/aboutimg2.png"></img>
            <img src="./img/aboutimg3.png"></img>
            <img src="./img/aboutimg4.png"></img>
            <img src="./img/aboutimg5.png"></img>
            <div className={styles.textarea3}>
                <p>Thanks to</p>
            </div>
            <div className={styles.page}>
                <div className={styles.Linecontainer}></div>
            </div>
        </div>
    );
}

export default About;



