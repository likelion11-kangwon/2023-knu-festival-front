## 👩‍👦‍🧒 frontend team
|손민주|심현수|권순호|
|---|---|---|
|`메뉴바` `방명록` `공지사항`|`함인섭광장`|`60주념기념관`|

## 🌟 git 작업 방법
### 1. clone
로컬 저장소가 없을 시: `git clone 원격 레포지토리 URL`

로컬 저장소가 이미 있을 시(최신 버전 동기화): `git pull origin main`

### 2. branch 작업
`git branch 브랜치명`

`git checkout 브랜치명`
- mj: [@mango606](https://github.com/mango606)
- hs: [@memorial0](https://github.com/memorial0)
- sh: [@suno-boy](https://github.com/suno-boy)

### 3. 작업물 upload
`git add .`

`git commit -m "commit message"`

`git push origin 브랜치명`

### 4. 작업물 run
`npm install`

`npm start`

## 🌟 commit message rules
- 예시: [feat] 게시판 기능 구현

|타입 이름|내용|
|------|---|
|feat|새로운 기능에 대한 커밋|
|fix|버그 수정에 대한 커밋|
|build|빌드 관련 파일 수정 / 모듈 설치 또는 삭제에 대한 커밋|
|chore|그 외 자잘한 수정에 대한 커밋|
|ci|ci 관련 설정 수정에 대한 커밋|
|docs|문서 수정에 대한 커밋|
|style|코드 스타일 혹은 포맷 등에 관한 커밋|
|refactor|코드 리팩토링에 대한 커밋|
|test|테스트 코드 수정에 대한 커밋|
|perf|성능 개선에 대한 커밋|

## 🌟 directory structure
📁 public
- data (mock data 관리)

📁 src
- assets (이미지, 폰트 등의 미디어 파일 저장)
- components (공용 컴포넌트, 즉 Header 등 재사용하는 컴포넌트 관리)
- pages (페이지 단위의 컴포넌트 폴더 관리)
- styles (공용 css, 즉 재사용하는 스타일 관리)