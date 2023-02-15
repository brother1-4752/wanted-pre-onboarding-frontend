# 로그인/회원가입 및 ToDoList

> 원티드 프리온보딩 사전과제 - 로그인/회원가입 페이지 Auth 및 ToDoList
>
> #### [배포링크](https://brother1-4752.github.io/wanted-pre-onboarding-frontend/)

# 실행 방법

```html
$ npm install
$ npm start
```

# 구현 기능

- [ ] 회원가입과 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
- [ ] 회원가입 페이지에서 버튼을 클릭 시 회원가입을 진행하고 회원가입이 정상적으로 완료되었을 시 `/signin` 경로로 이동해주세요
- [ ] 로그인 페이지에서 버튼을 클릭 시, 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 `/todo` 경로로 이동해주세요
- [ ] 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
- [ ] `/todo`경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요
- [ ] 리스트 페이지에 새로운 TODO를 입력할 수 있는 input과 추가 button을 만들어주세요
- [ ] TODO의 체크박스를 통해 완료 여부를 수정할 수 있도록 해주세요.
- [ ] TODO 우측에 수정버튼과 삭제 버튼을 만들어주세요
- [ ] 투두 리스트의 삭제 기능을 구현해주세요
- [ ] 투두 리스트의 수정 기능을 구현해주세요

# 레퍼지토리 구조

```html
📦src ┣ 📂 pages ┃ ┃ 📜 AuthContainer.js ┃ ┃ 📜 SignIn.js ┃ ┃ 📜 SignUp.js ┃ ┃
📜 ToDoItem.js ┃ ┃ 📜 ToDoList.js ┣ 📂 styles ┃ ┣ 📜 GlobalStyle.js ┣ 📜 api.js
┣ 📜 index.js ┗ 📜 Router.js
```
