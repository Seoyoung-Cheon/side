# React Native 앱

React Native와 Expo를 사용한 모바일 앱 프로젝트입니다.

## 시작하기

### 필수 요구사항

- Node.js (v16 이상)
- npm 또는 yarn
- Expo CLI

### 설치

```bash
npm install
```

또는

```bash
yarn install
```

### 실행

```bash
# 개발 서버 시작
npm start

# Android 에뮬레이터에서 실행
npm run android

# iOS 시뮬레이터에서 실행 (macOS만)
npm run ios

# 웹 브라우저에서 실행
npm run web
```

## 프로젝트 구조

```
.
├── App.tsx                 # 메인 앱 컴포넌트
├── src/
│   ├── components/         # 재사용 가능한 컴포넌트
│   ├── screens/           # 화면 컴포넌트
│   ├── navigation/        # 네비게이션 설정
│   ├── utils/             # 유틸리티 함수 및 상수
│   └── types/             # TypeScript 타입 정의
├── assets/                # 이미지, 폰트 등 리소스
├── package.json
├── tsconfig.json
└── babel.config.js
```

## 기술 스택

- React Native
- Expo
- TypeScript
- React Navigation

## 라이선스

MIT

