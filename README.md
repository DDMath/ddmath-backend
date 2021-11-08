# 🎮 DD Math

![welcome](https://user-images.githubusercontent.com/68883173/140612050-178ce2de-c4d1-43ec-b549-db94e40569dd.png)

<code>#Math Education Game</code>
<code>#For Kids</code>
<code>#Drag&Drop</code>

DD수학은 영&#183;유아를 위한 수학 교육 게임입니다.  
아이들이 쉽게 이용할 수 있도록, 드래그 앤 드랍을 이용해 게임을 구현해 보았습니다.

- 프로젝트 기간 2021.09.27 - 2021. 10. 18 (기획 1주, 개발 2주)

👉 Deploy Address: https://www.ddmath.fun  
👉 Frontend: https://github.com/DDMath/ddmath-frontend  
👉 Backend: https://github.com/DDMath/ddmath-backend

<br>

## 🖼 Preview
### 첫 번째 게임 (Shooting game)
  - 1부터 10까지 차례로 풍선을 터뜨리는 게임입니다.
  - 대포와 마우스 포인터 사이의 벡터(Vector) 값을 이용하여 대포의 방향을 구현했습니다.

https://user-images.githubusercontent.com/68883173/140612065-cbf199bf-045e-4c2e-b177-be3c55d1ddbe.mp4

<br>

### 두 번째 게임 (Puzzle game)
  - 과일과 숫자에 맞춰 카드를 맞추어 넣는 게임입니다.

https://user-images.githubusercontent.com/68883173/140612076-6d79629d-5a0b-4b9c-aa8f-4ee2457dc056.mp4

<br>

### 세 번째 게임 (Matching game)
  - 같은 모양을 가진 카드끼리 연결하는 게임입니다.

https://user-images.githubusercontent.com/68883173/140612079-d5c25f1c-75a9-4a80-b4b6-ccbb67a84beb.mp4

<br>

## 🌈 Motivation

개발도상국의 열악한 교육 환경을 직접 목격한 경험이 있습니다. 특히, 이집트 카이로 대학교에서 학생들의 공부 환경에 대해 인터뷰를 진행한 적이 있는데요. 언니, 오빠 이외에는 배움의 수단이 부족하다는 이야기를 들을 수 있었습니다.

하지만, 개발도상국은 "준수한 전자기기 보급률", "전자기기 친화적 모습", "많은 인구를 바탕으로 한 교육에 대한 잠재적 수요"가 있다고 생각합니다. 만약 소프트웨어를 통해 양질의 교육 컨텐츠가 제공된다면, 많은 사람들이 교육적 혜택을 누릴 수 있겠다고 생각하며 이번 프로젝트를 기획하게 되었습니다.

<br>

## ⭐️ Features

- 디디수학은 슈팅게임, 퍼즐게임, 연결짓기 게임으로 구성되어 있으며, 게임 구현 시 일반적으로 사용되는 속도, 중력, 충돌, 마우스 이벤트, 에니메이션 등을 모두 사용하고자 하였습니다.
- 각 게임은 모두 드래그 앤 드랍을 통해 진행됩니다.
- 각 게임을 플레이 하는 방법을 애니메이션을 통해 안내합니다.
- 각 게임에서 별을 다 모을 경우, 다음 스테이지로 넘어갈 수 있습니다.
- Progressive Web App을 지원하여, 기기에 프로그램을 다운로드 할 수 있습니다.
- 오프라인 모드를 지원하여, 아이가 어디서든 접속하여 디디수학을 즐길 수 있습니다.

<br>

## 🎬 Getting Started

Local 환경에서 실행시 아래와 같이 준비가 필요합니다.

<details>
  <summary>Client</summary>

```
REACT_APP_SERVER_URL=<default: http://localhost:8080>

REACT_APP_API_KEY=<Firebase API Key>
REACT_APP_AUTH_DOMAIN=<Firebase Auth Domain>
REACT_APP_PROJECT_ID=<Firebase Project ID>
REACT_APP_APP_ID=<Firebase App ID>
```

</details>

<details>
  <summary>Server</summary>

```
ORIGIN_URI_PROD=<default: http://localhost:3000>

JWT_SECRET=<jwt secret key>
MONGODB_URL=<mongodb url>
MONGODB_NAME=<db name>
```

</details>

<br>

## 🖥 Tech Stacks

### Client

- Typescript
- React
- Styled-Component
- Phaser3
- PWA
- Workbox

### Server

- Node JS
- MongoDB
- Express

### Deployment

- Netlify
- AWS Elastic Beanstalk

<br>

## 🤝 이렇게 개발했습니다

### 🗂 객체지향 구조의 설계

게임 프로젝트를 진행했기 때문에, 여러 객체간 상호작용을 직관적이고 간결하게 나타내기 위해 많은 고민을 했습니다. 이론적으로는 공부해 보았지만, 주도적으로 객체지향 구조를 설계해본 것은 처음이었기 때문입니다.

- 첫 번째 슈팅 게임에서 "대포", "대포의 미사일", "미사일 Preview" 등을 다른 객체로 분리하여 객체의 책임을 분산하도록 하여 단일 책임 원칙을 지켜보려고 했습니다.

- 카드의 기본 속성을 정의해두고, 다음과 같이 다형성을 갖도록 구현해보았습니다.
  1. 드래그가 가능한 카드
  2. 포인트 객체를 자식으로 갖고 있는 카드

- 다만, 현재는 각 인스턴스가 사용하지 않는 기능까지도 전부 상속받고 있는 비효율적인 구조를 갖고 있다고 생각합니다. Interface나 Abstract Class를 통해 각 카드의 상세 사항을 구현했다면 더욱 효율적인 구조를 가질 수 있었을 것이라는 아쉬움이 남습니다.

### 📈 Service Worker

오프라인에서도 게임을 이용할 수 있도록 Service Worker를 도입했습니다. 특히, Workbox를 사용하여 이미지, 음악 등 게임에 필요한 파일들을 Precache 했으며, StaleWhileRevalidate 등의 Workbox Strategy를 사용하여 파일에 변경이 생길 경우 업데이트 할 수 있도록 진행했습니다.

<img width="600" alt="performance" src="https://user-images.githubusercontent.com/68883173/140653120-06c621d2-746a-4d5a-af54-05ca224fbbc2.png">
  
또한 Progressive Web App을 구현하여 패드 류에서도 학습이 가능하도록 했습니다. 해당 과정에서 다음과 같은 최적화 과정을 도입하여 Lighthouse 퍼포먼스 수치를 크게 향상시켰습니다. 

  - Webp 적용하여 이미지 용량 80% 감소
  - Component Lazy Loading
  - CDN 설정 (Amazon Cloud Front)
  - Resource Size 50% 감소. ex) 불필요한 Phaser 요소 제외
  - 이미지 파일 프리캐싱 & 폰트 비동기적으로 필요한 문자만 로드
  
Phaser 게임 스크립트 파일에 Lazy Loding을 적용하지 못하여, 퍼포먼스 점수를 더 많이 끌어올리지 못한 점이 아쉽습니다. 하지만, 그동안 고려하지 않았던 각종 최적화 및 Critical Rendering Path에 대해 생각 해보게되어 뿌듯하게 생각합니다. 특히, 프로젝트를 진행하며 초 단위의 차이가 유저의 사용자 경험을 좌우할 수 있다는 점을 배우게 되면서, 프론트앤드 개발에 더 큰 흥미를 느끼게 되는 계기가 되었습니다.
