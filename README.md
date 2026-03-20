# WE BEAUTY U - Korean Plastic Surgery Medical Tourism Website

## 프로젝트 개요

WE BEAUTY U Co., Ltd.의 베트남 환자를 위한 한국 성형외과 의료관광 웹사이트입니다. 이 웹사이트는 Edition Plastic Surgery와 파트너십을 맺고 베트남 환자들에게 세계적 수준의 한국 성형외과 서비스를 제공하는 것을 목표로 합니다.

## 주요 기능

### ✅ 완료된 기능

1. **다국어 지원 시스템**
   - 영어(English)와 베트남어(Tiếng Việt) 전환 기능
   - 언어 선택 모달 (첫 방문 시)
   - localStorage를 통한 언어 설정 저장
   - 모든 콘텐츠의 실시간 다국어 전환

2. **반응형 웹 디자인**
   - 데스크톱, 태블릿, 모바일 완벽 대응
   - 모바일 메뉴 (햄버거 메뉴)
   - 터치 친화적 인터페이스

3. **주요 섹션**
   - **홈 (Hero Section)**: 임팩트 있는 히어로 이미지와 CTA 버튼
   - **회사 소개 (About)**: WE BEAUTY U 소개 및 강점
     - 특별 할인 혜택 강조 (10% 상시, 최대 30%)
     - 파트너 병원 로고 및 홈페이지 링크
     - 특별 상담 예약 버튼 (할인 코드 제공)
   - **시술 정보 (Procedures)**: 4가지 주요 성형외과 시술 카테고리
     - 눈 수술 (Eye Surgery) - 쌍꺼풀, 눈밑지방재배치 포함
     - 코 성형 (Rhinoplasty)
     - 리프팅 실 (Lifting Thread - APTOS)
     - 비수술 시술 (Non-Surgical)
   - **의료진 (Doctors)**: 한대희 대표원장 소개
   - **병원 갤러리 (Our Clinic)**: 병원 인테리어 사진 (리셉션, 대기실, 상담실, 회복실)
   - **전후 비교 (Before & After)**: 아코디언 방식으로 접었다 펼 수 있는 수술 전후 사진
     - 눈밑지방재배치 (4장)
     - 쌍꺼풀 절개 (3장)
     - 코 수술 (8세트, 24장)
   - **고객 후기 (Testimonials)**: 실제 환자 리뷰
   - **문의 (Contact)**: 상담 예약 폼 및 연락처 정보

4. **인터랙티브 기능**
   - 부드러운 스크롤 애니메이션
   - 스크롤 시 나타나는 요소 애니메이션
   - 갤러리 이미지 모달 뷰어
   - Scroll-to-top 버튼
   - 네비게이션 활성화 상태 표시
   - 폼 유효성 검사 및 제출

5. **디자인 요소**
   - 세련된 컬러 팔레트 (네이비, 골드 악센트)
   - Google Fonts 통합 (Noto Sans, Playfair Display)
   - Font Awesome 아이콘
   - 호버 효과 및 트랜지션
   - 그림자 효과 및 현대적인 UI
   - **특별 강조 요소**:
     - 골드 그라데이션 할인 강조 박스 (빛나는 애니메이션)
     - 펄스 효과가 있는 특별 상담 예약 버튼
     - 빨간색 한시적 할인 안내 박스 (깜박이는 효과)
     - 아코디언 방식의 전후 사진 갤러리

## 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 
  - CSS Grid & Flexbox
  - CSS Variables (Custom Properties)
  - 반응형 미디어 쿼리
  - 애니메이션 및 트랜지션
- **JavaScript (Vanilla)**:
  - ES6+ 문법
  - 모듈 패턴
  - LocalStorage API
  - Intersection Observer API
  - DOM Manipulation
- **외부 라이브러리**:
  - Google Fonts
  - Font Awesome 6.4.0

## 파일 구조

```
project/
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css       # 전체 스타일시트
├── js/
│   └── main.js         # JavaScript 기능
├── images/
│   ├── hero-bg.jpg              # 히어로 섹션 배경
│   ├── edition-logo.png         # 파트너 병원 로고
│   ├── eye-surgery.jpg          # 눈 수술 이미지
│   ├── rhinoplasty.jpg          # 코 성형 이미지
│   ├── thread-lift.jpg          # 리프팅 실 이미지
│   ├── dr-han.jpg               # 한대희 대표원장 사진
│   ├── clinic-reception.jpg     # 병원 리셉션
│   ├── waiting-lounge.jpg       # 대기실
│   ├── consultation-room.jpg    # 상담실
│   ├── recovery-room.jpg        # 회복실
│   └── before-after/            # 수술 전후 사진 폴더
│       ├── under-eye-1.jpg ~ under-eye-4.jpg    # 눈밑지방재배치
│       ├── eyelid-1.jpg ~ eyelid-3.jpg          # 쌍꺼풀 절개
│       └── nose-1-1.jpg ~ nose-8-3.jpg          # 코 수술 (24장)
└── README.md           # 프로젝트 문서
```

## 사용 방법

### 언어 전환
- 첫 방문 시: 언어 선택 모달에서 원하는 언어 선택
- 이후 방문: 상단 네비게이션의 EN/VI 버튼으로 언어 전환
- 선택한 언어는 자동으로 저장됩니다

### 네비게이션
- 상단 메뉴를 클릭하여 각 섹션으로 이동
- 모바일: 햄버거 메뉴 아이콘을 탭하여 메뉴 열기/닫기

### 문의 폼
1. 이름, 이메일, 전화번호 입력
2. 관심 있는 시술 선택
3. 메시지 작성
4. "Send Message" 버튼 클릭

## 주요 기능 설명

### 1. 언어 관리 시스템
```javascript
LanguageManager.init()
- 언어 선택 모달 표시
- 언어 전환 기능
- LocalStorage 저장/불러오기
- 모든 텍스트 요소 업데이트
```

### 2. 네비게이션 시스템
```javascript
Navigation.init()
- 스크롤 효과
- 모바일 메뉴 토글
- 부드러운 스크롤
- 활성 링크 하이라이트
```

### 3. 애니메이션 시스템
```javascript
AnimationManager.init()
- Intersection Observer 사용
- 스크롤 시 요소 페이드인
- 부드러운 트랜지션
```

## 반응형 중단점

- **데스크톱**: 1200px 이상
- **태블릿**: 768px - 968px
- **모바일**: 768px 이하
- **소형 모바일**: 480px 이하

## 브라우저 호환성

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)
- 모바일 브라우저 (iOS Safari, Chrome Mobile)

## 향후 개발 계획

### 🔜 예정된 기능

1. **백엔드 통합**
   - 문의 폼 실제 전송 기능
   - 데이터베이스 연동
   - 예약 시스템

2. **추가 콘텐츠**
   - 실제 전후 사진 업로드
   - 의료진 상세 프로필
   - 시술별 상세 페이지
   - 가격 정보

3. **고급 기능**
   - 온라인 채팅 (WhatsApp, KakaoTalk 통합)
   - 실시간 예약 캘린더
   - 환자 포털
   - 비디오 상담 기능

4. **SEO 최적화**
   - 메타 태그 최적화
   - 구조화된 데이터 (Schema.org)
   - 사이트맵 생성
   - 페이지 속도 최적화

5. **추가 언어 지원**
   - 한국어 추가
   - 중국어 추가
   - 기타 동남아 언어

## 연락처 정보

**WE BEAUTY U Co., Ltd.**
- 위치: Seoul, South Korea
- 전화: +82 10-XXXX-XXXX
- 이메일: info@kcholdings.com
- WhatsApp/Zalo: +84 XXX-XXX-XXX

## 라이선스

© 2024 WE BEAUTY U Co., Ltd. All rights reserved.

## 개발자 노트

이 웹사이트는 정적 웹사이트로 구현되었으며, 클라이언트 측 JavaScript를 사용하여 다국어 지원 및 인터랙티브 기능을 제공합니다. 

### 🎉 이미지 관리 (2024-03-16 업데이트)
**모든 이미지가 프로젝트 내부에 저장되어 있습니다!**
- 외부 URL 의존성 제거 완료
- 총 41개의 이미지 파일이 `images/` 폴더에 저장됨
- 호스팅 배포 시 이미지가 정상적으로 표시됩니다
- 이미지 파일 크기: 약 15MB

### 특별 프로모션 정보
- **상시 할인**: 10% 할인 혜택
- **특별 할인**: 최대 30% 할인 (한시적)
- **할인 코드**: VKCHEP2849077 (이번 달 말까지 유효)
- 파트너 병원: Edition Plastic Surgery (https://en.editionps.com/)

### 커스터마이징 가이드

1. **색상 변경**: `css/style.css`의 `:root` CSS 변수 수정
2. **콘텐츠 수정**: `index.html`의 `data-en`, `data-vi` 속성 값 수정
3. **연락처 정보**: `index.html`의 Contact 섹션 수정
4. **이미지 교체**: `images/` 폴더의 이미지 파일을 새 이미지로 교체
5. **할인 코드 변경**: `index.html`의 Limited Offer 섹션에서 할인 코드 수정

---

**Last Updated**: 2024-03-16
**Version**: 2.0.0
**Status**: Production Ready 🚀 (Images Optimized for Hosting)