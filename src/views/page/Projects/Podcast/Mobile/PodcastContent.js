import React, { useState, useEffect, useRef } from "react";

// import axios from "axios";

import { useNavigate, useLocation } from "react-router-dom";

import styles from "../../../../../styles/Projects/Docent/Mobile/DocentContent.module.css";

function PodcastContent() {
	const navigate = useNavigate();
	const location = useLocation();

	const audioRef = useRef();

	const record = location.state.record;
	const teamId = location.state.teamId;
	const background = location.state.background;
	const commentCount = location.state.commentCount;

	const [progress, setProgress] = useState(100);
	const [playbackRate, setPlaybackRate] = useState(1);
	const [isMuted, setIsMuted] = useState(false);
	const [script, setScript] = useState([]);
	const [runningTime, setRunningTime] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	let relativePosition;

	const handleSpeedClick = () => {
		if (audioRef.current) {
			if (!audioRef.current.paused) {
				if (playbackRate !== 2) {
					setPlaybackRate(playbackRate * 2);
					audioRef.current.playbackRate *= 2;
				} else {
					setPlaybackRate(0.5);
					audioRef.current.playbackRate = 0.5;
				}
			}
		}
	};

	useEffect(() => {
		async function fetchData() {
			try {
				// const res = await axios.get(
				// 	`https://api.clover-inarow.site/teams/${teamId}/podcast/script`
				// );
				const res = {
					isSuccess: true,
					code: 2000,
					message: "success!",
					result: [
						{
							start_time: 0,
							end_time: 2.355,
							spend_time: 2.355,
							script: "네 안녕하세요. 반갑습니다.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 2.355,
							end_time: 4.56,
							spend_time: 2.2049999999999996,
							script: "안녕하세요.",
							user: "모두",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%A1%B0%EC%9A%A9%EC%9A%B1.png",
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B9%80%ED%98%9C%EC%8B%A0.png",
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%95%88%EC%84%9C%EA%B2%BD.png",
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B8%B0%ED%95%9C%EB%82%98.png",
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%ED%97%88%EB%AF%BC%EC%98%81.png",
							],
						},
						{
							start_time: 4.56,
							end_time: 13.305,
							spend_time: 8.745000000000001,
							script:
								"네 감사합니다. 앞서 여러분들의 소개로 한번 이야기를 차근차근 시작해 보고자 합니다. 저 먼저 시작할게요.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 13.305,
							end_time: 21.21,
							spend_time: 7.905000000000001,
							script:
								"저는 전시 브랜딩에서 기획 총괄을 담당한 권예지입니다. 혜신 님부터 이번에는 돌아가면서 한번 진행을 해볼게요.\n",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 21.21,
							end_time: 28.03,
							spend_time: 6.82,
							script:
								"안녕하세요. 저는 전시 브랜딩의 그래픽을 담당한 김혜신입니다.\n",
							user: "김혜신",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B9%80%ED%98%9C%EC%8B%A0.png",
							],
						},
						{
							start_time: 29.16,
							end_time: 37.19,
							spend_time: 8.029999999999998,
							script:
								"안녕하세요. 저는 전시 브랜딩에서 인터랙션을 담당한 조용욱이라고 합니다.",
							user: "조용욱",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%A1%B0%EC%9A%A9%EC%9A%B1.png",
							],
						},
						{
							start_time: 37.19,
							end_time: 42.675,
							spend_time: 5.484999999999999,
							script:
								"안녕하세요. 저는 전시 브랜딩에서 공간 기획을 맡고 있는 허민영입니다.",
							user: "허민영",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%ED%97%88%EB%AF%BC%EC%98%81.png",
							],
						},
						{
							start_time: 44.355,
							end_time: 48.086,
							spend_time: 3.7310000000000016,
							script:
								"안녕하세요. 전시 브랜딩에서 편집을 맡고 있는 안서경입니다.",
							user: "안서경",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%95%88%EC%84%9C%EA%B2%BD.png",
							],
						},
						{
							start_time: 49.915,
							end_time: 56.019,
							spend_time: 6.103999999999999,
							script:
								"안녕하세요. 저는 전시 브랜딩에서 인사이트와 막내를 맡고 있는 기한나입니다.",
							user: "기한나",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B8%B0%ED%95%9C%EB%82%98.png",
							],
						},
						{
							start_time: 57.565,
							end_time: 62.675,
							spend_time: 5.109999999999999,
							script:
								"네 감사합니다. 저희 이제 차근차근 이야기 진행해 보려고 하는데요. ",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 62.675,
							end_time: 70.245,
							spend_time: 7.570000000000007,
							script:
								"먼저 언제 디자인하길 참 잘했다는 생각이 드는지. 일단 저부터 이야기하면서 지목을 해볼게요. 한번.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 70.245,
							end_time: 79.71,
							spend_time: 9.46499999999999,
							script:
								"저는 요즘 어떤 한 주제에 디자인을 풀이하는 과정 중 기획을 할 때 참 재밌는 것 같아요. 그래서 빌드업을 하는 과정에서",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 79.71,
							end_time: 87.949,
							spend_time: 8.239000000000004,
							script:
								" 펼쳐지는 팀원들 간의 의견이 참 들을 때마다 재밌다고 느껴집니다. 그래서 팀원들이 이야기하는 걸 들으면서",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 87.949,
							end_time: 93.485,
							spend_time: 5.536000000000001,
							script:
								"내가 생각하지 못한 부분까지 짚고 넘어간다는 점이 흥미롭다고 생각이 듭니다.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 93.485,
							end_time: 100.835,
							spend_time: 7.349999999999994,
							script:
								"또 한 가지 더 이야기하고 싶은데요. 좀 추상적인 부분이긴 한데 내가 디자인을 하면서",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 100.835,
							end_time: 110.515,
							spend_time: 9.680000000000007,
							script:
								"아드레날린이 생긴다는, 또 몸이 간질간질한 느낌을 받을 때 ‘아, 나 정말 디자인하길 잘했구나’라는 생각이 드는 것 같습니다.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 110.515,
							end_time: 113.64,
							spend_time: 3.125,
							script: "저는 혜신 님을 지목하고 싶습니다.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 113.71,
							end_time: 116.03,
							spend_time: 2.3200000000000074,
							script: "네 저도 비슷한데요.",
							user: "김혜신",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B9%80%ED%98%9C%EC%8B%A0.png",
							],
						},
						{
							start_time: 116.03,
							end_time: 125.965,
							spend_time: 9.935000000000002,
							script:
								" 평소에 머릿속으로 상상했던 것을 끄집어내서 디자인을 하고 그것들을 실제로 적용시켰을 때의 희열감과 뿌듯함을 느낄 때,",
							user: "김혜신",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B9%80%ED%98%9C%EC%8B%A0.png",
							],
						},
						{
							start_time: 125.965,
							end_time: 136.42,
							spend_time: 10.454999999999984,
							script:
								"그리고 디자인이 아닌 다른 분야를 이렇게 즐기면서 할 수 없을 것 같다는 생각이 들 때 디자인을 하길 참 잘했다는 생각이 듭니다.",
							user: "김혜신",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B9%80%ED%98%9C%EC%8B%A0.png",
							],
						},
						{
							start_time: 136.51,
							end_time: 140.275,
							spend_time: 3.765000000000015,
							script: "그다음에는 서경 님? 서경 님은 어떠세요?",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 140.275,
							end_time: 153.32,
							spend_time: 13.044999999999987,
							script:
								"저는 학기 마무리로 과제전 준비를 마치고 사람들이 작품을 보러 와줬을 때 오로지 작품만을 보고 좋은 말을 해주는데 그때의 벅참이 디자인을 계속해서 해나갈 원동력이 된다고 생각합니다.",
							user: "안서경",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%95%88%EC%84%9C%EA%B2%BD.png",
							],
						},
						{
							start_time: 153.55,
							end_time: 156.34,
							spend_time: 2.789999999999992,
							script: "그다음은 용욱 님 어떠신가요?",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 156.34,
							end_time: 165.915,
							spend_time: 9.574999999999989,
							script:
								"저도 비슷한데요. 저는 다른 디자이너분들한테 ‘너 되게 잘한다’ 뭔가 디자이너한테 인정을 받았을 때",
							user: "조용욱",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%A1%B0%EC%9A%A9%EC%9A%B1.png",
							],
						},
						{
							start_time: 165.915,
							end_time: 169.66,
							spend_time: 3.7450000000000045,
							script: "그때 뭔가 디자인하길 참 잘했다 하는 생각이 듭니다.",
							user: "조용욱",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%A1%B0%EC%9A%A9%EC%9A%B1.png",
							],
						},
						{
							start_time: 169.66,
							end_time: 173.465,
							spend_time: 3.805000000000007,
							script: "저도 그렇게 느끼는 것 같아요. 한나님은 어떠세요?",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 173.465,
							end_time: 180.595,
							spend_time: 7.1299999999999955,
							script:
								"저는 제가 이제 나만의 작품을 만들고 완성이 되었을 때인 것 같아요.",
							user: "기한나",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B8%B0%ED%95%9C%EB%82%98.png",
							],
						},
						{
							start_time: 180.595,
							end_time: 188.69,
							spend_time: 8.094999999999999,
							script:
								"내가 직접 디자인한 결과물이 나온 것을 보면 뿌듯하면서도 디자인과에 진학하길 잘했다는 생각이 듭니다.",
							user: "기한나",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B8%B0%ED%95%9C%EB%82%98.png",
							],
						},
						{
							start_time: 188.69,
							end_time: 192.965,
							spend_time: 4.275000000000006,
							script: "특히 이번처럼 동아리에서 전시를 준비하거나 ",
							user: "기한나",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B8%B0%ED%95%9C%EB%82%98.png",
							],
						},
						{
							start_time: 192.965,
							end_time: 199.71,
							spend_time: 6.7450000000000045,
							script:
								"한 학기가 끝나고 과제 전을 할 때 디자인하길 잘했다는 생각이 더 크게 드는 것 같아요.",
							user: "기한나",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B8%B0%ED%95%9C%EB%82%98.png",
							],
						},
						{
							start_time: 199.74,
							end_time: 202.195,
							spend_time: 2.454999999999984,
							script: "민영 님은 어떠실까요?",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 202.195,
							end_time: 211.63,
							spend_time: 9.435000000000002,
							script:
								"저는 제가 머릿속으로 만들고 싶은 걸 실제로 만들어낼 수 있을 때 디자인하길 잘했다는 생각이 드는 것 같습니다.",
							user: "허민영",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%ED%97%88%EB%AF%BC%EC%98%81.png",
							],
						},
						{
							start_time: 211.63,
							end_time: 218.39,
							spend_time: 6.759999999999991,
							script:
								"그렇군요. 알겠습니다. 저희 여러분들께서도 디자인을 하면서",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 218.39,
							end_time: 227.275,
							spend_time: 8.88500000000002,
							script:
								"‘난 디자인하길 참 잘했다’라는 생각이 들 뿐만 아니라, 그 디자인. 즐거웠다고 생각되는 디자인을 하면서도",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 227.275,
							end_time: 235.995,
							spend_time: 8.719999999999999,
							script:
								"번아웃이 오거나 슬럼프가 당연히 올 거라고 생각이 들어요. 그래서 저는 여러분들의 번아웃이나 슬럼프가 왔던 일화를 한번 들어보고 싶은데요.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 235.995,
							end_time: 240.465,
							spend_time: 4.469999999999999,
							script: "제가 지목하는 순서대로 진행을 하면 될 것 같고요.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 240.465,
							end_time: 248.965,
							spend_time: 8.5,
							script:
								"번아웃이나 슬럼프가 왔던 그 일화를 얘기한 다음에 바로 극복했던 경험까지 같이 이야기를 해보면 좋을 것 같습니다.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 248.965,
							end_time: 257,
							spend_time: 8.034999999999997,
							script:
								"먼저 저부터 시작을 할게요. 네 저는 많은 사람들이 그렇겠지만 바쁘게 사는 건 괜찮은데",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 257,
							end_time: 265.71,
							spend_time: 8.70999999999998,
							script:
								"결과물로 나오는 진전이 없을 때, 뭔가 내 노력의 양보다 진전이 없을 때 그런 슬럼프가 오는 것 같아요.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 265.71,
							end_time: 275.835,
							spend_time: 10.125,
							script:
								"뭔가 ‘내가 시간을 이렇게 많이 투자했는데 나 이때껏 뭐 했지’라는 생각이 문득 들 때 그럴 때 번아웃이나 슬럼프가 왔던 것 같습니다.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 275.835,
							end_time: 285.674,
							spend_time: 9.838999999999999,
							script:
								"아무래도 그럴 때 아무것도 안 잡히죠. 주변에서 번아웃이 올 때 많이들 챙겨주셨었는데 제 입장에서는",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 285.674,
							end_time: 295.755,
							spend_time: 10.081000000000017,
							script:
								"좋은 말씀으로 해주는 위로도 그냥 상투적인 말 같고 ‘과연 이 사람들이 내 슬픔을 완전히 이해해 줄 수 있을까’ 싶기도 하고 그래요.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 295.755,
							end_time: 303.205,
							spend_time: 7.449999999999989,
							script:
								"그래서 감사한 마음보다는 못된 마음들이 슬금슬금 피어오르면서 번아웃이 좀 더 심화되고 그런 것 같습니다.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 303.205,
							end_time: 312.225,
							spend_time: 9.020000000000039,
							script:
								"그러고 저는 이 번아웃들을 좀 미친 척하고 긍정적인 회로로 좀 생각을 돌렸던 것 같습니다.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 312.225,
							end_time: 322.355,
							spend_time: 10.129999999999995,
							script:
								"대학에 오고 나서도 계속 사람들에게 이야기하던 게 부정적인 생각도 꼬리에 꼬리를 무는 것처럼 긍정적인 생각도",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 322.355,
							end_time: 330.95,
							spend_time: 8.59499999999997,
							script:
								"반대로 그렇게 꼬리에 꼬리를 물 수 있는 거니까. 뭔가 문제 해결에 있어서 내가 즐겁게 할 수 있는 요소가 무엇이 있을지를",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 330.95,
							end_time: 338.26,
							spend_time: 7.310000000000002,
							script:
								"먼저 생각하면서 버텨냈던 것 같습니다. 네 그다음에는 민영 님의 이야기를 들어보고 싶습니다.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 338.35,
							end_time: 348.595,
							spend_time: 10.245000000000005,
							script:
								"저는 일이 계속 진행이 잘 안되거나 조금 삐긋거린다는 느낌이 들 때 번아웃이나 슬럼프가 많이 오는 것 같습니다. ",
							user: "허민영",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%ED%97%88%EB%AF%BC%EC%98%81.png",
							],
						},
						{
							start_time: 348.595,
							end_time: 356.465,
							spend_time: 7.869999999999948,
							script:
								"전 이제 그럴 때 조금 다른 새로운 일을 시작하거나 기분이 너무 안 좋다 싶을 때는",
							user: "허민영",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%ED%97%88%EB%AF%BC%EC%98%81.png",
							],
						},
						{
							start_time: 356.465,
							end_time: 362.98,
							spend_time: 6.515000000000043,
							script:
								"유튜브에 핫소스나 무한도전 같은 영상들을 많이 보고는 합니다.",
							user: "허민영",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%ED%97%88%EB%AF%BC%EC%98%81.png",
							],
						},
						{
							start_time: 362.98,
							end_time: 371.4,
							spend_time: 8.419999999999959,
							script:
								"핫소스 재밌죠? 저도 즐겨보는 유튜버 중 한 명입니다. 네. 그다음에는 한나 님은 어땠을까요?",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 371.4,
							end_time: 378.82,
							spend_time: 7.420000000000016,
							script:
								"슬럼프는 과제를 하다 막히거나 감을 못 잡을 때 찾아오는 것 같아요. 기간은 정해져 있고",
							user: "기한나",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B8%B0%ED%95%9C%EB%82%98.png",
							],
						},
						{
							start_time: 378.82,
							end_time: 387.08,
							spend_time: 8.259999999999991,
							script:
								"빨리 과제 진도가 나가야 되는데 어떻게 해야 할지 모르겠을 때 마음이 조급해지면서 더 막막해집니다.",
							user: "기한나",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B8%B0%ED%95%9C%EB%82%98.png",
							],
						},
						{
							start_time: 387.08,
							end_time: 394.275,
							spend_time: 7.194999999999993,
							script:
								"그럴 때 혼자 생각에 잠겨 있기보단 주변인들에게 조언을 구해보는데 응원의 말도 듣고",
							user: "기한나",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B8%B0%ED%95%9C%EB%82%98.png",
							],
						},
						{
							start_time: 394.275,
							end_time: 402.9,
							spend_time: 8.625,
							script:
								"다른 친구들의 작업물들을 보면서 영감도 얻으며 극복을 하는 것 같아요. 또 맛있는 것을 먹거나",
							user: "기한나",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B8%B0%ED%95%9C%EB%82%98.png",
							],
						},
						{
							start_time: 402.9,
							end_time: 407.37,
							spend_time: 4.470000000000027,
							script: "좋아하는 영화를 보면서 리프레시도 해주면 더 좋습니다.",
							user: "기한나",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B8%B0%ED%95%9C%EB%82%98.png",
							],
						},
						{
							start_time: 407.37,
							end_time: 418.87,
							spend_time: 11.5,
							script:
								"누군가의 칭찬을 들으면 뭔가 내가 내재되어 있던 그 힘들었던 것들이 조금 해소가 되는 것 같아요. 서경 님은 어떠실까요?",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 418.87,
							end_time: 426.24,
							spend_time: 7.3700000000000045,
							script:
								" 저는 쉬는 시간 없이 쭉 달리기만 했을 때 몸은 멀쩡해도 정신적으로 힘들어지는 때가 오는 것 같습니다.",
							user: "안서경",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%95%88%EC%84%9C%EA%B2%BD.png",
							],
						},
						{
							start_time: 426.24,
							end_time: 437.835,
							spend_time: 11.59499999999997,
							script:
								"행정학과에서 시디 과로 전과하기 위해 쭉 준비했었고 이후에도 부족한 실력으로 시디과 과제를 하면서 어떻게든 뒤처지지 않으려고 노력한 것 같은데 어느 순간 힘들다는 생각이 들더라고요.",
							user: "안서경",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%95%88%EC%84%9C%EA%B2%BD.png",
							],
						},
						{
							start_time: 437.835,
							end_time: 444.674,
							spend_time: 6.838999999999999,
							script:
								"최선을 다했다고 생각했는데 남들보다 한참 부족하다는 생각이 들면서 자존감이 낮아져 번아웃이 온 것 같습니다.",
							user: "안서경",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%95%88%EC%84%9C%EA%B2%BD.png",
							],
						},
						{
							start_time: 444.674,
							end_time: 453.674,
							spend_time: 9,
							script:
								"아직 완전히 극복은 못한 것 같은데 부모님이랑 어떤 점이 힘든지, 어떤 점이 부족한지 많은 얘기를 나눠보면서 미래를 그려보고 있습니다.",
							user: "안서경",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%95%88%EC%84%9C%EA%B2%BD.png",
							],
						},
						{
							start_time: 453.674,
							end_time: 458.805,
							spend_time: 5.131000000000029,
							script:
								"또 친구들이랑도 얘기를 하면서 중간에 여행도 다니며 리프레시를 해주고 있습니다.",
							user: "안서경",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%95%88%EC%84%9C%EA%B2%BD.png",
							],
						},
						{
							start_time: 458.805,
							end_time: 469.19,
							spend_time: 10.384999999999991,
							script:
								"하긴 서경 님 같은 경우에는 전과를 하셨으니까 좀 더 타 학과를 새로 배워보는 과정에서",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 469.19,
							end_time: 472.85,
							spend_time: 3.660000000000025,
							script: "많이 힘들었을 것 같아요. 용욱 님은 어떠셨어요?",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 472.85,
							end_time: 481.919,
							spend_time: 9.06899999999996,
							script:
								"저도 약간 비슷한 맥락이긴 한데요. 저도 최근에 회사를 다니면서 되게 새로운 것들을 많이 접했어요.",
							user: "조용욱",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%A1%B0%EC%9A%A9%EC%9A%B1.png",
							],
						},
						{
							start_time: 481.919,
							end_time: 490.919,
							spend_time: 9,
							script:
								"그러다 보니까 번아웃이 조금 세게 찾아왔는데 지금까지 학교에서 해왔던 작업의 그런 플로우랑 너무 많이 다른 거예요. ",
							user: "조용욱",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%A1%B0%EC%9A%A9%EC%9A%B1.png",
							],
						},
						{
							start_time: 490.919,
							end_time: 499.995,
							spend_time: 9.076000000000022,
							script:
								"저는 좀 장인처럼 제 디자인에 대해서 고민도 되게 많이 하고, 디테일적인 부분에 있어서도 되게 정성을 많이 쏟는데",
							user: "조용욱",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%A1%B0%EC%9A%A9%EC%9A%B1.png",
							],
						},
						{
							start_time: 499.995,
							end_time: 509.485,
							spend_time: 9.490000000000009,
							script:
								"회사는 그런 세세한 디테일보다는 빠르게 업무를 처리하는 게 중요하잖아요. 그래서 제 작업 성향이랑 조금 부딪히는 경우가 많았어요. ",
							user: "조용욱",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%A1%B0%EC%9A%A9%EC%9A%B1.png",
							],
						},
						{
							start_time: 509.485,
							end_time: 514.515,
							spend_time: 5.029999999999973,
							script:
								"‘좀 더 내가 빨리 움직여야 한다’ 그런 압박감 같은 것도 생겼고,",
							user: "조용욱",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%A1%B0%EC%9A%A9%EC%9A%B1.png",
							],
						},
						{
							start_time: 514.515,
							end_time: 521.485,
							spend_time: 6.970000000000027,
							script:
								"이제 그러다 보니까 생각을 하는 거 없이 ‘일단 손부터 움직이자’ 약간 이런 태도가 된 것 같아요.",
							user: "조용욱",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%A1%B0%EC%9A%A9%EC%9A%B1.png",
							],
						},
						{
							start_time: 521.485,
							end_time: 527.194,
							spend_time: 5.708999999999946,
							script:
								"그러다 보니까 좀 더 창의적인 작업물도 안 나오고, 실수도 되게 잦게 하고, ",
							user: "조용욱",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%A1%B0%EC%9A%A9%EC%9A%B1.png",
							],
						},
						{
							start_time: 527.194,
							end_time: 536.595,
							spend_time: 9.401000000000067,
							script:
								"스스로 ‘나 왜 이렇게 디자인 못하지?’ 약간 그런 생각을 한 것 같습니다. 그래서 저는 이거를 극복하고 싶어가지고",
							user: "조용욱",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%A1%B0%EC%9A%A9%EC%9A%B1.png",
							],
						},
						{
							start_time: 536.595,
							end_time: 542.079,
							spend_time: 5.483999999999924,
							script:
								"‘일단은 조금 마인드부터 고쳐먹어야겠다’ 그런 생각을 했습니다. 그래서",
							user: "조용욱",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%A1%B0%EC%9A%A9%EC%9A%B1.png",
							],
						},
						{
							start_time: 542.079,
							end_time: 551.4,
							spend_time: 9.321000000000026,
							script:
								"‘나 왜 이렇게 못하지?, 나 왜 실수만 하지?’ 이런 게 아니라 ‘아직 내가 이 분야에 대해서 알지 못하는 거다. 익숙해지면 분명 잘할 수 있다.’",
							user: "조용욱",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%A1%B0%EC%9A%A9%EC%9A%B1.png",
							],
						},
						{
							start_time: 551.4,
							end_time: 561.79,
							spend_time: 10.389999999999986,
							script:
								"그리고 매일매일 오늘 잘한 점은 뭐고, 문제점은 뭐가 있고, 이것들을 개선하려면 어떻게 해야 할지 메모를 하면서 스스로 개선을 하려고 노력을 많이 했습니다.",
							user: "조용욱",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%A1%B0%EC%9A%A9%EC%9A%B1.png",
							],
						},
						{
							start_time: 561.79,
							end_time: 569.905,
							spend_time: 8.115000000000009,
							script:
								"그렇군요. 아무래도 용욱 님은 또 인턴으로 한번 새로운 시도를 진행하고 계시는 거잖아요.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 569.905,
							end_time: 580.13,
							spend_time: 10.225000000000023,
							script:
								"아무래도 뭔가 이때껏 있었던 다른 생활 반경에서 부딪히는 점들이 참 많았을 것 같네요. 마지막으로 혜신 님은 어떤 번아웃을 겪었을까요?",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 580.13,
							end_time: 587.87,
							spend_time: 7.740000000000009,
							script:
								"저는 처음에는 많은 아이디어를 실현할 생각에 설레는 마음으로 작업을 시작했지만",
							user: "김혜신",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B9%80%ED%98%9C%EC%8B%A0.png",
							],
						},
						{
							start_time: 587.87,
							end_time: 597.145,
							spend_time: 9.274999999999977,
							script:
								"일정 시간 내에 많은 것을 끝내야 하는 상황에 놓여 아무 생각 없이 아이디어를 마구마구 냈던 과거의 나를 탓하면서",
							user: "김혜신",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B9%80%ED%98%9C%EC%8B%A0.png",
							],
						},
						{
							start_time: 597.145,
							end_time: 603.435,
							spend_time: 6.289999999999964,
							script: "아무것도 하고 싶지 않을 때 번아웃이 온 기억이 있습니다.",
							user: "김혜신",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B9%80%ED%98%9C%EC%8B%A0.png",
							],
						},
						{
							start_time: 603.435,
							end_time: 615.675,
							spend_time: 12.240000000000009,
							script:
								"그래서 그럴 때마다 아무리 급한 상황이더라도 ‘난 이거를 다 할 수 있다’고 나 자신을 세뇌시켜 끝내주는 작업을 완성한 미래의 저의 모습을 상상하면서 번아웃을 극복합니다.",
							user: "김혜신",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B9%80%ED%98%9C%EC%8B%A0.png",
							],
						},
						{
							start_time: 615.675,
							end_time: 625.819,
							spend_time: 10.144000000000005,
							script:
								"네. 같이 뭔가 여러분들이랑 또 팀원으로서 같이 하면서도 여러분들께서 가지고 있었던 뭔가 디자인에 대한 태도라든가",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 625.819,
							end_time: 633.435,
							spend_time: 7.6159999999999854,
							script:
								"그리고 이때껏 지내오면서 겪었던 번아웃이나 슬럼프에 대한 일화 같은 거는 처음 들어보는 것 같아서",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 633.435,
							end_time: 642.74,
							spend_time: 9.305000000000064,
							script:
								"또 이런 경험을 통해서 기회를 통해서 같이 이야기를 해보니까 또 재밌는 것 같습니다. 이제 마무리해 보려고 하는데요.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 642.74,
							end_time: 649.95,
							spend_time: 7.210000000000036,
							script:
								"저희가 23년도 초반에 만나서 벌써 1년이라는 긴 시간을 함께 작업하고 만나왔잖아요.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 649.95,
							end_time: 657.365,
							spend_time: 7.414999999999964,
							script:
								"곧 In a row 전시가 끝나면 클로버의 모든 일련의 기획들이 다 마무리가 됩니다.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 657.365,
							end_time: 662.61,
							spend_time: 5.2450000000000045,
							script: "1년이 동아리 활동으로만 보면 참 긴 시간이기에",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 662.61,
							end_time: 672.805,
							spend_time: 10.194999999999936,
							script:
								"좋은 감정만 있진 않았을 거라 생각해요. 좋은 감정을 자유롭게 얘기하셔도 되고요. 아니면 이외에 ‘나 여기서 회포 풀겠다’라고 하는 게 있으면 ",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 672.805,
							end_time: 681.63,
							spend_time: 8.825000000000045,
							script:
								"한번 이야기해 보면 좋을 것 같습니다. 저부터 이야기를 하자면요. 저는 처음 이 클로버라는 동아리를 기획하면서",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 681.63,
							end_time: 688.275,
							spend_time: 6.644999999999982,
							script:
								"되게 기대를 품고 주변 분들에게 많이 연합 동아리에 대한 의견을 물어봤던 것 같아요.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 688.275,
							end_time: 697.08,
							spend_time: 8.805000000000064,
							script:
								"대학교 내에 없던 연합 동아리이기도 하고 뭔가 다 같이 작업을 한다는 행위 자체가 저에게는 설렘으로 다가오더라고요.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 697.08,
							end_time: 701.885,
							spend_time: 4.80499999999995,
							script: "근데 또 뜻과는 다르게 처음 겪는 시행착오들이 있잖아요.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 701.885,
							end_time: 709.115,
							spend_time: 7.230000000000018,
							script:
								"그럴 때마다는 또 ‘내가 너무 큰 꿈을 꿨을까’라는 생각도 문득 들었던 것 같습니다.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 709.115,
							end_time: 714.11,
							spend_time: 4.9950000000000045,
							script:
								"하지만 이렇게 비주얼적으로 좋은 작업물들이 나오게 되면서",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 714.11,
							end_time: 724.03,
							spend_time: 9.919999999999959,
							script:
								"‘내가 이 작업들을 하면서 또, 내가 이 작업을 통해서 나를 또 꿈틀거리게 하는구나. 역시 난 바쁘게 사는 게 참 좋다’",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 724.03,
							end_time: 733.595,
							spend_time: 9.565000000000055,
							script:
								"라는 무한 반복의 굴레였던 것 같습니다. 그래서 클로버는 제 대학 생활 중 큰 원동력과 지지를 주는",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 733.595,
							end_time: 742.405,
							spend_time: 8.809999999999945,
							script:
								"기억들로 남을 거라는 확신이 듭니다. 여러분들도 그렇길 소망합니다. 저는 서경님. ",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 742.405,
							end_time: 744.839,
							spend_time: 2.4340000000000828,
							script: "그다음으로 이야기를 들어보고 싶어요.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 744.839,
							end_time: 757.56,
							spend_time: 12.72099999999989,
							script:
								"저는 동아리 덕에 좋은 사람들과 학교 외부에서 이런 큰 전시를 준비해 보고 아예 모르는 사람들이 와서 우리가 준비한 전시를 보고 어떤 감정을 느끼고 간다는 게 너무 멋있다고 생각했습니다.",
							user: "안서경",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%95%88%EC%84%9C%EA%B2%BD.png",
							],
						},
						{
							start_time: 757.56,
							end_time: 765.29,
							spend_time: 7.730000000000018,
							script:
								"앞으로도 계속 실력을 늘려서 사람들에게 어떠한 감정을 느끼게 하는 디자이너로 성장하고 싶다고 생각했습니다.",
							user: "안서경",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%95%88%EC%84%9C%EA%B2%BD.png",
							],
						},
						{
							start_time: 767.26,
							end_time: 769.68,
							spend_time: 2.419999999999959,
							script: "혜신 님 어떠셨어요?",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 769.68,
							end_time: 779.4,
							spend_time: 9.720000000000027,
							script:
								"저는 길다고 생각했던 전시 준비가 작업을 하다 보니 욕심이 생겨 생각보다 기간이 짧게 느껴져 아쉬웠어요.",
							user: "김혜신",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B9%80%ED%98%9C%EC%8B%A0.png",
							],
						},
						{
							start_time: 779.4,
							end_time: 787.725,
							spend_time: 8.325000000000045,
							script:
								"그래도 저희가 다른 과들이 이렇게 모여 열심히 했으니까  ‘그만큼의 결과물이 나오지 않을까’라고 생각하고, ",
							user: "김혜신",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B9%80%ED%98%9C%EC%8B%A0.png",
							],
						},
						{
							start_time: 787.725,
							end_time: 793.6,
							spend_time: 5.875,
							script:
								"그동안 작업했던 것들이 끝난다는 생각에 아쉬우면서도 후련하고 뿌듯합니다.",
							user: "김혜신",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B9%80%ED%98%9C%EC%8B%A0.png",
							],
						},
						{
							start_time: 793.6,
							end_time: 800.355,
							spend_time: 6.7549999999999955,
							script: "민영 님은 클로버를 하면서 어떤 감정이 드셨을까요?",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 800.355,
							end_time: 808.595,
							spend_time: 8.240000000000009,
							script:
								"1년 동안 새로운 사람들을 많이 만나고 함께 작업할 수 있어서 좋은 기회라고 생각하고요.",
							user: "허민영",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%ED%97%88%EB%AF%BC%EC%98%81.png",
							],
						},
						{
							start_time: 808.595,
							end_time: 816.58,
							spend_time: 7.985000000000014,
							script:
								"함께 어울릴 수도 있어서 조금 색다른, 잊지 못할 경험이 될 것 같습니다.",
							user: "허민영",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%ED%97%88%EB%AF%BC%EC%98%81.png",
							],
						},
						{
							start_time: 818.19,
							end_time: 822.225,
							spend_time: 4.034999999999968,
							script: "용욱 님은 이 클로버 기획하면서 어떠셨어요?",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 822.225,
							end_time: 829.704,
							spend_time: 7.478999999999928,
							script:
								"저는요. 저는 사실 예지 님이랑 같이 그렇게 디렉팅을 하면서 뭔가 이런",
							user: "조용욱",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%A1%B0%EC%9A%A9%EC%9A%B1.png",
							],
						},
						{
							start_time: 829.704,
							end_time: 837.964,
							spend_time: 8.260000000000105,
							script:
								"리더의 위치에는 제가 어울리지 않는 인생을 살아왔다고 생각을 했는데 되게 많이 시행착오도 겪고,",
							user: "조용욱",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%A1%B0%EC%9A%A9%EC%9A%B1.png",
							],
						},
						{
							start_time: 837.964,
							end_time: 847.625,
							spend_time: 9.660999999999945,
							script:
								"되게 뭔가 진행을 하면서 부끄럽기도 하고 어색하기도 했지만 그래도 최선을 다했다. ",
							user: "조용욱",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%A1%B0%EC%9A%A9%EC%9A%B1.png",
							],
						},
						{
							start_time: 847.625,
							end_time: 855.61,
							spend_time: 7.985000000000014,
							script:
								"그리고 어쨌든 뭔가 인간적으로 성장했다 성숙해졌다. 이건 정말 확실한 것 같습니다.",
							user: "조용욱",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%A1%B0%EC%9A%A9%EC%9A%B1.png",
							],
						},
						{
							start_time: 855.61,
							end_time: 866.545,
							spend_time: 10.934999999999945,
							script:
								"그래서 여기서 전하지만 다들 모든 클로버 부원분들께 잘 따라와 주셔서 정말 감사드리다는 말을 전달드리고 싶고요. ",
							user: "조용욱",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%A1%B0%EC%9A%A9%EC%9A%B1.png",
							],
						},
						{
							start_time: 866.545,
							end_time: 869.232,
							spend_time: 2.687000000000012,
							script: "그리고 정말 재밌었고 즐거웠습니다.",
							user: "조용욱",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%A1%B0%EC%9A%A9%EC%9A%B1.png",
							],
						},
						{
							start_time: 871.55,
							end_time: 874.354,
							spend_time: 2.8040000000000873,
							script: "한나 님 클로버 어떠셨어요?",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 874.354,
							end_time: 879.489,
							spend_time: 5.134999999999991,
							script: "저도 클로버 활동을 1년 동안 하면서 너무너무 좋았는데요.",
							user: "기한나",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B8%B0%ED%95%9C%EB%82%98.png",
							],
						},
						{
							start_time: 879.489,
							end_time: 888.97,
							spend_time: 9.480999999999995,
							script:
								"선배님들과 또 산업 디자인, 영상 디자인 분들과 작업을 함께 해보면서 정보도 많이 얻고 많이 배워가는 것 같아서 좋았습니다.",
							user: "기한나",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B8%B0%ED%95%9C%EB%82%98.png",
							],
						},
						{
							start_time: 888.97,
							end_time: 897.675,
							spend_time: 8.704999999999927,
							script:
								"또 이런 큰 전시장에서 전시할 기회가 많지 않은데 이번 기회에 새로운 경험도 많이 해가는 것 같아서 뿌듯하기도 해요.",
							user: "기한나",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B8%B0%ED%95%9C%EB%82%98.png",
							],
						},
						{
							start_time: 897.675,
							end_time: 908.26,
							spend_time: 10.585000000000036,
							script:
								"또 이제 클로버 부원 분들과 친해질 수 있어서 너무 좋았습니다. 우리 활동이 끝나도 앞으로도 잘 지내봐요.",
							user: "기한나",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B8%B0%ED%95%9C%EB%82%98.png",
							],
						},
						{
							start_time: 910.87,
							end_time: 919.63,
							spend_time: 8.759999999999991,
							script:
								"이번 기회로 또 한 번 더 여러분들의 생각을 한번 들어볼 수 있어 가지고 저는 좋은 기회였던 것 같아요.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 919.63,
							end_time: 925.5,
							spend_time: 5.8700000000000045,
							script:
								"다음에도 또 좋은 기회로 찾아뵐 수 있길 소망합니다. 여러분 안녕.",
							user: "권예지",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
							],
						},
						{
							start_time: 925.5,
							end_time: 927,
							spend_time: 1.5,
							script: "안녕",
							user: "모두",
							profile: [
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B6%8C%EC%98%88%EC%A7%80.png",
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%A1%B0%EC%9A%A9%EC%9A%B1.png",
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B9%80%ED%98%9C%EC%8B%A0.png",
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EC%95%88%EC%84%9C%EA%B2%BD.png",
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%EA%B8%B0%ED%95%9C%EB%82%98.png",
								"https://elasticbeanstalk-ap-northeast-2-905418212933.s3.ap-northeast-2.amazonaws.com/resource/contributer/%EC%A0%84%EC%8B%9C+%EB%B8%8C%EB%9E%9C%EB%94%A9/%ED%97%88%EB%AF%BC%EC%98%81.png",
							],
						},
					],
				};
				if (res.data.isSuccess) {
					console.log("successed!");
					setScript(res.data.result);

					const lastScript = res.data.result.slice(-1)[0];
					if (lastScript) {
						setRunningTime(lastScript.end_time);
					}
				} else {
					console.log("failed");
				}
			} catch (error) {
				console.error("Error fetching data: ", error);
			} finally {
				isLoadingControl();
			}
		}

		fetchData();
	}, [teamId]);

	function isLoadingControl() {
		setIsLoading(false);
	}

	useEffect(() => {
		if (!isLoading) {
			const interval = setInterval(() => {
				setProgress((progress) => {
					const newProgress = progress - (1 / runningTime) * playbackRate;
					return parseFloat(newProgress.toFixed(5));
				});
			}, 10);

			setTimeout(() => {
				clearInterval(interval);
			}, runningTime * 1000);

			return () => {
				clearTimeout(interval);
			};
		}
	}, [progress, runningTime, playbackRate, isLoading]);

	const handleProgressBar = (event) => {
		if (!isLoading) {
			// 클릭한 위치의 x 좌표 구하기
			const clickX = event.clientX;

			// div 요소 가져오기
			const div = document.getElementById("play");

			// div의 위치 및 너비 구하기
			const divRect = div.getBoundingClientRect();
			const divX = divRect.left;
			const divWidth = divRect.width;

			// 클릭한 위치의 div 내부에서의 상대적인 x 좌표 구하기
			const relativeX = clickX - divX;

			// 클릭한 위치의 div 내부에서의 상대적인 위치 (0 ~ 1) 구하기
			relativePosition = (relativeX / divWidth).toFixed(3);

			// 상대적인 위치 출력
			console.log("Relative position:", relativePosition);

			audioRef.current.play();
			audioRef.current.currentTime = relativePosition * runningTime;
			setProgress(100 - relativePosition * 100);
		}
	};

	const profileList = (script) =>
		script.profile.map((profile, index) => {
			return <img alt="" src={profile} />;
		});

	const scriptCard = script.map((script, index) => {
		// Use a ternary operator to ensure a value is returned
		return isLoading ? (
			<div key={index}>Loading...</div> // Placeholder while loading
		) : (
			<>
				<>
					<div className={styles.avatar}>{profileList(script)}</div>

					<p
						className={
							audioRef.current &&
							audioRef.current.currentTime <= script.end_time &&
							audioRef.current.currentTime >= script.start_time
								? styles.activeP
								: styles.inactiveP
						}
						onClick={() => {
							if (audioRef.current) {
								audioRef.current.play();
								audioRef.current.currentTime = script.start_time;
								setProgress(100 - (script.start_time * 100) / runningTime);
							}
						}}
					>
						{script.script}
					</p>
					<br />
				</>
			</>
		);
	});

	if (isLoading) {
		console.log("loading");
		return <div>Loading...</div>;
	} else {
		console.log("loaded");
		return (
			<div
				style={{ width: window.screen.width, height: window.screen.height }}
				className={styles.background}
			>
				{background === "" ? (
					<div></div>
				) : (
					<video
						loop
						muted
						playsInline
						autoPlay={true}
						style={{ height: "100%" }}
						className={styles.background}
					>
						<source src={background} type="video/mp4" />
					</video>
				)}
				<audio ref={audioRef} autoPlay={true} muted={isMuted}>
					<source src={record} type="audio/mp3" />
				</audio>
				{/** 헤더 */}
				<div className={styles.header}>
					{/** 음소거 버튼 */}
					<div
						className={styles.soundButton}
						onClick={() => {
							setIsMuted(!isMuted);
						}}
					>
						{isMuted ? (
							<img alt="" src={process.env.PUBLIC_URL + "/off.png"} />
						) : (
							<img alt="" src={process.env.PUBLIC_URL + "/on.png"} />
						)}
					</div>
					{/** 뒤로가기 버튼 */}
					<svg
						width="40"
						height="40"
						viewBox="0 0 40 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className={styles.backButton}
						onClick={() => {
							navigate(-1);
						}}
					>
						<g filter="url(#filter0_bd_875_3731)">
							<circle
								cx="20"
								cy="20"
								r="20"
								fill="white"
								fill-opacity="0.25"
								shape-rendering="crispEdges"
							/>
						</g>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M22.6705 12.3347C23.1098 12.781 23.1098 13.5047 22.6705 13.951L16.716 20L22.6705 26.049C23.1098 26.4953 23.1098 27.219 22.6705 27.6653C22.2312 28.1116 21.5188 28.1116 21.0795 27.6653L14.3295 20.8081C13.8902 20.3618 13.8902 19.6382 14.3295 19.1919L21.0795 12.3347C21.5188 11.8884 22.2312 11.8884 22.6705 12.3347Z"
							fill="white"
						/>
						<defs>
							<filter
								id="filter0_bd_875_3731"
								x="-4"
								y="0"
								width="76"
								height="76"
								filterUnits="userSpaceOnUse"
								color-interpolation-filters="sRGB"
							>
								<feFlood flood-opacity="0" result="BackgroundImageFix" />
								<feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
								<feComposite
									in2="SourceAlpha"
									operator="in"
									result="effect1_backgroundBlur_875_3731"
								/>
								<feColorMatrix
									in="SourceAlpha"
									type="matrix"
									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
									result="hardAlpha"
								/>
								<feOffset dy="3" />
								<feGaussianBlur stdDeviation="9" />
								<feComposite in2="hardAlpha" operator="out" />
								<feColorMatrix
									type="matrix"
									values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
								/>
								<feBlend
									mode="normal"
									in2="effect1_backgroundBlur_875_3731"
									result="effect2_dropShadow_875_3731"
								/>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="effect2_dropShadow_875_3731"
									result="shape"
								/>
							</filter>
						</defs>
					</svg>
					{/** 배속 버튼 */}
					<div className={styles.speedButton} onClick={handleSpeedClick}>
						<p>{playbackRate}x</p>
					</div>
				</div>

				{/** 내용 container */}
				<div className={styles.container}>
					<br />
					<br />
					<br />
					{scriptCard}
				</div>

				{/** 푸터 */}
				<div className={styles.footer}>
					{/** 총 재생시간 */}
					<div className={styles.playTime}>
						<p>
							{Math.floor(runningTime / 60)}:{Math.floor(runningTime % 60)}
						</p>
					</div>

					<div
						className={styles.comment}
						onClick={() => {
							navigate("/projects/podcast/comment", {
								state: {
									background: background,
									teamId: teamId,
								},
							});
							window.location.href = "/projects/podcast/comment";
						}}
					>
						<img alt="" src={process.env.PUBLIC_URL + "/comment(1x).png"} />
						<p>{commentCount}</p>
					</div>

					<div id="play" className={styles.playBar} onClick={handleProgressBar}>
						<div
							style={{
								position: "absolute",
								width: `${progress}%`,
								maxWidth: "100%",
								height: "100%",
								backgroundColor: "rgb(113, 111, 111, 0.25)",
							}}
						></div>
						<svg
							width="276"
							height="34"
							viewBox="0 0 276 34"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10 2L10 32"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M18 7L18 27"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M26 14L26 19"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M34 12L34 22"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M42 7L42 27"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M50 12L50 22"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M58 7L58 27"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M66 12L66 22"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M74 2L74 32"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M82 12L82 22"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M90 7L90 27"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M98 7L98 27"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M106 2L106 32"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M114 7L114 27"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M122 2L122 32"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M130 12L130 22"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M138 2L138 32"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M146 9L146 24"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M154 2L154 32"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M162 7L162 27"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M170 4L170 29"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M178 2L178 32"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M186 4L186 29"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M194 14L194 19"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M202 2L202 32"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M210 12L210 22"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M218 2L218 32"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M226 7L226 27"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M234 12L234 22"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M242 2L242 32"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M250 12L250 22"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M258 9L258 24"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M266 12L266 22"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M274 14L274 19"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M2 14L2 19"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
							/>
						</svg>
					</div>
				</div>
			</div>
		);
	}
}

export default PodcastContent;
