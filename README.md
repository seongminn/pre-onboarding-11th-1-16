# 🌱 프리온보딩 프론트엔드 과제 Week 1 TEAM 16

wanted 프리온보딩 1주차 과제입니다 🔥

## 배포 페이지

🎉 Team16 배포 링크 👇

https://pre-onboarding-11th-1-16.netlify.app/

## 🛠️ 사용 라이브러리

- formatter : Eslint, Prettier
- API : Axios
- Style : Emotion

## 디렉토리 구조

```
📦 src
├── apis
├── components
├── constants
├── context
├── hooks
├── pages
├── styles
├── types
├── utils
├── App.tsx
├── index.tsx
└── Router.tsx
```

- **component**와 **api**의 기능을 분리하여 각각의 `역할`과 `책임`을 명확하게 할당하고 재사용성을 향상시키려 했습니다.
- **constants** : 협업시 필요한 `일관된 규칙과 구조`를 유지하기 용이하게 하였습니다.
- **hooks** & **util** : 로직을 추상화하여 `재사용 가능한 한형태`로 분리하여 개발 `생산성 향상`시켰습니다.

## 🗣️ Best Practice 선정 과정

### Axios vs Fetch

Team16은 Axios라이브러리를 택하는걸 선택했고 이유는 다음과 같습니다.

| 이름 | 이유                                                                                                                                                                                                                                                    |
| :--: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 창수 | 주관적으로 axios가 fetch보다 사용하기 편리했음.<br />fetch의 경우 라이브러리를 설치하지 않고 바로 사용할 수 있다는 장점이 있음.                                                                                                                         |
| 진호 | axios의 장점은 에러처리가 간편하다는 점이 있음.<br />fetch는 json데이터를 await response.json() 처리를 해야한다는 점, 에러 처리시 따로 조건문을 걸어 처리해야한다는 단점이있음.                                                                         |
| 성민 | axios는 instance를 생성하여 header를 설정하거나 여러가지 기본 옵션을 설정해줄 수 있고,<br /> interceptor를 사용하여 api 호출 시 token 검사를 용이하게 할 수 있음. <br />다만, 별도로 설치해줘야 하는 번거로움 및 프로덕트 사이즈가 커진다는 단점이 있음 |
| 진혜 | axios는 라이브러리를 따로 설치해야한다는 단점이 있다.<br />개인적으로 자주 사용하지 않아 익숙치 않고 fetch는 구현이 간단한 편이나, json 변환 등의 이유로 코드가 복잡해지는 단점이 있음.                                                                 |
| 승호 | axios의 장점은 fetch 사용보다 코드 사용이 쉬움.<br />fetch는 javascript 내장 기능이어서 바로 사용할 수 있다는 장점이 있는 반면, json 데이터를 직접 변환 시켜야한다는 단점이 있음.                                                                       |
| 지원 | axios는 json 타입으로 바로 사용 가능해서 코드가 간결해진다는 장점이 있고, 개인적으로 사용 경험이 많아 익숙함.                                                                                                                                           |

### 구현이 어렵거나 아쉬웠던 점

| 이름 | 이유                                                                                                                                                                                                                                                                                                                                                                                     |
| :--: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 창수 | 수정 중 완료를 누르지 않고 취소를 누른다음에 체크 박스를 누르면 수정 중에서 작성 중이었던 글 들이 update 됨.<br />에러 처리에 대한 생각을 하지 못했는데, 에러 처리를 제대로 해주어야 함.                                                                                                                                                                                                 |
| 진호 | React.memo, useMemo를 사용하여 렌더링 최적화를 하면 어떗을까 하는 생각<br />local데이터를 활용해서 사용자에게 더 좋은 경험을 주기 위해 노력 이 부족했음                                                                                                                                                                                                                                  |
| 성민 | props drilling : 이거 때문에 CRUD 함수를 담당하는 위치가 pages와 각각의 컴포넌트로 분리되었는데,<br /> props drilling을 최소화하기 위해 신경을 좀 많이 썼던 것 같음.useReducer를 사용하려는 시도를 해봤지만<br />아직 사용이 미숙하여 해결하지 못하고 원래 상태로 제출했음<br />논리적으로 컴포넌트를 분리하려는 노력을 더 해서 컴포넌트간 결합을 최소화 하려는 노력이 필요하다고 생각함 |
| 진혜 | 클린코드를 작성하기 위한 코드 재사용에 대한 고민과 api 에러처리에서 어려움을 겪었음.<br />수정 기능을 사용할 때 서버 통신 시간 때문에 한 템포 늦게 업데이트 되는 점을 수정 싶었으나 잘 안 됨.                                                                                                                                                                                            |
| 승호 | 서버 데이터와 동기화 하는 점이 어려웠음.각각의 에러 처리에 관하여 생각보다 많은 생각을 해야했음.<br />api를 최대한 밖으로 빼둔점, 컴포넌트 분할 이 생각보다 초반에 시작하기에 가장 어려워 보였음.                                                                                                                                                                                        |
| 지원 | 컴포넌트를 분리하는 기준, 즉 한 컴포넌트에 코드가 있어서 가독성이 좋지 않음. <br />체크아웃 상태 보존에 어려움 겪음.기본 구현을 완벽히 하는 것에 신경을 씀                                                                                                                                                                                                                               |

## **Team 16 팀원 소개**

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/scs0209"><img src="https://github.com/jsdmas/jsdmas.github.io/assets/105098581/e237b4f3-26f3-4a37-8818-86787f5d858b" width="100px" alt=""/><br /><sub><b>🙎🏻‍♂️ FE 팀원 : 창수 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/jsdmas"><img src="https://avatars.githubusercontent.com/u/105098581?s=400&v=4" width="100px;" alt=""/><br /><sub><b>🙎🏻‍♂️ FE 팀원 : 진호</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/seongminn"><img src="https://github.com/jsdmas/jsdmas.github.io/assets/105098581/3fdd5b88-e4ba-412b-a89e-b71694c153f7" width="100px;" alt=""/><br /><sub><b>🙎🏻‍♂️ FE 팀원 : 성민</b></sub></a><br /></td>
     <tr/>
      <td align="center"><a href="https://github.com/sjerry-kim"><img src="https://github.com/sjerry-kim/Portfolio_Academy_ARCO/assets/112137364/23130bde-b5ff-48c3-bfd9-45a1e8bebe07" width="100px;" alt=""/><br /><sub><b>🙎🏻‍♀️ FE 팀장 : 진혜</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/seunghowhite"><img src="https://avatars.githubusercontent.com/u/105100315?v=4" width="100px;" alt=""/><br /><sub><b>🙎🏻‍♂️ FE 팀원 : 승호</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/jioneee"><img src="https://github.com/jsdmas/jsdmas.github.io/assets/105098581/11d05a3a-57b2-4ae0-96b3-747b557ff6be" width="100px;" alt=""/><br /><sub><b>🙎🏻‍♀️ FE 팀원 : 지원</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

<br/>
