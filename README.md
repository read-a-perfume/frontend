<img src="https://github.com/read-a-perfume/frontend/assets/71584114/f56a95ad-6095-45c1-a631-e20366554f66" width="800px" height="500px"/>

## 프로젝트 소개

- 리드 어 퍼퓸은  “화장품 정보 어플리케이션 화해”를 모티브 삼아 만든 향수 플랫폼입니다.   
- 사용자들에게 향수에 대한 자유로운 의견을 나눌 수 있는 공간을 제공합니다. 
- 사용자들은 인스타그램과 같이 글, 사진, 영상을 통해 향수에 대한 감상과 무드를 표현할 수 있으며, 팔로우 및 팔로잉 기능을 통해 타임라인에서 실시간 리뷰를 확인할 수 있습니다.

### 배포 링크
<a href="https://perfume.app.cd80.run/">배포링크</a> 
아이디 및 패스워드 : admin

### 실행 방법

```
npm install 설치
npm run dev 실행
```

### 브랜치 관리 전략

브랜치 관리 전략
Git Flow를 사용하여 브랜치를 관리합니다.  
모든 브랜치는 Pull Request에 리뷰를 진행한 후 merge를 진행합니다.  
메인 브렌치인 main에는 아직 많은 내용이 merge되지 않았습니다. 현재 개발 진행사항을 확인하고 싶다면 develop을 확인해주세요.  


### 프로젝트 네비게이션 구조

<img src="https://github.com/read-a-perfume/frontend/assets/71584114/9c98d32c-2c3a-4fd0-aac0-b090e02f3804"/>

### 회원가입 인증 구조도

<img src="https://github.com/read-a-perfume/frontend/assets/71584114/116f38bb-52a5-4149-8df7-75a59bc36ab9"/>

### 로그인 인증 구조도

<img src="https://github.com/read-a-perfume/frontend/assets/71584114/e3f1d187-4241-4286-be13-8bd977e5e1f8" width="500px" height="400px"/>

### 사용 기술 및 환경

React,Typescript,Vite,Material-ui,React-Query

## Commit Convention

| commit type | commit message                            |
| ----------- | ----------------------------------------- |
| feat        | 기능 개발                                 |
| fix         | 버그 수정                                 |
| style       | 불필요한 코드 제거 등                     |
| design      | 디자인 관련 코드                          |
| chore       | 빌드 수정, 패키지 매니저 등 기타 변경사항 |
| move        | 파일이나 폴더 위치 변경                   |
| remove      | 파일이나 폴더 제거                        |
| refactor    | 코드 리팩토링                             |
