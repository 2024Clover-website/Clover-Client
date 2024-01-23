google-maps-react 모듈이 설치되어 있는지 확인하세요. package.json 파일을 열어 dependencies 섹션에서 google-maps-react 항목을 찾아보세요.

모듈이 설치되어 있지 않다면, 프로젝트의 루트 디렉토리에서 다음 명령을 실행하여 모듈을 설치하세요:

npm install --save google-maps-react

모듈이 이미 설치되어 있지만 여전히 오류가 발생한다면, node_modules 폴더를 삭제하고 모든 종속성을 다시 설치해 보세요:
rm -rf node_modules
npm install

만약 google-map-react 모듈을 실수로 설치했다면, 이 모듈을 제거하세요. 두 모듈은 비슷한 이름을 가지고 있지만 다르게 작동합니다:
npm uninstall --save google-map-react

위의 단계들이 문제를 해결하지 못했다면, npm install 명령을 강제 실행하거나 레거시 피어 종속성 모드로 실행해 보세요:
npm install --force --save google-maps-react

또는

npm install --legacy-peer-deps --save google-maps-react